import { _ as _sfc_main$1 } from './Icon-Cu0VSR4e.mjs';
import { _ as _sfc_main$2 } from './Button-CdU8nkXy.mjs';
import { reactive, ref, withAsyncContext, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderDynamicModel, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { d as useSupabaseClient, e as useRoute } from './server.mjs';
import { u as useToast } from './useToast-CwOAh1aG.mjs';
import { u as useAsyncData } from './asyncData-D0f35ZHT.mjs';
import './index-kp2ruu5n.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'reka-ui';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import './tv-DftaqRAe.mjs';
import 'tailwind-variants';
import './NuxtImg-jLe0oRQc.mjs';
import './nuxt-link-BZ9eU4-B.mjs';
import 'vue-router';
import '@supabase/ssr';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const supabase = useSupabaseClient();
    const route = useRoute();
    const toast = useToast();
    const eventId = route.params.id;
    const formData = reactive({});
    const isSubmitting = ref(false);
    const hasRegistered = ref(false);
    const duplicateWarning = ref(false);
    ref(false);
    const currentStep = ref(0);
    const { data: event, pending, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`event-${eventId}`, async () => {
      const { data, error: error2 } = await supabase.from("events").select("*").eq("id", eventId).single();
      if (error2) throw error2;
      if (data && data.form_fields) {
        data.form_fields.forEach((field) => {
          formData[field.label] = field.type === "checkbox" ? false : "";
        });
      }
      return data;
    })), __temp = await __temp, __restore(), __temp);
    const isMultiStep = computed(() => {
      return event.value?.form_fields && event.value.form_fields.length > 5;
    });
    const formSteps = computed(() => {
      if (!isMultiStep.value || !event.value?.form_fields) return [];
      const fields = event.value.form_fields;
      const steps = [];
      const personalFields = fields.filter(
        (f) => ["name", "first name", "last name", "full name", "email", "phone", "telephone", "mobile"].some(
          (keyword) => f.label.toLowerCase().includes(keyword)
        )
      );
      const organizationFields = fields.filter(
        (f) => ["organization", "company", "institution", "workplace", "job", "title", "position", "department"].some(
          (keyword) => f.label.toLowerCase().includes(keyword)
        )
      );
      const demographicFields = fields.filter(
        (f) => ["age", "gender", "location", "city", "state", "country", "address", "experience", "level"].some(
          (keyword) => f.label.toLowerCase().includes(keyword)
        )
      );
      const preferencesFields = fields.filter(
        (f) => ["preference", "interest", "dietary", "accessibility", "special", "requirement", "note", "comment"].some(
          (keyword) => f.label.toLowerCase().includes(keyword)
        )
      );
      const categorizedFields = [...personalFields, ...organizationFields, ...demographicFields, ...preferencesFields];
      const otherFields = fields.filter((f) => !categorizedFields.includes(f));
      let otherFields1 = [];
      let otherFields2 = [];
      if (otherFields.length > 5) {
        const mid = Math.ceil(otherFields.length / 2);
        otherFields1 = otherFields.slice(0, mid);
        otherFields2 = otherFields.slice(mid);
      } else {
        otherFields1 = otherFields;
      }
      if (personalFields.length > 0) {
        steps.push({
          title: "Personal Info",
          description: "Tell us a bit about yourself",
          fields: personalFields
        });
      }
      if (organizationFields.length > 0) {
        steps.push({
          title: "Professional",
          description: "Your professional background",
          fields: organizationFields
        });
      }
      if (demographicFields.length > 0) {
        steps.push({
          title: "Background",
          description: "Additional information",
          fields: demographicFields
        });
      }
      if (preferencesFields.length > 0) {
        steps.push({
          title: "Preferences",
          description: "Your preferences and requirements",
          fields: preferencesFields
        });
      }
      if (otherFields1.length > 0) {
        steps.push({
          title: "Additional",
          description: "Additional information",
          fields: otherFields1
        });
      }
      if (otherFields2.length > 0) {
        steps.push({
          title: "Additional",
          description: "Additional information",
          fields: otherFields2
        });
      }
      if (steps.length <= 1) {
        const fieldsPerStep = Math.ceil(fields.length / 3);
        steps.length = 0;
        for (let i = 0; i < fields.length; i += fieldsPerStep) {
          const stepFields = fields.slice(i, i + fieldsPerStep);
          const stepNumber = Math.floor(i / fieldsPerStep) + 1;
          steps.push({
            title: `Step ${stepNumber}`,
            description: `Complete the following fields`,
            fields: stepFields
          });
        }
      }
      return steps;
    });
    const isCurrentStepValid = computed(() => {
      if (!isMultiStep.value) return true;
      const currentStepFields = formSteps.value[currentStep.value]?.fields || [];
      return currentStepFields.every((field) => {
        if (!field.required) return true;
        const value = formData[field.label];
        return field.type === "checkbox" ? value === true : value && value.toString().trim() !== "";
      });
    });
    const isFormValid = computed(() => {
      if (!event.value?.form_fields) return true;
      return event.value.form_fields.every((field) => {
        if (!field.required) return true;
        const value = formData[field.label];
        return field.type === "checkbox" ? value === true : value && value.toString().trim() !== "";
      });
    });
    const nextStep = () => {
      if (currentStep.value < formSteps.value.length - 1 && isCurrentStepValid.value) {
        currentStep.value++;
      }
    };
    const previousStep = () => {
      if (currentStep.value > 0) {
        currentStep.value--;
      }
    };
    const getFieldLabel = (field) => {
      const label = field.label || field.name || "";
      return label.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
    };
    const getFieldPlaceholder = (field) => {
      const label = field.label.toLowerCase();
      const placeholderMap = {
        "email": "Enter your email address",
        "phone": "Enter your phone number",
        "name": "Enter your full name",
        "first name": "Enter your first name",
        "last name": "Enter your last name",
        "organization": "Enter your organization name",
        "company": "Enter your company name",
        "job title": "Enter your job title",
        "position": "Enter your position",
        "age": "Enter your age",
        "address": "Enter your address",
        "city": "Enter your city",
        "state": "Enter your state",
        "country": "Enter your country",
        "experience": "Years of experience",
        "website": "https://example.com",
        "linkedin": "LinkedIn profile URL",
        "twitter": "Twitter handle",
        "dietary": "Any dietary restrictions?",
        "accessibility": "Any accessibility needs?",
        "comments": "Additional comments or notes",
        "notes": "Additional notes",
        "emergency contact": "Emergency contact information"
      };
      if (placeholderMap[label]) {
        return placeholderMap[label];
      }
      for (const [key, value] of Object.entries(placeholderMap)) {
        if (label.includes(key)) {
          return value;
        }
      }
      switch (field.type) {
        case "email":
          return "Enter your email address";
        case "tel":
        case "phone":
          return "Enter your phone number";
        case "url":
          return "Enter URL";
        case "number":
          return "Enter a number";
        case "date":
          return "Select date";
        case "textarea":
          return "Enter your response here...";
        case "select":
          return "Please select an option";
        default:
          return `Enter your ${label}`;
      }
    };
    const getFieldHelp = (field) => {
      const label = field.label.toLowerCase();
      const helpMap = {
        "email": "We'll use this to send you event updates",
        "phone": "Include country code if international",
        "dietary": "Let us know about any food allergies or dietary restrictions",
        "accessibility": "Help us make this event accessible for you",
        "emergency contact": "Person to contact in case of emergency",
        "experience": "This helps us tailor the content to your level",
        "linkedin": "Optional: Your LinkedIn profile for networking",
        "website": "Optional: Your personal or company website",
        "organization": "The company or institution you represent"
      };
      for (const [key, value] of Object.entries(helpMap)) {
        if (label.includes(key)) {
          return value;
        }
      }
      if (field.type === "checkbox" && field.required) {
        return "This field is required";
      }
      return null;
    };
    const isEventPast = computed(() => {
      if (!event.value) return false;
      return new Date(event.value.event_date) < /* @__PURE__ */ new Date();
    });
    const getEventStatus = () => {
      if (!event.value) return "";
      if (isEventPast.value) return "Completed";
      const eventDate = new Date(event.value.event_date);
      const today = /* @__PURE__ */ new Date();
      const diffTime = eventDate - today;
      const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
      if (diffDays === 0) return "Today";
      if (diffDays === 1) return "Tomorrow";
      if (diffDays <= 7) return "This Week";
      return "Upcoming";
    };
    const getStatusClass = () => {
      if (isEventPast.value) return "text-white/70";
      return "text-white";
    };
    const shareEvent = async () => {
      if ((void 0).share) {
        try {
          await (void 0).share({
            title: event.value.title,
            text: `Join me at ${event.value.title}`,
            url: (void 0).location.href
          });
        } catch (error2) {
          await (void 0).clipboard.writeText((void 0).location.href);
          toast.add({
            title: "Link Copied",
            description: "Event link has been copied to your clipboard.",
            color: "green"
          });
        }
      } else {
        await (void 0).clipboard.writeText((void 0).location.href);
        toast.add({
          title: "Link Copied",
          description: "Event link has been copied to your clipboard.",
          color: "green"
        });
      }
    };
    const formatDateShort = (dateString) => {
      if (!dateString) return "";
      const options = { weekday: "short", month: "short", day: "numeric", year: "numeric" };
      return new Date(dateString).toLocaleDateString("en-NG", options);
    };
    const formatTime = (dateString) => {
      if (!dateString) return "";
      const options = { hour: "2-digit", minute: "2-digit" };
      return new Date(dateString).toLocaleTimeString("en-NG", options);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$1;
      const _component_UButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#f4f5f3]" }, _attrs))}><div class="container mx-auto px-4 py-12">`);
      if (unref(pending)) {
        _push(`<div class="max-w-6xl mx-auto"><div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"><div class="animate-pulse"><div class="h-10 bg-gray-200 rounded mb-6 w-3/4"></div><div class="flex space-x-4 mb-6"><div class="h-6 bg-gray-200 rounded w-32"></div><div class="h-6 bg-gray-200 rounded w-40"></div></div><div class="space-y-3"><div class="h-4 bg-gray-200 rounded"></div><div class="h-4 bg-gray-200 rounded w-5/6"></div><div class="h-4 bg-gray-200 rounded w-4/6"></div></div></div></div></div>`);
      } else if (unref(error) || !unref(event)) {
        _push(`<div class="text-center py-20"><div class="bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-exclamation-triangle",
          class: "w-10 h-10 text-red-500"
        }, null, _parent));
        _push(`</div><h2 class="text-3xl font-bold text-gray-900 mb-4">Event Not Found</h2><p class="text-gray-600 mb-8 max-w-md mx-auto"> This event may have been moved, cancelled, or does not exist. Please check the event list for available programmes. </p><div class="flex flex-col sm:flex-row gap-4 justify-center">`);
        _push(ssrRenderComponent(_component_UButton, {
          to: "/events",
          class: "bg-[#5d6b56] hover:bg-[#9BAD94] text-white font-medium px-8 py-3 rounded-xl"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-arrow-left",
                class: "w-4 h-4 mr-2"
              }, null, _parent2, _scopeId));
              _push2(` Back to Events `);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-arrow-left",
                  class: "w-4 h-4 mr-2"
                }),
                createTextVNode(" Back to Events ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          to: "/",
          variant: "outline",
          class: "border-[#5d6b56] text-[#5d6b56] hover:bg-[#5d6b56] hover:text-white font-medium px-8 py-3 rounded-xl"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Go Home `);
            } else {
              return [
                createTextVNode(" Go Home ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="max-w-6xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2"><div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"><div class="bg-gradient-to-r from-[#5d6b56] to-[#9BAD94] p-8 text-white"><div class="flex items-center mb-4"><div class="bg-white/20 p-2 rounded-lg mr-3">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-academic-cap",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</div><span class="bg-white/20 px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wide"> Educational Event </span></div><h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight">${ssrInterpolate(unref(event).title)}</h1><div class="flex flex-wrap gap-6 text-white/90"><div class="flex items-center space-x-2"><div class="bg-white/20 p-1.5 rounded-lg">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-calendar-days",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</div><div><div class="font-semibold">${ssrInterpolate(formatDateShort(unref(event).event_date))}</div><div class="text-sm opacity-90">${ssrInterpolate(formatTime(unref(event).event_date))}</div></div></div>`);
        if (unref(event).venue) {
          _push(`<div class="flex items-center space-x-2"><div class="bg-white/20 p-1.5 rounded-lg">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-heroicons-map-pin",
            class: "w-4 h-4"
          }, null, _parent));
          _push(`</div><div><div class="font-semibold">${ssrInterpolate(unref(event).venue)}</div><div class="text-sm opacity-90">Venue</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex items-center space-x-2"><div class="bg-white/20 p-1.5 rounded-lg">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-currency-dollar",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</div><div><div class="font-semibold">${ssrInterpolate(unref(event).is_free ? "Free" : `${unref(event).currency}${unref(event).admission_fee}`)}</div><div class="text-sm opacity-90">Admission</div></div></div><div class="flex items-center space-x-2"><div class="bg-white/20 p-1.5 rounded-lg">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-clock",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</div><div><div class="${ssrRenderClass([getStatusClass(), "font-semibold"])}">${ssrInterpolate(getEventStatus())}</div><div class="text-sm opacity-90">Status</div></div></div></div></div><div class="p-8"><h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-document-text",
          class: "w-6 h-6 mr-3 text-[#5d6b56]"
        }, null, _parent));
        _push(` About This Event </h2>`);
        if (unref(event).description) {
          _push(`<div class="prose prose-lg max-w-none text-gray-700 leading-relaxed"><p>${ssrInterpolate(unref(event).description)}</p></div>`);
        } else {
          _push(`<div class="bg-gray-50 rounded-xl p-6 text-center">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-heroicons-information-circle",
            class: "w-8 h-8 text-gray-400 mx-auto mb-2"
          }, null, _parent));
          _push(`<p class="text-gray-500">No additional details provided for this event.</p></div>`);
        }
        _push(`<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"><div class="bg-[#5d6b56]/5 rounded-xl p-4 border border-[#5d6b56]/20"><div class="flex items-center mb-2">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-users",
          class: "w-5 h-5 text-[#5d6b56] mr-2"
        }, null, _parent));
        _push(`<span class="font-semibold text-gray-900">Interactive Learning</span></div><p class="text-sm text-gray-600">Engage with fellow participants and expert facilitators</p></div><div class="bg-[#EB6534]/5 rounded-xl p-4 border border-[#EB6534]/20"><div class="flex items-center mb-2">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-trophy",
          class: "w-5 h-5 text-[#EB6534] mr-2"
        }, null, _parent));
        _push(`<span class="font-semibold text-gray-900">Certificate</span></div><p class="text-sm text-gray-600">Receive a certificate of participation upon completion</p></div></div></div></div></div><div class="lg:col-span-1"><div class="sticky top-8"><div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"><div class="bg-[#f4f5f3] p-6 border-b border-gray-100"><h3 class="text-xl font-bold text-gray-900 flex items-center">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-clipboard-document-check",
          class: "w-6 h-6 mr-3 text-[#5d6b56]"
        }, null, _parent));
        _push(` Event Registration </h3></div><div class="p-6">`);
        if (unref(isEventPast)) {
          _push(`<div class="text-center py-8"><div class="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-heroicons-clock",
            class: "w-8 h-8 text-gray-500"
          }, null, _parent));
          _push(`</div><h4 class="font-bold text-gray-900 mb-2">Registration Closed</h4><p class="text-sm text-gray-600 mb-4">This event has already occurred.</p><div class="bg-gray-50 rounded-lg p-4"><p class="text-xs text-gray-500"> Event took place on ${ssrInterpolate(formatDateShort(unref(event).event_date))}</p></div></div>`);
        } else if (unref(hasRegistered)) {
          _push(`<div class="text-center py-8"><div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-heroicons-check-circle",
            class: "w-8 h-8 text-green-600"
          }, null, _parent));
          _push(`</div><h4 class="font-bold text-green-900 mb-2">Registration Confirmed!</h4><p class="text-sm text-green-700 mb-4">Thank you! We have received your registration.</p>`);
          if (!unref(event).is_free) {
            _push(`<div class="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-4 text-left"><h5 class="font-bold text-blue-900 mb-2 flex items-center">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-credit-card",
              class: "w-4 h-4 mr-2"
            }, null, _parent));
            _push(` Payment Instructions </h5><p class="text-sm text-blue-700 mb-3"> Please complete your payment to secure your spot: </p><ol class="list-decimal list-inside text-sm text-blue-700 space-y-1"><li>Transfer <span class="font-bold">${ssrInterpolate(unref(event).currency)}${ssrInterpolate(unref(event).admission_fee)}</span> to:</li><li class="ml-5"><span class="font-semibold">Bank Name:</span> Zenith Bank<br><span class="font-semibold">Account Name:</span> Tech Events Ltd<br><span class="font-semibold">Account Number:</span> 1234567890 </li><li>Send proof of payment via WhatsApp to <span class="font-bold">+234 812 345 6789</span></li><li>You&#39;ll receive a confirmation within 24 hours</li></ol><div class="mt-3">`);
            _push(ssrRenderComponent(_component_UButton, {
              to: "https://wa.me/2348123456789?text=Payment%20Receipt%20for%20{{ encodeURIComponent(event.title) }}",
              target: "_blank",
              class: "w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-chat-bubble-left-right",
                    class: "w-4 h-4 mr-2"
                  }, null, _parent2, _scopeId));
                  _push2(` Send Receipt on WhatsApp `);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-chat-bubble-left-right",
                      class: "w-4 h-4 mr-2"
                    }),
                    createTextVNode(" Send Receipt on WhatsApp ")
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="bg-green-50 rounded-lg p-4 border border-green-200"><p class="text-xs text-green-600 font-medium"> You will receive a confirmation email shortly with event details. </p></div></div>`);
        } else if (unref(event).form_fields && unref(event).form_fields.length > 0) {
          _push(`<div><div class="mb-6"><div class="bg-[#5d6b56]/10 rounded-lg p-4 mb-4"><div class="flex items-center text-[#5d6b56] mb-2">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-heroicons-information-circle",
            class: "w-4 h-4 mr-2"
          }, null, _parent));
          _push(`<span class="font-medium text-sm">Registration Required</span></div><p class="text-xs text-gray-600">Please fill out the form below to secure your spot.</p>`);
          if (!unref(event).is_free) {
            _push(`<div class="mt-3 bg-amber-50 rounded-lg p-3 border border-amber-200"><div class="flex items-start">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-exclamation-circle",
              class: "w-4 h-4 text-amber-600 mt-0.5 mr-2"
            }, null, _parent));
            _push(`<div><p class="text-xs font-medium text-amber-700"> This event requires a payment of <span class="font-bold">${ssrInterpolate(unref(event).currency)}${ssrInterpolate(unref(event).admission_fee)}</span>. Payment instructions will be provided after registration. </p></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
          if (unref(isMultiStep)) {
            _push(`<div class="mb-6"><div class="flex items-center justify-between mb-2"><span class="text-sm font-medium text-gray-700"> Step ${ssrInterpolate(unref(currentStep) + 1)} of ${ssrInterpolate(unref(formSteps).length)}</span><span class="text-xs text-gray-500">${ssrInterpolate(Math.round((unref(currentStep) + 1) / unref(formSteps).length * 100))}% Complete </span></div><div class="w-full bg-gray-200 rounded-full h-2 mb-4"><div class="bg-[#5d6b56] h-2 rounded-full transition-all duration-300" style="${ssrRenderStyle({ width: `${(unref(currentStep) + 1) / unref(formSteps).length * 100}%` })}"></div></div><div class="flex justify-between mb-6"><!--[-->`);
            ssrRenderList(unref(formSteps), (step, index) => {
              _push(`<div class="${ssrRenderClass([{ "flex-1": unref(formSteps).length <= 4 }, "flex flex-col items-center"])}"><div class="${ssrRenderClass([index <= unref(currentStep) ? "bg-[#5d6b56] text-white" : "bg-gray-200 text-gray-500", "w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-200"])}">`);
              if (index < unref(currentStep)) {
                _push(ssrRenderComponent(_component_UIcon, {
                  name: "i-heroicons-check",
                  class: "w-4 h-4"
                }, null, _parent));
              } else {
                _push(`<span>${ssrInterpolate(index + 1)}</span>`);
              }
              _push(`</div><span class="${ssrRenderClass([index <= unref(currentStep) ? "text-[#5d6b56] font-medium" : "text-gray-400", "text-xs mt-1 text-center max-w-16 leading-tight"])}">${ssrInterpolate(step.title)}</span></div>`);
            });
            _push(`<!--]--></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(duplicateWarning)) {
            _push(`<div class="mb-4"><div class="bg-amber-50 border border-amber-200 rounded-lg p-4"><div class="flex items-center text-amber-700 mb-2">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-exclamation-triangle",
              class: "w-4 h-4 mr-2"
            }, null, _parent));
            _push(`<span class="font-medium text-sm">Already Registered</span></div><p class="text-xs text-amber-600"> This email is already registered for this event. If you believe this is an error, please contact support. </p></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<form class="space-y-4">`);
          if (unref(isMultiStep)) {
            _push(`<div><div class="mb-4"><h4 class="font-semibold text-gray-900 mb-2">${ssrInterpolate(unref(formSteps)[unref(currentStep)].title)}</h4><p class="text-sm text-gray-600 mb-4">${ssrInterpolate(unref(formSteps)[unref(currentStep)].description)}</p></div><div class="space-y-4"><!--[-->`);
            ssrRenderList(unref(formSteps)[unref(currentStep)].fields, (field) => {
              _push(`<div class="space-y-1"><label${ssrRenderAttr("for", field.label)} class="block text-sm font-medium text-gray-700">${ssrInterpolate(getFieldLabel(field))} `);
              if (field.required) {
                _push(`<span class="text-red-500 ml-1">*</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</label>`);
              if (field.type !== "checkbox" && field.type !== "select" && field.type !== "textarea") {
                _push(`<input${ssrRenderDynamicModel(field.type, unref(formData)[field.label], null)}${ssrRenderAttr("type", field.type)}${ssrRenderAttr("id", field.label)}${ssrRenderAttr("name", field.label)}${ssrIncludeBooleanAttr(field.required) ? " required" : ""}${ssrRenderAttr("placeholder", getFieldPlaceholder(field))}${ssrIncludeBooleanAttr(unref(duplicateWarning) && field.type === "email") ? " disabled" : ""} class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56] disabled:bg-gray-100 disabled:cursor-not-allowed">`);
              } else if (field.type === "textarea") {
                _push(`<textarea${ssrRenderAttr("id", field.label)}${ssrRenderAttr("name", field.label)}${ssrIncludeBooleanAttr(field.required) ? " required" : ""}${ssrRenderAttr("placeholder", getFieldPlaceholder(field))} class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56]" rows="3">${ssrInterpolate(unref(formData)[field.label])}</textarea>`);
              } else if (field.type === "select") {
                _push(`<select${ssrRenderAttr("id", field.label)}${ssrRenderAttr("name", field.label)}${ssrIncludeBooleanAttr(field.required) ? " required" : ""} class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56]"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(formData)[field.label]) ? ssrLooseContain(unref(formData)[field.label], "") : ssrLooseEqual(unref(formData)[field.label], "")) ? " selected" : ""}>${ssrInterpolate(getFieldPlaceholder(field))}</option><!--[-->`);
                ssrRenderList(field.options || [], (option) => {
                  _push(`<option${ssrRenderAttr("value", option)}${ssrIncludeBooleanAttr(Array.isArray(unref(formData)[field.label]) ? ssrLooseContain(unref(formData)[field.label], option) : ssrLooseEqual(unref(formData)[field.label], option)) ? " selected" : ""}>${ssrInterpolate(option)}</option>`);
                });
                _push(`<!--]--></select>`);
              } else {
                _push(`<div class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(unref(formData)[field.label]) ? ssrLooseContain(unref(formData)[field.label], null) : unref(formData)[field.label]) ? " checked" : ""} type="checkbox"${ssrRenderAttr("id", field.label)}${ssrRenderAttr("name", field.label)}${ssrIncludeBooleanAttr(field.required) ? " required" : ""} class="h-4 w-4 text-[#5d6b56] focus:ring-[#5d6b56] border-gray-300 rounded"><label${ssrRenderAttr("for", field.label)} class="ml-2 text-sm text-gray-700">${ssrInterpolate(getFieldLabel(field))}</label></div>`);
              }
              if (getFieldHelp(field)) {
                _push(`<p class="text-xs text-gray-500 mt-1">${ssrInterpolate(getFieldHelp(field))}</p>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            });
            _push(`<!--]--></div><div class="flex justify-between pt-6 mt-6 border-t border-gray-100">`);
            if (unref(currentStep) > 0) {
              _push(ssrRenderComponent(_component_UButton, {
                onClick: previousStep,
                type: "button",
                class: "border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: "i-heroicons-arrow-left",
                      class: "w-4 h-4 mr-2"
                    }, null, _parent2, _scopeId));
                    _push2(` Previous `);
                  } else {
                    return [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-arrow-left",
                        class: "w-4 h-4 mr-2"
                      }),
                      createTextVNode(" Previous ")
                    ];
                  }
                }),
                _: 1
              }, _parent));
            } else {
              _push(`<div></div>`);
            }
            if (unref(currentStep) < unref(formSteps).length - 1) {
              _push(ssrRenderComponent(_component_UButton, {
                onClick: nextStep,
                type: "button",
                disabled: !unref(isCurrentStepValid),
                class: "bg-[#5d6b56] hover:bg-[#9BAD94] text-white px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(` Next `);
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: "i-heroicons-arrow-right",
                      class: "w-4 h-4 ml-2"
                    }, null, _parent2, _scopeId));
                  } else {
                    return [
                      createTextVNode(" Next "),
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-arrow-right",
                        class: "w-4 h-4 ml-2"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent));
            } else {
              _push(ssrRenderComponent(_component_UButton, {
                type: "submit",
                disabled: unref(duplicateWarning) || !unref(isFormValid) || unref(isSubmitting),
                class: "bg-[#5d6b56] hover:bg-[#9BAD94] text-white font-semibold px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    if (!unref(isSubmitting)) {
                      _push2(ssrRenderComponent(_component_UIcon, {
                        name: "i-heroicons-paper-airplane",
                        class: "w-4 h-4 mr-2"
                      }, null, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                    if (unref(isSubmitting)) {
                      _push2(`<span${_scopeId}>Submitting...</span>`);
                    } else if (unref(duplicateWarning)) {
                      _push2(`<span${_scopeId}>Already Registered</span>`);
                    } else {
                      _push2(`<span${_scopeId}>Complete Registration</span>`);
                    }
                  } else {
                    return [
                      !unref(isSubmitting) ? (openBlock(), createBlock(_component_UIcon, {
                        key: 0,
                        name: "i-heroicons-paper-airplane",
                        class: "w-4 h-4 mr-2"
                      })) : createCommentVNode("", true),
                      unref(isSubmitting) ? (openBlock(), createBlock("span", { key: 1 }, "Submitting...")) : unref(duplicateWarning) ? (openBlock(), createBlock("span", { key: 2 }, "Already Registered")) : (openBlock(), createBlock("span", { key: 3 }, "Complete Registration"))
                    ];
                  }
                }),
                _: 1
              }, _parent));
            }
            _push(`</div></div>`);
          } else {
            _push(`<div><!--[-->`);
            ssrRenderList(unref(event).form_fields, (field) => {
              _push(`<div class="space-y-1"><label${ssrRenderAttr("for", field.label)} class="block text-sm font-medium text-gray-700">${ssrInterpolate(getFieldLabel(field))} `);
              if (field.required) {
                _push(`<span class="text-red-500 ml-1">*</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</label>`);
              if (field.type !== "checkbox" && field.type !== "select" && field.type !== "textarea") {
                _push(`<input${ssrRenderDynamicModel(field.type, unref(formData)[field.label], null)}${ssrRenderAttr("type", field.type)}${ssrRenderAttr("id", field.label)}${ssrRenderAttr("name", field.label)}${ssrIncludeBooleanAttr(field.required) ? " required" : ""}${ssrRenderAttr("placeholder", getFieldPlaceholder(field))}${ssrIncludeBooleanAttr(unref(duplicateWarning) && field.type === "email") ? " disabled" : ""} class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56] disabled:bg-gray-100 disabled:cursor-not-allowed">`);
              } else if (field.type === "textarea") {
                _push(`<textarea${ssrRenderAttr("id", field.label)}${ssrRenderAttr("name", field.label)}${ssrIncludeBooleanAttr(field.required) ? " required" : ""}${ssrRenderAttr("placeholder", getFieldPlaceholder(field))} class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56]" rows="3">${ssrInterpolate(unref(formData)[field.label])}</textarea>`);
              } else if (field.type === "select") {
                _push(`<select${ssrRenderAttr("id", field.label)}${ssrRenderAttr("name", field.label)}${ssrIncludeBooleanAttr(field.required) ? " required" : ""} class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5d6b56] focus:border-[#5d6b56]"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(formData)[field.label]) ? ssrLooseContain(unref(formData)[field.label], "") : ssrLooseEqual(unref(formData)[field.label], "")) ? " selected" : ""}>${ssrInterpolate(getFieldPlaceholder(field))}</option><!--[-->`);
                ssrRenderList(field.options || [], (option) => {
                  _push(`<option${ssrRenderAttr("value", option)}${ssrIncludeBooleanAttr(Array.isArray(unref(formData)[field.label]) ? ssrLooseContain(unref(formData)[field.label], option) : ssrLooseEqual(unref(formData)[field.label], option)) ? " selected" : ""}>${ssrInterpolate(option)}</option>`);
                });
                _push(`<!--]--></select>`);
              } else {
                _push(`<div class="flex items-center"><input${ssrIncludeBooleanAttr(Array.isArray(unref(formData)[field.label]) ? ssrLooseContain(unref(formData)[field.label], null) : unref(formData)[field.label]) ? " checked" : ""} type="checkbox"${ssrRenderAttr("id", field.label)}${ssrRenderAttr("name", field.label)}${ssrIncludeBooleanAttr(field.required) ? " required" : ""} class="h-4 w-4 text-[#5d6b56] focus:ring-[#5d6b56] border-gray-300 rounded"><label${ssrRenderAttr("for", field.label)} class="ml-2 text-sm text-gray-700">${ssrInterpolate(getFieldLabel(field))}</label></div>`);
              }
              if (getFieldHelp(field)) {
                _push(`<p class="text-xs text-gray-500 mt-1">${ssrInterpolate(getFieldHelp(field))}</p>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            });
            _push(`<!--]-->`);
            _push(ssrRenderComponent(_component_UButton, {
              type: "submit",
              disabled: unref(duplicateWarning) || unref(isSubmitting),
              class: "w-full bg-[#5d6b56] hover:bg-[#9BAD94] text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:shadow-lg mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (!unref(isSubmitting)) {
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: "i-heroicons-paper-airplane",
                      class: "w-4 h-4 mr-2"
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (unref(isSubmitting)) {
                    _push2(`<span${_scopeId}>Submitting Registration...</span>`);
                  } else if (unref(duplicateWarning)) {
                    _push2(`<span${_scopeId}>Already Registered</span>`);
                  } else {
                    _push2(`<span${_scopeId}>Register Now</span>`);
                  }
                } else {
                  return [
                    !unref(isSubmitting) ? (openBlock(), createBlock(_component_UIcon, {
                      key: 0,
                      name: "i-heroicons-paper-airplane",
                      class: "w-4 h-4 mr-2"
                    })) : createCommentVNode("", true),
                    unref(isSubmitting) ? (openBlock(), createBlock("span", { key: 1 }, "Submitting Registration...")) : unref(duplicateWarning) ? (openBlock(), createBlock("span", { key: 2 }, "Already Registered")) : (openBlock(), createBlock("span", { key: 3 }, "Register Now"))
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div>`);
          }
          _push(`</form></div>`);
        } else {
          _push(`<div class="text-center py-8"><div class="bg-[#5d6b56]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-heroicons-information-circle",
            class: "w-8 h-8 text-[#5d6b56]"
          }, null, _parent));
          _push(`</div><h4 class="font-bold text-gray-900 mb-2">Open Event</h4><p class="text-sm text-gray-600 mb-4">No registration required for this event.</p><div class="bg-[#5d6b56]/5 rounded-lg p-4 border border-[#5d6b56]/20"><p class="text-xs text-gray-600"> Simply show up at the venue on the event date and time. </p></div></div>`);
        }
        _push(`</div><div class="bg-[#f4f5f3] p-6 border-t border-gray-100"><div class="flex flex-col space-y-3">`);
        _push(ssrRenderComponent(_component_UButton, {
          to: "/events",
          class: "w-full text-[#5d6b56] hover:bg-[#5d6b56] hover:text-white font-medium py-2 rounded-lg transition-all duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-arrow-left",
                class: "w-4 h-4 mr-2"
              }, null, _parent2, _scopeId));
              _push2(` Back to All Events `);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-arrow-left",
                  class: "w-4 h-4 mr-2"
                }),
                createTextVNode(" Back to All Events ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          onClick: shareEvent,
          class: "w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 rounded-lg transition-all duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-share",
                class: "w-4 h-4 mr-2"
              }, null, _parent2, _scopeId));
              _push2(` Share Event `);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-share",
                  class: "w-4 h-4 mr-2"
                }),
                createTextVNode(" Share Event ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></div></div></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-BK7SO78H.mjs.map
