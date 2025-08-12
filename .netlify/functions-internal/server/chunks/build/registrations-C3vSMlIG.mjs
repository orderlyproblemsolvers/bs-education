import { ref, withAsyncContext, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { d as useSupabaseClient, e as useRoute } from './server.mjs';
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
  __name: "registrations",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const supabase = useSupabaseClient();
    const route = useRoute();
    const eventId = route.params.id;
    const eventData = ref(null);
    const registrations = ref([]);
    const { pending, error, refresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      `event-registrations-${eventId}`,
      async () => {
        try {
          const { data: event, error: eventError } = await supabase.from("events").select("title, form_fields").eq("id", eventId).single();
          if (eventError) throw eventError;
          eventData.value = event;
          const { data: regs, error: regsError } = await supabase.from("registrations").select("created_at, form_data").eq("event_id", eventId).order("created_at", { ascending: false });
          if (regsError) throw regsError;
          registrations.value = regs || [];
          return { event, registrations: regs };
        } catch (error2) {
          console.error("Error fetching data:", error2);
          throw error2;
        }
      },
      { server: false }
    )), __temp = await __temp, __restore(), __temp);
    const formatDate = (dateString) => {
      if (!dateString) return "-";
      return new Date(dateString).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    watch([eventData, registrations], ([event, regs]) => {
      console.log("Event Data:", event);
      console.log("Registrations:", regs);
      if (event?.form_fields) {
        console.log("Form Fields:", event.form_fields);
      }
      if (regs?.length > 0) {
        console.log("Sample Registration:", regs[0]);
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#f4f5f3] p-6" }, _attrs))}><div class="max-w-6xl mx-auto">`);
      if (unref(pending)) {
        _push(`<div class="text-center py-12"><div class="animate-spin w-8 h-8 border-4 border-[#ACBEA3] border-t-transparent rounded-full mx-auto mb-4"></div><p class="text-gray-600">Loading registrations...</p></div>`);
      } else if (unref(error)) {
        _push(`<div class="text-center py-12"><div class="text-red-500 text-lg mb-4">❌ Failed to load registrations</div><p class="text-gray-600 mb-4">${ssrInterpolate(unref(error).message || "Something went wrong")}</p><button class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"> Try Again </button></div>`);
      } else {
        _push(`<div class="bg-white rounded-xl shadow-sm border border-gray-200"><div class="p-6 border-b border-gray-200"><div class="flex justify-between items-center"><div><p class="text-sm text-gray-500 mb-1">Registrations for</p><h1 class="text-2xl font-bold text-gray-900">${ssrInterpolate(unref(eventData)?.title || "Event")}</h1><p class="text-sm text-gray-600 mt-1">${ssrInterpolate(unref(registrations).length)} ${ssrInterpolate(unref(registrations).length === 1 ? "registration" : "registrations")}</p></div><button class="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg><span>Back to Events</span></button></div></div><div class="p-6">`);
        if (unref(registrations).length === 0) {
          _push(`<div class="text-center py-12"><div class="text-gray-400 text-6xl mb-4">📋</div><h3 class="text-lg font-medium text-gray-900 mb-2">No registrations yet</h3><p class="text-gray-500">No one has registered for this event yet.</p></div>`);
        } else {
          _push(`<div class="overflow-x-auto"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Registration Date </th><!--[-->`);
          ssrRenderList(unref(eventData)?.form_fields || [], (field) => {
            _push(`<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${ssrInterpolate(field.label)} `);
            if (field.required) {
              _push(`<span class="text-red-500 ml-1">*</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</th>`);
          });
          _push(`<!--]--></tr></thead><tbody class="bg-white divide-y divide-gray-200"><!--[-->`);
          ssrRenderList(unref(registrations), (registration, index) => {
            _push(`<tr class="hover:bg-gray-50"><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${ssrInterpolate(formatDate(registration.created_at))}</td><!--[-->`);
            ssrRenderList(unref(eventData)?.form_fields || [], (field) => {
              _push(`<td class="px-6 py-4 text-sm text-gray-900"><div class="max-w-xs">`);
              if (registration.form_data && registration.form_data[field.label]) {
                _push(`<span class="break-words">${ssrInterpolate(registration.form_data[field.label])}</span>`);
              } else {
                _push(`<span class="text-gray-400 italic">-</span>`);
              }
              _push(`</div></td>`);
            });
            _push(`<!--]--></tr>`);
          });
          _push(`<!--]--></tbody></table></div>`);
        }
        if (unref(registrations).length > 0) {
          _push(`<div class="mt-6 flex justify-end"><button class="flex items-center space-x-2 px-4 py-2 bg-[#ACBEA3] text-white rounded-lg hover:bg-[#9BAD94] transition-colors"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg><span>Export CSV</span></button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/events/[id]/registrations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=registrations-C3vSMlIG.mjs.map
