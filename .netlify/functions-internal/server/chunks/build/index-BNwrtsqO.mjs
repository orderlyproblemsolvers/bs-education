import { ref, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { d as useSupabaseClient } from './server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const supabase = useSupabaseClient();
    const toast = useToast();
    const isDeleteModalOpen = ref(false);
    const eventToDelete = ref(null);
    const isDeleting = ref(false);
    const { data: events, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "events",
      async () => {
        const { data, error: error2 } = await supabase.from("events").select("id, title, event_date, venue").order("event_date", { ascending: false });
        if (error2) throw error2;
        return data || [];
      },
      {
        server: false,
        default: () => []
      }
    )), __temp = await __temp, __restore(), __temp);
    const formatDate = (dateString) => {
      if (!dateString) return "No date";
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          weekday: "short"
        });
      } catch (error2) {
        return "Invalid date";
      }
    };
    const formatTime = (dateString) => {
      if (!dateString) return "";
      try {
        const date = new Date(dateString);
        return date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        });
      } catch (error2) {
        return "";
      }
    };
    if (error.value) {
      toast.add({
        title: "Loading Error",
        description: "Failed to load events. Please refresh the page.",
        color: "red"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#f4f5f3] p-6" }, _attrs))}><div class="max-w-7xl mx-auto"><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6"><div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"><div><h1 class="text-2xl font-bold text-gray-900 mb-2">Event Management</h1><p class="text-gray-600">Organize and manage your events with ease</p></div><button class="inline-flex items-center bg-[#ACBEA3] hover:bg-[#9BAD94] text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> Create New Event </button></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"><div class="p-6 border-b border-gray-200"><h2 class="text-xl font-semibold text-gray-900">All Events</h2><p class="text-gray-600 mt-1">${ssrInterpolate(unref(events)?.length || 0)} total events</p></div>`);
      if (unref(pending)) {
        _push(`<div class="p-8"><div class="animate-pulse space-y-4"><div class="flex items-center space-x-4"><div class="rounded-full bg-gray-200 h-12 w-12"></div><div class="flex-1 space-y-2"><div class="h-4 bg-gray-200 rounded w-3/4"></div><div class="h-3 bg-gray-200 rounded w-1/2"></div></div></div><div class="flex items-center space-x-4"><div class="rounded-full bg-gray-200 h-12 w-12"></div><div class="flex-1 space-y-2"><div class="h-4 bg-gray-200 rounded w-2/3"></div><div class="h-3 bg-gray-200 rounded w-1/3"></div></div></div></div></div>`);
      } else if (unref(events) && unref(events).length > 0) {
        _push(`<div class="overflow-x-auto"><table class="w-full"><thead class="bg-gray-50 border-b border-gray-200"><tr><th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Event Title </th><th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Date &amp; Time </th><th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Venue </th><th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Registrations </th><th class="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"> Actions </th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><!--[-->`);
        ssrRenderList(unref(events), (event) => {
          _push(`<tr class="hover:bg-gray-50 transition-colors duration-150"><td class="px-6 py-4"><div class="flex items-center"><div class="bg-[#EB6534]/10 p-2 rounded-lg mr-3 flex-shrink-0"><svg class="w-4 h-4 text-[#EB6534]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></div><div class="min-w-0 flex-1"><div class="font-semibold text-gray-900 truncate">${ssrInterpolate(event.title)}</div></div></div></td><td class="px-6 py-4"><div class="flex items-center"><div class="bg-[#ACBEA3]/10 p-2 rounded-lg mr-3 flex-shrink-0"><svg class="w-4 h-4 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div><div><div class="font-medium text-gray-900">${ssrInterpolate(formatDate(event.event_date))}</div><div class="text-xs text-gray-500">${ssrInterpolate(formatTime(event.event_date))}</div></div></div></td><td class="px-6 py-4"><div class="flex items-center"><svg class="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><span class="text-gray-700 truncate">${ssrInterpolate(event.venue || "No venue specified")}</span></div></td><td class="px-6 py-4"><button class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path></svg> View Registrations </button></td><td class="px-6 py-4 text-right"><div class="flex items-center justify-end space-x-2"><button class="inline-flex items-center px-3 py-2 text-sm font-medium text-[#ACBEA3] border border-[#ACBEA3] rounded-lg hover:bg-[#ACBEA3] hover:text-white transition-all duration-200" title="Edit event"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg> Edit </button><button class="inline-flex items-center px-3 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-all duration-200" title="Delete event"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg> Delete </button></div></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      } else if (!unref(pending)) {
        _push(`<div class="text-center py-16"><div class="bg-[#ACBEA3]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div><h3 class="text-lg font-semibold text-gray-900 mb-2">No events yet</h3><p class="text-gray-600 mb-6">Get started by creating your first event</p><button class="inline-flex items-center bg-[#ACBEA3] hover:bg-[#9BAD94] text-white font-medium px-6 py-3 rounded-lg transition-all duration-200"> Create Your First Event </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (unref(isDeleteModalOpen)) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"><div class="bg-white rounded-xl overflow-hidden max-w-md w-full"><div class="bg-red-50 px-6 py-4 border-b border-red-100"><div class="flex items-center"><div class="bg-red-100 p-2 rounded-full mr-3"><svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"></path></svg></div><h2 class="text-lg font-semibold text-red-900">Delete Event</h2></div></div><div class="px-6 py-6"><p class="text-gray-700 leading-relaxed"> Are you sure you want to delete <strong class="text-gray-900">&quot;${ssrInterpolate(unref(eventToDelete)?.title)}&quot;</strong>? This action cannot be undone and all associated data will be permanently removed. </p></div><div class="bg-gray-50 px-6 py-4 flex justify-end space-x-3 border-t border-gray-100"><button class="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200"${ssrIncludeBooleanAttr(unref(isDeleting)) ? " disabled" : ""}> Cancel </button><button${ssrIncludeBooleanAttr(unref(isDeleting)) ? " disabled" : ""} class="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white px-6 py-2 font-medium rounded-lg transition-colors duration-200">`);
        if (!unref(isDeleting)) {
          _push(`<span>Delete Event</span>`);
        } else {
          _push(`<span class="flex items-center"><svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Deleting... </span>`);
        }
        _push(`</button></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/events/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BNwrtsqO.mjs.map
