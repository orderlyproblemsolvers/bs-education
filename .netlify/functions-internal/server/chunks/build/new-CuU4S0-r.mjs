import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate, ssrLooseEqual, ssrRenderList } from 'vue/server-renderer';
import { d as useSupabaseClient, f as useRouter, u as useHead } from './server.mjs';
import { u as useToast } from './useToast-CwOAh1aG.mjs';
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
import 'vue-router';
import '@supabase/ssr';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {
  __name: "new",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseClient();
    useRouter();
    useToast();
    const isCreating = ref(false);
    const showSuccessModal = ref(false);
    const formData = ref({
      title: "",
      event_date: "",
      venue: "",
      description: "",
      admission_fee: 0,
      currency: "₦",
      // Default to Nigerian Naira
      is_free: true,
      // Default to free events
      form_fields: []
    });
    useHead({
      title: "Create New Event - Admin Dashboard",
      meta: [
        { name: "description", content: "Create a new educational event for B&S Educational Services" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#f4f5f3] p-6" }, _attrs))}><div class="max-w-4xl mx-auto"><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6"><div class="flex items-center justify-between"><div class="flex items-center"><div class="bg-[#ACBEA3] p-3 rounded-xl mr-4"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></div><div><h1 class="text-2xl font-bold text-gray-900">Create New Event</h1><p class="text-gray-600 mt-1">Add a new educational programme to your events calendar</p></div></div><button class="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg><span>Back to Events</span></button></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"><div class="bg-[#f4f5f3] p-6 border-b border-gray-200"><div class="flex items-center"><svg class="w-6 h-6 text-[#ACBEA3] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg><h2 class="text-xl font-semibold text-gray-900">Event Details</h2></div><p class="text-gray-600 mt-1 text-sm">Fill in the information below to create your event</p></div><div class="p-8"><form class="space-y-8"><div class="space-y-6"><h3 class="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">Basic Information</h3><div><label class="block text-sm font-medium text-gray-700 mb-2"> Event Title <span class="text-red-500">*</span></label><input${ssrRenderAttr("value", unref(formData).title)} type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors" placeholder="e.g., Introduction to Digital Marketing"></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-medium text-gray-700 mb-2"> Event Date &amp; Time <span class="text-red-500">*</span></label><input${ssrRenderAttr("value", unref(formData).event_date)} type="datetime-local" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors"></div><div><label class="block text-sm font-medium text-gray-700 mb-2"> Venue </label><input${ssrRenderAttr("value", unref(formData).venue)} type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors" placeholder="e.g., Main Conference Hall"></div></div><div class="space-y-4"><div class="flex items-center justify-between"><label class="block text-sm font-medium text-gray-700"> Event Pricing </label><label class="flex items-center cursor-pointer"><input${ssrIncludeBooleanAttr(Array.isArray(unref(formData).is_free) ? ssrLooseContain(unref(formData).is_free, null) : unref(formData).is_free) ? " checked" : ""} type="checkbox" class="mr-2 text-[#ACBEA3] focus:ring-[#ACBEA3] rounded"><span class="text-sm text-gray-700">This is a free event</span></label></div>`);
      if (!unref(formData).is_free) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-medium text-gray-700 mb-2"> Admission Fee <span class="text-red-500">*</span></label><div class="relative"><div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><span class="text-gray-500 text-sm">${ssrInterpolate(unref(formData).currency)}</span></div><input${ssrRenderAttr("value", unref(formData).admission_fee)} type="number" step="0.01" min="0"${ssrIncludeBooleanAttr(!unref(formData).is_free) ? " required" : ""} class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors" placeholder="0.00"></div></div><div><label class="block text-sm font-medium text-gray-700 mb-2"> Currency <span class="text-red-500">*</span></label><select${ssrIncludeBooleanAttr(!unref(formData).is_free) ? " required" : ""} class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors"><option value="₦"${ssrIncludeBooleanAttr(Array.isArray(unref(formData).currency) ? ssrLooseContain(unref(formData).currency, "₦") : ssrLooseEqual(unref(formData).currency, "₦")) ? " selected" : ""}>NGN (₦) - Nigerian Naira</option><option value="$"${ssrIncludeBooleanAttr(Array.isArray(unref(formData).currency) ? ssrLooseContain(unref(formData).currency, "$") : ssrLooseEqual(unref(formData).currency, "$")) ? " selected" : ""}>USD ($) - US Dollar</option><option value="£"${ssrIncludeBooleanAttr(Array.isArray(unref(formData).currency) ? ssrLooseContain(unref(formData).currency, "£") : ssrLooseEqual(unref(formData).currency, "£")) ? " selected" : ""}>GBP (£) - British Pound</option><option value="€"${ssrIncludeBooleanAttr(Array.isArray(unref(formData).currency) ? ssrLooseContain(unref(formData).currency, "€") : ssrLooseEqual(unref(formData).currency, "€")) ? " selected" : ""}>EUR (€) - Euro</option></select></div></div>`);
      } else {
        _push(`<div class="bg-green-50 border border-green-200 rounded-lg p-4"><div class="flex items-center"><svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span class="text-green-800 font-medium text-sm">This event is free for all participants</span></div></div>`);
      }
      _push(`</div><div><label class="block text-sm font-medium text-gray-700 mb-2"> Event Description </label><textarea rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors" placeholder="Describe what participants will learn and what to expect...">${ssrInterpolate(unref(formData).description)}</textarea></div></div><div class="space-y-6"><div class="flex items-center justify-between border-b border-gray-200 pb-2"><h3 class="text-lg font-semibold text-gray-900">Registration Form</h3><button type="button" class="flex items-center space-x-2 text-[#ACBEA3] hover:text-[#9BAD94] font-medium text-sm transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg><span>Add Field</span></button></div><p class="text-sm text-gray-600"> Create custom registration fields to collect participant information </p><div class="space-y-4"><!--[-->`);
      ssrRenderList(unref(formData).form_fields, (field, index) => {
        _push(`<div class="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg bg-gray-50"><div class="flex-1"><input${ssrRenderAttr("value", field.label)} type="text" placeholder="Field Label (e.g., Full Name)" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#ACBEA3] focus:border-transparent text-sm"></div><div class="w-32"><select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#ACBEA3] focus:border-transparent text-sm"><option value="text"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "text") : ssrLooseEqual(field.type, "text")) ? " selected" : ""}>Text</option><option value="email"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "email") : ssrLooseEqual(field.type, "email")) ? " selected" : ""}>Email</option><option value="tel"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "tel") : ssrLooseEqual(field.type, "tel")) ? " selected" : ""}>Phone</option><option value="number"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "number") : ssrLooseEqual(field.type, "number")) ? " selected" : ""}>Number</option><option value="textarea"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "textarea") : ssrLooseEqual(field.type, "textarea")) ? " selected" : ""}>Textarea</option></select></div><label class="flex items-center text-sm whitespace-nowrap"><input${ssrIncludeBooleanAttr(Array.isArray(field.required) ? ssrLooseContain(field.required, null) : field.required) ? " checked" : ""} type="checkbox" class="mr-2 text-[#ACBEA3] focus:ring-[#ACBEA3] rounded"> Required </label><button type="button" class="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div>`);
      });
      _push(`<!--]-->`);
      if (unref(formData).form_fields.length === 0) {
        _push(`<div class="text-center py-8 border-2 border-dashed border-gray-200 rounded-lg"><svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg><p class="text-gray-500 mb-2">No registration fields added yet</p><p class="text-sm text-gray-400">Click &quot;Add Field&quot; to create registration form fields</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex space-x-4 pt-6 border-t border-gray-200"><button type="button" class="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"> Cancel </button><button type="submit"${ssrIncludeBooleanAttr(unref(isCreating)) ? " disabled" : ""} class="flex-1 bg-[#ACBEA3] text-white px-6 py-3 rounded-lg hover:bg-[#9BAD94] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium">`);
      if (unref(isCreating)) {
        _push(`<span class="flex items-center justify-center"><div class="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div> Creating Event... </span>`);
      } else {
        _push(`<span>Create Event</span>`);
      }
      _push(`</button></div></form></div></div><div class="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6"><div class="flex items-start"><div class="bg-[#EB6534]/10 p-2 rounded-lg mr-4 mt-1"><svg class="w-5 h-5 text-[#EB6534]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></div><div><h3 class="font-semibold text-gray-900 mb-2">Tips for Creating Great Events</h3><ul class="text-sm text-gray-600 space-y-1"><li>• Use clear, descriptive titles that highlight the main benefit</li><li>• Include detailed descriptions to help participants understand what to expect</li><li>• Set up registration forms to collect necessary participant information</li><li>• Set appropriate admission fees - consider your target audience</li><li>• Double-check the date, time, venue, and pricing information before publishing</li></ul></div></div></div></div>`);
      if (unref(showSuccessModal)) {
        _push(`<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"><div class="bg-white rounded-xl max-w-md w-full overflow-hidden"><div class="bg-green-50 p-6 text-center"><div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><h3 class="text-xl font-semibold text-green-900 mb-2">Event Created Successfully!</h3><p class="text-green-700">Your new event has been added to the calendar.</p></div><div class="p-6"><div class="flex flex-col space-y-3"><button class="w-full bg-[#ACBEA3] hover:bg-[#9BAD94] text-white font-medium py-3 px-4 rounded-lg transition-colors"> View All Events </button><button class="w-full border border-[#ACBEA3] text-[#ACBEA3] hover:bg-[#ACBEA3] hover:text-white font-medium py-3 px-4 rounded-lg transition-colors"> Create Another Event </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isCreating)) {
        _push(`<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-40"><div class="bg-white rounded-xl p-8 max-w-sm mx-4 text-center"><div class="animate-spin w-12 h-12 border-4 border-[#ACBEA3] border-t-transparent rounded-full mx-auto mb-4"></div><h3 class="font-semibold text-gray-900 mb-2">Creating Event...</h3><p class="text-gray-600 text-sm">Please wait while we set up your new event.</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/events/new.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=new-CuU4S0-r.mjs.map
