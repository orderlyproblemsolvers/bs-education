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
          title: `${newPost.title} - The Covenant Academy`,
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full min-h-screen bg-white overflow-hidden font-inter" }, _attrs))} data-v-5ef17644><div class="absolute inset-0 opacity-5" data-v-5ef17644><svg width="60" height="60" viewBox="0 0 60 60" class="absolute top-0 left-0 w-full h-full" data-v-5ef17644><defs data-v-5ef17644><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse" data-v-5ef17644><circle cx="30" cy="30" r="1" fill="#ACBEA3" data-v-5ef17644></circle></pattern></defs><rect width="100%" fill="url(#grid)" data-v-5ef17644></rect></svg></div><div class="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12" data-v-5ef17644>`);
      if (unref(loading)) {
        _push(`<div class="text-center py-12 space-y-6" data-v-5ef17644><div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#ACBEA3]" data-v-5ef17644></div><p class="text-gray-600" data-v-5ef17644>Loading blog post...</p></div>`);
      } else if (unref(error)) {
        _push(`<div class="text-center py-12 space-y-6" data-v-5ef17644><div class="w-12 h-12 mx-auto bg-[#ACBEA3]/10 rounded-lg flex items-center justify-center" data-v-5ef17644><svg class="w-6 h-6 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-5ef17644><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-5ef17644></path></svg></div><p class="text-lg text-gray-600 px-4" data-v-5ef17644>${ssrInterpolate(unref(error))}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "inline-flex items-center px-6 py-3 text-sm font-medium text-[#ACBEA3] border border-[#ACBEA3] rounded-lg hover:bg-[#ACBEA3] hover:text-white transition-all duration-200"
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
        _push(`</div>`);
      } else {
        _push(`<article class="relative w-full" data-v-5ef17644><div class="mb-6 sm:mb-8" data-v-5ef17644>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#",
          onClick: ($event) => unref(router).back(),
          class: "inline-flex items-center text-[#ACBEA3] hover:text-[#6b7a6a] transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-5ef17644${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" data-v-5ef17644${_scopeId}></path></svg> Back `);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "w-5 h-5 mr-2",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "1.5",
                    d: "M15 19l-7-7 7-7"
                  })
                ])),
                createTextVNode(" Back ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        if (unref(post).image_url) {
          _push(`<div class="relative mb-6 sm:mb-8 h-48 sm:h-56 md:h-64 w-full overflow-hidden rounded-xl shadow border border-gray-200" data-v-5ef17644><img${ssrRenderAttr("src", unref(post).image_url)}${ssrRenderAttr("alt", unref(post).title)} class="w-full h-full object-cover" data-v-5ef17644></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<header class="mb-8 sm:mb-12" data-v-5ef17644><div class="inline-flex items-center space-x-3 mb-4 sm:mb-6" data-v-5ef17644><div class="w-2 h-2 bg-[#EB6534] rounded-full flex-shrink-0" data-v-5ef17644></div><span class="text-xs font-semibold text-gray-500 tracking-wide uppercase" data-v-5ef17644> Blog Post </span></div><h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] tracking-tight mb-4 sm:mb-6 leading-tight break-words" data-v-5ef17644>${ssrInterpolate(unref(post).title)}</h1><div class="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-x-6 sm:gap-y-3 text-sm text-gray-600 pb-6" data-v-5ef17644><div class="flex items-center" data-v-5ef17644><div class="w-8 h-8 bg-[#ACBEA3]/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0" data-v-5ef17644><svg class="w-4 h-4 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-5ef17644><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-v-5ef17644></path></svg></div><span class="font-medium truncate" data-v-5ef17644>${ssrInterpolate(unref(post).author)}</span></div><div class="flex items-center" data-v-5ef17644><div class="w-8 h-8 bg-[#ACBEA3]/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0" data-v-5ef17644><svg class="w-4 h-4 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-5ef17644><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-5ef17644></path></svg></div><span class="whitespace-nowrap" data-v-5ef17644>${ssrInterpolate(formatDate(unref(post).created_at))}</span></div>`);
        if (unref(post).updated_at !== unref(post).created_at) {
          _push(`<div class="flex items-center text-xs text-gray-500" data-v-5ef17644><span class="whitespace-nowrap" data-v-5ef17644> Updated ${ssrInterpolate(formatDate(unref(post).updated_at))}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#ACBEA3] to-[#EB6534] rounded-full" data-v-5ef17644></div></header><div class="w-full bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow border border-gray-200 overflow-hidden" data-v-5ef17644><div class="prose prose-sm sm:prose-base lg:prose-lg max-w-none w-full" data-v-5ef17644>${unref(post).content ?? ""}</div></div><footer class="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200" data-v-5ef17644><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6" data-v-5ef17644><div class="flex items-center space-x-4" data-v-5ef17644><div class="w-12 h-12 bg-[#ACBEA3]/10 rounded-full flex items-center justify-center flex-shrink-0" data-v-5ef17644><svg class="w-6 h-6 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-5ef17644><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-v-5ef17644></path></svg></div><div class="min-w-0 flex-1" data-v-5ef17644><p class="font-semibold text-[#333333] truncate" data-v-5ef17644>${ssrInterpolate(unref(post).author)}</p><p class="text-sm text-gray-600 truncate" data-v-5ef17644>Published ${ssrInterpolate(formatDate(unref(post).created_at))}</p></div></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#EB6534] rounded-lg hover:bg-[#c16a3d] transition-colors duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` More Articles <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-5ef17644${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" data-v-5ef17644${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(" More Articles "),
                (openBlock(), createBlock("svg", {
                  class: "w-4 h-4 ml-2",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "1.5",
                    d: "M9 5l7 7-7 7"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></footer></article>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5ef17644"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-CmGei20_.mjs.map
