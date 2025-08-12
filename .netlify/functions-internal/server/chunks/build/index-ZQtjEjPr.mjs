import { withAsyncContext, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, computed, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { t as tv } from './tv-DftaqRAe.mjs';
import { d as useSupabaseClient, a as useAppConfig } from './server.mjs';
import { _ as _sfc_main$2 } from './Icon-Cu0VSR4e.mjs';
import { _ as _sfc_main$3 } from './Button-CdU8nkXy.mjs';
import { u as useAsyncData } from './asyncData-D0f35ZHT.mjs';
import 'tailwind-variants';
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
import './index-kp2ruu5n.mjs';
import '@iconify/utils/lib/css/icon';
import './NuxtImg-jLe0oRQc.mjs';
import './nuxt-link-BZ9eU4-B.mjs';

const theme = {
  "base": "w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8"
};
const _sfc_main$1 = {
  __name: "UContainer",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.container || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Container.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const supabase = useSupabaseClient();
    const { data: allEvents, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "allEvents",
      async () => {
        const { data, error: error2 } = await supabase.from("events").select("id, title, event_date, description, venue, admission_fee, currency, is_free").order("event_date", { ascending: false });
        if (error2) {
          console.error("Error fetching events:", error2);
          throw error2;
        }
        return data || [];
      },
      {
        default: () => []
      }
    )), __temp = await __temp, __restore(), __temp);
    const isPastEvent = (dateString) => {
      const eventDate = new Date(dateString);
      const today = /* @__PURE__ */ new Date();
      return eventDate < today;
    };
    const formatAdmissionFee = (event) => {
      if (event.is_free) {
        return "Free Event";
      }
      const fee = parseFloat(event.admission_fee);
      if (fee === 0) {
        return "Free Event";
      }
      const formattedFee = fee.toLocaleString("en-NG", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return `${event.currency || "₦"}${formattedFee}`;
    };
    const formatDateShort = (dateString) => {
      const options = { month: "short", day: "numeric", year: "numeric" };
      return new Date(dateString).toLocaleDateString("en-NG", options);
    };
    const formatTime = (dateString) => {
      const options = { hour: "2-digit", minute: "2-digit" };
      return new Date(dateString).toLocaleDateString("en-NG", options);
    };
    const getDaysUntil = (dateString) => {
      const eventDate = new Date(dateString);
      const today = /* @__PURE__ */ new Date();
      const diffTime = eventDate - today;
      const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
      return diffDays;
    };
    const getEventStatusText = (dateString) => {
      const days = getDaysUntil(dateString);
      if (days < 0) {
        const pastDays = Math.abs(days);
        if (pastDays === 1) return "Yesterday";
        if (pastDays < 7) return `${pastDays} days ago`;
        if (pastDays < 30) return `${Math.floor(pastDays / 7)} weeks ago`;
        return `${Math.floor(pastDays / 30)} months ago`;
      }
      if (days === 0) return "Today";
      if (days === 1) return "Tomorrow";
      if (days < 7) return `${days} days`;
      if (days < 30) return `${Math.floor(days / 7)} weeks`;
      return `${Math.floor(days / 30)} months`;
    };
    const getEventStatusClass = (dateString) => {
      const days = getDaysUntil(dateString);
      if (days < 0) return "bg-gray-100 text-gray-600";
      if (days <= 1) return "bg-[#EB6534]/10 text-[#EB6534]";
      if (days <= 7) return "bg-yellow-100 text-yellow-800";
      return "bg-[#5d6b56]/10 text-[#5d6b56]";
    };
    const getEventStatusIcon = (dateString) => {
      const days = getDaysUntil(dateString);
      if (days < 0) return "i-heroicons-clock";
      if (days <= 1) return "i-heroicons-exclamation-circle";
      return "i-heroicons-clock";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$1;
      const _component_UIcon = _sfc_main$2;
      const _component_UButton = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#f4f5f3]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "py-16" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center mb-16"${_scopeId}><div class="inline-flex items-center justify-center w-16 h-16 bg-[#5d6b56] rounded-2xl mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-calendar-days",
              class: "w-8 h-8 text-white"
            }, null, _parent2, _scopeId));
            _push2(`</div><h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4"${_scopeId}> All Events </h1><p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"${_scopeId}> Explore all our educational programmes designed to enhance your learning journey. </p></div>`);
            if (unref(pending)) {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"${_scopeId}><!--[-->`);
              ssrRenderList(6, (i) => {
                _push2(`<div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"${_scopeId}><div class="animate-pulse"${_scopeId}><div class="h-6 bg-gray-200 rounded mb-4"${_scopeId}></div><div class="space-y-3"${_scopeId}><div class="h-4 bg-gray-200 rounded w-3/4"${_scopeId}></div><div class="h-4 bg-gray-200 rounded w-1/2"${_scopeId}></div><div class="h-20 bg-gray-200 rounded"${_scopeId}></div></div><div class="mt-6 h-10 bg-gray-200 rounded-lg"${_scopeId}></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else if (unref(error)) {
              _push2(`<div class="text-center py-16"${_scopeId}><div class="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-exclamation-triangle",
                class: "w-8 h-8 text-red-500"
              }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="text-xl font-semibold text-gray-900 mb-3"${_scopeId}>Unable to Load Events</h3><p class="text-gray-600 mb-6 max-w-md mx-auto"${_scopeId}> We&#39;re having trouble loading the events right now. Please check your connection and try again. </p>`);
              _push2(ssrRenderComponent(_component_UButton, {
                onClick: ($event) => unref(refresh)(),
                color: "red",
                variant: "outline",
                class: "border-red-200 text-red-600 hover:bg-red-50"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Try Again `);
                  } else {
                    return [
                      createTextVNode(" Try Again ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (!unref(allEvents) || unref(allEvents).length === 0) {
              _push2(`<div class="text-center py-16"${_scopeId}><div class="bg-[#5d6b56]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-calendar-x-mark",
                class: "w-10 h-10 text-[#5d6b56]"
              }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="text-2xl font-semibold text-gray-900 mb-3"${_scopeId}>No Events Available</h3><p class="text-gray-600 mb-8 max-w-md mx-auto"${_scopeId}> There are no events available at the moment. Check back soon for exciting new programmes! </p>`);
              _push2(ssrRenderComponent(_component_UButton, {
                to: "/contact",
                class: "bg-[#5d6b56] hover:bg-[#9BAD94] text-white font-medium px-8 py-3 rounded-xl"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Get Notified `);
                  } else {
                    return [
                      createTextVNode(" Get Notified ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"${_scopeId}><!--[-->`);
              ssrRenderList(unref(allEvents), (event) => {
                _push2(`<div class="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-[#5d6b56]/30 transition-all duration-300 transform hover:-translate-y-1"${_scopeId}><div class="p-6 pb-4"${_scopeId}><div class="flex items-start justify-between mb-4"${_scopeId}><div class="bg-[#EB6534]/10 p-2 rounded-lg"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "i-heroicons-academic-cap",
                  class: "w-5 h-5 text-[#EB6534]"
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="flex flex-col items-end space-y-1"${_scopeId}><div class="bg-[#5d6b56]/10 px-3 py-1 rounded-full"${_scopeId}><span class="text-xs font-medium text-[#5d6b56] uppercase tracking-wide"${_scopeId}>Event</span></div>`);
                if (isPastEvent(event.event_date)) {
                  _push2(`<div class="bg-gray-100 px-3 py-1 rounded-full"${_scopeId}><span class="text-xs font-medium text-gray-600 uppercase tracking-wide"${_scopeId}>Past</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><h2 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#5d6b56] transition-colors duration-200"${_scopeId}>${ssrInterpolate(event.title)}</h2></div><div class="px-6 pb-6 space-y-4"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><div class="bg-[#5d6b56]/10 p-2 rounded-lg"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "i-heroicons-calendar-days",
                  class: "w-4 h-4 text-[#5d6b56]"
                }, null, _parent2, _scopeId));
                _push2(`</div><div${_scopeId}><div class="text-sm font-semibold text-gray-900"${_scopeId}>${ssrInterpolate(formatDateShort(event.event_date))}</div><div class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(formatTime(event.event_date))}</div></div></div>`);
                if (event.venue) {
                  _push2(`<div class="flex items-center space-x-3"${_scopeId}><div class="bg-gray-100 p-2 rounded-lg"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-map-pin",
                    class: "w-4 h-4 text-gray-500"
                  }, null, _parent2, _scopeId));
                  _push2(`</div><div${_scopeId}><div class="text-sm font-medium text-gray-700"${_scopeId}>${ssrInterpolate(event.venue)}</div></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="flex items-center space-x-3"${_scopeId}><div class="bg-green-100 p-2 rounded-lg"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "i-heroicons-banknotes",
                  class: "w-4 h-4 text-green-600"
                }, null, _parent2, _scopeId));
                _push2(`</div><div${_scopeId}><div class="${ssrRenderClass([event.is_free ? "text-green-600" : "text-gray-900", "text-sm font-semibold"])}"${_scopeId}>${ssrInterpolate(formatAdmissionFee(event))}</div>`);
                if (!event.is_free) {
                  _push2(`<div class="text-xs text-gray-500"${_scopeId}> Admission Fee </div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><div class="pt-2"${_scopeId}><p class="text-gray-600 text-sm leading-relaxed line-clamp-3"${_scopeId}>${ssrInterpolate(event.description || "Join us for this exciting educational programme designed to enhance your learning experience.")}</p></div><div class="pt-2"${_scopeId}><div class="${ssrRenderClass([getEventStatusClass(event.event_date), "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"])}"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: getEventStatusIcon(event.event_date),
                  class: "w-3 h-3 mr-1"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(getEventStatusText(event.event_date))}</div></div></div><div class="px-6 pb-6"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  to: `/events/${event.id}`,
                  block: "",
                  size: "lg",
                  class: isPastEvent(event.event_date) ? "bg-gray-400 hover:bg-gray-500 text-white font-medium py-3 rounded-xl transition-all duration-200" : "bg-[#5d6b56] hover:bg-[#9BAD94] text-white font-medium py-3 rounded-xl transition-all duration-200 group-hover:shadow-lg"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="flex items-center justify-center"${_scopeId2}>${ssrInterpolate(isPastEvent(event.event_date) ? "View Details" : "View Details & Register")} `);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "i-heroicons-arrow-right",
                        class: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                      }, null, _parent3, _scopeId2));
                      _push3(`</span>`);
                    } else {
                      return [
                        createVNode("span", { class: "flex items-center justify-center" }, [
                          createTextVNode(toDisplayString(isPastEvent(event.event_date) ? "View Details" : "View Details & Register") + " ", 1),
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-arrow-right",
                            class: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                          })
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div>`);
            }
          } else {
            return [
              createVNode("div", { class: "text-center mb-16" }, [
                createVNode("div", { class: "inline-flex items-center justify-center w-16 h-16 bg-[#5d6b56] rounded-2xl mb-6" }, [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-calendar-days",
                    class: "w-8 h-8 text-white"
                  })
                ]),
                createVNode("h1", { class: "text-4xl md:text-5xl font-bold text-gray-900 mb-4" }, " All Events "),
                createVNode("p", { class: "text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" }, " Explore all our educational programmes designed to enhance your learning journey. ")
              ]),
              unref(pending) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              }, [
                (openBlock(), createBlock(Fragment, null, renderList(6, (i) => {
                  return createVNode("div", {
                    key: i,
                    class: "bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
                  }, [
                    createVNode("div", { class: "animate-pulse" }, [
                      createVNode("div", { class: "h-6 bg-gray-200 rounded mb-4" }),
                      createVNode("div", { class: "space-y-3" }, [
                        createVNode("div", { class: "h-4 bg-gray-200 rounded w-3/4" }),
                        createVNode("div", { class: "h-4 bg-gray-200 rounded w-1/2" }),
                        createVNode("div", { class: "h-20 bg-gray-200 rounded" })
                      ]),
                      createVNode("div", { class: "mt-6 h-10 bg-gray-200 rounded-lg" })
                    ])
                  ]);
                }), 64))
              ])) : unref(error) ? (openBlock(), createBlock("div", {
                key: 1,
                class: "text-center py-16"
              }, [
                createVNode("div", { class: "bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" }, [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-exclamation-triangle",
                    class: "w-8 h-8 text-red-500"
                  })
                ]),
                createVNode("h3", { class: "text-xl font-semibold text-gray-900 mb-3" }, "Unable to Load Events"),
                createVNode("p", { class: "text-gray-600 mb-6 max-w-md mx-auto" }, " We're having trouble loading the events right now. Please check your connection and try again. "),
                createVNode(_component_UButton, {
                  onClick: ($event) => unref(refresh)(),
                  color: "red",
                  variant: "outline",
                  class: "border-red-200 text-red-600 hover:bg-red-50"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Try Again ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])) : !unref(allEvents) || unref(allEvents).length === 0 ? (openBlock(), createBlock("div", {
                key: 2,
                class: "text-center py-16"
              }, [
                createVNode("div", { class: "bg-[#5d6b56]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" }, [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-calendar-x-mark",
                    class: "w-10 h-10 text-[#5d6b56]"
                  })
                ]),
                createVNode("h3", { class: "text-2xl font-semibold text-gray-900 mb-3" }, "No Events Available"),
                createVNode("p", { class: "text-gray-600 mb-8 max-w-md mx-auto" }, " There are no events available at the moment. Check back soon for exciting new programmes! "),
                createVNode(_component_UButton, {
                  to: "/contact",
                  class: "bg-[#5d6b56] hover:bg-[#9BAD94] text-white font-medium px-8 py-3 rounded-xl"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Get Notified ")
                  ]),
                  _: 1
                })
              ])) : (openBlock(), createBlock("div", {
                key: 3,
                class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(allEvents), (event) => {
                  return openBlock(), createBlock("div", {
                    key: event.id,
                    class: "group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-[#5d6b56]/30 transition-all duration-300 transform hover:-translate-y-1"
                  }, [
                    createVNode("div", { class: "p-6 pb-4" }, [
                      createVNode("div", { class: "flex items-start justify-between mb-4" }, [
                        createVNode("div", { class: "bg-[#EB6534]/10 p-2 rounded-lg" }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-academic-cap",
                            class: "w-5 h-5 text-[#EB6534]"
                          })
                        ]),
                        createVNode("div", { class: "flex flex-col items-end space-y-1" }, [
                          createVNode("div", { class: "bg-[#5d6b56]/10 px-3 py-1 rounded-full" }, [
                            createVNode("span", { class: "text-xs font-medium text-[#5d6b56] uppercase tracking-wide" }, "Event")
                          ]),
                          isPastEvent(event.event_date) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "bg-gray-100 px-3 py-1 rounded-full"
                          }, [
                            createVNode("span", { class: "text-xs font-medium text-gray-600 uppercase tracking-wide" }, "Past")
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("h2", { class: "text-xl font-bold text-gray-900 mb-2 group-hover:text-[#5d6b56] transition-colors duration-200" }, toDisplayString(event.title), 1)
                    ]),
                    createVNode("div", { class: "px-6 pb-6 space-y-4" }, [
                      createVNode("div", { class: "flex items-center space-x-3" }, [
                        createVNode("div", { class: "bg-[#5d6b56]/10 p-2 rounded-lg" }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-calendar-days",
                            class: "w-4 h-4 text-[#5d6b56]"
                          })
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-sm font-semibold text-gray-900" }, toDisplayString(formatDateShort(event.event_date)), 1),
                          createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(formatTime(event.event_date)), 1)
                        ])
                      ]),
                      event.venue ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center space-x-3"
                      }, [
                        createVNode("div", { class: "bg-gray-100 p-2 rounded-lg" }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-map-pin",
                            class: "w-4 h-4 text-gray-500"
                          })
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-sm font-medium text-gray-700" }, toDisplayString(event.venue), 1)
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "flex items-center space-x-3" }, [
                        createVNode("div", { class: "bg-green-100 p-2 rounded-lg" }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-banknotes",
                            class: "w-4 h-4 text-green-600"
                          })
                        ]),
                        createVNode("div", null, [
                          createVNode("div", {
                            class: ["text-sm font-semibold", event.is_free ? "text-green-600" : "text-gray-900"]
                          }, toDisplayString(formatAdmissionFee(event)), 3),
                          !event.is_free ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-xs text-gray-500"
                          }, " Admission Fee ")) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "pt-2" }, [
                        createVNode("p", { class: "text-gray-600 text-sm leading-relaxed line-clamp-3" }, toDisplayString(event.description || "Join us for this exciting educational programme designed to enhance your learning experience."), 1)
                      ]),
                      createVNode("div", { class: "pt-2" }, [
                        createVNode("div", {
                          class: ["inline-flex items-center px-3 py-1 rounded-full text-xs font-medium", getEventStatusClass(event.event_date)]
                        }, [
                          createVNode(_component_UIcon, {
                            name: getEventStatusIcon(event.event_date),
                            class: "w-3 h-3 mr-1"
                          }, null, 8, ["name"]),
                          createTextVNode(" " + toDisplayString(getEventStatusText(event.event_date)), 1)
                        ], 2)
                      ])
                    ]),
                    createVNode("div", { class: "px-6 pb-6" }, [
                      createVNode(_component_UButton, {
                        to: `/events/${event.id}`,
                        block: "",
                        size: "lg",
                        class: isPastEvent(event.event_date) ? "bg-gray-400 hover:bg-gray-500 text-white font-medium py-3 rounded-xl transition-all duration-200" : "bg-[#5d6b56] hover:bg-[#9BAD94] text-white font-medium py-3 rounded-xl transition-all duration-200 group-hover:shadow-lg"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "flex items-center justify-center" }, [
                            createTextVNode(toDisplayString(isPastEvent(event.event_date) ? "View Details" : "View Details & Register") + " ", 1),
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-arrow-right",
                              class: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                            })
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to", "class"])
                    ])
                  ]);
                }), 128))
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-ZQtjEjPr.mjs.map
