import { reactive, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { u as useBlog } from './useBlog-DLrcGbre.mjs';

const _sfc_main = {
  __name: "BlogEditor",
  __ssrInlineRender: true,
  props: {
    initialData: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["submit", "cancel", "draft-save"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useBlog();
    const form = reactive({
      title: props.initialData.title || "",
      author: props.initialData.author || "",
      content: props.initialData.content || "",
      image_url: props.initialData.image_url || "",
      status: props.initialData.status || "draft"
    });
    const loading = ref(false);
    const imagePreview = ref(props.initialData.image_url || "");
    ref(null);
    ref(null);
    ref(null);
    const isClient = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-editor" }, _attrs))}><form class="space-y-8"><div class="pb-6 border-b border-gray-200"><h3 class="text-lg font-semibold text-[#333333] mb-2">${ssrInterpolate(props.initialData.id ? "Edit Article Details" : "New Article Details")}</h3><p class="text-sm text-gray-600"> Fill in the basic information about your article </p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-8"><div class="lg:col-span-2"><label for="title" class="block text-sm font-semibold text-[#333333] mb-3"> Article Title * </label><input id="title"${ssrRenderAttr("value", unref(form).title)} type="text" required class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ACBEA3] focus:border-[#ACBEA3] transition-all duration-200 text-[#333333] font-medium" placeholder="Enter a compelling article title"><p class="mt-2 text-xs text-gray-500"> Make it engaging and descriptive - this will be the first thing readers see </p></div><div><label for="author" class="block text-sm font-semibold text-[#333333] mb-3"> Author Name * </label><div class="relative"><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div><input id="author"${ssrRenderAttr("value", unref(form).author)} type="text" required class="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ACBEA3] focus:border-[#ACBEA3] transition-all duration-200 text-[#333333] font-medium" placeholder="Enter author name"></div></div><div><label class="block text-sm font-semibold text-[#333333] mb-3"> Publication Status </label><select class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ACBEA3] focus:border-[#ACBEA3] transition-all duration-200 text-[#333333] font-medium"><option value="draft"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "draft") : ssrLooseEqual(unref(form).status, "draft")) ? " selected" : ""}>Save as Draft</option><option value="published"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "published") : ssrLooseEqual(unref(form).status, "published")) ? " selected" : ""}>Publish Immediately</option></select></div></div><div class="bg-[#f8f9f8] rounded-lg p-6"><label class="block text-sm font-semibold text-[#333333] mb-4"> Featured Image </label><div class="${ssrRenderClass([{ "border-[#ACBEA3] bg-white/50": unref(imagePreview) }, "border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-[#ACBEA3] hover:bg-white/50 transition-all duration-200"])}">`);
      if (unref(imagePreview)) {
        _push(`<div class="mb-4"><img${ssrRenderAttr("src", unref(imagePreview))} alt="Preview" class="max-w-full h-64 object-cover rounded-lg mx-auto shadow-sm"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(imagePreview)) {
        _push(`<div><div class="w-16 h-16 bg-[#ACBEA3]/10 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg></div><p class="text-[#333333] font-medium mb-2">Click to upload or drag and drop</p><p class="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p></div>`);
      } else {
        _push(`<div class="mt-4"><button type="button" class="inline-flex items-center px-4 py-2 bg-[#ACBEA3] text-white text-sm font-medium rounded-lg hover:bg-[#6b7a6a] transition-colors duration-200"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> Change Image </button><button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"> Remove </button></div>`);
      }
      _push(`</div><input type="file" accept="image/*" class="hidden"></div><div class="bg-white border border-gray-200 rounded-lg overflow-hidden"><div class="bg-[#f8f9f8] px-6 py-4 border-b border-gray-200"><label class="block text-sm font-semibold text-[#333333] mb-1"> Article Content * </label><p class="text-xs text-gray-600"> Write your article content using the rich text editor below </p></div><div class="p-6">`);
      if (unref(isClient)) {
        _push(`<div class="min-h-[400px] text-[#333333]"></div>`);
      } else {
        _push(`<div class="min-h-[400px] flex items-center justify-center text-gray-500 bg-gray-50 rounded-lg"><div class="text-center"><div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#ACBEA3] mb-4"></div><p>Loading editor...</p></div></div>`);
      }
      _push(`</div></div><div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-gray-200"><div class="flex items-center space-x-4"><button type="button"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 border border-[#ACBEA3] text-[#ACBEA3] text-sm font-medium rounded-lg hover:bg-[#ACBEA3] hover:text-white transition-all duration-200 disabled:opacity-50"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 12l2 2 4-4"></path></svg> Save Draft </button><button type="button" class="inline-flex items-center px-4 py-2 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"> Cancel </button></div><button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="inline-flex items-center px-8 py-3 bg-[#EB6534] text-white text-base font-medium rounded-lg hover:bg-[#c16a3d] disabled:opacity-50 transition-all duration-200 shadow-sm hover:shadow-md">`);
      if (unref(loading)) {
        _push(`<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(unref(loading) ? "Processing..." : props.initialData.id ? "Update Article" : "Publish Article")}</button></div></form><input type="file" accept="image/*" class="hidden"></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogEditor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "BlogEditor" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=BlogEditor-8pgoBS1k.mjs.map
