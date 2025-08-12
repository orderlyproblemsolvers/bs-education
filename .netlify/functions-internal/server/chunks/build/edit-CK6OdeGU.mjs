import { ref, withAsyncContext, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from 'vue/server-renderer';
import { d as useSupabaseClient, f as useRouter, e as useRoute } from './server.mjs';
import { u as useToast } from './useToast-CwOAh1aG.mjs';
import { u as useAsyncData } from './asyncData-D0f35ZHT.mjs';
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
  __name: "edit",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const supabase = useSupabaseClient();
    useRouter();
    const route = useRoute();
    useToast();
    const eventId = route.params.id;
    const isUpdating = ref(false);
    const formData = ref({
      title: "",
      event_date: "",
      venue: "",
      description: "",
      form_fields: [],
      // Initialize as empty array
      admission_fee: 0,
      currency: "₦",
      is_free: true
    });
    const { data: event, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`event-${eventId}`, async () => {
      const { data, error: error2 } = await supabase.from("events").select("*").eq("id", eventId).single();
      if (error2) throw error2;
      return data;
    }, { server: false })), __temp = await __temp, __restore(), __temp);
    watch(event, (newEvent) => {
      if (newEvent) {
        formData.value = {
          title: newEvent.title || "",
          event_date: newEvent.event_date ? formatDateForInput(newEvent.event_date) : "",
          venue: newEvent.venue || "",
          description: newEvent.description || "",
          form_fields: Array.isArray(newEvent.form_fields) ? newEvent.form_fields : [],
          // Ensure it's always an array
          admission_fee: newEvent.admission_fee || 0,
          currency: newEvent.currency || "₦",
          is_free: newEvent.is_free !== void 0 ? newEvent.is_free : true
        };
      }
    }, { immediate: true });
    function formatDateForInput(dateString) {
      if (!dateString) return "";
      const date = new Date(dateString);
      return date.toISOString().slice(0, 16);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#f4f5f3] p-6" }, _attrs))}><div class="max-w-2xl mx-auto"><div class="mb-6"><div class="flex items-center space-x-3 mb-4"><button class="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all"><svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg></button><div><h1 class="text-2xl font-bold text-gray-900">Edit Event</h1><p class="text-gray-600">Update your event details</p></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">`);
      if (unref(pending)) {
        _push(`<div class="text-center py-12"><div class="animate-spin w-8 h-8 border-4 border-[#ACBEA3] border-t-transparent rounded-full mx-auto mb-4"></div><p class="text-gray-600">Loading event details...</p></div>`);
      } else if (unref(error)) {
        _push(`<div class="text-center py-12"><div class="text-red-500 text-lg mb-4">❌ Failed to load event</div><p class="text-gray-600 mb-4">${ssrInterpolate(unref(error).message || "Something went wrong")}</p><button class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"> Try Again </button></div>`);
      } else {
        _push(`<div><form><div class="mb-6"><label class="block text-sm font-medium text-gray-700 mb-2"> Event Title </label><input${ssrRenderAttr("value", unref(formData).title)} type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent" placeholder="Enter event title"></div><div class="mb-6"><label class="block text-sm font-medium text-gray-700 mb-2"> Event Date </label><input${ssrRenderAttr("value", unref(formData).event_date)} type="datetime-local" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent"></div><div class="mb-6"><label class="block text-sm font-medium text-gray-700 mb-2"> Venue </label><input${ssrRenderAttr("value", unref(formData).venue)} type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent" placeholder="Enter event venue"></div><div class="mb-6"><label class="block text-sm font-medium text-gray-700 mb-3"> Admission Fee </label><div class="mb-4"><label class="flex items-center space-x-3 cursor-pointer"><input${ssrIncludeBooleanAttr(Array.isArray(unref(formData).is_free) ? ssrLooseContain(unref(formData).is_free, null) : unref(formData).is_free) ? " checked" : ""} type="checkbox" class="w-4 h-4 text-[#ACBEA3] border-gray-300 rounded focus:ring-[#ACBEA3] focus:ring-2"><span class="text-sm text-gray-700">This is a free event</span></label></div>`);
        if (!unref(formData).is_free) {
          _push(`<div class="grid grid-cols-3 gap-3"><div class="col-span-2"><label class="block text-xs font-medium text-gray-600 mb-1"> Amount </label><input${ssrRenderAttr("value", unref(formData).admission_fee)} type="number" step="0.01" min="0" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent" placeholder="0.00"></div><div><label class="block text-xs font-medium text-gray-600 mb-1"> Currency </label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent"><option value="₦"${ssrIncludeBooleanAttr(Array.isArray(unref(formData).currency) ? ssrLooseContain(unref(formData).currency, "₦") : ssrLooseEqual(unref(formData).currency, "₦")) ? " selected" : ""}>₦ (Naira)</option><option value="$"${ssrIncludeBooleanAttr(Array.isArray(unref(formData).currency) ? ssrLooseContain(unref(formData).currency, "$") : ssrLooseEqual(unref(formData).currency, "$")) ? " selected" : ""}>$ (USD)</option><option value="£"${ssrIncludeBooleanAttr(Array.isArray(unref(formData).currency) ? ssrLooseContain(unref(formData).currency, "£") : ssrLooseEqual(unref(formData).currency, "£")) ? " selected" : ""}>£ (GBP)</option><option value="€"${ssrIncludeBooleanAttr(Array.isArray(unref(formData).currency) ? ssrLooseContain(unref(formData).currency, "€") : ssrLooseEqual(unref(formData).currency, "€")) ? " selected" : ""}>€ (EUR)</option></select></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-3 p-3 bg-gray-50 rounded-lg"><div class="text-sm text-gray-600"><span class="font-medium">Admission Fee:</span>`);
        if (unref(formData).is_free) {
          _push(`<span class="text-green-600 font-medium ml-2">Free</span>`);
        } else {
          _push(`<span class="font-medium ml-2">${ssrInterpolate(unref(formData).currency)}${ssrInterpolate(parseFloat(unref(formData).admission_fee || 0).toFixed(2))}</span>`);
        }
        _push(`</div></div></div><div class="mb-6"><label class="block text-sm font-medium text-gray-700 mb-2"> Description </label><textarea rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent" placeholder="Enter event description">${ssrInterpolate(unref(formData).description)}</textarea></div><div class="mb-6"><div class="flex items-center justify-between mb-4"><label class="block text-sm font-medium text-gray-700"> Registration Form Fields </label><button type="button" class="text-[#ACBEA3] hover:text-[#9BAD94] font-medium text-sm"> + Add Field </button></div><div class="space-y-3"><!--[-->`);
        ssrRenderList(unref(formData).form_fields, (field, index) => {
          _push(`<div class="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg bg-gray-50"><input${ssrRenderAttr("value", field.label)} type="text" placeholder="Field Label (e.g., Full Name)" class="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-[#ACBEA3] focus:border-transparent text-sm"><select class="px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-[#ACBEA3] focus:border-transparent text-sm"><option value="text"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "text") : ssrLooseEqual(field.type, "text")) ? " selected" : ""}>Text</option><option value="email"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "email") : ssrLooseEqual(field.type, "email")) ? " selected" : ""}>Email</option><option value="tel"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "tel") : ssrLooseEqual(field.type, "tel")) ? " selected" : ""}>Phone</option><option value="number"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "number") : ssrLooseEqual(field.type, "number")) ? " selected" : ""}>Number</option><option value="textarea"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "textarea") : ssrLooseEqual(field.type, "textarea")) ? " selected" : ""}>Textarea</option></select><label class="flex items-center text-sm"><input${ssrIncludeBooleanAttr(Array.isArray(field.required) ? ssrLooseContain(field.required, null) : field.required) ? " checked" : ""} type="checkbox" class="mr-2 text-[#ACBEA3] focus:ring-[#ACBEA3]"> Required </label><button type="button" class="text-red-500 hover:text-red-700 p-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div>`);
        });
        _push(`<!--]-->`);
        if (unref(formData).form_fields.length === 0) {
          _push(`<div class="text-center py-8 text-gray-500"> No registration fields added yet. Click &quot;Add Field&quot; to create registration form fields. </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="flex space-x-4"><button type="button" class="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"> Cancel </button><button type="submit"${ssrIncludeBooleanAttr(unref(isUpdating)) ? " disabled" : ""} class="flex-1 bg-[#ACBEA3] text-white px-4 py-3 rounded-lg hover:bg-[#9BAD94] disabled:opacity-50 disabled:cursor-not-allowed transition-colors">`);
        if (unref(isUpdating)) {
          _push(`<span class="flex items-center justify-center"><div class="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div> Updating... </span>`);
        } else {
          _push(`<span>Update Event</span>`);
        }
        _push(`</button></div></form></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/events/[id]/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=edit-CK6OdeGU.mjs.map
