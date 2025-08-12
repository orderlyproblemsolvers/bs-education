import { _ as __nuxt_component_0 } from './nuxt-link-BZ9eU4-B.mjs';
import { _ as __nuxt_component_0$1 } from './NuxtImg-jLe0oRQc.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, computed, toDisplayString, createBlock, openBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useHead } from './server.mjs';
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

const _sfc_main$1 = {
  __name: "BlogCard",
  __ssrInlineRender: true,
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const formattedDate = computed(() => {
      return new Date(props.post.created_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    });
    const excerpt = computed(() => {
      const textContent = props.post.content.replace(/<[^>]*>/g, "").replace(/\s+/g, " ");
      return textContent.length > 100 ? textContent.substring(0, 100) + "..." : textContent;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "group bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow" }, _attrs))} data-v-3578cf34>`);
      if (__props.post.image_url) {
        _push(`<div class="relative h-48 overflow-hidden" data-v-3578cf34>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: __props.post.image_url,
          alt: __props.post.title,
          class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
          loading: "lazy",
          sizes: "sm:100vw md:50vw lg:300px",
          format: "webp",
          width: "400",
          height: "240"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="p-4 space-y-2" data-v-3578cf34><h3 class="text-lg font-semibold text-[#09033b] line-clamp-2 leading-tight" data-v-3578cf34>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/resources/${__props.post.id}`,
        class: "hover:text-[#09033b] transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.post.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.post.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h3><div class="flex items-center text-xs text-gray-500 space-x-1" data-v-3578cf34><span data-v-3578cf34>By ${ssrInterpolate(__props.post.author)}</span><span class="w-1 h-1 bg-gray-300 rounded-full" data-v-3578cf34></span><time${ssrRenderAttr("datetime", __props.post.created_at)} data-v-3578cf34>${ssrInterpolate(formattedDate.value)}</time></div><p class="text-gray-600 text-sm line-clamp-2 leading-relaxed" data-v-3578cf34>${ssrInterpolate(excerpt.value)}</p><div data-v-3578cf34>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/resources/${__props.post.id}`,
        class: "inline-flex items-center text-[#09033b] hover:text-orange-500 font-medium text-xs mt-1 transition-colors",
        "aria-label": "Read full article"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Read more <svg class="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-v-3578cf34${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-3578cf34${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Read more "),
              (openBlock(), createBlock("svg", {
                class: "ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                "aria-hidden": "true"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M9 5l7 7-7 7"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></article>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3578cf34"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useBlog();
    useHead({
      title: "Resources - The Covenant Academy",
      meta: [
        { name: "description", content: "Latest articles and updates from The Covenant Academy" },
        { property: "og:title", content: "Resources - The Covenant Academy" },
        { property: "og:description", content: "Explore our latest articles and updates" },
        { name: "theme-color", content: "#09033b" }
      ]
    });
    const posts = ref([]);
    const loading = ref(true);
    const error = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_BlogCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full min-h-screen bg-white p-4 overflow-hidden font-inter" }, _attrs))} data-v-5460ece4><div class="absolute inset-0 opacity-5" data-v-5460ece4><svg width="60" height="60" viewBox="0 0 60 60" class="absolute top-0 left-0 w-full h-full" data-v-5460ece4><defs data-v-5460ece4><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse" data-v-5460ece4><circle cx="30" cy="30" r="1" fill="#09033b" data-v-5460ece4></circle></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" data-v-5460ece4></rect></svg></div><div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12" data-v-5460ece4><div class="mb-12 space-y-4" data-v-5460ece4><div class="flex items-center space-x-3" data-v-5460ece4><div class="w-2 h-2 bg-[#09033b] rounded-full" data-v-5460ece4></div><span class="text-sm font-medium text-gray-600 tracking-wide uppercase" data-v-5460ece4> Latest Updates </span></div><h1 class="text-3xl md:text-4xl font-light text-[#09033b] tracking-tight" data-v-5460ece4> Resources </h1><div class="w-16 h-px bg-[#09033b]" data-v-5460ece4></div></div>`);
      if (unref(loading)) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-5460ece4><!--[-->`);
        ssrRenderList(3, (i) => {
          _push(`<div class="bg-white/80 backdrop-blur-sm p-6 animate-pulse" data-v-5460ece4><div class="h-48 bg-gray-100 mb-4" data-v-5460ece4></div><div class="h-6 bg-gray-100 mb-2 w-3/4" data-v-5460ece4></div><div class="h-4 bg-gray-100 mb-2 w-1/2" data-v-5460ece4></div><div class="h-4 bg-gray-100 w-5/6" data-v-5460ece4></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (unref(error)) {
        _push(`<div class="text-center py-12 space-y-6" data-v-5460ece4><div class="w-16 h-16 mx-auto bg-[#09033b]/10 rounded-full flex items-center justify-center" data-v-5460ece4><svg class="w-8 h-8 text-[#09033b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-5460ece4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-5460ece4></path></svg></div><p class="text-lg text-gray-600" data-v-5460ece4>${ssrInterpolate(unref(error))}</p><button class="inline-flex items-center px-6 py-3 text-sm font-medium text-[#09033b] border border-[#09033b] hover:bg-[#09033b]/5 transition-colors" data-v-5460ece4> Try Again </button></div>`);
      } else if (unref(posts).length === 0) {
        _push(`<div class="text-center py-12 space-y-6" data-v-5460ece4><svg class="mx-auto h-12 w-12 text-[#09033b]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-5460ece4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-5460ece4></path></svg><p class="text-gray-600" data-v-5460ece4>No posts to see.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/resources/create",
          class: "inline-flex items-center px-6 py-3 text-sm font-medium text-[#09033b] border border-[#09033b] hover:bg-[#09033b]/5 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Create First Post `);
            } else {
              return [
                createTextVNode(" Create First Post ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-5460ece4><!--[-->`);
        ssrRenderList(unref(posts), (post) => {
          _push(ssrRenderComponent(_component_BlogCard, {
            key: post.id,
            post
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`<div class="absolute left-4 top-1/2 transform -translate-y-1/2 -rotate-90 hidden xl:block" data-v-5460ece4><span class="text-xs font-medium text-gray-300 tracking-widest uppercase" data-v-5460ece4>Insights • Knowledge</span></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5460ece4"]]);

export { index as default };
//# sourceMappingURL=index-BvFzHjl_.mjs.map
