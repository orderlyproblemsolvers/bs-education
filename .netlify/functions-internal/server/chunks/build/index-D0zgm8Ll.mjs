import { _ as __nuxt_component_0 } from './nuxt-link-BZ9eU4-B.mjs';
import { _ as _sfc_main$2 } from './Icon-Cu0VSR4e.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, createVNode, unref, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
import './index-kp2ruu5n.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-D0f35ZHT.mjs';
import 'reka-ui';
import 'vue-router';
import '@supabase/ssr';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$1 = {
  __name: "BlogAdminCard",
  __ssrInlineRender: true,
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const getExcerpt = (content) => {
      const textContent = content.replace(/<[^>]*>/g, "");
      return textContent.length > 150 ? textContent.substring(0, 150) + "..." : textContent;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow" }, _attrs))} data-v-4a4ba9ac>`);
      if (__props.post.image_url) {
        _push(`<div class="h-48 overflow-hidden" data-v-4a4ba9ac><img${ssrRenderAttr("src", __props.post.image_url)}${ssrRenderAttr("alt", __props.post.title)} class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" data-v-4a4ba9ac></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="p-6" data-v-4a4ba9ac><h3 class="text-xl font-semibold text-gray-900 mb-2 line-clamp-2" data-v-4a4ba9ac>${ssrInterpolate(__props.post.title)}</h3><div class="flex items-center text-sm text-gray-600 mb-3" data-v-4a4ba9ac><span data-v-4a4ba9ac>By ${ssrInterpolate(__props.post.author)}</span><span class="mx-2" data-v-4a4ba9ac>•</span><span data-v-4a4ba9ac>${ssrInterpolate(formatDate(__props.post.created_at))}</span></div><div class="text-gray-700 mb-4 line-clamp-3" data-v-4a4ba9ac>${getExcerpt(__props.post.content) ?? ""}</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/admin/resources/${__props.post.id}`,
        class: "inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Read More <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-4a4ba9ac${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-4a4ba9ac${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Read More "),
              (openBlock(), createBlock("svg", {
                class: "ml-2 w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
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
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogAdminCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4a4ba9ac"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { getAllBlogPosts } = useBlog();
    useHead({
      title: "Resources - Admin Dashboard",
      meta: [
        {
          name: "description",
          content: "Manage educational resources and blog posts for The Covenant Academy"
        },
        {
          property: "og:title",
          content: "Resources Management - Admin Dashboard"
        },
        {
          property: "og:description",
          content: "Administration interface for managing educational resources at The Covenant Academy"
        },
        {
          name: "robots",
          content: "noindex, nofollow"
        }
      ]
    });
    const posts = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const publishedCount = computed(() => {
      return posts.value.filter((post) => post.status === "published").length;
    });
    const draftCount = computed(() => {
      return posts.value.filter((post) => post.status === "draft").length;
    });
    const fetchPosts = async () => {
      try {
        loading.value = true;
        error.value = null;
        posts.value = await getAllBlogPosts();
      } catch (err) {
        console.error("Error fetching posts:", err);
        error.value = "Failed to load resources. Please try again.";
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UIcon = _sfc_main$2;
      const _component_BlogAdminCard = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full min-h-screen bg-[#f4f5f3] p-4 overflow-hidden font-inter" }, _attrs))} data-v-317f987c><div class="absolute inset-0 opacity-5" data-v-317f987c><svg width="60" height="60" viewBox="0 0 60 60" class="absolute top-0 left-0 w-full h-full" data-v-317f987c><defs data-v-317f987c><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse" data-v-317f987c><circle cx="30" cy="30" r="1" fill="#ACBEA3" data-v-317f987c></circle></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" data-v-317f987c></rect></svg></div><div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen py-8" data-v-317f987c><div class="bg-white rounded-xl shadow border border-gray-200 mb-8 p-8" data-v-317f987c><div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6" data-v-317f987c><div data-v-317f987c><div class="flex items-center space-x-3 mb-4" data-v-317f987c><div class="w-3 h-3 bg-[#EB6534] rounded-full" data-v-317f987c></div><span class="text-xs font-semibold text-gray-500 tracking-wide uppercase" data-v-317f987c> Admin Dashboard </span></div><h1 class="text-3xl md:text-4xl font-bold text-[#333333] tracking-tight mb-2" data-v-317f987c> Resources </h1><p class="text-gray-600 font-medium" data-v-317f987c> Explore our latest articles and updates </p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/resources/create",
        class: "group inline-flex items-center justify-center px-6 py-3 bg-[#EB6534] text-white text-sm font-medium rounded-lg hover:bg-[#c16a3d] transition-all duration-200 shadow-sm hover:shadow-md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Create New `);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-plus",
              class: "ml-2 w-4 h-4 group-hover:rotate-90 transition-transform duration-200"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Create New "),
              createVNode(_component_UIcon, {
                name: "i-heroicons-plus",
                class: "ml-2 w-4 h-4 group-hover:rotate-90 transition-transform duration-200"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div data-v-317f987c>`);
      if (unref(loading)) {
        _push(`<div class="flex justify-center py-12" data-v-317f987c><div class="flex flex-col items-center space-y-4" data-v-317f987c><div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ACBEA3]" data-v-317f987c></div><p class="text-gray-600 font-medium" data-v-317f987c>Loading resources...</p></div></div>`);
      } else if (unref(error)) {
        _push(`<div class="bg-white rounded-xl shadow border border-gray-200 p-8 text-center" data-v-317f987c><div class="flex justify-center mb-6" data-v-317f987c><div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center" data-v-317f987c>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-exclamation-circle",
          class: "w-8 h-8 text-red-600"
        }, null, _parent));
        _push(`</div></div><h3 class="text-xl font-semibold text-[#333333] mb-3" data-v-317f987c> Something went wrong </h3><p class="text-gray-600 mb-8 max-w-md mx-auto" data-v-317f987c>${ssrInterpolate(unref(error))}</p><button class="group inline-flex items-center justify-center px-6 py-3 bg-[#ACBEA3] text-white text-sm font-medium rounded-lg hover:bg-[#6b7a6a] transition-all duration-200 shadow-sm hover:shadow-md" data-v-317f987c> Try Again `);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-arrow-path",
          class: "ml-2 w-4 h-4 group-hover:rotate-180 transition-transform duration-200"
        }, null, _parent));
        _push(`</button></div>`);
      } else if (unref(posts).length === 0) {
        _push(`<div class="bg-white rounded-xl shadow border border-gray-200 p-12 text-center" data-v-317f987c><div class="flex justify-center mb-8" data-v-317f987c><div class="w-20 h-20 bg-[#ACBEA3]/10 rounded-full flex items-center justify-center" data-v-317f987c>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-document-text",
          class: "w-10 h-10 text-[#ACBEA3]"
        }, null, _parent));
        _push(`</div></div><h3 class="text-2xl font-semibold text-[#333333] mb-4" data-v-317f987c> No resources yet </h3><p class="text-gray-600 mb-10 max-w-md mx-auto font-medium" data-v-317f987c> Get started by creating your first blog post to share with the community. </p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin/resources/create",
          class: "group inline-flex items-center justify-center px-8 py-4 bg-[#EB6534] text-white text-base font-medium rounded-lg hover:bg-[#c16a3d] transition-all duration-200 shadow-sm hover:shadow-md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Create First Post `);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-arrow-right",
                class: "ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(" Create First Post "),
                createVNode(_component_UIcon, {
                  name: "i-heroicons-arrow-right",
                  class: "ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div data-v-317f987c><div class="bg-white rounded-xl shadow border border-gray-200 p-6 mb-8" data-v-317f987c><div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-317f987c><div class="text-center" data-v-317f987c><div class="w-12 h-12 bg-[#ACBEA3]/10 rounded-lg flex items-center justify-center mx-auto mb-3" data-v-317f987c>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-document-text",
          class: "w-6 h-6 text-[#ACBEA3]"
        }, null, _parent));
        _push(`</div><div class="text-2xl font-bold text-[#333333]" data-v-317f987c>${ssrInterpolate(unref(posts).length)}</div><div class="text-sm text-gray-600 font-medium" data-v-317f987c> Total Articles </div></div><div class="text-center" data-v-317f987c><div class="w-12 h-12 bg-[#EB6534]/10 rounded-lg flex items-center justify-center mx-auto mb-3" data-v-317f987c>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-eye",
          class: "w-6 h-6 text-[#EB6534]"
        }, null, _parent));
        _push(`</div><div class="text-2xl font-bold text-[#333333]" data-v-317f987c>${ssrInterpolate(unref(publishedCount))}</div><div class="text-sm text-gray-600 font-medium" data-v-317f987c>Published</div></div><div class="text-center" data-v-317f987c><div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3" data-v-317f987c>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-clock",
          class: "w-6 h-6 text-gray-600"
        }, null, _parent));
        _push(`</div><div class="text-2xl font-bold text-[#333333]" data-v-317f987c>${ssrInterpolate(unref(draftCount))}</div><div class="text-sm text-gray-600 font-medium" data-v-317f987c>Drafts</div></div></div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-317f987c><!--[-->`);
        ssrRenderList(unref(posts), (post) => {
          _push(ssrRenderComponent(_component_BlogAdminCard, {
            key: post.id,
            post,
            onUpdated: fetchPosts
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div>`);
      if (unref(posts).length > 0) {
        _push(`<div class="mt-12 bg-white rounded-xl shadow border border-gray-200 p-8" data-v-317f987c><h3 class="text-lg font-semibold text-[#333333] mb-6" data-v-317f987c>Quick Actions</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-v-317f987c><button class="group flex items-center p-4 rounded-lg border border-gray-200 hover:border-[#ACBEA3] hover:bg-[#ACBEA3]/5 transition-all duration-200" data-v-317f987c><div class="w-10 h-10 bg-[#ACBEA3]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#ACBEA3]/20" data-v-317f987c>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-plus",
          class: "w-5 h-5 text-[#ACBEA3]"
        }, null, _parent));
        _push(`</div><div class="text-left" data-v-317f987c><div class="font-medium text-[#333333]" data-v-317f987c>New Article</div><div class="text-sm text-gray-600" data-v-317f987c>Create content</div></div></button><button class="group flex items-center p-4 rounded-lg border border-gray-200 hover:border-[#EB6534] hover:bg-[#EB6534]/5 transition-all duration-200" data-v-317f987c><div class="w-10 h-10 bg-[#EB6534]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#EB6534]/20" data-v-317f987c>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-chart-bar",
          class: "w-5 h-5 text-[#EB6534]"
        }, null, _parent));
        _push(`</div><div class="text-left" data-v-317f987c><div class="font-medium text-[#333333]" data-v-317f987c>Analytics</div><div class="text-sm text-gray-600" data-v-317f987c>View insights</div></div></button><button class="group flex items-center p-4 rounded-lg border border-gray-200 hover:border-[#6b7a6a] hover:bg-[#6b7a6a]/5 transition-all duration-200" data-v-317f987c><div class="w-10 h-10 bg-[#6b7a6a]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#6b7a6a]/20" data-v-317f987c>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-cog-6-tooth",
          class: "w-5 h-5 text-[#6b7a6a]"
        }, null, _parent));
        _push(`</div><div class="text-left" data-v-317f987c><div class="font-medium text-[#333333]" data-v-317f987c>Settings</div><div class="text-sm text-gray-600" data-v-317f987c>Manage blog</div></div></button><button class="group flex items-center p-4 rounded-lg border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200" data-v-317f987c><div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gray-200" data-v-317f987c>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-archive-box",
          class: "w-5 h-5 text-gray-600"
        }, null, _parent));
        _push(`</div><div class="text-left" data-v-317f987c><div class="font-medium text-[#333333]" data-v-317f987c>Archive</div><div class="text-sm text-gray-600" data-v-317f987c>Old posts</div></div></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/resources/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-317f987c"]]);

export { index as default };
//# sourceMappingURL=index-D0zgm8Ll.mjs.map
