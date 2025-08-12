import { _ as __nuxt_component_0 } from './nuxt-link-BZ9eU4-B.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, d as useSupabaseClient } from './server.mjs';
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
  setup(__props) {
    useSupabaseClient();
    const applications = ref([]);
    const sort = ref({ field: "created_at", asc: false });
    const fields = [
      { key: "first_name", label: "First Name" },
      { key: "last_name", label: "Last Name" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "destination", label: "Destination" },
      { key: "study_level", label: "Study Level" },
      { key: "study_time", label: "Study Time" },
      { key: "counselling_mode", label: "Counselling Mode" },
      { key: "contact_pref", label: "Contact Pref" },
      { key: "receive_updates", label: "Updates?" },
      { key: "agree_terms", label: "Agreed?" },
      { key: "created_at", label: "Submitted" }
    ];
    const sortedData = computed(() => {
      const field = sort.value.field;
      const asc = sort.value.asc;
      return [...applications.value].sort((a, b) => {
        if (a[field] === null) return 1;
        if (b[field] === null) return -1;
        if (a[field] < b[field]) return asc ? -1 : 1;
        if (a[field] > b[field]) return asc ? 1 : -1;
        return 0;
      });
    });
    const formatDate = (date) => new Date(date).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white shadow rounded-lg p-6 overflow-x-auto" }, _attrs))} data-v-1f1aa734><div class="mb-4" data-v-1f1aa734>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin",
        class: "inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ← Back to Dashboard `);
          } else {
            return [
              createTextVNode(" ← Back to Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between mb-4 flex-wrap gap-2" data-v-1f1aa734><h2 class="text-xl font-semibold text-gray-800" data-v-1f1aa734>Study Applications</h2><button class="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded" data-v-1f1aa734> Export CSV </button></div><table class="min-w-full divide-y divide-gray-200 text-sm" data-v-1f1aa734><thead class="bg-gray-50" data-v-1f1aa734><tr data-v-1f1aa734><!--[-->`);
      ssrRenderList(fields, (field) => {
        _push(`<th class="px-4 py-2 text-left cursor-pointer whitespace-nowrap text-gray-700 hover:text-indigo-600" data-v-1f1aa734>${ssrInterpolate(field.label)} `);
        if (sort.value.field === field.key) {
          _push(`<span data-v-1f1aa734>${ssrInterpolate(sort.value.asc ? "↑" : "↓")}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</th>`);
      });
      _push(`<!--]--></tr></thead><tbody class="divide-y divide-gray-100" data-v-1f1aa734><!--[-->`);
      ssrRenderList(sortedData.value, (entry) => {
        _push(`<tr class="hover:bg-gray-50" data-v-1f1aa734><td class="px-4 py-2" data-v-1f1aa734>${ssrInterpolate(entry.first_name)}</td><td class="px-4 py-2" data-v-1f1aa734>${ssrInterpolate(entry.last_name)}</td><td class="px-4 py-2" data-v-1f1aa734>${ssrInterpolate(entry.email)}</td><td class="px-4 py-2" data-v-1f1aa734>${ssrInterpolate(entry.phone)}</td><td class="px-4 py-2" data-v-1f1aa734>${ssrInterpolate(entry.destination || "-")}</td><td class="px-4 py-2" data-v-1f1aa734>${ssrInterpolate(entry.study_level || "-")}</td><td class="px-4 py-2" data-v-1f1aa734>${ssrInterpolate(entry.study_time || "-")}</td><td class="px-4 py-2" data-v-1f1aa734>${ssrInterpolate(entry.counselling_mode || "-")}</td><td class="px-4 py-2" data-v-1f1aa734>${ssrInterpolate(entry.contact_pref ? "Yes" : "No")}</td><td class="px-4 py-2" data-v-1f1aa734>${ssrInterpolate(entry.receive_updates ? "Yes" : "No")}</td><td class="px-4 py-2" data-v-1f1aa734>${ssrInterpolate(entry.agree_terms ? "Yes" : "No")}</td><td class="px-4 py-2" data-v-1f1aa734>${ssrInterpolate(formatDate(entry.created_at))}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/enquiries/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1f1aa734"]]);

export { index as default };
//# sourceMappingURL=index-P625yyhr.mjs.map
