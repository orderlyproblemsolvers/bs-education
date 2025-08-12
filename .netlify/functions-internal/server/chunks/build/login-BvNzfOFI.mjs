import { watchEffect, reactive, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { c as useSupabaseUser, n as navigateTo, b as useAuth } from './server.mjs';
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
  __name: "AdminLoginForm",
  __ssrInlineRender: true,
  setup(__props) {
    useAuth();
    const form = reactive({
      email: "",
      password: ""
    });
    const loading = ref(false);
    const error = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center bg-[var(--color-bg)] px-[var(--space-lg)]" }, _attrs))}><div class="w-full max-w-md bg-white rounded-[var(--radius-lg)] shadow-lg p-[var(--space-xl)]"><div class="text-center mb-[var(--space-lg)]"><h1 class="text-[var(--font-xl)] font-bold text-[var(--color-text-primary)]"> Admin Login </h1><p class="text-[var(--font-sm)] text-[var(--color-text-secondary)] mt-1"> Sign in to manage your platform </p></div><form class="space-y-[var(--space-md)]"><div><label for="email" class="block text-[var(--font-sm)] font-medium text-[var(--color-text-secondary)] mb-[var(--space-xs)]"> Email Address </label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" placeholder="you@example.com" required class="w-full border border-[var(--color-border)] rounded-[var(--radius-md)] px-[var(--space-sm)] py-[var(--space-sm)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"></div><div><label for="password" class="block text-[var(--font-sm)] font-medium text-[var(--color-text-secondary)] mb-[var(--space-xs)]"> Password </label><input id="password"${ssrRenderAttr("value", unref(form).password)} type="password" placeholder="••••••••" required class="w-full border border-[var(--color-border)] rounded-[var(--radius-md)] px-[var(--space-sm)] py-[var(--space-sm)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"></div>`);
      if (unref(error)) {
        _push(`<div class="text-[var(--font-sm)] text-red-600 text-center">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="w-full bg-[var(--color-primary)] text-white font-medium py-[var(--space-sm)] rounded-[var(--radius-md)] hover:bg-[var(--color-primary-dark)] transition-colors duration-200 disabled:opacity-50">${ssrInterpolate(unref(loading) ? "Signing in..." : "Sign in")}</button></form></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdminLoginForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const user = useSupabaseUser();
    watchEffect(() => {
      if (user.value) {
        navigateTo("/admin");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminLoginForm = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AdminLoginForm, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-BvNzfOFI.mjs.map
