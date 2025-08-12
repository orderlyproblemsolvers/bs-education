import { _ as __nuxt_component_0 } from './nuxt-link-BZ9eU4-B.mjs';
import { ref, watch, mergeProps, unref, withCtx, createTextVNode, createBlock, openBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, e as useRoute, f as useRouter, u as useHead } from './server.mjs';
import { u as useBlog } from './useBlog-DLrcGbre.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const router = useRouter();
    useBlog();
    const post = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    watch(post, (newPost) => {
      if (newPost) {
        useHead({
          title: `${newPost.title} - School Resources`,
          meta: [
            { name: "description", content: newPost.content.replace(/<[^>]*>/g, "").substring(0, 160) },
            { property: "og:title", content: newPost.title },
            { property: "og:description", content: newPost.content.replace(/<[^>]*>/g, "").substring(0, 160) },
            { property: "og:image", content: newPost.image_url || "" },
            { property: "article:author", content: newPost.author },
            { property: "article:published_time", content: newPost.created_at }
          ]
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))} data-v-53de039b>`);
      if (unref(loading)) {
        _push(`<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-v-53de039b><div class="text-center" data-v-53de039b><div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" data-v-53de039b></div><p class="mt-4 text-gray-600" data-v-53de039b>Loading resource...</p></div></div>`);
      } else if (unref(error)) {
        _push(`<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-v-53de039b><div class="text-center" data-v-53de039b><div class="text-red-600 mb-4" data-v-53de039b><svg class="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-53de039b><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-53de039b></path></svg><p class="text-lg font-medium" data-v-53de039b>${ssrInterpolate(unref(error))}</p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/resources",
          class: "px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Back to Blog `);
            } else {
              return [
                createTextVNode(" Back to Blog ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-v-53de039b><div class="mb-8" data-v-53de039b>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#",
          onClick: ($event) => unref(router).back(),
          class: "flex items-center text-blue-600 hover:text-blue-800"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-53de039b${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-53de039b${_scopeId}></path></svg> Back `);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "w-5 h-5 mr-1",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M15 19l-7-7 7-7"
                  })
                ])),
                createTextVNode(" Back ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="bg-white rounded-lg shadow-sm overflow-hidden" data-v-53de039b>`);
        if (unref(post).image_url) {
          _push(`<div class="h-64 md:h-96 overflow-hidden" data-v-53de039b><img${ssrRenderAttr("src", unref(post).image_url)}${ssrRenderAttr("alt", unref(post).title)} class="w-full h-full object-cover" data-v-53de039b></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="p-6 md:p-8" data-v-53de039b><header class="mb-8" data-v-53de039b><h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-v-53de039b>${ssrInterpolate(unref(post).title)}</h1><div class="flex items-center text-gray-600 mb-4" data-v-53de039b><div class="flex items-center" data-v-53de039b><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-53de039b><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-v-53de039b></path></svg><span class="font-medium" data-v-53de039b>${ssrInterpolate(unref(post).author)}</span></div><span class="mx-3" data-v-53de039b>•</span><div class="flex items-center" data-v-53de039b><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-53de039b><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-53de039b></path></svg><span data-v-53de039b>${ssrInterpolate(formatDate(unref(post).created_at))}</span></div>`);
        if (unref(post).updated_at !== unref(post).created_at) {
          _push(`<span class="mx-3" data-v-53de039b>•</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(post).updated_at !== unref(post).created_at) {
          _push(`<span class="text-sm" data-v-53de039b> Updated ${ssrInterpolate(formatDate(unref(post).updated_at))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></header><div class="prose prose-lg max-w-none" data-v-53de039b>${unref(post).content ?? ""}</div><div class="mt-12 pt-8 border-t border-gray-200" data-v-53de039b><div class="flex justify-between items-center" data-v-53de039b><div class="text-sm text-gray-500" data-v-53de039b> Published ${ssrInterpolate(formatDate(unref(post).created_at))}</div><div class="flex space-x-4" data-v-53de039b><button class="flex items-center px-4 py-2 text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors" data-v-53de039b><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-53de039b><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-v-53de039b></path></svg> Edit </button><button class="flex items-center px-4 py-2 text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition-colors" data-v-53de039b><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-53de039b><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-53de039b></path></svg> Delete </button></div></div></div></div></div></article>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/resources/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-53de039b"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-DIuUtkpS.mjs.map
