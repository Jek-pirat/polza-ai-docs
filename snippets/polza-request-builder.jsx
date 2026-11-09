var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// builder-react-esm:react
var react_exports = {};
__export(react_exports, {
  default: () => react_default
});
import * as React24 from "react";
import * as react_star from "react";
var react_default;
var init_react = __esm({
  "builder-react-esm:react"() {
    __reExport(react_exports, react_star);
    react_default = React24;
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    (function() {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React82.startTransition || (didWarnOld18Alpha = true, console.error(
          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
        ));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot();
          objectIs(value, cachedValue) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), didWarnUncachedGetSnapshot = true);
        }
        cachedValue = useState26({
          inst: { value, getSnapshot }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect3(
          function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          },
          [subscribe, value, getSnapshot]
        );
        useEffect17(
          function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            return subscribe(function() {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            });
          },
          [subscribe]
        );
        useDebugValue2(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error2) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React82 = (init_react(), __toCommonJS(react_exports)), objectIs = "function" === typeof Object.is ? Object.is : is, useState26 = React82.useState, useEffect17 = React82.useEffect, useLayoutEffect3 = React82.useLayoutEffect, useDebugValue2 = React82.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
      exports.useSyncExternalStore = void 0 !== React82.useSyncExternalStore ? React82.useSyncExternalStore : shim;
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    (function() {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React82 = (init_react(), __toCommonJS(react_exports)), shim = require_shim(), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore2 = shim.useSyncExternalStore, useRef34 = React82.useRef, useEffect17 = React82.useEffect, useMemo20 = React82.useMemo, useDebugValue2 = React82.useDebugValue;
      exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef34(null);
        if (null === instRef.current) {
          var inst = { hasValue: false, value: null };
          instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo20(
          function() {
            function memoizedSelector(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual && inst.hasValue) {
                  var currentSelection = inst.value;
                  if (isEqual(currentSelection, nextSnapshot))
                    return memoizedSelection = currentSelection;
                }
                return memoizedSelection = nextSnapshot;
              }
              currentSelection = memoizedSelection;
              if (objectIs(memoizedSnapshot, nextSnapshot))
                return currentSelection;
              var nextSelection = selector(nextSnapshot);
              if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
                return memoizedSnapshot = nextSnapshot, currentSelection;
              memoizedSnapshot = nextSnapshot;
              return memoizedSelection = nextSelection;
            }
            var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
              function() {
                return memoizedSelector(getSnapshot());
              },
              null === maybeGetServerSnapshot ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
              }
            ];
          },
          [getSnapshot, getServerSnapshot, selector, isEqual]
        );
        var value = useSyncExternalStore2(subscribe, instRef[0], instRef[1]);
        useEffect17(
          function() {
            inst.hasValue = true;
            inst.value = value;
          },
          [value]
        );
        useDebugValue2(value);
        return value;
      };
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// src/ui/MintlifyBuilder.tsx
import { useEffect as useEffect16, useState as useState25 } from "react";
import clsx from "clsx";

// src/ui/RequestBuilder.tsx
import { memo as memo4, useEffect as useEffect15, useId as useId3, useMemo as useMemo19, useRef as useRef33, useState as useState24 } from "react";

// src/core/types.ts
var ConfigError = class extends Error {
  constructor(code, field, message) {
    super(message);
    this.code = code;
    this.field = field;
    this.name = "ConfigError";
  }
  code;
  field;
};

// src/core/json.ts
function safeJson(value) {
  let nodes = 0;
  const seen = /* @__PURE__ */ new Set();
  function visit(item, depth, path) {
    if (++nodes > 3e4 || depth > 32) throw new ConfigError("limit", path, "JSON is too large or too deep");
    if (typeof item === "string" && item.length > 1e6) throw new ConfigError("limit", path, "Text exceeds 1 MB");
    if (item === null || typeof item === "boolean" || typeof item === "string") return item;
    if (typeof item === "number" && Number.isFinite(item)) return item;
    if (typeof item !== "object" || item === null) throw new ConfigError("json", path, "Expected a finite JSON value");
    if (seen.has(item)) throw new ConfigError("cycle", path, "Cyclic JSON is not supported");
    const proto = Object.getPrototypeOf(item);
    if (!Array.isArray(item) && proto !== Object.prototype && proto !== null) throw new ConfigError("prototype", path, "Only plain JSON objects are supported");
    seen.add(item);
    const out = Array.isArray(item) ? [] : {};
    for (const key of Reflect.ownKeys(item)) {
      if (Array.isArray(item) && key === "length") continue;
      if (typeof key !== "string" || ["__proto__", "prototype", "constructor"].includes(key)) throw new ConfigError("key", path, "Unsafe JSON key");
      const descriptor = Object.getOwnPropertyDescriptor(item, key);
      if (!("value" in descriptor) || !descriptor.enumerable) throw new ConfigError("accessor", path, "JSON accessors are not allowed");
      if (Array.isArray(out)) {
        if (String(out.length) !== key) throw new ConfigError("array", path, "Expected a dense JSON array");
        out.push(visit(descriptor.value, depth + 1, `${path}.${key}`));
      } else out[key] = visit(descriptor.value, depth + 1, `${path}.${key}`);
    }
    if (Array.isArray(item) && out.length !== item.length) throw new ConfigError("array", path, "Expected a dense JSON array");
    seen.delete(item);
    return out;
  }
  const result = visit(value, 0, "$");
  if (new TextEncoder().encode(JSON.stringify(result)).length > 1e6) throw new ConfigError("limit", "$", "JSON exceeds 1 MB");
  return result;
}
function object(value, field) {
  if (value === null || Array.isArray(value) || typeof value !== "object") throw new ConfigError("type", field, "Expected an object");
  return value;
}
function keysOnly(value, allowed, field) {
  for (const key of Object.keys(value)) if (!allowed.includes(key)) throw new ConfigError("unsupported", `${field}.${key}`, "Field is not supported by this local profile");
}
function freezeJson(value) {
  if (value && typeof value === "object") {
    for (const item of Object.values(value)) freezeJson(item);
    Object.freeze(value);
  }
  return value;
}

// src/core/routing.ts
var providerKeys = ["order", "only", "ignore", "sort", "allow_fallbacks", "require_parameters", "data_residency", "max_price"];
var priceKeys = ["prompt", "completion", "image", "audio", "request", "video_per_second", "stt_per_minute", "tts_per_million_characters"];
function validateProvider(input, slugs) {
  const p = object(safeJson(input), "provider");
  keysOnly(p, providerKeys, "provider");
  for (const key of ["order", "only", "ignore"]) {
    const list = p[key];
    if (list === void 0) continue;
    if (!Array.isArray(list) || !list.length || list.length > 100 || list.some((v) => typeof v !== "string" || !slugs.includes(v))) throw new ConfigError("provider", `provider.${key}`, "Expected known provider slugs from this model");
    if (new Set(list).size !== list.length) throw new ConfigError("duplicate", `provider.${key}`, "Duplicate providers");
  }
  for (const key of ["allow_fallbacks", "require_parameters"]) if (p[key] !== void 0 && typeof p[key] !== "boolean") throw new ConfigError("type", `provider.${key}`, "Expected a boolean");
  if (p.sort !== void 0 && !["price", "latency", "throughput"].includes(String(p.sort))) throw new ConfigError("enum", "provider.sort", "Unsupported sort");
  if (p.data_residency !== void 0 && p.data_residency !== "ru") throw new ConfigError("enum", "provider.data_residency", "Only ru is documented");
  if (p.max_price !== void 0) {
    const limits = object(p.max_price, "provider.max_price");
    keysOnly(limits, priceKeys, "provider.max_price");
    for (const [key, value] of Object.entries(limits)) if (typeof value !== "number" || value < 0) throw new ConfigError("price", `provider.max_price.${key}`, "Expected a finite nonnegative RUB rate");
  }
  const only = p.only;
  const ignore = p.ignore;
  const order = p.order;
  if (only?.some((v) => ignore?.includes(v))) throw new ConfigError("conflict", "provider.only", "only and ignore intersect");
  if (order?.some((v) => ignore?.includes(v) || only && !only.includes(v))) throw new ConfigError("conflict", "provider.order", "A preferred provider is excluded");
  if (!slugs.some((v) => (!only || only.includes(v)) && !ignore?.includes(v))) throw new ConfigError("empty-routing", "provider", "No known provider matches these filters");
  return p;
}
function parseModel(input) {
  if (typeof input !== "string" || input.length > 400 || /[\s%\u0000-\u001f]/u.test(input)) throw new ConfigError("model", "model", "Invalid model or unsupported alias escape");
  const [model, suffix, extra] = input.split("@");
  if (!model || !/^[A-Za-z0-9][A-Za-z0-9._:/-]*$/u.test(model) || extra !== void 0) throw new ConfigError("model", "model", "Invalid model syntax");
  const result = { model, provider: {}, hasProviderAlias: false, hasFallbackAlias: false };
  if (suffix === void 0) return result;
  const found = /* @__PURE__ */ new Set();
  for (const pair of suffix.split("&")) {
    const [key, value, tail] = pair.split("=");
    if (!key || !value || tail !== void 0 || !/^[A-Za-z0-9._:/-]+$/u.test(value) || found.has(key)) throw new ConfigError("alias", "model", "Malformed or duplicate alias");
    found.add(key);
    if (key === "provider") {
      result.provider.only = [value];
      result.hasProviderAlias = true;
    } else if (key === "allow_fallbacks" && ["true", "false"].includes(value)) {
      result.provider.allow_fallbacks = value === "true";
      result.hasFallbackAlias = true;
    } else if (key === "reasoning_effort") result.effort = value;
    else throw new ConfigError("alias", "model", "Unsupported alias");
  }
  return result;
}
function toAlias(model, provider, parameters) {
  const p = object(provider, "provider");
  if (Object.keys(p).some((key) => !["only", "allow_fallbacks"].includes(key)) || provider.only && provider.only.length !== 1) throw new ConfigError("alias-loss", "provider", "Routing cannot be represented as aliases without losing restrictions");
  const aliases = [];
  const add = (key, value) => {
    if (!/^[A-Za-z0-9._:/-]+$/u.test(value)) throw new ConfigError("alias", key, "Value requires an unsupported escape mechanism");
    aliases.push(`${key}=${value}`);
  };
  if (provider.only) add("provider", provider.only[0]);
  const copy = { ...parameters };
  if (copy.reasoning !== void 0) {
    const reasoning = object(copy.reasoning, "reasoning");
    keysOnly(reasoning, ["effort"], "reasoning");
    if (typeof reasoning.effort !== "string") throw new ConfigError("alias-loss", "reasoning", "Only reasoning.effort is representable");
    add("reasoning_effort", reasoning.effort);
    delete copy.reasoning;
  }
  if (provider.allow_fallbacks !== void 0) add("allow_fallbacks", String(provider.allow_fallbacks));
  return { model: aliases.length ? `${model}@${aliases.join("&")}` : model, parameters: copy };
}

// src/core/request-schemas.snapshot.json
var request_schemas_snapshot_default = { source: "https://polza.ai/api/openapi.json", sha256: "6f75231795b9b5b04ea0995e80663bf8fbe4259f16cb52d5a0988056efd46a67", schemas: { ChatCompletionRequestDto: { type: "object", properties: { model: { type: "string" }, prompt: { type: "string" }, messages: { type: "array", items: { $ref: "#/components/schemas/MessageDto" } }, max_tokens: { type: "number", minimum: 1 }, max_completion_tokens: { type: "number", minimum: 1 }, temperature: { type: "number", minimum: 0, maximum: 2 }, top_p: { type: "number", minimum: 0, maximum: 1 }, frequency_penalty: { type: "number", minimum: -2, maximum: 2 }, presence_penalty: { type: "number", minimum: -2, maximum: 2 }, response_format: { type: "object" }, provider: { allOf: [{ $ref: "#/components/schemas/ProviderDto" }] }, tools: { type: "array", items: { oneOf: [{ $ref: "#/components/schemas/ToolDefinitionDto" }, { $ref: "#/components/schemas/ServerToolDefinitionDto" }] } }, max_tool_calls: { type: "integer", minimum: 1, maximum: 30 }, stop_server_tools_when: { type: "array", items: { $ref: "#/components/schemas/StopServerToolsWhenDto" } }, stream_options: { allOf: [{ $ref: "#/components/schemas/ChatStreamOptionsDto" }] }, tool_choice: { oneOf: [{ type: "string", enum: ["none", "auto", "required"] }, { type: "object", properties: { type: { type: "string", enum: ["none", "auto", "required"] } }, required: ["type"] }, { $ref: "#/components/schemas/NamedToolChoiceDto" }, { type: "object", properties: { type: { type: "string" } }, required: ["type"] }] }, reasoning: { allOf: [{ $ref: "#/components/schemas/ReasoningDto" }] }, plugins: { type: "array" }, web_search_options: { allOf: [{ $ref: "#/components/schemas/WebSearchOptionsDto" }] }, user: { type: "string", maxLength: 256 }, stop: { oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }] }, seed: { type: "number" }, n: { type: "number", minimum: 1, maximum: 10 }, stream: { type: "boolean" }, logprobs: { type: "boolean" }, top_logprobs: { type: "number", minimum: 0, maximum: 20 }, logit_bias: { type: "object" }, parallel_tool_calls: { type: "boolean" }, prompt_cache_key: { type: "string" }, prompt_cache_options: { allOf: [{ $ref: "#/components/schemas/PromptCacheOptionsDto" }] }, image_config: { type: "object" }, media_resolution: { type: "string" }, modalities: { type: "array", items: { type: "string", enum: ["text", "image", "audio"] } }, audio: { type: "object", properties: { voice: { type: "string" }, format: { type: "string" } } } }, required: ["model", "messages"] }, MessageDto: { type: "object", properties: { role: { type: "string", enum: ["user", "assistant", "system", "developer", "tool"] }, content: { type: "object", nullable: true }, name: { type: "string" }, tool_call_id: { type: "string" }, tool_calls: { type: "array", items: { $ref: "#/components/schemas/ToolCallDto" } }, refusal: { type: "object", nullable: true }, reasoning: { type: "object", nullable: true }, reasoning_content: { type: "object", nullable: true }, reasoning_details: { type: "array", items: { $ref: "#/components/schemas/ReasoningDetailDto" } }, annotations: { type: "array", items: { type: "object" } } }, required: ["role", "content"] }, ToolCallDto: { type: "object", properties: { extra_content: { allOf: [{ $ref: "#/components/schemas/ToolCallExtraContentDto" }] }, id: { type: "string" }, type: { type: "string", enum: ["function"] }, function: { allOf: [{ $ref: "#/components/schemas/ToolCallFunctionDto" }] } }, required: ["id", "type", "function"] }, ToolCallExtraContentDto: { type: "object", properties: { google: { allOf: [{ $ref: "#/components/schemas/GoogleToolCallContentDto" }] } } }, GoogleToolCallContentDto: { type: "object", properties: { thought_signature: { type: "string" } } }, ToolCallFunctionDto: { type: "object", properties: { name: { type: "string" }, arguments: { type: "string" } }, required: ["name", "arguments"] }, ReasoningDetailDto: { type: "object", properties: { type: { type: "string" }, index: { type: "number" }, id: { type: "object", nullable: true }, text: { type: "string" }, summary: { type: "string" }, signature: { type: "object", nullable: true }, data: { type: "string" }, format: { type: "string" } }, required: ["type"] }, ProviderDto: { type: "object", properties: { require_parameters: { type: "boolean" }, allow_fallbacks: { type: "boolean" }, order: { type: "array", items: { type: "string" } }, only: { type: "array", items: { type: "string" } }, ignore: { type: "array", items: { type: "string" } }, sort: { type: "string", enum: ["price", "throughput", "latency"] }, data_residency: { type: "string", enum: ["ru"] }, max_price: { allOf: [{ $ref: "#/components/schemas/ProviderMaxPriceDto" }] } } }, ProviderMaxPriceDto: { type: "object", properties: { prompt: { type: "number" }, completion: { type: "number" }, image: { type: "number" }, audio: { type: "number" }, request: { type: "number" }, video_per_second: { type: "number" }, stt_per_minute: { type: "number" }, tts_per_million_characters: { type: "number" } } }, ToolDefinitionDto: { type: "object", properties: { type: { type: "string", enum: ["function"] }, function: { allOf: [{ $ref: "#/components/schemas/ToolFunctionDto" }] } }, required: ["type", "function"] }, ToolFunctionDto: { type: "object", properties: { name: { type: "string" }, description: { type: "string" }, parameters: { type: "object" }, strict: { type: "boolean" } }, required: ["name"] }, ServerToolDefinitionDto: { type: "object", properties: { type: { type: "string" }, parameters: { type: "object" } }, required: ["type"] }, StopServerToolsWhenDto: { type: "object", properties: { type: { type: "string", enum: ["step_count", "spend_cap"] }, value: { type: "number" }, value_rub: { type: "number" } }, required: ["type"] }, ChatStreamOptionsDto: { type: "object", properties: { include_usage: { type: "boolean" }, include_server_tool_events: { type: "boolean" }, hide_intermediate_text: { type: "boolean" } } }, NamedToolChoiceDto: { type: "object", properties: { type: { type: "string", enum: ["function"] }, function: { allOf: [{ $ref: "#/components/schemas/NamedToolChoiceFunctionDto" }] } }, required: ["type", "function"] }, NamedToolChoiceFunctionDto: { type: "object", properties: { name: { type: "string" } }, required: ["name"] }, ReasoningDto: { type: "object", properties: { type: { type: "string", enum: ["adaptive", "disabled"] }, effort: { type: "string", enum: ["max", "xhigh", "high", "medium", "low", "minimal", "none"] }, effort_level: { type: "string" }, summary: { type: "string", enum: ["auto", "concise", "detailed", "none"] }, enabled: { type: "boolean" }, max_tokens: { type: "number" }, exclude: { type: "boolean" } } }, WebSearchOptionsDto: { type: "object", properties: { search_context_size: { type: "string", enum: ["low", "medium", "high"] } } }, PromptCacheOptionsDto: { type: "object", properties: { ttl: { type: "string", enum: ["30m", "12h"] } }, required: ["ttl"] }, ImageInputDto: { type: "object", properties: { prompt: { type: "string" }, aspect_ratio: { type: "string", enum: ["1:1", "1:4", "4:1", "1:8", "8:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9", "9:21", "2:1", "1:2", "3:1", "1:3", "27:16", "16:27", "9:8", "8:9", "auto", "adaptive"] }, images: { type: "array", items: { $ref: "#/components/schemas/MediaFileDto" } }, callBackUrl: { type: "string" }, seed: { type: "number" }, watermark: { type: "string" }, image_resolution: { type: "string", enum: ["0.5K", "1K", "2K", "4K"] }, quality: { type: "string" }, output_format: { type: "string", enum: ["png", "jpeg", "webp"] }, max_images: { type: "number", minimum: 1 }, isEnhance: { type: "boolean" }, guidance_scale: { type: "number" }, strength: { type: "number" }, enable_safety_checker: { type: "boolean" }, upscale_factor: { type: "string", enum: ["1", "2", "4", "8"] }, font_inputs: { type: "array", items: { $ref: "#/components/schemas/FontInputDto" } }, super_resolution_references: { type: "array", items: { type: "string" } } }, required: ["prompt"] }, MediaFileDto: { type: "object", properties: { type: { type: "string", enum: ["url", "base64"] }, data: { type: "string" } }, required: ["type", "data"] }, FontInputDto: { type: "object", properties: { font_url: { type: "string" }, text: { type: "string" } }, required: ["font_url", "text"] }, VideoInputDto: { type: "object", properties: { prompt: { type: "string" }, aspect_ratio: { type: "string", enum: ["1:1", "1:4", "4:1", "1:8", "8:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9", "9:21", "2:1", "1:2", "3:1", "1:3", "27:16", "16:27", "9:8", "8:9", "auto", "adaptive"] }, images: { type: "array", items: { $ref: "#/components/schemas/MediaFileDto" } }, callBackUrl: { type: "string" }, seed: { type: "number" }, watermark: { type: "string" }, duration: { type: "string" }, resolution: { type: "string", enum: ["480p", "512p", "580p", "720p", "768p", "1080p", "2160p", "4k"] }, quality: { type: "string", enum: ["720p", "1080p"] }, videos: { type: "array", items: { $ref: "#/components/schemas/MediaFileDto" } }, reference_images: { type: "array", items: { $ref: "#/components/schemas/MediaFileDto" } }, audios: { type: "array", items: { $ref: "#/components/schemas/MediaFileDto" } }, audio_ids: { maxItems: 3, type: "array", items: { type: "string" } }, character_ids: { maxItems: 3, type: "array", items: { type: "string" } }, video_list: { maxItems: 1, type: "array", items: { $ref: "#/components/schemas/VideoListItemDto" } }, video_start: { type: "number", minimum: 0 }, video_end: { type: "number", minimum: 0 }, multi_shots: { type: "boolean" }, sound: { type: "boolean" }, generate_audio: { type: "boolean" }, mode: { type: "string" }, character_orientation: { type: "string", enum: ["image", "video"] }, upscale_factor: { type: "string" }, creativity: { type: "number", enum: [0, 1] } }, required: ["prompt"] }, VideoListItemDto: { type: "object", properties: { url: { type: "string" }, start: { type: "number", minimum: 0 }, ends: { type: "number", minimum: 0 } }, required: ["url", "start", "ends"] }, MusicInputDto: { type: "object", properties: { prompt: { type: "string", maxLength: 5e3 }, uploadUrlList: { minItems: 2, maxItems: 2, type: "array", items: { type: "string" } }, customMode: { type: "boolean" }, instrumental: { type: "boolean" }, style: { type: "string", maxLength: 1e3 }, title: { type: "string", maxLength: 80 }, negativeTags: { type: "string" }, vocalGender: { type: "string", enum: ["m", "f"] }, styleWeight: { type: "number" }, weirdnessConstraint: { type: "number" }, audioWeight: { type: "number" }, personaId: { type: "string" }, personaModel: { type: "string", enum: ["style_persona", "voice_persona"] }, duration: { type: "number", minimum: 10, maximum: 360 }, version: { type: "string", enum: ["V6", "V6_MINI", "V6_WILD"] }, soundLoop: { type: "boolean" }, soundTempo: { type: "number", minimum: 1, maximum: 300 }, soundKey: { type: "string", enum: ["Any", "Cm", "C#m", "Dm", "D#m", "Em", "Fm", "F#m", "Gm", "G#m", "Am", "A#m", "Bm", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"] }, grabLyrics: { type: "boolean" }, callBackUrl: { type: "string" } }, required: ["prompt"] }, AudioSpeechDto: { type: "object", properties: { model: { type: "string" }, input: { type: "string", maxLength: 5e3 }, voice: { type: "string" }, instructions: { type: "string", maxLength: 4096 }, response_format: { type: "string", enum: ["mp3", "opus", "aac", "flac", "wav", "pcm"] }, speed: { type: "number", minimum: 0.25, maximum: 4 }, stream_format: { type: "string", enum: ["sse", "audio"] }, user: { type: "string", maxLength: 256 }, stability: { type: "number", minimum: 0, maximum: 1 }, similarity_boost: { type: "number", minimum: 0, maximum: 1 }, style: { type: "number", minimum: 0, maximum: 1 }, timestamps: { type: "boolean" }, previous_text: { type: "string", maxLength: 5e3 }, next_text: { type: "string", maxLength: 5e3 }, language_code: { type: "string", maxLength: 10 }, emotion: { type: "string", maxLength: 20 }, provider: { allOf: [{ $ref: "#/components/schemas/ProviderDto" }] } }, required: ["input", "voice"] }, AudioTranscriptionDto: { type: "object", properties: { file: { type: "string" }, model: { type: "string" }, language: { type: "string" }, prompt: { type: "string" }, response_format: { type: "string", enum: ["json", "text", "srt", "verbose_json", "vtt", "diarized_json"] }, temperature: { type: "number", minimum: 0, maximum: 1 }, timestamp_granularities: { type: "array", items: { type: "string", enum: ["word", "segment"] } }, user: { type: "string", maxLength: 256 }, chunking_strategy: { oneOf: [{ type: "string", enum: ["auto"] }, { $ref: "#/components/schemas/ServerVadChunkingStrategyDto" }] }, include: { type: "array", items: { type: "string", enum: ["logprobs"] } }, known_speaker_names: { type: "array", items: { type: "array" } }, known_speaker_references: { type: "array", items: { type: "array" } }, stream: { type: "boolean" }, provider: { allOf: [{ $ref: "#/components/schemas/ProviderDto" }] } }, required: ["file"] }, ServerVadChunkingStrategyDto: { "x-unresolved": true } } };

// src/core/request-schema.ts
var schemas = request_schemas_snapshot_default.schemas;
var requestSchemas = schemas;
function validateSchema(value, schema, path) {
  const fail3 = (message) => {
    throw new ConfigError("schema", path, message);
  };
  if (schema["x-unresolved"]) fail3("Public schema reference is unresolved");
  if (typeof schema.$ref === "string") {
    if (!schema.$ref.startsWith("#/components/schemas/")) fail3("External schema references are forbidden");
    const target = schemas[schema.$ref.split("/").at(-1)];
    if (!target) fail3("Public schema reference is unresolved");
    validateSchema(value, target, path);
  }
  for (const child of schema.allOf ?? []) validateSchema(value, child, path);
  for (const union of ["oneOf", "anyOf"]) if (Array.isArray(schema[union])) {
    let accepted = false;
    for (const child of schema[union]) {
      try {
        validateSchema(value, child, path);
        accepted = true;
        break;
      } catch (error2) {
        if (!(error2 instanceof ConfigError)) throw error2;
      }
    }
    if (!accepted) fail3("Value does not match the public request schema");
  }
  if (value === null && schema.nullable === true) return;
  const type = value === null ? "null" : Array.isArray(value) ? "array" : typeof value;
  if (schema.type && schema.type !== type && !(schema.type === "integer" && typeof value === "number" && Number.isInteger(value))) fail3(`Expected ${String(schema.type)}`);
  if (Array.isArray(schema.enum) && !schema.enum.includes(value)) fail3("Value is not in the public enum");
  if (typeof value === "number") {
    if (typeof schema.minimum === "number" && value < schema.minimum) fail3("Value is below the API minimum");
    if (typeof schema.maximum === "number" && value > schema.maximum) fail3("Value is above the API maximum");
  }
  if (typeof value === "string") {
    if (typeof schema.minLength === "number" && value.length < schema.minLength) fail3("Text is too short");
    if (typeof schema.maxLength === "number" && value.length > schema.maxLength) fail3("Text exceeds the API limit");
  }
  if (Array.isArray(value)) {
    if (typeof schema.minItems === "number" && value.length < schema.minItems) fail3("Too few items");
    if (typeof schema.maxItems === "number" && value.length > schema.maxItems) fail3("Too many items");
    if (schema.items) value.forEach((v, index2) => validateSchema(v, schema.items, `${path}.${index2}`));
  } else if (value !== null && typeof value === "object") {
    const properties = schema.properties;
    for (const key of schema.required ?? []) if (!(key in value)) throw new ConfigError("required", `${path}.${key}`, "Required by the API schema");
    for (const [key, item] of Object.entries(value)) {
      if (properties && Object.hasOwn(properties, key)) validateSchema(item, properties[key], `${path}.${key}`);
      else if (schema.additionalProperties === false || properties && schema.additionalProperties !== true) throw new ConfigError("unsupported", `${path}.${key}`, "Unknown request field");
      else if (schema.additionalProperties && typeof schema.additionalProperties === "object") validateSchema(item, schema.additionalProperties, `${path}.${key}`);
    }
  }
}
var dtoNames = {
  chat: "ChatCompletionRequestDto",
  "image.media": "ImageInputDto",
  "video.media": "VideoInputDto",
  "music.media": "MusicInputDto",
  "audio.tts": "AudioSpeechDto",
  "audio.stt": "AudioTranscriptionDto"
};
function dtoName(profile) {
  return dtoNames[profile] ?? "AudioTranscriptionDto";
}
function operationField(profile, key) {
  const properties = schemas[dtoName(profile)]?.properties;
  return properties && Object.hasOwn(properties, key) ? properties[key] : void 0;
}
var liveFieldSchemas = {
  "audio.stt": {
    known_speaker_names: { type: "array", items: { type: "string" } },
    known_speaker_references: { type: "array", items: { type: "string" } },
    chunking_strategy: {
      oneOf: [
        { type: "string", enum: ["auto"] },
        {
          type: "object",
          required: ["type"],
          // The gateway ignores unknown keys of the VAD object, so they are not blocked here.
          additionalProperties: true,
          properties: {
            type: { type: "string", enum: ["server_vad"] },
            prefix_padding_ms: { type: "number", minimum: 0 },
            silence_duration_ms: { type: "number", minimum: 0 },
            threshold: { type: "number", minimum: 0, maximum: 1 }
          }
        }
      ]
    }
  }
};
function effectiveField(profile, key) {
  const overrides = Object.hasOwn(liveFieldSchemas, profile) ? liveFieldSchemas[profile] : void 0;
  return overrides && Object.hasOwn(overrides, key) ? overrides[key] : operationField(profile, key);
}
function operationFields(profile) {
  return Object.keys(schemas[dtoName(profile)]?.properties ?? {});
}
function operationRequired(profile) {
  const required = schemas[dtoName(profile)]?.required;
  return Array.isArray(required) ? required : [];
}
function resolveSchema(schema) {
  if (typeof schema.$ref === "string") {
    const target = schemas[schema.$ref.split("/").at(-1)];
    return target ? resolveSchema(target) : {};
  }
  return schema;
}
function schemaTypes(schema) {
  const s = resolveSchema(schema);
  const types = /* @__PURE__ */ new Set();
  const branches = [s.allOf, s.oneOf, s.anyOf].flatMap((list) => Array.isArray(list) ? list : []);
  for (const child of branches) for (const type of schemaTypes(child)) types.add(type);
  if (typeof s.type === "string") types.add(s.type === "integer" ? "number" : s.type);
  if (Array.isArray(s.enum)) for (const value of s.enum) types.add(value === null ? "null" : Array.isArray(value) ? "array" : typeof value);
  return [...types];
}
function schemaConstraints(schema) {
  const s = resolveSchema(schema);
  const constraints = {};
  if (Array.isArray(s.enum)) constraints.values = s.enum;
  if (typeof s.minimum === "number") constraints.min = s.minimum;
  if (typeof s.maximum === "number") constraints.max = s.maximum;
  if (typeof s.maxLength === "number") constraints.max_length = s.maxLength;
  return constraints;
}
function dtoField(profile, key) {
  const schema = effectiveField(profile, key);
  if (!schema) return void 0;
  const types = schemaTypes(schema);
  return types.length ? { types, constraints: schemaConstraints(schema) } : void 0;
}
function validateMediaFiles(value, path, kind) {
  validateSchema(value, { type: "array", items: { $ref: "#/components/schemas/MediaFileDto" } }, path);
  for (const [index2, item] of value.entries()) {
    const data = item.data;
    const valid2 = item.type === "url" ? /^https:\/\/[^\s]+$/u.test(data) : /^data:(image|video|audio)\/[A-Za-z0-9.+-]+;base64,[A-Za-z0-9+/]+={0,2}$/u.test(data);
    if (!valid2) throw new ConfigError("file", `${path}.${index2}.data`, "Use an HTTPS URL or a complete base64 data URI");
    if (item.type === "base64" && kind && !data.startsWith(`data:${kind}/`)) throw new ConfigError("file", `${path}.${index2}.data`, "Wrong media type for this input");
  }
}

// src/core/audio-capabilities.ts
var sttAdvanced = ["timestamp_granularities", "include", "chunking_strategy", "known_speaker_names", "known_speaker_references"];
var sttAdvancedProviders = /* @__PURE__ */ new Set(["openai", "mws", "polza"]);
var ttsRejected = {
  "elevenlabs/eleven-v4": ["speed", "timestamps"]
};
function audioFieldAccepted(profile, model, provider, field) {
  if (profile === "audio.stt") {
    if (!sttAdvanced.includes(field)) return true;
    return sttAdvancedProviders.has(provider);
  }
  if (profile === "audio.tts") return !(ttsRejected[model] ?? []).includes(field);
  return true;
}

// src/core/chat-capabilities.ts
var rank = { rejected: 0, unknown: 1, supported: 2 };
function routeImageSupport(route) {
  const status = route.capabilities?.input_image?.status;
  if (status === "supported") return "supported";
  if (status === "rejected") return "rejected";
  return "unknown";
}
function imageSupportByProvider(routes) {
  const result = /* @__PURE__ */ new Map();
  for (const route of routes) {
    const support = routeImageSupport(route);
    const current = result.get(route.provider);
    if (current === void 0 || rank[support] > rank[current]) result.set(route.provider, support);
  }
  return result;
}
function imageRouting(routes) {
  const support = imageSupportByProvider(routes);
  const result = { capable: [], refused: [], unconfirmed: [] };
  for (const [provider, state] of support) {
    if (state === "supported") result.capable.push(provider);
    else if (state === "rejected") result.refused.push(provider);
    else result.unconfirmed.push(provider);
  }
  return result;
}
function imageInputAvailable(routes) {
  const routing = imageRouting(routes);
  return routing.capable.length > 0 || routing.unconfirmed.length > 0;
}

// src/core/compiler.ts
var operations = {
  chat: { path: "/api/v1/chat/completions", response: "json" },
  "image.media": { path: "/api/v1/media", response: "media" },
  "video.media": { path: "/api/v1/media", response: "media" },
  "music.media": { path: "/api/v1/media", response: "media" },
  "audio.tts": { path: "/api/v1/audio/speech", response: "audio-base64" },
  "audio.stt": { path: "/api/v1/audio/transcriptions", response: "json" }
};
var transportFields = { "audio.tts": ["stream_format"], "audio.stt": ["stream"] };
function audioBodyFields(profile) {
  return operationFields(profile).filter((key) => !["model", "provider"].includes(key) && !(transportFields[profile] ?? []).includes(key));
}
function fail(code, field, message) {
  throw new ConfigError(code, field, message);
}
function text(value, field, max2 = 1e5) {
  if (typeof value !== "string" || value.length > max2 || !value.length) fail("type", field, `Expected nonempty text up to ${max2} characters`);
}
function range(value, field, min2, max2) {
  if (value !== void 0 && (typeof value !== "number" || value < min2 || value > max2)) fail("range", field, `Expected a number in [${min2}, ${max2}]`);
}
function messagesHaveImage(p) {
  if (!Array.isArray(p.messages)) return false;
  return p.messages.some((message) => {
    const m = message;
    return Array.isArray(m.content) && m.content.some((part) => part?.type === "image_url");
  });
}
function validateChat(p, routes, model, warnings) {
  const chatProperties = requestSchemas.ChatCompletionRequestDto.properties;
  keysOnly(p, Object.keys(chatProperties).filter((k) => !["model", "provider", "prompt"].includes(k)), "parameters");
  if (!Array.isArray(p.messages) || !p.messages.length || p.messages.length > 1e3) fail("messages", "messages", "Expected 1 to 1000 messages");
  for (const [i, message] of p.messages.entries()) {
    const m = object(message, `messages.${i}`);
    keysOnly(m, ["role", "content", "name", "tool_call_id", "tool_calls"], `messages.${i}`);
    if (typeof m.role !== "string" || !["system", "developer", "user", "assistant", "tool"].includes(m.role)) fail("role", `messages.${i}.role`, "Unknown message role");
    if (m.name !== void 0) text(m.name, `messages.${i}.name`, 64);
    if (m.tool_call_id !== void 0) text(m.tool_call_id, `messages.${i}.tool_call_id`, 256);
    if (m.role === "user" && typeof m.content === "string" && !m.content.trim()) fail("required", `messages.${i}.content`, "Enter a user message");
    if (Array.isArray(m.content)) {
      if (!m.content.length) fail("content", `messages.${i}.content`, "Content parts must not be empty");
      for (const [j, part] of m.content.entries()) {
        const v = object(part, `messages.${i}.content.${j}`);
        if (v.type === "text") {
          keysOnly(v, ["type", "text"], "content");
          text(v.text, "content.text");
        } else if (v.type === "image_url") {
          keysOnly(v, ["type", "image_url"], "content");
          const image = object(v.image_url, "image_url");
          keysOnly(image, ["url", "detail"], "image_url");
          text(image.url, "image_url.url", 9e5);
          if (!/^https:\/\/[^\s]+$/u.test(image.url) && !/^data:image\/[A-Za-z0-9.+-]+;base64,[A-Za-z0-9+/]+={0,2}$/u.test(image.url)) fail("file", "image_url.url", "Use HTTPS or a complete image data URI");
          if (image.detail !== void 0 && !["auto", "low", "high"].includes(String(image.detail))) fail("enum", "image_url.detail", "Unknown image detail");
          if (model.input_modalities?.length && !model.input_modalities.includes("image")) fail("media-modality", "messages.content", "Image input is not declared by this model");
        } else if (v.type === "file") {
          keysOnly(v, ["type", "file"], "content");
          if (!model.input_modalities?.includes("file")) fail("media-modality", "messages.content", "Document input is not declared by this model");
          const file = object(v.file, "file");
          keysOnly(file, ["filename", "file_data"], "file");
          text(file.filename, "file.filename", 256);
          text(file.file_data, "file.file_data", 9e5);
          if (!/^data:(application\/pdf|application\/vnd.openxmlformats-officedocument.wordprocessingml.document|text\/plain);base64,[A-Za-z0-9+/]+={0,2}$/u.test(file.file_data)) fail("file", "file.file_data", "Use a complete document data URI");
        } else if (v.type === "input_audio") {
          keysOnly(v, ["type", "input_audio"], "content");
          if (!model.input_modalities?.includes("audio")) fail("media-modality", "messages.content", "Audio input is not declared by this model");
          const audio = object(v.input_audio, "input_audio");
          keysOnly(audio, ["data", "format"], "input_audio");
          text(audio.data, "input_audio.data", 9e5);
          if (!/^[A-Za-z0-9+/]+={0,2}$/u.test(audio.data) || !["mp3", "wav", "flac", "m4a"].includes(String(audio.format))) fail("file", "input_audio", "Use base64 audio and a documented format");
        } else if (v.type === "video_url") {
          keysOnly(v, ["type", "video_url"], "content");
          if (!model.model.startsWith("google/gemini") || !model.input_modalities?.includes("video")) fail("media-modality", "messages.content", "Video links are documented for Gemini only");
          const video = object(v.video_url, "video_url");
          keysOnly(video, ["url"], "video_url");
          text(video.url, "video_url.url", 4e3);
          try {
            const url = new URL(video.url);
            if (url.protocol !== "https:" || url.username || url.password || !["youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be"].includes(url.hostname)) throw new Error();
          } catch {
            fail("file", "video_url.url", "Use an HTTPS YouTube link");
          }
        } else fail("unsupported", `messages.${i}.content.${j}.type`, "This content part is not yet verified");
      }
    } else if (typeof m.content !== "string" && !(m.content === null && m.role === "assistant")) fail("content", `messages.${i}.content`, "Use text, image content parts or nullable assistant content");
    if (m.role === "tool") text(m.tool_call_id, "tool_call_id");
    if (m.tool_calls !== void 0) validateSchema(m.tool_calls, { type: "array", items: { $ref: "#/components/schemas/ToolCallDto" } }, "tool_calls");
  }
  if (messagesHaveImage(p)) {
    const routing = imageRouting(routes);
    if (!routing.capable.length && !routing.unconfirmed.length) fail("image-input", "messages.content", "Every selected provider of this model refuses an image in a chat message");
    if (!routing.capable.length) warnings.push("Image input is not confirmed for any provider of this model: the request may be refused by the provider that serves it.");
  }
  range(p.temperature, "temperature", 0, 2);
  range(p.top_p, "top_p", 0, 1);
  range(p.frequency_penalty, "frequency_penalty", -2, 2);
  range(p.presence_penalty, "presence_penalty", -2, 2);
  range(p.max_tokens, "max_tokens", 1, Number.MAX_SAFE_INTEGER);
  range(p.max_completion_tokens, "max_completion_tokens", 1, Number.MAX_SAFE_INTEGER);
  range(p.n, "n", 1, 10);
  for (const key of ["max_tokens", "max_completion_tokens", "n", "seed", "top_logprobs"]) if (p[key] !== void 0 && !Number.isSafeInteger(p[key])) fail("type", key, "Expected a safe integer");
  if (p.max_tokens !== void 0 && p.max_completion_tokens !== void 0) fail("token-limit-conflict", "max_completion_tokens", "Choose one token limit");
  if (p.logit_bias !== void 0) {
    for (const [id, bias] of Object.entries(object(p.logit_bias, "logit_bias"))) {
      if (!/^\d+$/u.test(id)) fail("type", "logit_bias", "Token IDs must be numeric strings");
      range(bias, `logit_bias.${id}`, -100, 100);
    }
  }
  if (p.seed !== void 0 && typeof p.seed !== "number") fail("type", "seed", "Expected a number");
  if (p.stream !== void 0 && typeof p.stream !== "boolean") fail("type", "stream", "Expected a boolean");
  if (p.stop !== void 0 && typeof p.stop !== "string" && !(Array.isArray(p.stop) && p.stop.every((v) => typeof v === "string"))) fail("type", "stop", "Expected text or an array of text");
  if (p.reasoning !== void 0) {
    const reasoning = object(p.reasoning, "reasoning");
    validateSchema(reasoning, operationField("chat", "reasoning"), "reasoning");
    if (reasoning.effort !== void 0) text(reasoning.effort, "reasoning.effort", 40);
    for (const route of routes) {
      const cap = route.capabilities.reasoning_effort;
      if (reasoning.effort !== void 0 && (cap?.status !== "supported" || !cap.values?.includes(reasoning.effort))) fail("capability", "reasoning.effort", `Explicit reasoning effort values are not confirmed for ${route.provider}`);
    }
  }
  if (p.response_format !== void 0) {
    const format = object(p.response_format, "response_format");
    if (!["text", "json_object", "json_schema"].includes(String(format.type))) fail("unsupported", "response_format", "Unknown response format");
    keysOnly(format, format.type === "json_schema" ? ["type", "json_schema"] : ["type"], "response_format");
    if (format.type === "json_schema") {
      const definition = object(format.json_schema, "response_format.json_schema");
      keysOnly(definition, ["name", "description", "schema", "strict"], "response_format.json_schema");
      text(definition.name, "response_format.json_schema.name", 64);
      object(definition.schema, "response_format.json_schema.schema");
      const checkRefs = (value) => {
        if (value === null || typeof value !== "object") return;
        if (!Array.isArray(value)) {
          for (const key of ["$ref", "$dynamicRef", "$recursiveRef"]) if (value[key] !== void 0 && (typeof value[key] !== "string" || value[key] !== "#" && !value[key].startsWith("#/"))) fail("unsupported", "response_format.json_schema.schema." + key, "Only local schema references are allowed");
        }
        for (const child of Object.values(value)) checkRefs(child);
      };
      checkRefs(definition.schema);
      if (definition.strict !== void 0 && typeof definition.strict !== "boolean") fail("type", "response_format.json_schema.strict", "Expected boolean");
    }
    const capability = format.type === "json_object" ? "json_object" : format.type === "json_schema" ? "json_schema_strict" : void 0;
    if (capability && routes.some((r) => r.capabilities[capability]?.status !== "supported")) fail("capability", "response_format", "Requested JSON output is not confirmed for every candidate");
  }
  for (const [key, value] of Object.entries(p)) if (!["messages", "reasoning", "response_format"].includes(key)) {
    const schema = operationField("chat", key);
    if (schema) validateSchema(value, schema, key);
  }
  if (p.tools !== void 0) validateServerTools(p.tools);
  if (p.plugins !== void 0) {
    if (!Array.isArray(p.plugins) || p.plugins.length !== 1) fail("unsupported", "plugins", "Only the documented web plugin is supported");
    const plugin = object(p.plugins[0], "plugins.0");
    keysOnly(plugin, ["id", "engine"], "plugins.0");
    if (plugin.id !== "web" || !["yandex", "google"].includes(String(plugin.engine))) fail("enum", "plugins.0", "Choose the documented Yandex or Google web plugin");
  }
  const optional = Object.keys(p).filter((k) => !["messages", "stream", "user", "reasoning", "plugins", "tools", "max_tool_calls", "stop_server_tools_when"].includes(k));
  for (const route of routes) for (const key of optional) if (!route.supported_parameters.includes(key)) fail("capability", key, `Parameter is not listed for ${route.provider}; choose a confirmed route`);
}
var serverToolTypes = ["polza:web_search", "polza:web_fetch", "polza:datetime", "polza:image_search", "polza:wordstat", "polza:search_suggestions", "polza:find_party", "polza:find_company_by_email", "polza:clean_address"];
var webSearchParameters = ["max_results", "max_uses", "allowed_domains", "excluded_domains", "engine"];
function validateServerTools(tools) {
  if (!Array.isArray(tools) || !tools.length) fail("unsupported", "tools", "Provide at least one tool");
  for (const [index2, entry] of tools.entries()) {
    const tool = object(entry, `tools.${index2}`);
    const type = String(tool.type ?? "");
    if (!type.startsWith("polza:")) continue;
    if (!serverToolTypes.includes(type)) fail("enum", `tools.${index2}.type`, "Unknown Polza server tool");
    keysOnly(tool, ["type", "parameters"], `tools.${index2}`);
    const parameters = tool.parameters === void 0 ? {} : object(tool.parameters, `tools.${index2}.parameters`);
    if (type !== "polza:web_search") continue;
    keysOnly(parameters, webSearchParameters, `tools.${index2}.parameters`);
    if (parameters.engine !== void 0 && !["yandex", "google"].includes(String(parameters.engine))) fail("enum", `tools.${index2}.parameters.engine`, "Choose the documented Yandex or Google engine");
    range(parameters.max_results, `tools.${index2}.parameters.max_results`, 1, 10);
    if (parameters.max_uses !== void 0 && (typeof parameters.max_uses !== "number" || !Number.isInteger(parameters.max_uses) || parameters.max_uses < 1)) fail("range", `tools.${index2}.parameters.max_uses`, "Expected a positive integer");
    for (const key of ["allowed_domains", "excluded_domains"]) {
      const list = parameters[key];
      if (list === void 0) continue;
      if (!Array.isArray(list) || list.length > 50 || list.some((item) => typeof item !== "string" || !item.trim() || item.length > 253)) fail("schema", `tools.${index2}.parameters.${key}`, "Expected a list of domain names");
    }
  }
}
function atPath(p, path) {
  let value = p;
  for (const part of path.split(".")) value = value && typeof value === "object" && !Array.isArray(value) ? value[part] : void 0;
  return value;
}
function validateSttLiveFields(p, warnings) {
  for (const key of ["known_speaker_names", "known_speaker_references"]) {
    const value = p[key];
    if (value === void 0) continue;
    if (!Array.isArray(value) || value.some((item) => typeof item !== "string" || !item.trim())) {
      fail("speaker-list", key, 'Live verification: the gateway expects a list of strings, for example ["Speaker 1"]');
    }
  }
  const names2 = p.known_speaker_names;
  if (Array.isArray(names2) && names2.length > 4) warnings.push("The documentation lists up to 4 known speaker names; the gateway accepts more.");
  const strategy = p.chunking_strategy;
  if (strategy === void 0 || strategy === "auto") return;
  if (typeof strategy !== "object" || Array.isArray(strategy)) fail("chunking-strategy", "chunking_strategy", 'Live verification: expected "auto" or {"type":"server_vad", ...}');
  const vad = strategy;
  if (vad.type !== "server_vad") fail("chunking-strategy", "chunking_strategy.type", "Live verification: the only supported chunking strategy is server_vad");
  for (const key of ["prefix_padding_ms", "silence_duration_ms"]) {
    const value = vad[key];
    if (value !== void 0 && (typeof value !== "number" || !Number.isFinite(value) || value < 0)) {
      fail("chunking-strategy", `chunking_strategy.${key}`, "Live verification: expected a duration of 0 milliseconds or more");
    }
  }
  const threshold = vad.threshold;
  if (threshold !== void 0 && (typeof threshold !== "number" || !Number.isFinite(threshold) || threshold < 0 || threshold > 1)) {
    fail("chunking-strategy", "chunking_strategy.threshold", "Live verification: expected a threshold between 0 and 1");
  }
}
function validateAudioProviderFields(p, routes, profile, model) {
  for (const route of routes) {
    for (const key of Object.keys(p)) {
      if (key === "model" || key === "provider") continue;
      if (audioFieldAccepted(profile, model, route.provider, key)) continue;
      fail("capability", key, `Live verification: ${route.provider} does not accept ${key} for ${model}; choose a provider that does or remove the parameter`);
    }
  }
}
function validateRouteFields(p, routes, media, warnings, profile) {
  const supplied = media ? object(p.input, "input") : p;
  for (const route of routes) {
    const byPath = new Map(Object.values(route.parameter_constraints).map((v) => [v.wire_path, v]));
    for (const [key, value] of Object.entries(supplied)) {
      if (!media && ["user", "file"].includes(key)) continue;
      const path = media ? `input.${key}` : key;
      const fallback = media ? key === "prompt" ? dtoField(profile, key) : void 0 : dtoField(profile, key);
      const field = byPath.get(path) ?? (fallback ? { ...fallback, type_source: "openapi", wire_path: path } : void 0);
      if (!byPath.has(path) && fallback) warnings.push(`${route.provider}: ${path} has an operation DTO type but no per-route parameter metadata.`);
      const name = Object.entries(route.parameter_constraints).find(([, f]) => f.wire_path === path)?.[0];
      if (!field || !field.types.length || field.type_source === "unresolved") fail("unknown-contract", path, `No resolved parameter type for ${route.provider}`);
      if (name && route.explicit_type_conflicts.includes(name)) fail("contract-conflict", path, `Catalog and endpoint disagree for ${route.provider}; automatic coercion is disabled`);
      const kind = value === null ? "null" : Array.isArray(value) ? "array" : typeof value;
      if (!field.types.includes(kind)) fail("type", path, `Expected ${field.types.join(" or ")} for ${route.provider}`);
      const c = field.constraints;
      if (kind === "object" || kind === "array") {
        const schema = effectiveField(profile, key);
        if (!schema) fail("unsupported", path, "No public item schema is available");
        if (["images", "reference_images", "videos", "audios"].includes(key)) validateMediaFiles(value, path, key === "videos" ? "video" : key === "audios" ? "audio" : "image");
        else validateSchema(value, schema, path);
        if (Array.isArray(value)) {
          if (typeof c.min === "number" && value.length < c.min || typeof c.max === "number" && value.length > c.max) fail("item-count", path, `Item count is outside ${route.provider} limits`);
        }
      }
      if (Array.isArray(c.values)) {
        const allowed = c.values;
        const values = Array.isArray(value) ? value : [value];
        const booleanText2 = allowed.every((v) => v === "true" || v === "false") && values.every((item) => typeof item === "boolean");
        if (!booleanText2 && values.some((item) => allowed.some((v) => typeof v !== typeof item))) fail("contract-conflict", path, "Enum values and declared type disagree");
        if (values.some((item) => !allowed.some((v) => v === item || booleanText2 && v === String(item)))) fail("enum", path, `Value is not listed for ${route.provider}`);
      }
      if (typeof value === "number" && value !== c.auto_value) {
        if (typeof c.min === "number" && value < c.min || typeof c.max === "number" && value > c.max) fail("range", path, `Value is outside ${route.provider} limits`);
      }
      if (typeof value === "string" && (typeof c.min === "number" || typeof c.max === "number")) {
        const parsed = Number(value.trim());
        if (value.trim() !== "" && Number.isFinite(parsed) && (typeof c.min === "number" && parsed < c.min || typeof c.max === "number" && parsed > c.max)) {
          fail("range", path, `Value is outside ${route.provider} limits`);
        }
      }
      if (typeof value === "string" && typeof c.max_length === "number" && value.length > c.max_length) fail("length", path, `Text exceeds ${route.provider} limits`);
    }
    for (const field of byPath.values()) if (field.constraints.required === true && atPath(p, field.wire_path) === void 0) fail("required", field.wire_path, `Required by ${route.provider}; defaults are not inserted automatically`);
  }
}
function compileRequest(input, catalog) {
  const config = object(safeJson(input), "config");
  keysOnly(config, ["profile", "model", "parameters", "provider", "representation"], "config");
  if (typeof config.profile !== "string" || !Object.hasOwn(operations, config.profile)) fail("profile", "profile", "Unsupported or unresolved operation profile");
  const profile = config.profile;
  const op = operations[profile];
  if (config.representation !== void 0 && !["body", "alias"].includes(String(config.representation))) fail("representation", "representation", "Expected body or alias");
  const parsed = parseModel(config.model);
  const hasAliases = config.model.includes("@");
  if (profile !== "chat" && (hasAliases || config.representation === "alias")) fail("alias-profile", "model", "Aliases are documented only for chat-style APIs");
  const model = catalog.find((m) => m.model === parsed.model);
  if (!model || model.primary_profile !== profile) fail("catalog", "model", "Model is absent or does not match this operation");
  if (model.providers_list_missing || !model.routes.length || model.routes.some((r) => r.source !== "providers")) fail("catalog-incomplete", "model", "Full provider metadata is required for this local profile");
  const p = { ...object(config.parameters, "parameters") };
  if (parsed.hasProviderAlias && config.provider !== void 0) fail("alias-conflict", "provider", "provider alias conflicts with any body provider object");
  const bodyProvider = config.provider === void 0 ? {} : object(config.provider, "provider");
  if (parsed.hasFallbackAlias && bodyProvider.allow_fallbacks !== void 0) fail("alias-conflict", "provider.allow_fallbacks", "Duplicate fallback setting");
  if (parsed.effort !== void 0 && p.reasoning !== void 0 && object(p.reasoning, "reasoning").effort !== void 0) fail("alias-conflict", "reasoning.effort", "Duplicate reasoning effort");
  if (parsed.effort !== void 0) p.reasoning = { ...object(p.reasoning ?? {}, "reasoning"), effort: parsed.effort };
  const provider = validateProvider({ ...parsed.provider, ...bodyProvider }, model.routes.map((r) => r.provider));
  const candidates = model.routes.filter((r) => (!provider.only || provider.only.includes(r.provider)) && !provider.ignore?.includes(r.provider));
  if (p.user !== void 0) text(p.user, "user", 256);
  let response = op.response;
  const warnings = ["Validated against a public-contract snapshot. The constructor does not execute this configuration."];
  if (profile === "chat") {
    validateChat(p, candidates, model, warnings);
    if (p.stream === true) response = "sse";
  } else if (profile.endsWith(".media")) {
    keysOnly(p, ["input", "async", "user"], "parameters");
    const mediaInput = object(p.input, "input");
    text(mediaInput.prompt, "input.prompt");
    if (p.async !== void 0 && typeof p.async !== "boolean") fail("type", "async", "Expected a boolean");
    validateRouteFields(p, candidates, true, warnings, profile);
    if (model.model === "suno/generate" && mediaInput.duration !== void 0 && mediaInput.customMode !== true) {
      fail("media-dependency", "input.duration", "Live verification: Suno accepts duration only with customMode");
    }
    if (mediaInput.customMode === true) {
      const documented = new Set(model.routes.flatMap((route) => Object.keys(route.parameter_constraints ?? {})));
      const missing2 = ["style", "title"].filter((key) => documented.has(key) && (typeof mediaInput[key] !== "string" || !String(mediaInput[key]).trim()));
      if (missing2.length) fail("mode-requirement", "input.customMode", `The extended mode requires ${missing2.join(" and ")}`);
    }
  } else {
    const isTts = profile === "audio.tts";
    if (!isTts && p.language === "auto") delete p.language;
    keysOnly(p, audioBodyFields(profile), "parameters");
    if (isTts) {
      text(p.input, "input", 5e3);
      text(p.voice, "voice", 256);
    } else {
      if (p.file === void 0 || typeof p.file === "string" && !p.file.trim()) fail("attachment-missing", "file", "Attach an audio file or give a link to it");
      text(p.file, "file", 9e5);
      if (model.model === "openai/whisper-1" && /^https:/u.test(p.file)) fail("stt-url", "file", "Live verification: Whisper JSON file URL is rejected; use base64");
      if (!/^https:\/\/[^\s]+$/u.test(p.file) && !/^data:audio\/[A-Za-z0-9.+-]+;base64,[A-Za-z0-9+/=]+$/u.test(p.file)) fail("file", "file", "Use an HTTPS URL or an audio base64 data URL; no local file is uploaded");
      if (["text", "srt", "vtt"].includes(String(p.response_format))) response = "text";
      validateSttLiveFields(p, warnings);
    }
    validateAudioProviderFields(p, candidates, profile, model.model);
    validateRouteFields(p, candidates, false, warnings, profile);
  }
  const canonicalBody = { model: parsed.model, ...p };
  if (Object.keys(provider).length) canonicalBody.provider = provider;
  let body = { ...canonicalBody };
  if (config.representation === "alias") {
    const alias = toAlias(parsed.model, provider, p);
    body = { model: alias.model, ...alias.parameters };
  }
  if (response === "media") warnings.push("Completed media data is printed as JSON; this example does not automatically download assets.");
  if (provider.sort && provider.order) warnings.push("The server precedence of order and sort requires confirmation; both settings are preserved.");
  if (provider.max_price) warnings.push("max_price limits RUB rates, not the total generation budget.");
  return freezeJson({ version: 1, profile, origin: "https://polza.ai", method: "POST", path: op.path, canonicalBody, body, response, warnings, verification: "local-contract-only" });
}

// src/emitters/node.ts
function nodeProgram(plan, s, ts, inlineData = false) {
  const type = (value) => ts ? value : "";
  return `// Server-side Node.js 24+. ${inlineData ? "The request data is embedded below." : "Keep request.json next to this file."}
// Run: node ${ts ? "request.ts" : "request.mjs"}
${!inlineData || plan.response === "audio-base64" ? `import { ${[...!inlineData ? ["readFile"] : [], ...plan.response === "audio-base64" ? ["writeFile"] : []].join(", ")} } from 'node:fs/promises';` : ""}

const key = process.env.POLZA_AI_API_KEY;
if (!key || /[\\r\\n\\0]/u.test(key)) throw new Error('Set POLZA_AI_API_KEY to a valid value before running.');
const origin = ${JSON.stringify(s.origin)};
const deadline = Date.now() + ${s.maxWaitMs};
const requestBody = ${inlineData ? `JSON.stringify(${JSON.stringify(plan.body, null, 2)})` : "await readFile(new URL('./request.json', import.meta.url), 'utf8')"};
JSON.parse(requestBody); // fail before POST if the data file is malformed
class ExampleError extends Error {}
async function request(method${type(": string")}, path${type(": string")}, payload${type(": string | undefined")} = undefined) {
  const remaining = deadline - Date.now();
  if (remaining <= 0) throw new ExampleError('Deadline exceeded');
  const response = await fetch(origin + path, {
    method, redirect: 'error',
    headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },
    ...(payload === undefined ? {} : { body: payload }),
    signal: AbortSignal.timeout(Math.min(${s.timeoutMs}, remaining)),
  });
  if (!response.ok) { await response.body?.cancel(); throw new ExampleError('HTTP ' + response.status); }
  return response;
}
async function readText(response${type(": Response")}) {
  let text = '';
  let size = 0;
  const decoder = new TextDecoder('utf-8', { fatal: true });
  if (!response.body) throw new ExampleError('Empty response');
  for await (const chunk of response.body) {
    size += chunk.length;
    if (size > 64 * 1024 * 1024) throw new ExampleError('Response exceeds 64 MB');
    text += decoder.decode(chunk, { stream: true });
  }
  return text + decoder.decode();
}
${plan.response === "sse" ? `async function readSse(response${type(": Response")}) {
  if (!response.headers.get('content-type')?.includes('text/event-stream') || !response.body) throw new ExampleError('Expected SSE response');
  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8', { fatal: true });
  let buffer = '';
  try {
    while (true) {
      const { value, done } = await reader.read();
      buffer += done ? decoder.decode() : decoder.decode(value, { stream: true });
      buffer = buffer.replace(/\\r\\n/gu, '\\n');
      if (buffer.length > 1_000_000) throw new ExampleError('SSE frame exceeds 1 MB');
      let end;
      while ((end = buffer.indexOf('\\n\\n')) >= 0) {
        const frame = buffer.slice(0, end); buffer = buffer.slice(end + 2);
        const data = frame.split('\\n').filter(line => line.startsWith('data:')).map(line => line.slice(5).replace(/^ /u, '')).join('\\n');
        if (data === '[DONE]') return;
        if (!data) continue;
        const event = JSON.parse(data);
        if (event.error) throw new ExampleError('SSE error');
        // Preserve content, reasoning, tool-call deltas and usage; never execute tools.
        console.log(JSON.stringify(event));
      }
      if (done) throw new ExampleError('SSE ended without DONE');
    }
  } finally { await reader.cancel(); reader.releaseLock(); }
}
` : ""}
try {
  let response = await request('POST', ${JSON.stringify(plan.path)}, requestBody);
${plan.response === "sse" ? "  await readSse(response);" : plan.response === "text" ? "  console.log(await readText(response));" : `  let result = JSON.parse(await readText(response));
${plan.response === "media" ? `  while (true) {
    if (result.status === 'completed') break;
    if (result.status === 'failed' || result.status === 'cancelled') throw new ExampleError('Task ' + result.status);
    if (!['pending', 'processing'].includes(result.status)) throw new ExampleError('Unknown task status');
    if (typeof result.id !== 'string' || !/^[A-Za-z0-9_-]{1,200}$/u.test(result.id)) throw new ExampleError('Invalid task ID');
    const remaining = deadline - Date.now();
    if (remaining <= 0) throw new ExampleError('Deadline exceeded');
    await new Promise(resolve => setTimeout(resolve, Math.min(${s.pollMs}, remaining)));
    response = await request('GET', '/api/v1/media/' + encodeURIComponent(result.id));
    result = JSON.parse(await readText(response));
  }
  // Exact media asset shape is not yet confirmed; preserve the complete result.
` : ""}${plan.response === "audio-base64" ? `  const extensions${type(": Record<string, string>")} = { 'audio/mpeg': 'mp3', 'audio/mp3': 'mp3', 'audio/wav': 'wav', 'audio/x-wav': 'wav', 'audio/ogg': 'ogg', 'audio/opus': 'opus', 'audio/aac': 'aac', 'audio/flac': 'flac', 'audio/pcm': 'pcm' };
  const extension = extensions[result.contentType];
  if (!extension || typeof result.audio !== 'string' || !result.audio.length || !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/u.test(result.audio)) throw new ExampleError('Invalid audio envelope');
  const path = new URL('./output.' + extension, import.meta.url);
  await writeFile(path, Buffer.from(result.audio, 'base64'), { flag: 'wx' });
  console.log('Saved output.' + extension);` : "  console.log(JSON.stringify(result, null, 2));"}`}
} catch (error) {
  console.error(error instanceof ExampleError ? error.message : 'Request failed: network, timeout or invalid response.');
  process.exitCode = 1;
}
`;
}

// src/emitters/literals.ts
function pythonLiteral(value, level = 0) {
  if (value === null) return "None";
  if (typeof value === "boolean") return value ? "True" : "False";
  if (typeof value === "string" || typeof value === "number") return JSON.stringify(value);
  const indent = "    ".repeat(level);
  const next = indent + "    ";
  if (Array.isArray(value)) return value.length ? `[
${value.map((item) => next + pythonLiteral(item, level + 1)).join(",\n")}
${indent}]` : "[]";
  const entries = Object.entries(value);
  return entries.length ? `{
${entries.map(([key, item]) => `${next}${JSON.stringify(key)}: ${pythonLiteral(item, level + 1)}`).join(",\n")}
${indent}}` : "{}";
}

// src/emitters/python.ts
function pythonProgram(plan, s, inlineData = false) {
  return `# Python 3.10+, standard library. ${inlineData ? "The request data is embedded below." : "Keep request.json next to this file."}
# Run: python request.py
${inlineData ? `import json

payload = json.dumps(${pythonLiteral(plan.body)}, ensure_ascii=True).encode("utf-8")

` : ""}${plan.response === "audio-base64" ? "import base64\n" : ""}
${inlineData ? "" : "import json\n"}import os
from pathlib import Path
${plan.response === "media" ? "import re" : ""}
import sys
import time
import urllib.error
import urllib.request

key = os.environ.get("POLZA_AI_API_KEY", "")
if not key or any(c in key for c in "\\r\\n\\0"):
    raise SystemExit("Set POLZA_AI_API_KEY to a valid value before running.")
origin = ${JSON.stringify(s.origin)}
deadline = time.monotonic() + ${s.maxWaitMs / 1e3}
folder = Path(__file__).resolve().parent
${inlineData ? "# The request payload is embedded at the top." : 'payload = (folder / "request.json").read_bytes()'}
json.loads(payload)  # malformed data fails before POST

class ExampleError(Exception):
    pass

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None

opener = urllib.request.build_opener(NoRedirect())
def request(method, path, data=None):
    remaining = deadline - time.monotonic()
    if remaining <= 0:
        raise ExampleError("Deadline exceeded")
    req = urllib.request.Request(origin + path, data=data, method=method,
        headers={"Authorization": "Bearer " + key, "Content-Type": "application/json"})
    try:
        return opener.open(req, timeout=min(${s.timeoutMs / 1e3}, remaining))
    except urllib.error.HTTPError as exc:
        status = exc.code
        exc.close()
        raise ExampleError("HTTP " + str(status)) from None

def read_text(response):
    data = response.read(64 * 1024 * 1024 + 1)
    if len(data) > 64 * 1024 * 1024:
        raise ExampleError("Response exceeds 64 MB")
    return data.decode("utf-8")

${plan.response === "sse" ? `def read_sse(response):
    if "text/event-stream" not in response.headers.get("Content-Type", ""):
        raise ExampleError("Expected SSE response")
    parts = []
    size = 0
    while True:
        raw = response.readline(1_000_001)
        if not raw:
            raise ExampleError("SSE ended without DONE")
        size += len(raw)
        if size > 1_000_000:
            raise ExampleError("SSE frame exceeds 1 MB")
        line = raw.decode("utf-8").rstrip("\\r\\n")
        if line == "":
            data = "\\n".join(parts)
            parts, size = [], 0
            if data == "[DONE]":
                return
            if data:
                event = json.loads(data)
                if "error" in event:
                    raise ExampleError("SSE error")
                # Preserve all deltas; tools are data and are never executed.
                print(json.dumps(event, ensure_ascii=False), flush=True)
        elif line.startswith("data:"):
            value = line[5:]
            parts.append(value[1:] if value.startswith(" ") else value)

` : ""}try:
    with request("POST", ${JSON.stringify(plan.path)}, payload) as response:
${plan.response === "sse" ? "        read_sse(response)" : plan.response === "text" ? "        print(read_text(response))" : `        result = json.loads(read_text(response))
${plan.response === "media" ? `    while result.get("status") != "completed":
        status = result.get("status")
        if status in ("failed", "cancelled"):
            raise ExampleError("Task " + status)
        if status not in ("pending", "processing"):
            raise ExampleError("Unknown task status")
        task_id = result.get("id")
        if not isinstance(task_id, str) or not re.fullmatch(r"[A-Za-z0-9_-]{1,200}", task_id):
            raise ExampleError("Invalid task ID")
        remaining = deadline - time.monotonic()
        if remaining <= 0:
            raise ExampleError("Deadline exceeded")
        time.sleep(min(${s.pollMs / 1e3}, remaining))
        with request("GET", "/api/v1/media/" + task_id) as response:
            result = json.loads(read_text(response))
    # Preserve the complete result until the media asset schema is confirmed.
` : ""}${plan.response === "audio-base64" ? `    extensions = {"audio/mpeg": "mp3", "audio/mp3": "mp3", "audio/wav": "wav", "audio/x-wav": "wav", "audio/ogg": "ogg", "audio/opus": "opus", "audio/aac": "aac", "audio/flac": "flac", "audio/pcm": "pcm"}
    extension = extensions.get(result.get("contentType"))
    if not extension or not isinstance(result.get("audio"), str) or not result["audio"]:
        raise ExampleError("Invalid audio envelope")
    audio = base64.b64decode(result["audio"], validate=True)
    with (folder / ("output." + extension)).open("xb") as output:
        output.write(audio)
    print("Saved output." + extension)` : "    print(json.dumps(result, ensure_ascii=False, indent=2))"}`}
except ExampleError as exc:
    print(str(exc), file=sys.stderr)
    sys.exit(1)
except Exception:
    print("Request failed: network, timeout, invalid response or output already exists.", file=sys.stderr)
    sys.exit(1)
`;
}

// src/emitters/shell.ts
function bashProgram(plan, s) {
  if (["json", "text", "sse"].includes(plan.response)) return `#!/usr/bin/env bash
# Keep request.json next to this file. Run: bash request.sh
set -euo pipefail
cd -- "$(dirname -- "\${BASH_SOURCE[0]}")"
key="\${POLZA_AI_API_KEY:-}"
if [[ -z "$key" || "$key" == *$'\\r'* || "$key" == *$'\\n'* ]]; then
  echo 'Set POLZA_AI_API_KEY to a valid value before running.' >&2; exit 1
fi
curl --silent --show-error --fail --connect-timeout ${s.timeoutMs / 1e3} --max-time ${Math.min(s.timeoutMs, s.maxWaitMs) / 1e3} \\
  --request POST --header "Authorization: Bearer $key" \\
  --header 'Content-Type: application/json'${plan.response === "sse" ? " --no-buffer" : ""} \\
  --data-binary '@request.json' '${s.origin}${plan.path}'
`;
  return `#!/usr/bin/env bash
# Keep request.json next to this file. Run: bash request.sh
set -euo pipefail
cd -- "$(dirname -- "\${BASH_SOURCE[0]}")"
key="\${POLZA_AI_API_KEY:-}"
if [[ -z "$key" || "$key" == *$'\\r'* || "$key" == *$'\\n'* ]]; then
  echo 'Set POLZA_AI_API_KEY to a valid value before running.' >&2; exit 1
fi
command -v curl >/dev/null || { echo 'curl is required' >&2; exit 1; }
command -v jq >/dev/null || { echo 'jq is required' >&2; exit 1; }
${plan.response === "audio-base64" ? "command -v base64 >/dev/null || { echo 'base64 is required' >&2; exit 1; }\n" : ""}jq --binary empty request.json # avoid native Windows jq CRLF conversion
origin='${s.origin}'
deadline=$((SECONDS + ${Math.ceil(s.maxWaitMs / 1e3)}))
call() {
  local method="$1" path="$2"; shift 2
  local remaining=$((deadline - SECONDS)) timeout=${Math.ceil(s.timeoutMs / 1e3)}
  if (( remaining <= 0 )); then echo 'Deadline exceeded' >&2; return 1; fi
  if (( remaining < timeout )); then timeout=$remaining; fi
  curl --silent --show-error --fail --connect-timeout "$timeout" --max-time "$timeout" \\
    --request "$method" --header "Authorization: Bearer $key" \\
    --header 'Content-Type: application/json' "$origin$path" "$@"
}
${plan.response === "sse" ? `# curl displays raw SSE frames as they arrive; it does not execute tool calls.
call POST '${plan.path}' --no-buffer --data-binary '@request.json'
` : `response=$(call POST '${plan.path}' --data-binary '@request.json')
${plan.response === "text" ? `printf '%s\\n' "$response"
` : plan.response === "audio-base64" ? `content_type=$(printf '%s' "$response" | jq --binary -er '.contentType | strings')
case "$content_type" in
  audio/mpeg|audio/mp3) extension=mp3;; audio/wav|audio/x-wav) extension=wav;;
  audio/ogg) extension=ogg;; audio/opus) extension=opus;; audio/aac) extension=aac;;
  audio/flac) extension=flac;; audio/pcm) extension=pcm;;
  *) echo 'Invalid audio envelope' >&2; exit 1;;
esac
# noclobber prevents replacing a previous result.
(set -o noclobber; printf '%s' "$response" | jq --binary -er '.audio | strings | select(length > 0)' | base64 --decode > "output.$extension")
printf 'Saved output.%s\\n' "$extension"
` : `${plan.response === "media" ? `while true; do
  status=$(printf '%s' "$response" | jq --binary -er '.status | strings')
  case "$status" in
    completed) break;;
    failed|cancelled) printf 'Task %s\\n' "$status" >&2; exit 1;;
    pending|processing) ;;
    *) echo 'Unknown task status' >&2; exit 1;;
  esac
  task_id=$(printf '%s' "$response" | jq --binary -er '.id | strings')
  if [[ ! "$task_id" =~ ^[A-Za-z0-9_-]{1,200}$ ]]; then echo 'Invalid task ID' >&2; exit 1; fi
  sleep ${s.pollMs / 1e3}
  response=$(call GET "/api/v1/media/$task_id")
done
# Print the full result; the asset schema still needs confirmation.
` : ""}printf '%s\\n' "$response" | jq --binary .
`}`}`;
}
function powershellProgram(plan, s) {
  return `# PowerShell 7.4+, native curl.exe. Keep request.json next to this file.
# Run: pwsh -File request.ps1
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
$PSNativeCommandArgumentPassing = 'Standard'
$PSNativeCommandUseErrorActionPreference = $false
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false)
$key = $env:POLZA_AI_API_KEY
if ([string]::IsNullOrEmpty($key) -or $key.Contains([char]13) -or $key.Contains([char]10)) {
  throw 'Set POLZA_AI_API_KEY to a valid value before running.'
}
$null = Get-Command curl.exe -ErrorAction Stop
$bodyPath = Join-Path $PSScriptRoot 'request.json'
$null = Get-Content -LiteralPath $bodyPath -Raw -Encoding utf8 | ConvertFrom-Json
$origin = '${s.origin}'
$timer = [System.Diagnostics.Stopwatch]::StartNew()
function Invoke-Polza([string]$Method, [string]$Path, [string[]]$Extra = @(), [switch]$Streaming) {
  $remaining = ${s.maxWaitMs} - $timer.ElapsedMilliseconds
  if ($remaining -le 0) { throw 'Deadline exceeded' }
  $timeout = ([Math]::Min(${s.timeoutMs}, $remaining) / 1000).ToString('0.###', [Globalization.CultureInfo]::InvariantCulture)
  $curlArgs = @('--silent', '--show-error', '--fail', '--connect-timeout', $timeout, '--max-time', $timeout,
    '--request', $Method, '--header', ('Authorization: Bearer ' + $key),
    '--header', 'Content-Type: application/json', ($origin + $Path)) + $Extra
  if ($Streaming) {
    & curl.exe @curlArgs
    if ($LASTEXITCODE -ne 0) { throw ('HTTP request failed (curl exit ' + $LASTEXITCODE + ')') }
  } else {
    $raw = & curl.exe @curlArgs
    if ($LASTEXITCODE -ne 0) { throw ('HTTP request failed (curl exit ' + $LASTEXITCODE + ')') }
    return ($raw -join [Environment]::NewLine)
  }
}
try {
${plan.response === "sse" ? `  # Display raw SSE frames as received. Tools are data, never executable code.
  Invoke-Polza -Method POST -Path '${plan.path}' -Extra @('--no-buffer', '--data-binary', ('@' + $bodyPath)) -Streaming
` : `  $raw = Invoke-Polza -Method POST -Path '${plan.path}' -Extra @('--data-binary', ('@' + $bodyPath))
${plan.response === "text" ? "  Write-Output $raw\n" : `  $result = $raw | ConvertFrom-Json -AsHashtable
${plan.response === "media" ? `  while ($result.status -ne 'completed') {
    if ($result.status -in @('failed', 'cancelled')) { throw ('Task ' + $result.status) }
    if ($result.status -notin @('pending', 'processing')) { throw 'Unknown task status' }
    if ($result.id -isnot [string] -or $result.id -cnotmatch '^[A-Za-z0-9_-]{1,200}$') { throw 'Invalid task ID' }
    $remaining = ${s.maxWaitMs} - $timer.ElapsedMilliseconds
    if ($remaining -le 0) { throw 'Deadline exceeded' }
    Start-Sleep -Milliseconds ([int][Math]::Min(${s.pollMs}, $remaining))
    $raw = Invoke-Polza -Method GET -Path ('/api/v1/media/' + [Uri]::EscapeDataString($result.id))
    $result = $raw | ConvertFrom-Json -AsHashtable
  }
` : ""}${plan.response === "audio-base64" ? `  $extensions = @{ 'audio/mpeg'='mp3'; 'audio/mp3'='mp3'; 'audio/wav'='wav'; 'audio/x-wav'='wav'; 'audio/ogg'='ogg'; 'audio/opus'='opus'; 'audio/aac'='aac'; 'audio/flac'='flac'; 'audio/pcm'='pcm' }
  $extension = $extensions[$result.contentType]
  if (-not $extension -or $result.audio -isnot [string] -or $result.audio.Length -eq 0) { throw 'Invalid audio envelope' }
  $bytes = [Convert]::FromBase64String($result.audio)
  $outputPath = Join-Path $PSScriptRoot ('output.' + $extension)
  $output = [IO.File]::Open($outputPath, [IO.FileMode]::CreateNew)
  try { $output.Write($bytes, 0, $bytes.Length) } finally { $output.Dispose() }
  Write-Output ('Saved output.' + $extension)
` : "  $result | ConvertTo-Json -Depth 100\n"}`}`}} catch {
  # HTTP/body errors may contain private data. Print only this controlled message.
  $message = $_.Exception.Message
  if ($message -match '^(Deadline exceeded|Task (failed|cancelled)|Unknown task status|Invalid task ID|Invalid audio envelope|HTTP request failed \\(curl exit [0-9]+\\))$') {
    [Console]::Error.WriteLine($message)
  } else {
    [Console]::Error.WriteLine('Request failed: HTTP, timeout, invalid response or output already exists.')
  }
  exit 1
}
`;
}

// src/emitters/snippets.ts
function audioFile(plan) {
  const format = String(plan.body.response_format ?? "audio");
  return `output.${["mp3", "wav", "opus", "aac", "flac", "pcm"].includes(format) ? format : "audio"}`;
}
function bashLiteral(value) {
  return `'${value.replaceAll("'", `'\\''`)}'`;
}
function apiSnippet(plan, settings, language) {
  const url = settings.origin + plan.path;
  const body = JSON.stringify(plan.body, null, 2);
  const status = plan.response === "media" && plan.body.async === true;
  const audio = plan.response === "audio-base64";
  const stream = plan.response === "sse";
  if (language === "curl-bash") {
    const largeBody = new TextEncoder().encode(body).length > 16e3;
    let delimiter = "POLZA_REQUEST_JSON";
    while (body.split("\n").includes(delimiter)) delimiter += "_";
    const destination = audio ? " > response.json" : "";
    const post = `curl --fail-with-body -X POST "${url}"${stream ? " --no-buffer" : ""} \\
  -H "Authorization: Bearer $POLZA_AI_API_KEY" \\
  -H "Content-Type: application/json" \\
  ${largeBody ? `--data-binary @-${destination} <<'${delimiter}'
${body}
${delimiter}` : `--data-raw ${bashLiteral(body)}${destination}`}`;
    if (audio) {
      return `${post}

jq -rj .audio response.json | base64 --decode > ${audioFile(plan)}
`;
    }
    if (status) {
      return `${post}

curl --fail-with-body -X GET "${settings.origin}/api/v1/media/TASK_ID" \\
  -H "Authorization: Bearer $POLZA_AI_API_KEY"
`;
    }
    return `${post}
`;
  }
  if (language === "python") {
    const imports = ["import os", "import requests"];
    if (audio) imports.push("import base64", "from pathlib import Path");
    imports.push("import sys");
    const prelude = imports.join("\n") + (audio ? '\n\nsys.stderr.reconfigure(encoding="utf-8")\n' : '\n\nsys.stdout.reconfigure(encoding="utf-8")\nsys.stderr.reconfigure(encoding="utf-8")\n');
    return `${prelude}
headers = {"Authorization": f"Bearer {os.environ['POLZA_AI_API_KEY']}"}
response = requests.post(
    ${JSON.stringify(url)},
    headers=headers,
    json=${pythonLiteral(plan.body, 1)},${stream ? "\n    stream=True," : ""}
)
if not response.ok:
    raise SystemExit(response.text)
${stream ? `for line in response.iter_lines():
    print(line.decode("utf-8"), flush=True)` : plan.response === "text" ? "print(response.text)" : audio ? `result = response.json()
Path(${JSON.stringify(audioFile(plan))}).write_bytes(base64.b64decode(result["audio"]))` : status ? `task = response.json()
response = requests.get(
    ${JSON.stringify(settings.origin + "/api/v1/media/")} + task["id"],
    headers=headers,
)
print(response.json())` : "print(response.json())"}
`;
  }
  const data = body.replaceAll("\n", "\n  ");
  if (language === "openai-sdk") {
    return `import OpenAI from 'openai';
${audio ? "import { writeFile } from 'node:fs/promises';\n" : ""}
const client = new OpenAI({
  baseURL: ${JSON.stringify(settings.origin + "/api/v1")},
  apiKey: process.env.POLZA_AI_API_KEY,
  maxRetries: 0,
});

const ${stream ? "stream" : "result"} = await ${plan.profile === "chat" ? `client.chat.completions.create(${body})` : `client.post(${JSON.stringify(plan.path.slice("/api/v1".length))}, {
  body: ${data},
})`};
${stream ? `for await (const chunk of stream) {
  console.log(JSON.stringify(chunk));
}` : audio ? `await writeFile(${JSON.stringify(audioFile(plan))}, Buffer.from(result.audio, 'base64'));` : status ? `const status = await client.get('/media/' + result.id);
console.log(JSON.stringify(status, null, 2));` : plan.response === "text" ? "console.log(result);" : "console.log(JSON.stringify(result, null, 2));"}
`;
  }
  return `${audio ? "import { writeFile } from 'node:fs/promises';\n\n" : ""}const headers = {
  Authorization: \`Bearer \${process.env.POLZA_AI_API_KEY}\`,
  'Content-Type': 'application/json',
};

const response = await fetch(${JSON.stringify(url)}, {
  method: 'POST',
  headers,
  body: JSON.stringify(${data}),
});
if (!response.ok) {
  throw new Error(await response.text());
}
${stream ? `for await (const chunk of response.body${language === "typescript" ? "!" : ""}) {
  process.stdout.write(chunk);
}` : plan.response === "text" ? "console.log(await response.text());" : audio ? `const result = await response.json();
await writeFile(${JSON.stringify(audioFile(plan))}, Buffer.from(result.audio, 'base64'));` : status ? `const task = await response.json();
const status = await fetch(${JSON.stringify(settings.origin + "/api/v1/media/")} + task.id, { headers });
if (!status.ok) {
  throw new Error(await status.text());
}
console.log(JSON.stringify(await status.json(), null, 2));` : "console.log(JSON.stringify(await response.json(), null, 2));"}
`;
}

// src/emitters/index.ts
var defaults = { origin: "https://polza.ai", timeoutMs: 12e4, pollMs: 2e3, maxWaitMs: 6e5 };
function render(plan, settings, inlineData = false, ui = false) {
  if (plan.version !== 1 || plan.origin !== defaults.origin || plan.method !== "POST" || operations[plan.profile]?.path !== plan.path) throw new Error("Expected a compiled RequestPlan");
  const body = `${JSON.stringify(plan.body, null, 2)}
`;
  const bundle = (language, entrypoint, program, prerequisites) => ({
    language,
    entrypoint,
    files: Object.freeze({ "request.json": body, [entrypoint]: program }),
    prerequisites: Object.freeze(prerequisites)
  });
  if (ui) return [
    bundle("curl-bash", "request.sh", apiSnippet(plan, settings, "curl-bash"), ["Bash", "curl", "jq/base64 for media/audio", "POLZA_AI_API_KEY"]),
    bundle("python", "request.py", apiSnippet(plan, settings, "python"), ["Python 3.10+", "pip install requests", "POLZA_AI_API_KEY"]),
    bundle("typescript", "request.ts", apiSnippet(plan, settings, "typescript"), ["Node.js 24+", "POLZA_AI_API_KEY"]),
    bundle("javascript", "request.mjs", apiSnippet(plan, settings, "javascript"), ["Node.js 24+", "POLZA_AI_API_KEY"]),
    bundle("openai-sdk", "request.mjs", apiSnippet(plan, settings, "openai-sdk"), ["Node.js 24+", "npm install openai", "POLZA_AI_API_KEY"])
  ];
  return [
    bundle("python", "request.py", pythonProgram(plan, settings, inlineData), ["Python 3.10+", "POLZA_AI_API_KEY environment variable"]),
    bundle("typescript", "request.ts", nodeProgram(plan, settings, true, inlineData), ["Node.js 24+", "POLZA_AI_API_KEY environment variable"]),
    bundle("javascript", "request.mjs", nodeProgram(plan, settings, false, inlineData), ["Node.js 24+", "POLZA_AI_API_KEY environment variable"]),
    bundle("curl-bash", "request.sh", bashProgram(plan, settings), ["Bash 4+", "curl 7.76+", "jq 1.7+ (media only)", "base64 (TTS only)", "POLZA_AI_API_KEY environment variable"]),
    bundle("curl-powershell", "request.ps1", powershellProgram(plan, settings), ["PowerShell 7.4+", "curl.exe 7.76+", "POLZA_AI_API_KEY environment variable"])
  ];
}
function emitExamples(plan, options = {}) {
  return render(plan, defaults, options.inlineData || options.ui, options.ui);
}

// src/ui/catalog-info.ts
var initialModels = {
  chat: "openai/gpt-4o",
  "image.media": "google/gemini-nano-banana-2.1",
  "video.media": "grok-imagine-video-1-5",
  "music.media": "suno/generate",
  "audio.tts": "openai/tts-1",
  "audio.stt": "openai/whisper-1"
};
var names = {
  "openai/gpt-4o": "GPT-4o",
  "google/gemini-nano-banana-2.1": "Gemini Nano Banana 2.1",
  "google/gemini-omni-1.1-flash": "Gemini Omni 1.1 Flash",
  "grok-imagine-video-1-5": "Grok Imagine Video",
  "openai/tts-1": "TTS-1",
  "openai/whisper-1": "Whisper-1",
  "suno/generate": "Suno Generate",
  "suno/mashup": "Suno Mashup",
  "suno/sounds": "Suno Sounds",
  "google/lyria-3-pro-preview": "Lyria 3 Pro",
  "google/lyria-3-clip-preview": "Lyria 3 Clip"
};
function modelName(id) {
  return Object.hasOwn(names, id) ? names[id] : id.includes("/") ? id.split("/").slice(1).join("/") : id;
}

// src/core/catalog-snapshot.ts
function parseCatalogSnapshot(input) {
  const fail3 = () => {
    throw new Error("Invalid public catalog snapshot");
  };
  const text2 = (v, max2 = 256) => typeof v === "string" && v.length > 0 && v.length <= max2;
  const strings2 = (v) => Array.isArray(v) && v.length <= 200 && v.every((item) => text2(item));
  if (!Array.isArray(input) || !input.length || input.length > 1e3) return fail3();
  const ids = /* @__PURE__ */ new Set();
  return input.map((item) => {
    const m = object(safeJson(item), "catalog.model");
    if (!text2(m.model) || ids.has(m.model) || !["chat", "image.media", "video.media", "audio.tts", "audio.stt", "music.media"].includes(String(m.primary_profile)) || typeof m.providers_list_missing !== "boolean") return fail3();
    ids.add(m.model);
    if (m.input_modalities !== void 0 && !strings2(m.input_modalities)) return fail3();
    if (!Array.isArray(m.routes) || m.routes.length > 100) return fail3();
    for (const value of m.routes) {
      const route = object(value, "catalog.route");
      if (!text2(route.provider) || !text2(route.source) || !strings2(route.supported_parameters) || !strings2(route.explicit_type_conflicts)) return fail3();
      const fields = object(route.parameter_constraints, "catalog.fields");
      if (Object.keys(fields).length > 200) return fail3();
      for (const value2 of Object.values(fields)) {
        const f = object(value2, "catalog.field");
        if (!text2(f.wire_path) || !strings2(f.types) || !text2(f.type_source)) return fail3();
        object(f.constraints, "catalog.constraints");
      }
      const capabilities = object(route.capabilities, "catalog.capabilities");
      for (const value2 of Object.values(capabilities)) {
        const c = object(value2, "catalog.capability");
        if (!text2(c.status) || c.values !== void 0 && !Array.isArray(c.values)) return fail3();
      }
    }
    return m;
  });
}

// docs/evidence/live-parameter-observations.json
var live_parameter_observations_default = {
  source: "https://polza.ai/api/v1/audio/speech, https://polza.ai/api/v1/audio/transcriptions",
  snapshot: "2026-11-05 00:50 MSK",
  note: "\u0416\u0438\u0432\u0430\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 05.11.2026: \u043A\u0430\u0436\u0434\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0438\u0437 \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0432 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u043C DTO \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u044C\u044E. complete=true \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u043F\u0435\u0440\u0435\u0431\u0440\u0430\u043D\u044B \u0432\u0441\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F DTO, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 accepted \u2014 \u043F\u043E\u043B\u043D\u044B\u0439 \u043D\u0430\u0431\u043E\u0440 \u043C\u043E\u0434\u0435\u043B\u0438. complete=false \u2014 \u0444\u043E\u0440\u043C\u0430\u0442\u043E\u0432 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043E \u043C\u0435\u043D\u044C\u0448\u0435, \u0438 \u0432\u044B\u0432\u043E\u0434 \u0434\u0435\u043B\u0430\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E \u043E\u0442\u043A\u043B\u043E\u043D\u0451\u043D\u043D\u044B\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u043C.",
  observations: {
    "ai-sage/gigaam-v3": {
      response_format: {
        accepted: [
          "diarized_json",
          "json",
          "srt",
          "text",
          "verbose_json",
          "vtt"
        ],
        rejected: [],
        probed: [
          "json",
          "text",
          "srt",
          "verbose_json",
          "vtt",
          "diarized_json"
        ],
        complete: true
      }
    },
    "deepgram/aura-2": {
      response_format: {
        accepted: [
          "mp3",
          "pcm",
          "wav"
        ],
        rejected: [
          "aac",
          "flac",
          "opus"
        ],
        probed: [
          "mp3",
          "wav",
          "pcm",
          "opus",
          "aac",
          "flac"
        ],
        complete: true
      }
    },
    "elevenlabs/eleven-v4": {
      response_format: {
        accepted: [
          "mp3",
          "pcm",
          "wav"
        ],
        rejected: [
          "aac",
          "flac",
          "opus"
        ],
        probed: [
          "mp3",
          "wav",
          "pcm",
          "opus",
          "aac",
          "flac"
        ],
        complete: true
      }
    },
    "google/chirp-3": {
      response_format: {
        accepted: [
          "json",
          "text"
        ],
        rejected: [
          "diarized_json",
          "srt",
          "verbose_json",
          "vtt"
        ],
        probed: [
          "json",
          "text",
          "srt",
          "verbose_json",
          "vtt",
          "diarized_json"
        ],
        complete: true
      }
    },
    "google/gemini-3.1-flash-tts-preview": {
      response_format: {
        accepted: [
          "mp3",
          "pcm",
          "wav"
        ],
        rejected: [
          "aac",
          "flac",
          "opus"
        ],
        probed: [
          "mp3",
          "wav",
          "pcm",
          "opus",
          "aac",
          "flac"
        ],
        complete: true
      }
    },
    "google/gemini-3.8-flash-lite-tts": {
      response_format: {
        accepted: [
          "mp3",
          "pcm",
          "wav"
        ],
        rejected: [
          "aac",
          "flac",
          "opus"
        ],
        probed: [
          "mp3",
          "wav",
          "pcm",
          "opus",
          "aac",
          "flac"
        ],
        complete: true
      }
    },
    "google/gemini-3.8-flash-tts": {
      response_format: {
        accepted: [
          "mp3",
          "pcm",
          "wav"
        ],
        rejected: [
          "aac",
          "flac",
          "opus"
        ],
        probed: [
          "mp3",
          "wav",
          "pcm",
          "opus",
          "aac",
          "flac"
        ],
        complete: true
      }
    },
    "microsoft/mai-voice-2": {
      response_format: {
        accepted: [
          "mp3",
          "pcm",
          "wav"
        ],
        rejected: [
          "aac",
          "flac",
          "opus"
        ],
        probed: [
          "mp3",
          "wav",
          "pcm",
          "opus",
          "aac",
          "flac"
        ],
        complete: true
      }
    },
    "microsoft/mai-voice-2-flash": {
      response_format: {
        accepted: [
          "mp3",
          "pcm",
          "wav"
        ],
        rejected: [
          "aac",
          "flac",
          "opus"
        ],
        probed: [
          "mp3",
          "wav",
          "pcm",
          "opus",
          "aac",
          "flac"
        ],
        complete: true
      }
    },
    "minimax/speech-2.8-hd": {
      response_format: {
        accepted: [
          "flac",
          "mp3",
          "pcm",
          "wav"
        ],
        rejected: [
          "aac",
          "opus"
        ],
        probed: [
          "mp3",
          "flac",
          "wav",
          "pcm",
          "opus",
          "aac"
        ],
        complete: true
      }
    },
    "minimax/speech-2.8-turbo": {
      response_format: {
        accepted: [
          "flac",
          "mp3",
          "pcm",
          "wav"
        ],
        rejected: [
          "aac",
          "opus"
        ],
        probed: [
          "mp3",
          "flac",
          "wav",
          "pcm",
          "opus",
          "aac"
        ],
        complete: true
      }
    },
    "mistralai/voxtral-mini-transcribe": {
      response_format: {
        accepted: [
          "json",
          "text"
        ],
        rejected: [
          "diarized_json",
          "srt",
          "verbose_json",
          "vtt"
        ],
        probed: [
          "json",
          "text",
          "srt",
          "verbose_json",
          "vtt",
          "diarized_json"
        ],
        complete: true
      }
    },
    "nvidia/parakeet-tdt-0.6b-v3": {
      response_format: {
        accepted: [
          "json",
          "text"
        ],
        rejected: [
          "diarized_json",
          "srt",
          "verbose_json",
          "vtt"
        ],
        probed: [
          "json",
          "text",
          "srt",
          "verbose_json",
          "vtt",
          "diarized_json"
        ],
        complete: true
      }
    },
    "openai/gpt-4o-mini-transcribe": {
      response_format: {
        accepted: [
          "diarized_json",
          "json",
          "srt",
          "text",
          "verbose_json",
          "vtt"
        ],
        rejected: [],
        probed: [
          "json",
          "text",
          "srt",
          "verbose_json",
          "vtt",
          "diarized_json"
        ],
        complete: true
      }
    },
    "openai/gpt-4o-mini-tts": {
      response_format: {
        accepted: [
          "mp3"
        ],
        rejected: [],
        probed: [
          "mp3"
        ],
        complete: false
      }
    },
    "openai/gpt-4o-transcribe": {
      response_format: {
        accepted: [
          "diarized_json",
          "json",
          "srt",
          "text",
          "verbose_json",
          "vtt"
        ],
        rejected: [],
        probed: [
          "json",
          "text",
          "srt",
          "verbose_json",
          "vtt",
          "diarized_json"
        ],
        complete: true
      }
    },
    "openai/tts-1": {
      response_format: {
        accepted: [
          "mp3"
        ],
        rejected: [],
        probed: [
          "mp3"
        ],
        complete: false
      }
    },
    "openai/tts-1-hd": {
      response_format: {
        accepted: [
          "mp3"
        ],
        rejected: [],
        probed: [
          "mp3"
        ],
        complete: false
      }
    },
    "openai/whisper-1": {
      response_format: {
        accepted: [
          "diarized_json",
          "json",
          "srt",
          "text",
          "verbose_json",
          "vtt"
        ],
        rejected: [],
        probed: [
          "json",
          "text",
          "srt",
          "verbose_json",
          "vtt",
          "diarized_json"
        ],
        complete: true
      }
    },
    "openai/whisper-large-v3": {
      response_format: {
        accepted: [
          "json",
          "text"
        ],
        rejected: [
          "diarized_json",
          "srt",
          "verbose_json",
          "vtt"
        ],
        probed: [
          "json",
          "text",
          "srt",
          "verbose_json",
          "vtt",
          "diarized_json"
        ],
        complete: true
      }
    },
    "openai/whisper-large-v3-turbo": {
      response_format: {
        accepted: [
          "json",
          "text"
        ],
        rejected: [
          "diarized_json",
          "srt",
          "verbose_json",
          "vtt"
        ],
        probed: [
          "json",
          "text",
          "srt",
          "verbose_json",
          "vtt",
          "diarized_json"
        ],
        complete: true
      }
    },
    "qwen/qwen3-asr-1.7b": {
      response_format: {
        accepted: [
          "json",
          "text"
        ],
        rejected: [
          "diarized_json",
          "srt",
          "verbose_json",
          "vtt"
        ],
        probed: [
          "json",
          "text",
          "srt",
          "verbose_json",
          "vtt",
          "diarized_json"
        ],
        complete: true
      }
    }
  }
};

// src/ui/online-catalog.ts
var catalogSources = [
  { profile: "chat", type: "chat", url: "https://polza.ai/api/v1/models?type=chat&include_providers=true&include_capabilities=true" },
  { profile: "image.media", type: "image", url: "https://polza.ai/api/v2/models?type=image&include_providers=true" },
  { profile: "video.media", type: "video", url: "https://polza.ai/api/v2/models?type=video&include_providers=true" },
  { profile: "audio.tts", type: "tts", url: "https://polza.ai/api/v2/models?type=tts&include_providers=true" },
  { profile: "audio.stt", type: "stt", url: "https://polza.ai/api/v2/models?type=stt&include_providers=true" },
  { profile: "music.media", type: "music", url: "https://polza.ai/api/v2/models?type=music&include_providers=true" }
];
var fail2 = () => {
  throw new Error("Invalid public model catalog");
};
function identifier(value) {
  if (typeof value !== "string" || value.length > 256 || !/^[A-Za-z0-9][A-Za-z0-9._/:-]*$/u.test(value)) return fail2();
  return value;
}
function strings(value) {
  if (!Array.isArray(value) || value.length > 200 || value.some((v) => typeof v !== "string" || v.length > 256)) return fail2();
  return value;
}
var capabilityNames = ["json_object", "json_schema_strict", "reasoning_effort", "reasoning_toggle", "input_image", "tools", "tool_choice_none", "tool_choice_function", "tool_choice_required"];
function normalizeCatalog(input, profile) {
  const root = object(input, "catalog");
  const descriptor = Object.getOwnPropertyDescriptor(root, "data");
  if (!descriptor || !("value" in descriptor)) return fail2();
  const data = descriptor.value;
  if (!Array.isArray(data) || !data.length || data.length > 1e3) return fail2();
  const ids = /* @__PURE__ */ new Set();
  return data.map((raw) => {
    const m = object(safeJson(raw), "model");
    const model = identifier(m.id);
    if (ids.has(model) || m.type !== catalogSources.find((s) => s.profile === profile)?.type) return fail2();
    ids.add(model);
    if (m.providers !== void 0 && (!Array.isArray(m.providers) || m.providers.length > 100)) return fail2();
    const providers = Array.isArray(m.providers) ? m.providers : [];
    const routes = providers.map((value) => {
      const p = object(value, "provider");
      const provider = identifier(p.name);
      const supported = p.supported_parameters == null ? [] : strings(p.supported_parameters);
      const parameters = p.parameters == null ? {} : object(p.parameters, "parameters");
      const modelObservations = live_parameter_observations_default.observations[model] ?? {};
      for (const key of Object.keys(modelObservations)) if (!Object.hasOwn(parameters, key)) parameters[key] = {};
      if (Object.keys(parameters).length > 200) return fail2();
      const fields = {};
      const conflicts = [];
      for (const [key, value2] of Object.entries(parameters)) {
        if (!/^[A-Za-z][A-Za-z0-9_]*$/u.test(key)) return fail2();
        const spec = object(value2, "parameter");
        const wireKey = profile === "audio.tts" && key === "prompt" ? "input" : key;
        const dto = dtoField(profile, wireKey);
        const explicit = spec.type;
        if (explicit !== void 0 && !["string", "number", "integer", "boolean", "array", "object"].includes(String(explicit))) return fail2();
        const types = typeof explicit === "string" ? [explicit === "integer" ? "number" : explicit] : dto?.types ?? [];
        if (explicit && dto && !dto.types.includes(types[0])) conflicts.push(key);
        const constraints = {};
        if (spec.required !== void 0) {
          if (typeof spec.required !== "boolean") return fail2();
          constraints.required = spec.required;
        }
        for (const name of ["min", "max", "max_length"]) if (spec[name] !== void 0) {
          if (typeof spec[name] !== "number" || !Number.isFinite(spec[name])) return fail2();
          constraints[name] = spec[name];
        }
        if (spec.values !== void 0) {
          if (!Array.isArray(spec.values) || spec.values.length > 1e3 || spec.values.some((v) => v === null || !["string", "number", "boolean"].includes(typeof v))) return fail2();
          constraints.values = spec.values;
        }
        const observed = live_parameter_observations_default.observations[model]?.[key];
        if (observed) {
          if (Array.isArray(constraints.values)) constraints.values = constraints.values.filter((v) => !observed.rejected.includes(String(v)));
          else if (observed.complete) constraints.values = observed.accepted.filter((v) => {
            const enumValues = operationField(profile, wireKey)?.enum;
            return !Array.isArray(enumValues) || enumValues.includes(v);
          });
        }
        fields[key] = { wire_path: profile.endsWith(".media") ? `input.${wireKey}` : wireKey, types, type_source: explicit ? "catalog" : dto ? "openapi" : "unresolved", constraints };
      }
      const capabilities = {};
      const caps = p.capabilities == null ? {} : object(p.capabilities, "capabilities");
      for (const key of capabilityNames) if (caps[key] !== void 0) {
        const cap = object(caps[key], "capability");
        if (typeof cap.status !== "string" || !["supported", "rejected", "ignored", "unknown", "unverified", "absent"].includes(cap.status)) return fail2();
        capabilities[key] = { status: cap.status, ...cap.values === void 0 ? {} : { values: strings(cap.values) } };
      }
      return { provider, source: "providers", supported_parameters: supported, parameter_constraints: fields, explicit_type_conflicts: conflicts, capabilities };
    });
    const architecture = m.architecture == null ? {} : object(m.architecture, "architecture");
    return { model, primary_profile: profile, providers_list_missing: !routes.length, input_modalities: architecture.input_modalities == null ? [] : strings(architecture.input_modalities), routes };
  });
}
var catalogByteLimit = 12e6;
async function publicJson(url, fetcher = fetch) {
  if (url !== "/request-builder-assets/catalog.txt" && !catalogSources.some((source) => source.url === url)) return fail2();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 25e3);
  let reader;
  try {
    const response = await fetcher(url, { method: "GET", credentials: "omit", redirect: "error", referrerPolicy: "no-referrer", cache: "no-cache", signal: controller.signal });
    const contentType = response.headers.get("content-type")?.split(";")[0]?.trim().toLowerCase();
    const jsonContent = contentType === "application/json" || url === "/request-builder-assets/catalog.txt" && contentType === "text/plain";
    if (!response.ok || !jsonContent || Number(response.headers.get("content-length")) > catalogByteLimit || !response.body) return fail2();
    reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8", { fatal: true });
    let bytes = 0;
    const chunks = [];
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > catalogByteLimit) return fail2();
      chunks.push(decoder.decode(value, { stream: true }));
    }
    chunks.push(decoder.decode());
    return JSON.parse(chunks.join(""));
  } finally {
    controller.abort();
    clearTimeout(timer);
    await reader?.cancel().catch(() => void 0);
  }
}
function retainUnavailableCatalog(previous, next) {
  if (!previous || !next.unavailable.length) return next;
  const retained = previous.models.filter((m) => next.unavailable.includes(m.primary_profile));
  return retained.length ? { ...next, models: [...next.models, ...retained], retained: [...new Set(retained.map((m) => m.primary_profile))] } : next;
}
async function synchronizeCatalog(fetcher = fetch, previous) {
  const results = await Promise.allSettled(catalogSources.map(async (source) => normalizeCatalog(await publicJson(source.url, fetcher), source.profile)));
  let snapshot = [];
  if (results.some((r) => r.status === "rejected")) {
    if (previous) snapshot = previous.models;
    else try {
      snapshot = parseCatalogSnapshot(await publicJson("/request-builder-assets/catalog.txt", fetcher));
    } catch {
    }
  }
  const state = { models: [], online: [], fallback: [], unavailable: [], retained: [], syncedAt: (/* @__PURE__ */ new Date()).toISOString() };
  results.forEach((result, i) => {
    const profile = catalogSources[i].profile;
    if (result.status === "fulfilled") {
      state.models.push(...result.value);
      state.online.push(profile);
    } else {
      const local = snapshot.filter((m) => m.primary_profile === profile);
      state.models.push(...local);
      state[local.length ? previous ? "retained" : "fallback" : "unavailable"].push(profile);
    }
  });
  return state;
}
var catalogCacheKey = "polza-request-builder:public-catalog:v1";
var catalogCacheTtl = 24 * 60 * 60 * 1e3;
var cacheLimit = 4e6;
function browserStorage() {
  try {
    return typeof window === "undefined" ? void 0 : window.localStorage;
  } catch {
    return void 0;
  }
}
function readCatalogCache(storage = browserStorage(), now = Date.now()) {
  try {
    const raw = storage?.getItem(catalogCacheKey);
    if (!raw || raw.length > cacheLimit) return void 0;
    const envelope = JSON.parse(raw);
    if (envelope.version !== 1 || typeof envelope.syncedAt !== "string") return void 0;
    const timestamp = Date.parse(envelope.syncedAt);
    const age = now - timestamp;
    if (!Number.isFinite(age) || age < 0 || age > 30 * catalogCacheTtl) return void 0;
    const models = parseCatalogSnapshot(envelope.models);
    if (!catalogSources.every((s) => models.some((m) => m.primary_profile === s.profile))) return void 0;
    return { result: { models, online: catalogSources.map((s) => s.profile), fallback: [], retained: [], unavailable: [], syncedAt: envelope.syncedAt }, fresh: age < catalogCacheTtl };
  } catch {
    return void 0;
  }
}
function writeCatalogCache(result, storage = browserStorage()) {
  if (result.online.length !== catalogSources.length || result.fallback.length || result.retained.length || result.unavailable.length) return;
  try {
    const raw = JSON.stringify({ version: 1, syncedAt: result.syncedAt, models: result.models });
    if (raw.length <= cacheLimit) storage?.setItem(catalogCacheKey, raw);
  } catch {
  }
}
var pending;
function startupCatalog({ force = false } = {}) {
  if (pending) return pending;
  const cached = readCatalogCache();
  if (cached?.fresh && !force) return Promise.resolve(cached.result);
  return pending = synchronizeCatalog(fetch, cached?.result).then((result) => {
    writeCatalogCache(result);
    return result;
  }).finally(() => {
    pending = void 0;
  });
}

// src/ui/CatalogLoading.tsx
function CatalogLoading({ embedded = false }) {
  return <div role="status" aria-live="polite" aria-busy="true" style={{ minHeight: 480, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: "32px 16px", textAlign: "center", fontFamily: "inherit", color: "inherit" }}>
    <img src={embedded ? "/request-builder-assets/loading.svg" : "/brand/loading.svg"} width="28" height="28" alt="" aria-hidden="true" />
    <span style={{ fontSize: 14, fontWeight: 500 }}>Загружаем конструктор…</span>
  </div>;
}

// src/ui/attachments.ts
var attachmentNames = { image: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435", file: "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442", audio: "\u0410\u0443\u0434\u0438\u043E", video: "\u0412\u0438\u0434\u0435\u043E" };
var attachmentBudget = 65e4;
var sequence = 0;
var attachmentId = () => `attachment-${++sequence}`;
var mimeByExtension = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  webp: "image/webp",
  pdf: "application/pdf",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  txt: "text/plain",
  mp3: "audio/mpeg",
  wav: "audio/wav",
  flac: "audio/flac",
  m4a: "audio/mp4",
  ogg: "audio/ogg",
  webm: "video/webm",
  mp4: "video/mp4",
  mov: "video/quicktime"
};
function attachmentKind(mime) {
  if (mime.startsWith("image/")) return "image";
  if (mime.startsWith("audio/")) return "audio";
  if (mime.startsWith("video/")) return "video";
  if (["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain"].includes(mime)) return "file";
  return void 0;
}
function attachmentUrl(url, kind, id) {
  const data = url.trim();
  try {
    const parsed = new URL(data);
    if (parsed.protocol !== "https:" || parsed.username || parsed.password) throw new Error();
  } catch {
    throw new Error("\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u0443\u044E HTTPS-\u0441\u0441\u044B\u043B\u043A\u0443 \u0431\u0435\u0437 \u043B\u043E\u0433\u0438\u043D\u0430 \u0438 \u043F\u0430\u0440\u043E\u043B\u044F.");
  }
  return { id, kind, source: "url", data, name: data };
}
async function attachmentsFromFiles(files, kinds, existing) {
  let total = existing.reduce((n, item) => n + (item.bytes ?? 0), 0);
  const metadata = files.map((file) => {
    const extension = file.name.split(".").at(-1)?.toLowerCase() ?? "";
    const mime = mimeByExtension[extension] ?? file.type;
    const kind = attachmentKind(mime);
    if (!file.size) throw new Error("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0435\u043F\u0443\u0441\u0442\u043E\u0439 \u0444\u0430\u0439\u043B.");
    if (!kind || !kinds.includes(kind) || !mimeByExtension[extension]) throw new Error("\u042D\u0442\u043E\u0442 \u0444\u043E\u0440\u043C\u0430\u0442 \u0444\u0430\u0439\u043B\u0430 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u043C \u0432\u0445\u043E\u0434\u043E\u043C.");
    total += file.size;
    if (total > attachmentBudget) throw new Error("\u0421\u0443\u043C\u043C\u0430\u0440\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u043E\u0432 \u2014 \u0434\u043E 650 \u041A\u0411. \u0414\u043B\u044F \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u0444\u0430\u0439\u043B\u043E\u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0438, \u0435\u0441\u043B\u0438 API \u0438\u0445 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442.");
    return { file, mime, kind };
  });
  return Promise.all(metadata.map(async ({ file, mime, kind }) => {
    const bytes = new Uint8Array(await file.arrayBuffer());
    let binary = "";
    for (let start = 0; start < bytes.length; start += 8192) binary += String.fromCharCode(...bytes.subarray(start, start + 8192));
    return { id: attachmentId(), name: file.name, source: "base64", kind, mime, bytes: bytes.length, data: `data:${mime};base64,${btoa(binary)}` };
  }));
}
function chatAttachment(item) {
  if (item.kind === "image") return { type: "image_url", image_url: { url: item.data } };
  if (item.kind === "file" && item.source === "base64") return { type: "file", file: { filename: item.name, file_data: item.data } };
  if (item.kind === "audio" && item.source === "base64") {
    const format = { "audio/mpeg": "mp3", "audio/wav": "wav", "audio/flac": "flac", "audio/mp4": "m4a" }[item.mime ?? ""];
    if (format) return { type: "input_audio", input_audio: { data: item.data.split(",")[1], format } };
  }
  if (item.kind === "video" && item.source === "url") return { type: "video_url", video_url: { url: item.data } };
  throw new ConfigError("file", "attachments", "\u042D\u0442\u043E\u0442 \u0442\u0438\u043F \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D \u0434\u0430\u043D\u043D\u044B\u043C API.");
}

// src/ui/state.ts
function chatInputKinds(model) {
  return (model.input_modalities ?? []).filter((kind) => ["image", "file", "audio", "video"].includes(kind) && (kind !== "image" || imageInputAvailable(model.routes)) && (kind !== "video" || model.model.startsWith("google/gemini")));
}
var emptyRouting = () => ({ order: "", only: "", ignore: "", sort: "", allow_fallbacks: "", require_parameters: "", data_residency: "", prices: {} });
var prompts = {
  chat: "\u041E\u0431\u044A\u044F\u0441\u043D\u0438 \u043F\u0440\u043E\u0441\u0442\u044B\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438, \u043A\u0430\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u044C.",
  "image.media": "\u0423\u044E\u0442\u043D\u044B\u0439 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0439 \u0434\u043E\u043C \u0443 \u043E\u0437\u0435\u0440\u0430, \u043C\u044F\u0433\u043A\u0438\u0439 \u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0439 \u0441\u0432\u0435\u0442.",
  "video.media": "\u041A\u0430\u043C\u0435\u0440\u0430 \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E \u043F\u0440\u0438\u0431\u043B\u0438\u0436\u0430\u0435\u0442\u0441\u044F \u043A \u0434\u043E\u043C\u0443 \u0443 \u043E\u0437\u0435\u0440\u0430. \u041B\u0451\u0433\u043A\u0438\u0439 \u0442\u0443\u043C\u0430\u043D \u043D\u0430\u0434 \u0432\u043E\u0434\u043E\u0439.",
  "music.media": "\u0421\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u0440\u0435\u043A: \u043C\u044F\u0433\u043A\u043E\u0435 \u0444\u043E\u0440\u0442\u0435\u043F\u0438\u0430\u043D\u043E, \u0442\u0451\u043F\u043B\u044B\u0439 \u0441\u0432\u0435\u0442, \u0431\u0435\u0437 \u0432\u043E\u043A\u0430\u043B\u0430.",
  "audio.tts": "\u041F\u0440\u0438\u0432\u0435\u0442! \u042D\u0442\u043E \u043F\u0440\u0438\u043C\u0435\u0440 \u0441\u0438\u043D\u0442\u0435\u0437\u0430 \u0440\u0435\u0447\u0438 \u0447\u0435\u0440\u0435\u0437 Polza.ai.",
  "audio.stt": ""
};
function initialDraft(profile) {
  const values = profile.endsWith(".media") ? { async: "true" } : {};
  return { model: initialModels[profile], prompt: prompts[profile], system: "", values, attachments: {}, routing: emptyRouting(), representation: "body" };
}
var fieldLabels = {
  temperature: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
  top_p: "Top P",
  max_tokens: "\u041B\u0438\u043C\u0438\u0442 \u0442\u043E\u043A\u0435\u043D\u043E\u0432",
  max_completion_tokens: "\u041B\u0438\u043C\u0438\u0442 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0445 \u0442\u043E\u043A\u0435\u043D\u043E\u0432",
  seed: "Seed",
  frequency_penalty: "\u0428\u0442\u0440\u0430\u0444 \u0437\u0430 \u0447\u0430\u0441\u0442\u043E\u0442\u0443",
  presence_penalty: "\u0428\u0442\u0440\u0430\u0444 \u0437\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0435",
  n: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u0432\u0435\u0442\u043E\u0432",
  stop: "\u0421\u0442\u043E\u043F-\u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
  voice: "\u0413\u043E\u043B\u043E\u0441",
  speed: "\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0440\u0435\u0447\u0438",
  response_format: "\u0424\u043E\u0440\u043C\u0430\u0442 \u043E\u0442\u0432\u0435\u0442\u0430",
  aspect_ratio: "\u0421\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D",
  image_resolution: "\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
  output_format: "\u0424\u043E\u0440\u043C\u0430\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
  duration: "\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
  resolution: "\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0432\u0438\u0434\u0435\u043E",
  quality: "\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",
  language: "\u042F\u0437\u044B\u043A \u0430\u0443\u0434\u0438\u043E",
  prompt: "\u041A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u044F",
  file: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0430\u0443\u0434\u0438\u043E",
  input: "\u0422\u0435\u043A\u0441\u0442",
  images: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
  reference_images: "\u0420\u0435\u0444\u0435\u0440\u0435\u043D\u0441\u043D\u044B\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
  videos: "\u0412\u0438\u0434\u0435\u043E",
  audios: "\u0410\u0443\u0434\u0438\u043E",
  super_resolution_references: "\u0420\u0435\u0444\u0435\u0440\u0435\u043D\u0441\u044B \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F",
  strength: "\u0421\u0438\u043B\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F",
  guidance_scale: "\u0421\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u0443",
  max_images: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439",
  sound: "\u0417\u0432\u0443\u043A",
  generate_audio: "\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u0430\u0443\u0434\u0438\u043E",
  title: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u0440\u0435\u043A\u0430",
  style: "\u0421\u0442\u0438\u043B\u044C",
  instrumental: "\u0411\u0435\u0437 \u0432\u043E\u043A\u0430\u043B\u0430",
  version: "\u0412\u0435\u0440\u0441\u0438\u044F \u043C\u043E\u0434\u0435\u043B\u0438",
  vocalGender: "\u0413\u043E\u043B\u043E\u0441 \u0432\u043E\u043A\u0430\u043B\u0430",
  personaId: "ID \u043F\u0435\u0440\u0441\u043E\u043D\u044B",
  personaModel: "\u0422\u0438\u043F \u043F\u0435\u0440\u0441\u043E\u043D\u044B",
  customMode: "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",
  audioWeight: "\u0412\u0435\u0441 \u0430\u0443\u0434\u0438\u043E",
  soundKey: "\u0422\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
  soundLoop: "\u0417\u0430\u0446\u0438\u043A\u043B\u0438\u0442\u044C",
  soundTempo: "\u0422\u0435\u043C\u043F, BPM",
  grabLyrics: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u043F\u0435\u0441\u043D\u0438",
  uploadUrlList: "\u0421\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0430\u0443\u0434\u0438\u043E",
  negativeTags: "\u0418\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0438\u0437 \u0442\u0440\u0435\u043A\u0430",
  instructions: "\u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0434\u043B\u044F \u0433\u043E\u043B\u043E\u0441\u0430",
  stability: "\u0421\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0433\u043E\u043B\u043E\u0441\u0430",
  similarity_boost: "\u0421\u0445\u043E\u0434\u0441\u0442\u0432\u043E \u0433\u043E\u043B\u043E\u0441\u0430",
  language_code: "\u041A\u043E\u0434 \u044F\u0437\u044B\u043A\u0430",
  emotion: "\u042D\u043C\u043E\u0446\u0438\u044F",
  timestamps: "\u041C\u0435\u0442\u043A\u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0438",
  previous_text: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442",
  next_text: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442",
  stream_format: "\u0424\u043E\u0440\u043C\u0430\u0442 \u043F\u043E\u0442\u043E\u043A\u0430",
  chunking_strategy: "\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438",
  include: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",
  known_speaker_names: "\u0418\u043C\u0435\u043D\u0430 \u0433\u043E\u0432\u043E\u0440\u044F\u0449\u0438\u0445",
  known_speaker_references: "\u0421\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0433\u043E\u0432\u043E\u0440\u044F\u0449\u0438\u0445",
  timestamp_granularities: "\u0413\u0440\u0430\u043D\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u044C \u043C\u0435\u0442\u043E\u043A"
};
var fieldHints = {
  audioWeight: "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442, \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0438\u043B\u044C\u043D\u043E \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u043E\u043F\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0435 \u0430\u0443\u0434\u0438\u043E. \u0412\u044B\u0441\u043E\u043A\u0438\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043B\u0443\u0447\u0448\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442 \u0435\u0433\u043E \u043C\u0435\u043B\u043E\u0434\u0438\u044E, \u0440\u0438\u0442\u043C \u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440 \u0437\u0432\u0443\u0447\u0430\u043D\u0438\u044F.",
  customMode: "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C: \u0432 \u043F\u0440\u043E\u043C\u0442\u0435 \u043F\u0438\u0448\u0435\u0442\u0441\u044F \u0442\u0435\u043A\u0441\u0442 \u043F\u0435\u0441\u043D\u0438, \u0430 \u0441\u0442\u0438\u043B\u044C \u0438 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438. \u0412\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u0435\u0440\u0441\u043E\u043D\u044B."
};
var extendedMusicFields = /* @__PURE__ */ new Set(["duration", "personaId", "personaModel"]);
var numericChat = [
  { key: "temperature", label: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430", type: "number", min: 0, max: 2, hint: "\u041C\u0435\u043D\u044C\u0448\u0435 \u2014 \u0442\u043E\u0447\u043D\u0435\u0435, \u0431\u043E\u043B\u044C\u0448\u0435 \u2014 \u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u0435\u0435." },
  { key: "max_tokens", label: "\u041B\u0438\u043C\u0438\u0442 \u0442\u043E\u043A\u0435\u043D\u043E\u0432", type: "number", min: 1, hint: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u043E\u0442\u0432\u0435\u0442\u0430." },
  { key: "max_completion_tokens", label: "\u041B\u0438\u043C\u0438\u0442 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0445 \u0442\u043E\u043A\u0435\u043D\u043E\u0432", type: "number", min: 1, hint: "\u0412\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0442\u043E\u043A\u0435\u043D\u044B \u0440\u0430\u0441\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F." },
  { key: "top_p", label: "Top P", type: "number", min: 0, max: 1 },
  { key: "seed", label: "Seed", type: "number" },
  { key: "frequency_penalty", label: "\u0428\u0442\u0440\u0430\u0444 \u0437\u0430 \u0447\u0430\u0441\u0442\u043E\u0442\u0443", type: "number", min: -2, max: 2 },
  { key: "presence_penalty", label: "\u0428\u0442\u0440\u0430\u0444 \u0437\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0435", type: "number", min: -2, max: 2 },
  { key: "n", label: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u0432\u0435\u0442\u043E\u0432", type: "number", min: 1, max: 10 }
];
var partialRoute = "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0435 \u0432\u0441\u0435\u043C\u0438 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430\u043C\u0438 \u043C\u043E\u0434\u0435\u043B\u0438 \u2014 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430, \u0447\u0442\u043E\u0431\u044B \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C.";
function sameValue(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
function mergeValues(lists) {
  return lists.reduce((acc, list) => acc.filter((value) => list.some((other) => sameValue(value, other))));
}
function booleanText(values) {
  return values.length > 0 && values.every((value) => value === "true" || value === "false");
}
function mergedField(key, parts) {
  const constraints = parts.map((part) => part.entry.constraints);
  const wirePaths = new Set(parts.map((part) => part.entry.wire_path));
  const typeLists = parts.map((part) => part.entry.types.filter((type2) => type2 !== "unresolved"));
  const common = typeLists.reduce((acc, list) => acc.filter((type2) => list.includes(type2)), typeLists[0] ?? []);
  const enumLists = constraints.map((item) => Array.isArray(item.values) ? item.values : void 0).filter((list) => list !== void 0);
  const values = enumLists.length ? mergeValues(enumLists) : void 0;
  const jsonType = common.includes("array") || common.includes("object");
  const type = jsonType ? "json" : common.find((item) => ["string", "number", "boolean"].includes(item)) ?? "string";
  const mins = type === "number" || type === "string" ? constraints.map((item) => typeof item.min === "number" ? item.min : void 0).filter((value) => value !== void 0) : [];
  const maxs = type === "number" || type === "string" ? constraints.map((item) => typeof item.max === "number" ? item.max : void 0).filter((value) => value !== void 0) : [];
  const itemCounts = common.includes("array") ? constraints.map((item) => typeof item.max === "number" ? item.max : void 0).filter((value) => value !== void 0) : [];
  const itemMins = common.includes("array") ? constraints.map((item) => typeof item.min === "number" ? item.min : void 0).filter((value) => value !== void 0) : [];
  const required = constraints.some((item) => item.required === true);
  let unavailable;
  if (parts.some((part) => part.conflict)) unavailable = "\u0422\u0438\u043F \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 \u0440\u0430\u0437\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430\u0445.";
  else if (wirePaths.size > 1) unavailable = "\u041F\u0443\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 \u0440\u0430\u0437\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u0443 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u043E\u0432.";
  else if (!common.length) unavailable = "\u042D\u0442\u043E\u0442 \u0442\u0438\u043F \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 \u0435\u0449\u0451 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D \u043C\u0430\u043A\u0435\u0442\u043E\u043C.";
  else if (values && !values.length) unavailable = "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442 \u0443 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u043E\u0432.";
  else if (values && !jsonType && !booleanText(values) && values.some((value) => typeof value !== type)) unavailable = "\u0422\u0438\u043F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u044F.";
  const min2 = mins.length ? Math.max(...mins) : void 0;
  const max2 = maxs.length ? Math.min(...maxs) : void 0;
  return {
    key,
    label: Object.hasOwn(fieldLabels, key) ? fieldLabels[key] : key,
    type,
    ...values && values.length && !jsonType && !unavailable ? { values: values.map(String) } : {},
    ...min2 !== void 0 ? { min: min2 } : {},
    ...max2 !== void 0 ? { max: max2 } : {},
    ...itemCounts.length ? { maxItems: Math.min(...itemCounts) } : {},
    ...itemMins.length ? { minItems: Math.max(...itemMins) } : {},
    ...common.includes("array") && (itemMins.length || itemCounts.length) ? { hint: itemHint(itemMins.length ? Math.max(...itemMins) : void 0, itemCounts.length ? Math.min(...itemCounts) : void 0) } : {},
    ...type === "string" && (min2 !== void 0 || max2 !== void 0) && !fieldHints[key] ? { hint: rangeHint(min2, max2) } : {},
    ...fieldHints[key] ? { hint: fieldHints[key] } : {},
    ...required ? { required: true } : {},
    ...unavailable ? { unavailable } : {}
  };
}
function rangeHint(min2, max2) {
  if (min2 !== void 0 && max2 !== void 0) return `\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D: ${min2}\u2013${max2}`;
  if (min2 !== void 0) return `\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0442 ${min2}`;
  return `\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u0434\u043E ${max2}`;
}
function itemHint(min2, max2) {
  if (min2 !== void 0 && max2 !== void 0) return min2 === max2 ? `\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432: ${min2}` : `\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432: \u043E\u0442 ${min2} \u0434\u043E ${max2}`;
  if (max2 !== void 0) return `\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432: \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 ${max2}`;
  return `\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432: \u043D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 ${min2}`;
}
function routeParams(routes) {
  const parts = /* @__PURE__ */ new Map();
  for (const route of routes) for (const [key, entry] of Object.entries(route.parameter_constraints)) {
    const list = parts.get(key) ?? [];
    list.push({ key, entry, conflict: route.explicit_type_conflicts.includes(key) });
    parts.set(key, list);
  }
  return parts;
}
function chatFields(profile, routes) {
  const common = new Set(routes[0]?.supported_parameters ?? []);
  for (const route of routes) for (const key of [...common]) if (!route.supported_parameters.includes(key)) common.delete(key);
  const union = new Set(routes.flatMap((route) => route.supported_parameters));
  const limitNames = ["max_completion_tokens", "max_tokens"];
  const limitCounts = limitNames.map((name) => ({ name, count: routes.filter((route) => route.supported_parameters.includes(name)).length }));
  const limitBest = limitCounts.filter((item) => item.count > 0).sort((a, b) => b.count - a.count)[0];
  const limitKey = limitBest && limitBest.count === routes.length ? limitBest.name : void 0;
  const limitDisabled = limitBest && !limitKey ? limitBest.name : void 0;
  const result = [];
  for (const preset of numericChat) {
    if (preset.key === "max_tokens" || preset.key === "max_completion_tokens") continue;
    if (!common.has(preset.key) || !operationField(profile, preset.key)) continue;
    result.push(preset);
  }
  const limitPreset = numericChat.find((preset) => preset.key === (limitKey ?? limitDisabled));
  if (limitPreset) result.push(limitKey ? limitPreset : { ...limitPreset, unavailable: partialRoute });
  for (const preset of numericChat) {
    if (result.includes(preset) || !union.has(preset.key)) continue;
    if (preset.key === "max_tokens" || preset.key === "max_completion_tokens") continue;
    result.push({ ...preset, unavailable: partialRoute });
  }
  const efforts = routes[0]?.capabilities.reasoning_effort?.values?.filter((value) => typeof value === "string" && routes.every((route) => route.capabilities.reasoning_effort?.values?.includes(value)));
  if (efforts?.length) result.push({ key: "reasoning", label: "\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0440\u0430\u0441\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F", type: "string", values: efforts });
  result.push({ key: "user", label: "ID \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F", type: "string", hint: "\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F." });
  result.push({ key: "web_search_engine", label: "\u041F\u043E\u0438\u0441\u043A \u0432 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0435", type: "string", values: ["yandex", "google", "off"], required: true, link: { href: "https://polza.ai/docs/gaidy/server-tools", label: "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u043F\u043E\u0438\u0441\u043A\u0430" } });
  result.push({ key: "web_search_max_results", label: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u043F\u043E\u0438\u0441\u043A\u0430", type: "number", min: 1, max: 10, hint: "\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E: 1\u201310 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432." });
  result.push({ key: "max_tool_calls", label: "\u041B\u0438\u043C\u0438\u0442 \u0432\u044B\u0437\u043E\u0432\u043E\u0432 \u0442\u0443\u043B\u0437\u043E\u0432", type: "number", min: 1, max: 30, hint: "\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E: 1\u201330 \u0432\u044B\u0437\u043E\u0432\u043E\u0432 \u0437\u0430 \u0437\u0430\u043F\u0440\u043E\u0441." });
  return result;
}
function audioFields(profile, routes, model) {
  const dtoKeys = audioBodyFields(profile);
  const required = new Set(operationRequired(profile));
  const parts = routeParams(routes);
  const fields = [];
  for (const key of dtoKeys) {
    if (profile === "audio.tts" && key === "input") continue;
    const dto = dtoField(profile, key);
    if (!dto) continue;
    const merged = mergedField(key, [{ key, entry: { wire_path: key, types: dto.types, type_source: "openapi", constraints: dto.constraints }, conflict: false }, ...parts.get(key) ?? []]);
    const hint = audioFieldHints[key];
    const field = { ...merged, ...hint && !merged.hint ? { hint } : {}, ...required.has(key) ? { required: true } : {} };
    fields.push(liveCapabilityField(field, profile, model, routes));
  }
  return fields;
}
function liveCapabilityField(field, profile, model, routes) {
  if (field.unavailable) return field;
  const providers = [...new Set(routes.map((route) => route.provider))];
  if (!providers.length) return field;
  const accepted = providers.filter((provider) => audioFieldAccepted(profile, model, provider, field.key));
  if (accepted.length === providers.length) return field;
  if (!accepted.length) return { ...field, unavailable: "Live-\u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430: \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u044B \u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442 \u044D\u0442\u043E\u0442 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440." };
  return { ...field, unavailable: `Live-\u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430: \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442 \u0442\u043E\u043B\u044C\u043A\u043E ${accepted.join(", ")} \u2014 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430.` };
}
var audioFieldHints = {
  known_speaker_names: 'JSON-\u0441\u043F\u0438\u0441\u043E\u043A \u0441\u0442\u0440\u043E\u043A: ["Speaker 1", "Speaker 2"].',
  known_speaker_references: "JSON-\u0441\u043F\u0438\u0441\u043E\u043A \u0441\u0442\u0440\u043E\u043A: \u0441\u0441\u044B\u043B\u043A\u0438 \u0438\u043B\u0438 data URI \u0430\u0443\u0434\u0438\u043E \u0433\u043E\u0432\u043E\u0440\u044F\u0449\u0435\u0433\u043E.",
  chunking_strategy: 'JSON: "auto" \u0438\u043B\u0438 {"type":"server_vad","threshold":0.5}.',
  include: 'JSON-\u0441\u043F\u0438\u0441\u043E\u043A: ["logprobs"].',
  timestamp_granularities: 'JSON-\u0441\u043F\u0438\u0441\u043E\u043A: ["word", "segment"].'
};
function mediaFields(profile, routes) {
  const parts = routeParams(routes);
  const hasExtendedMode = parts.has("customMode");
  const fields = [];
  for (const [key, list] of parts) {
    if (list.length < routes.length) continue;
    if (key === "prompt") continue;
    const field = mergedField(key, list);
    if (field.maxItems === 0) continue;
    fields.push(hasExtendedMode && extendedMusicFields.has(key) ? { ...field, advancedOnly: true } : field);
  }
  for (const [key, list] of parts) {
    if (list.length >= routes.length) continue;
    fields.push({ key, label: Object.hasOwn(fieldLabels, key) ? fieldLabels[key] : key, type: "string", unavailable: partialRoute });
  }
  fields.push({ key: "async", label: "\u0424\u043E\u043D\u043E\u0432\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430", type: "boolean", hint: "\u0414\u0430 \u2014 \u0441\u0440\u0430\u0437\u0443 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C ID \u0437\u0430\u0434\u0430\u0447\u0438. \u041D\u0435\u0442 \u2014 \u043E\u0436\u0438\u0434\u0430\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u043C \u0437\u0430\u043F\u0440\u043E\u0441\u0435." });
  return fields;
}
function fieldsFor(profile, model, routing) {
  const selected = routing.only.split(",").map((value) => value.trim()).filter(Boolean);
  const ignored = routing.ignore.split(",").map((value) => value.trim()).filter(Boolean);
  const routes = model.routes.filter((route) => (!selected.length || selected.includes(route.provider)) && !ignored.includes(route.provider));
  if (profile === "chat") return chatFields(profile, routes);
  if (profile === "audio.tts" || profile === "audio.stt") return audioFields(profile, routes, model.model);
  return mediaFields(profile, routes);
}
function reconcileDraft(profile, draft, fields) {
  const byKey = new Map(fields.map((field) => [field.key, field]));
  const values = {};
  for (const [key, value] of Object.entries(draft.values)) {
    if (key === "file" && profile === "audio.stt") {
      values[key] = value;
      continue;
    }
    if (key === "stream" && profile === "chat") {
      values[key] = value;
      continue;
    }
    const field = byKey.get(key);
    if (!field || field.unavailable) continue;
    if (value && field.values?.length && !field.values.includes(value)) continue;
    values[key] = value;
  }
  for (const field of fields) {
    if (field.unavailable || field.key in values || !field.values?.length) continue;
    if (profile === "chat" && !field.required) continue;
    values[field.key] = field.values[0];
  }
  const unchanged = Object.keys(values).length === Object.keys(draft.values).length && Object.keys(values).every((key) => values[key] === draft.values[key]);
  return unchanged ? draft : { ...draft, values };
}
function number(value, field) {
  const n = Number(value);
  if (!value.trim() || !Number.isFinite(n)) throw new ConfigError("number-input", field, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E");
  return n;
}
var chatSearchFields = /* @__PURE__ */ new Set(["web_search_engine", "web_search_max_results", "max_tool_calls"]);
function chatSearchParameters(draft) {
  const engine = (draft.values.web_search_engine ?? "").trim() || "yandex";
  if (engine === "off") return {};
  if (!["yandex", "google"].includes(engine)) throw new ConfigError("enum", "web_search_engine", "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A");
  const parameters = { engine };
  const maxResults = (draft.values.web_search_max_results ?? "").trim();
  if (maxResults) {
    const value = number(maxResults, "web_search_max_results");
    if (!Number.isInteger(value) || value < 1 || value > 10) throw new ConfigError("range", "web_search_max_results", "\u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F \u0446\u0435\u043B\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u043E\u0442 1 \u0434\u043E 10");
    parameters.max_results = value;
  }
  const result = { tools: [{ type: "polza:web_search", parameters }] };
  const maxCalls = (draft.values.max_tool_calls ?? "").trim();
  if (maxCalls) {
    const value = number(maxCalls, "max_tool_calls");
    if (!Number.isInteger(value) || value < 1 || value > 30) throw new ConfigError("range", "max_tool_calls", "\u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F \u0446\u0435\u043B\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u043E\u0442 1 \u0434\u043E 30");
    result.max_tool_calls = value;
  }
  return result;
}
function providerFromDraft(draft) {
  const p = {};
  for (const key of ["order", "only", "ignore"]) if (draft[key].trim()) p[key] = draft[key].split(",").map((s) => s.trim());
  for (const key of ["allow_fallbacks", "require_parameters"]) if (draft[key] !== "") p[key] = draft[key] === "true";
  if (draft.sort) p.sort = draft.sort;
  if (draft.data_residency) p.data_residency = draft.data_residency;
  const prices = Object.fromEntries(Object.entries(draft.prices).filter(([, v]) => v !== "").map(([k, v]) => [k, number(v, "provider.max_price." + k)]));
  if (Object.keys(prices).length) p.max_price = prices;
  return p;
}
function configFromDraft(profile, draft, fields) {
  const params = {};
  for (const [key, value] of Object.entries(draft.values)) {
    if (value === "") continue;
    if (key === "file" && profile === "audio.stt") {
      params.file = value;
      continue;
    }
    if (key === "stream" && profile === "chat") {
      params.stream = value === "true";
      continue;
    }
    const field = fields.find((f) => f.key === key);
    if (!field) throw new ConfigError("retained-field", key, "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u043E\u0441\u0442\u0430\u043B\u0441\u044F \u043E\u0442 \u0434\u0440\u0443\u0433\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438");
    if (field.advancedOnly && draft.values.customMode !== "true") continue;
    if (profile === "chat" && chatSearchFields.has(key)) continue;
    if (key === "reasoning" && profile === "chat") params.reasoning = { effort: value };
    else if (field.type === "json") {
      try {
        params[key] = safeJson(JSON.parse(value));
      } catch {
        throw new ConfigError("json-input", key, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 JSON \u0431\u0435\u0437 \u0438\u0441\u043F\u043E\u043B\u043D\u044F\u0435\u043C\u043E\u0433\u043E \u043A\u043E\u0434\u0430");
      }
    } else params[key] = field.type === "number" ? number(value, key) : field.type === "boolean" ? value === "true" : value;
  }
  if (profile === "chat") Object.assign(params, chatSearchParameters(draft));
  const attachments = Object.entries(draft.attachments);
  if (attachments.flatMap(([, items]) => items).reduce((sum, item) => sum + (item.bytes ?? 0), 0) > attachmentBudget) throw new ConfigError("limit", "attachments", "\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D \u043E\u0431\u0449\u0438\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u043E\u0432");
  for (const [key, items] of attachments) {
    if (!items.length || key === "chat") continue;
    if (profile === "audio.stt" && key === "file") {
      params.file = items[0].data;
      continue;
    }
    if (!fields.some((f) => f.key === key)) throw new ConfigError("retained-field", key, "\u0412\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u043E\u0442 \u0434\u0440\u0443\u0433\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438");
    params[key] = key === "super_resolution_references" ? items.map((item) => item.data) : items.map((item) => ({ type: item.source, data: item.data }));
  }
  if (profile === "chat" && params.messages === void 0) {
    const items = draft.attachments.chat ?? [];
    params.messages = [...draft.system ? [{ role: "system", content: draft.system }] : [], { role: "user", content: items.length ? [{ type: "text", text: draft.prompt }, ...items.map(chatAttachment)] : draft.prompt }];
  } else if (profile.endsWith(".media")) {
    const async = params.async;
    delete params.async;
    const input = { prompt: draft.prompt, ...params };
    for (const key of Object.keys(params)) delete params[key];
    params.input = input;
    if (async !== void 0) params.async = async;
  } else if (profile === "audio.tts") params.input = draft.prompt;
  const provider = providerFromDraft(draft.routing);
  return { profile, model: draft.model, parameters: params, representation: draft.representation, ...Object.keys(provider).length ? { provider } : {} };
}
function explainError(error2) {
  if (!(error2 instanceof ConfigError)) return { field: "", message: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0440. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0430." };
  const messages = {
    "stt-url": "\u0414\u043B\u044F Whisper \u0432 JSON-\u0437\u0430\u043F\u0440\u043E\u0441\u0435 URL \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0444\u0430\u0439\u043B \u0438\u043B\u0438 \u0432\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043F\u043E\u043B\u043D\u044B\u0439 base64 data URI.",
    "media-dependency": "\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0443 Suno \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435. \u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0435\u0433\u043E \u0438\u043B\u0438 \u0443\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C.",
    "mode-requirement": "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0441\u0442\u0438\u043B\u044C \u0438 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u0440\u0435\u043A\u0430. \u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043E\u0431\u0430 \u043F\u043E\u043B\u044F \u0438\u043B\u0438 \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C.",
    "json-input": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 JSON. \u0421\u0442\u0440\u043E\u043A\u0443 \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0439\u0442\u0435 \u0432 \u0434\u0432\u043E\u0439\u043D\u044B\u0435 \u043A\u0430\u0432\u044B\u0447\u043A\u0438; \u043A\u043E\u0434 JavaScript \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F.",
    "token-limit-conflict": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u0438\u043D \u043B\u0438\u043C\u0438\u0442 \u0442\u043E\u043A\u0435\u043D\u043E\u0432: max_tokens \u0438\u043B\u0438 max_completion_tokens.",
    "alias-loss": "\u042D\u0442\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043D\u0435\u043B\u044C\u0437\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u0447\u0435\u0440\u0435\u0437 alias \u0431\u0435\u0437 \u043F\u043E\u0442\u0435\u0440\u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 Body.",
    provider: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u044B \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u043E\u0432 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438.",
    conflict: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u043E\u0432 \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u0440\u0435\u0447\u0430\u0442 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0443. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E\u0440\u044F\u0434\u043E\u043A, \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0438 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F.",
    duplicate: "\u041E\u0434\u0438\u043D \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440 \u0443\u043A\u0430\u0437\u0430\u043D \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437.",
    "empty-routing": "\u0421 \u0442\u0430\u043A\u0438\u043C\u0438 \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C\u0438 \u043D\u0435 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0445 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u043E\u0432.",
    capability: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u044D\u0442\u043E\u0433\u043E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 \u043D\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u043E\u0432. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u0438\u043B\u0438 \u0443\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440.",
    "contract-conflict": "\u0412 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430\u0445 \u0440\u0430\u0437\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u0442\u0438\u043F \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430. \u042D\u0442\u043E\u0442 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043F\u043E\u043A\u0430 \u043D\u0435\u043B\u044C\u0437\u044F \u043F\u043E\u043C\u0435\u0442\u0438\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u043C.",
    "unknown-contract": "\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0441\u0445\u0435\u043C\u044B \u044D\u0442\u043E\u0433\u043E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 \u0434\u043B\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430.",
    "catalog-incomplete": "\u0423 \u043C\u043E\u0434\u0435\u043B\u0438 \u043D\u0435\u0442 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u043E\u0432 \u0432 \u044D\u0442\u043E\u043C \u0441\u0440\u0435\u0437\u0435 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430.",
    range: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432\u044B\u0445\u043E\u0434\u0438\u0442 \u0437\u0430 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D.",
    required: "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440.",
    enum: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u043D\u043E \u0438\u0437 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439.",
    length: "\u0422\u0435\u043A\u0441\u0442 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u043C\u043E\u0434\u0435\u043B\u0438.",
    file: "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 HTTPS-\u0430\u0434\u0440\u0435\u0441 \u0438\u043B\u0438 \u043F\u043E\u043B\u043D\u044B\u0439 data URI \u0441 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u043C MIME-\u0442\u0438\u043F\u043E\u043C \u0438 base64.",
    "attachment-missing": "\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u0435 \u0430\u0443\u0434\u0438\u043E\u0444\u0430\u0439\u043B \u0438\u043B\u0438 \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043D\u0435\u0433\u043E.",
    "speaker-list": '\u0418\u043C\u0435\u043D\u0430 \u0438 \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0433\u043E\u0432\u043E\u0440\u044F\u0449\u0438\u0445 \u2014 \u0441\u043F\u0438\u0441\u043E\u043A \u0441\u0442\u0440\u043E\u043A, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 ["Speaker 1"].',
    "chunking-strategy": '\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438: "auto" \u0438\u043B\u0438 {"type":"server_vad", ...}.',
    schema: "JSON \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0435 \u044D\u0442\u043E\u0433\u043E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0442\u0438\u043F, \u043F\u043E\u043B\u044F \u0438 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F.",
    "number-input": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E.",
    "retained-field": "\u042D\u0442\u043E\u0442 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u043E\u0441\u0442\u0430\u043B\u0441\u044F \u043E\u0442 \u0434\u0440\u0443\u0433\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438. \u0423\u0434\u0430\u043B\u0438\u0442\u0435 \u0435\u0433\u043E \u0438\u043B\u0438 \u0432\u0435\u0440\u043D\u0438\u0442\u0435\u0441\u044C \u043A \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u043C\u043E\u0434\u0435\u043B\u0438.",
    "media-modality": "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u044D\u0442\u043E\u0442 \u0442\u0438\u043F \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u044F. \u0423\u0434\u0430\u043B\u0438\u0442\u0435 \u0444\u0430\u0439\u043B \u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u0443\u044E \u043C\u043E\u0434\u0435\u043B\u044C.",
    "item-count": "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043D\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430. \u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0438\u043B\u0438 \u0443\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0445 \u0434\u043E \u0447\u0438\u0441\u043B\u0430, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u0432 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0435 \u043F\u043E\u043B\u044F.",
    "image-input": "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0432 \u0447\u0430\u0442\u0435 \u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043D\u0438 \u043E\u0434\u0438\u043D \u0438\u0437 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u043E\u0432 \u044D\u0442\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u0438\u043B\u0438 \u0443\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443.",
    limit: "\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D \u0440\u0430\u0437\u043C\u0435\u0440 \u0437\u0430\u043F\u0440\u043E\u0441\u0430. \u0424\u0430\u0439\u043B\u044B \u2014 \u0434\u043E 650 \u041A\u0411 \u0441\u0443\u043C\u043C\u0430\u0440\u043D\u043E; \u0434\u043B\u044F \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u0444\u0430\u0439\u043B\u043E\u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0438.",
    unsupported: "\u042D\u0442\u043E\u0442 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u0435\u0449\u0451 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D \u043C\u0430\u043A\u0435\u0442\u043E\u043C.",
    type: "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0442\u0438\u043F \u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430."
  };
  return { field: error2.field, message: messages[error2.code] ?? "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430." };
}

// src/ui/Icon.tsx
var shapes = {
  chat: "M20 11a8 8 0 0 1-8 8H5l-4 3v-9a8 8 0 1 1 19-2ZM6 8h8M6 12h5",
  image: "M4 3h16v18H4zM4 16l5-6 6 7 3-4 2 3M15 7h.01",
  video: "M3 5h12v14H3zM15 10l6-4v12l-6-4",
  audio: "M4 10v4M8 6v12M12 3v18M16 7v10M20 10v4",
  music: "M9 18V5l12-2v13M6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6M18 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
  chevron: "M7 10l5 5 5-5",
  copy: "M8 8h12v13H8zM4 16H2V2h13v2",
  download: "M12 3v12M7 10l5 5 5-5M4 16v5h16v-5",
  check: "M4 12l5 5L20 6",
  code: "M8 5l-6 7 6 7M16 5l6 7-6 7M14 2l-4 20",
  arrow: "M4 12h16M14 6l6 6-6 6",
  settings: "M4 5h16M4 12h16M4 19h16M8 2v6M16 9v6M10 16v6",
  sun: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8M12 1v2M12 21v2M1 12h2M21 12h2M4 4l2 2M18 18l2 2M4 20l2-2M18 6l2-2",
  moon: "M21 13A9 9 0 0 1 11 3 9 9 0 1 0 21 13",
  close: "M6 6l12 12M18 6L6 18",
  search: "M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16M17 17l5 5",
  file: "M5 2h9l5 5v15H5zM14 2v6h5M8 12h8M8 16h6",
  upload: "M12 16V3M7 8l5-5 5 5M4 16v5h16v-5"
};
function Icon({ name, size: size4 = 18, style }) {
  return <svg width={size4} height={size4} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={style}><path d={shapes[name]} /></svg>;
}

// src/ui/ModelIcon.tsx
import { useState } from "react";

// src/ui/model-icons.json
var model_icons_default = {
  "aion-labs": "aionlabs-color.svg",
  alibaba: "alibaba-color.svg",
  amazon: "bedrock-color.svg",
  anthropic: "claude-color.svg",
  "arcee-ai": "arcee-color.svg",
  "black-forest-labs": "flux.svg",
  "bytedance-seed": "bytedance-color.svg",
  bytedance: "bytedance-color.svg",
  cohere: "cohere-color.svg",
  deepseek: "deepseek-color.svg",
  elevenlabs: "elevenlabs.svg",
  fireworks: "fireworks-color.svg",
  "gemini-omni-video": "gemini-color.svg",
  google: "gemini-color.svg",
  "grok-imagine-image-2-0": "grok.svg",
  "grok-imagine-video-1-5": "grok.svg",
  "ibm-granite": "ibm.svg",
  inception: "inception.svg",
  kling: "kling-color.svg",
  "meta-llama": "meta-color.svg",
  microsoft: "microsoft-color.svg",
  minimax: "minimax-color.svg",
  mistralai: "mistral-color.svg",
  morph: "morph-color.svg",
  nousresearch: "nousresearch.svg",
  nvidia: "nvidia-color.svg",
  openai: "openai.svg",
  perceptron: "perceptron.svg",
  perplexity: "perplexity-color.svg",
  poolside: "poolside-color.svg",
  qwen: "qwen-color.svg",
  rekaai: "reka.svg",
  relace: "relace.svg",
  sakana: "sakana-color.svg",
  seedream: "bytedance-color.svg",
  stepfun: "stepfun-color.svg",
  tencent: "tencent-color.svg",
  "tongyi-mai": "qwen-color.svg",
  upstage: "upstage-color.svg",
  "x-ai": "grok.svg",
  yandex: "yandex.svg",
  "z-ai": "zai.svg"
};

// src/ui/ModelIcon.tsx
function ModelIcon({ model, assetBase = "/model-icons" }) {
  const [failedFile, setFailedFile] = useState("");
  const author = model.split("/")[0];
  const file = Object.hasOwn(model_icons_default, author) ? model_icons_default[author] : void 0;
  return <span className="model-author" aria-hidden="true">
    {file && failedFile !== file ? <img src={`${assetBase}/${file}`} width="26" height="26" alt="" referrerPolicy="no-referrer" onError={() => setFailedFile(file)} /> : <Icon name="code" size={23} />}
  </span>;
}

// src/ui/Routing.tsx
import { useId as useId2, useRef as useRef31, useState as useState22 } from "react";

// src/ui/Disclosure.tsx
import { useState as useState7 } from "react";

// node_modules/@base-ui/react/collapsible/index.parts.mjs
var index_parts_exports = {};
__export(index_parts_exports, {
  Panel: () => CollapsiblePanel,
  Root: () => CollapsibleRoot,
  Trigger: () => CollapsibleTrigger
});

// node_modules/@base-ui/react/collapsible/root/CollapsibleRoot.mjs
import * as React14 from "react";

// node_modules/@base-ui/utils/safeReact.mjs
import * as React from "react";
var SafeReact = {
  ...React
};

// node_modules/@base-ui/utils/useRefWithInit.mjs
import * as React2 from "react";
var UNINITIALIZED = {};
function useRefWithInit(init, initArg) {
  const ref = React2.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}

// node_modules/@base-ui/utils/useStableCallback.mjs
var useInsertionEffect = SafeReact.useInsertionEffect;
var useSafeInsertionEffect = (
  // React 17 doesn't have useInsertionEffect.
  useInsertionEffect && // Preact replaces useInsertionEffect with useLayoutEffect and fires too late.
  useInsertionEffect !== SafeReact.useLayoutEffect ? useInsertionEffect : (fn) => fn()
);
function useStableCallback(callback) {
  const stable = useRefWithInit(createStableCallback).current;
  stable.next = callback;
  useSafeInsertionEffect(stable.effect);
  return stable.trampoline;
}
function createStableCallback() {
  const stable = {
    next: void 0,
    callback: assertNotCalled,
    trampoline: (...args) => stable.callback?.(...args),
    effect: () => {
      stable.callback = stable.next;
    }
  };
  return stable;
}
function assertNotCalled() {
  if (true) {
    throw (
      /* minify-error-disabled */
      new Error("Base UI: Cannot call an event handler while rendering.")
    );
  }
}

// node_modules/@base-ui/react/internals/useRenderElement.mjs
import * as React5 from "react";

// node_modules/@base-ui/utils/useMergedRefs.mjs
function useMergedRefs(a, b, c, d) {
  const forkRef = useRefWithInit(createForkRef).current;
  if (didChange(forkRef, a, b, c, d)) {
    update(forkRef, [a, b, c, d]);
  }
  return forkRef.callback;
}
function useMergedRefsN(refs) {
  const forkRef = useRefWithInit(createForkRef).current;
  if (didChangeN(forkRef, refs)) {
    update(forkRef, refs);
  }
  return forkRef.callback;
}
function createForkRef() {
  return {
    callback: null,
    cleanup: null,
    refs: []
  };
}
function didChange(forkRef, a, b, c, d) {
  return forkRef.refs[0] !== a || forkRef.refs[1] !== b || forkRef.refs[2] !== c || forkRef.refs[3] !== d;
}
function didChangeN(forkRef, newRefs) {
  return forkRef.refs.length !== newRefs.length || forkRef.refs.some((ref, index2) => ref !== newRefs[index2]);
}
function update(forkRef, refs) {
  forkRef.refs = refs;
  if (refs.every((ref) => ref == null)) {
    forkRef.callback = null;
    return;
  }
  forkRef.callback = (instance) => {
    if (forkRef.cleanup) {
      forkRef.cleanup();
      forkRef.cleanup = null;
    }
    if (instance != null) {
      const cleanupCallbacks = Array(refs.length).fill(null);
      for (let i = 0; i < refs.length; i += 1) {
        const ref = refs[i];
        if (ref == null) {
          continue;
        }
        switch (typeof ref) {
          case "function": {
            const refCleanup = ref(instance);
            if (typeof refCleanup === "function") {
              cleanupCallbacks[i] = refCleanup;
            }
            break;
          }
          case "object": {
            ref.current = instance;
            break;
          }
          default:
        }
      }
      forkRef.cleanup = () => {
        for (let i = 0; i < refs.length; i += 1) {
          const ref = refs[i];
          if (ref == null) {
            continue;
          }
          switch (typeof ref) {
            case "function": {
              const cleanupCallback = cleanupCallbacks[i];
              if (typeof cleanupCallback === "function") {
                cleanupCallback();
              } else {
                void ref(null);
              }
              break;
            }
            case "object": {
              ref.current = null;
              break;
            }
            default:
          }
        }
      };
    }
  };
}

// node_modules/@base-ui/utils/getReactElementRef.mjs
import * as React4 from "react";

// node_modules/@base-ui/utils/reactVersion.mjs
import * as React3 from "react";
var majorVersion = parseInt(React3.version, 10);
function isReactVersionAtLeast(reactVersionToCheck) {
  return majorVersion >= reactVersionToCheck;
}

// node_modules/@base-ui/utils/getReactElementRef.mjs
function getReactElementRef(element) {
  if (!/* @__PURE__ */ React4.isValidElement(element)) {
    return null;
  }
  const reactElement = element;
  const propsWithRef = reactElement.props;
  return (isReactVersionAtLeast(19) ? propsWithRef?.ref : reactElement.ref) ?? null;
}

// node_modules/@base-ui/utils/mergeObjects.mjs
function mergeObjects(a, b) {
  if (a && !b) {
    return a;
  }
  if (!a && b) {
    return b;
  }
  if (a || b) {
    return {
      ...a,
      ...b
    };
  }
  return void 0;
}

// node_modules/@base-ui/utils/createLogOnce.mjs
var loggedMessages;
if (true) {
  loggedMessages = /* @__PURE__ */ new Set();
}
function createLogOnce(severity, prefix) {
  return function logOnce(...messages) {
    if (true) {
      const message = messages.join(" ");
      const output = prefix ? `${prefix}: ${message}` : message;
      const key = `${severity}:${output}`;
      if (!loggedMessages.has(key)) {
        loggedMessages.add(key);
        if (severity === "warn") {
          console.warn(output);
        } else {
          console.error(output);
        }
      }
    }
  };
}

// node_modules/@base-ui/utils/warn.mjs
var warn = createLogOnce("warn", "Base UI");

// node_modules/@base-ui/utils/empty.mjs
function NOOP() {
}
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// node_modules/@base-ui/react/internals/getStateAttributesProps.mjs
function getStateAttributesProps(state, customMapping) {
  const props = {};
  for (const key in state) {
    const value = state[key];
    if (customMapping?.hasOwnProperty(key)) {
      const customProps = customMapping[key](value);
      if (customProps != null) {
        Object.assign(props, customProps);
      }
      continue;
    }
    if (value === true) {
      props[`data-${key.toLowerCase()}`] = "";
    } else if (value) {
      props[`data-${key.toLowerCase()}`] = value.toString();
    }
  }
  return props;
}

// node_modules/@base-ui/react/utils/resolveClassName.mjs
function resolveClassName(className, state) {
  return typeof className === "function" ? className(state) : className;
}

// node_modules/@base-ui/react/utils/resolveStyle.mjs
function resolveStyle(style, state) {
  return typeof style === "function" ? style(state) : style;
}

// node_modules/@base-ui/react/merge-props/mergeProps.mjs
var EMPTY_PROPS = {};
function mergeProps(a, b, c, d, e) {
  if (!c && !d && !e && !a) {
    return createInitialMergedProps(b);
  }
  let merged = createInitialMergedProps(a);
  if (b) {
    merged = mergeInto(merged, b);
  }
  if (c) {
    merged = mergeInto(merged, c);
  }
  if (d) {
    merged = mergeInto(merged, d);
  }
  if (e) {
    merged = mergeInto(merged, e);
  }
  return merged;
}
function mergePropsN(props) {
  if (props.length === 0) {
    return EMPTY_PROPS;
  }
  if (props.length === 1) {
    return createInitialMergedProps(props[0]);
  }
  let merged = createInitialMergedProps(props[0]);
  for (let i = 1; i < props.length; i += 1) {
    merged = mergeInto(merged, props[i]);
  }
  return merged;
}
function createInitialMergedProps(inputProps) {
  if (isPropsGetter(inputProps)) {
    return {
      ...inputProps(EMPTY_PROPS)
    };
  }
  return copyInitialProps(inputProps);
}
function mergeInto(merged, inputProps) {
  if (isPropsGetter(inputProps)) {
    return inputProps(merged);
  }
  return mutablyMergeInto(merged, inputProps);
}
function copyInitialProps(inputProps) {
  const copiedProps = {
    ...inputProps
  };
  for (const propName in copiedProps) {
    const propValue = copiedProps[propName];
    if (isEventHandler(propName, propValue)) {
      copiedProps[propName] = wrapEventHandler(propValue);
    }
  }
  return copiedProps;
}
function mutablyMergeInto(mergedProps, externalProps) {
  if (!externalProps) {
    return mergedProps;
  }
  for (const propName in externalProps) {
    const externalPropValue = externalProps[propName];
    switch (propName) {
      case "style": {
        mergedProps[propName] = mergeObjects(mergedProps.style, externalPropValue);
        break;
      }
      case "className": {
        mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
        break;
      }
      default: {
        if (isEventHandler(propName, externalPropValue)) {
          mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
        } else {
          mergedProps[propName] = externalPropValue;
        }
      }
    }
  }
  return mergedProps;
}
function isEventHandler(key, value) {
  const code0 = key.charCodeAt(0);
  const code1 = key.charCodeAt(1);
  const code2 = key.charCodeAt(2);
  return code0 === 111 && code1 === 110 && code2 >= 65 && code2 <= 90 && (typeof value === "function" || typeof value === "undefined");
}
function isPropsGetter(inputProps) {
  return typeof inputProps === "function";
}
function mergeEventHandlers(ourHandler, theirHandler) {
  if (!theirHandler) {
    return ourHandler;
  }
  if (!ourHandler) {
    return wrapEventHandler(theirHandler);
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      const baseUIEvent = event;
      makeEventPreventable(baseUIEvent);
      const result2 = theirHandler(...args);
      if (!baseUIEvent.baseUIHandlerPrevented) {
        ourHandler?.(...args);
      }
      return result2;
    }
    const result = theirHandler(...args);
    ourHandler?.(...args);
    return result;
  };
}
function wrapEventHandler(handler) {
  if (!handler) {
    return handler;
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      makeEventPreventable(event);
    }
    return handler(...args);
  };
}
function makeEventPreventable(event) {
  event.preventBaseUIHandler = () => {
    event.baseUIHandlerPrevented = true;
  };
  return event;
}
function mergeClassNames(ourClassName, theirClassName) {
  if (theirClassName) {
    if (ourClassName) {
      return theirClassName + " " + ourClassName;
    }
    return theirClassName;
  }
  return ourClassName;
}
function isSyntheticEvent(event) {
  return event != null && typeof event === "object" && "nativeEvent" in event;
}

// node_modules/@base-ui/react/internals/useRenderElement.mjs
import { createElement as _createElement } from "react";
function useRenderElement(element, componentProps, params = {}) {
  let renderProp = componentProps.render;
  if (params.enabled !== false) {
    renderProp = unwrapLazyRenderProp(renderProp);
  }
  const outProps = useRenderElementProps(componentProps, params, renderProp);
  if (params.enabled === false) {
    return null;
  }
  const state = params.state ?? EMPTY_OBJECT;
  return evaluateRenderProp(element, renderProp, outProps, state);
}
function useRenderElementProps(componentProps, params, renderProp) {
  const {
    className: classNameProp,
    style: styleProp
  } = componentProps;
  const {
    state = EMPTY_OBJECT,
    ref,
    props,
    stateAttributesMapping: stateAttributesMapping6,
    enabled = true
  } = params;
  const className = enabled ? resolveClassName(classNameProp, state) : void 0;
  const style = enabled ? resolveStyle(styleProp, state) : void 0;
  const stateProps = enabled ? getStateAttributesProps(state, stateAttributesMapping6) : EMPTY_OBJECT;
  const resolvedProps = enabled && props ? resolveRenderFunctionProps(props) : void 0;
  const outProps = enabled ? mergeObjects(stateProps, resolvedProps) ?? {} : EMPTY_OBJECT;
  if (typeof document !== "undefined") {
    if (!enabled) {
      void useMergedRefs(null, null);
    } else if (Array.isArray(ref)) {
      outProps.ref = useMergedRefsN([outProps.ref, getReactElementRef(renderProp), ...ref]);
    } else {
      outProps.ref = useMergedRefs(outProps.ref, getReactElementRef(renderProp), ref);
    }
  }
  if (!enabled) {
    return EMPTY_OBJECT;
  }
  if (className !== void 0) {
    outProps.className = mergeClassNames(outProps.className, className);
  }
  if (style !== void 0) {
    outProps.style = mergeObjects(outProps.style, style);
  }
  return outProps;
}
function resolveRenderFunctionProps(props) {
  if (Array.isArray(props)) {
    return mergePropsN(props);
  }
  return mergeProps(void 0, props);
}
var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
var COMPONENT_IDENTIFIER_PATTERN = /^[A-Z][A-Za-z0-9$]*$/;
var LOWERCASE_CHARACTER_PATTERN = /[a-z]/;
function unwrapLazyRenderProp(render2) {
  if (render2?.$$typeof !== REACT_LAZY_TYPE) {
    return render2;
  }
  const unwrapped = React5.Children.toArray(render2)[0];
  return /* @__PURE__ */ React5.isValidElement(unwrapped) ? unwrapped : render2;
}
function evaluateRenderProp(element, render2, props, state) {
  if (render2) {
    if (typeof render2 === "function") {
      if (true) {
        warnIfRenderPropLooksLikeComponent(render2);
      }
      return render2(props, state);
    }
    const mergedProps = mergeProps(props, render2.props);
    mergedProps.ref = props.ref;
    if (true) {
      if (!/* @__PURE__ */ React5.isValidElement(render2)) {
        throw new Error(["Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.", "A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.", "https://base-ui.com/r/invalid-render-prop"].join("\n"));
      }
    }
    return /* @__PURE__ */ React5.cloneElement(render2, mergedProps);
  }
  return renderTag(element, props);
}
function warnIfRenderPropLooksLikeComponent(renderFn) {
  const functionName = renderFn.name;
  if (functionName.length === 0) {
    return;
  }
  if (!COMPONENT_IDENTIFIER_PATTERN.test(functionName)) {
    return;
  }
  if (!LOWERCASE_CHARACTER_PATTERN.test(functionName)) {
    return;
  }
  warn(`The \`render\` prop received a function named \`${functionName}\` that starts with an uppercase letter.`, "This usually means a React component was passed directly as `render={Component}`.", "Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.", "If this is an intentional render callback, rename it to start with a lowercase letter.", "Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.", "https://base-ui.com/r/invalid-render-prop");
}
function renderTag(Tag, props) {
  if (Tag === "button") {
    return /* @__PURE__ */ _createElement("button", {
      type: "button",
      ...props,
      key: props.key
    });
  }
  if (Tag === "img") {
    return /* @__PURE__ */ _createElement("img", {
      alt: "",
      ...props,
      key: props.key
    });
  }
  return /* @__PURE__ */ React5.createElement(Tag, props);
}

// node_modules/@base-ui/react/collapsible/root/useCollapsibleRoot.mjs
import * as React12 from "react";

// node_modules/@base-ui/utils/useControlled.mjs
import * as React6 from "react";

// node_modules/@base-ui/utils/error.mjs
var error = createLogOnce("error", "Base UI");

// node_modules/@base-ui/utils/useControlled.mjs
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value"
}) {
  const {
    current: isControlled
  } = React6.useRef(controlled !== void 0);
  const [valueState, setValue] = React6.useState(() => defaultProp);
  const value = isControlled && controlled !== void 0 ? controlled : valueState;
  if (true) {
    React6.useEffect(() => {
      if (isControlled !== (controlled !== void 0)) {
        error([`A component is changing the ${isControlled ? "" : "un"}controlled ${state} state of ${name} to be ${isControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${name} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [state, name, controlled]);
    const {
      current: defaultValue
    } = React6.useRef(defaultProp);
    React6.useEffect(() => {
      if (!isControlled && serializeToDevModeString(defaultValue) !== serializeToDevModeString(defaultProp)) {
        error([`A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. To suppress this warning opt to use a controlled ${name}.`].join("\n"));
      }
    }, [defaultProp]);
  }
  const setValueIfUncontrolled = React6.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
function serializeToDevModeString(input) {
  let nextId = 0;
  const seen = /* @__PURE__ */ new WeakMap();
  try {
    const result = JSON.stringify(input, function replacer(key, value) {
      if (key === "_owner" && this != null && typeof this === "object" && "$$typeof" in this) {
        return void 0;
      }
      if (typeof value === "bigint") {
        return `__bigint__:${value}`;
      }
      if (value !== null && typeof value === "object") {
        const id = seen.get(value);
        if (id !== void 0) {
          return `__object__:${id}`;
        }
        seen.set(value, nextId);
        nextId += 1;
      }
      return value;
    });
    return result ?? `__top__:${typeof input}`;
  } catch {
    return "__unserializable__";
  }
}

// node_modules/@base-ui/utils/useId.mjs
import * as React8 from "react";

// node_modules/@base-ui/utils/useForcedRerendering.mjs
import * as React7 from "react";
function useForcedRerendering() {
  const [, setState] = React7.useState({});
  return React7.useCallback(() => {
    setState({});
  }, []);
}

// node_modules/@base-ui/utils/useId.mjs
var globalId = 0;
function useGlobalId(idOverride, prefix = "mui") {
  const defaultId = React8.useRef(void 0);
  const forceRerender = useForcedRerendering();
  const id = idOverride ?? defaultId.current;
  React8.useEffect(() => {
    if (defaultId.current == null) {
      globalId += 1;
      defaultId.current = `${prefix}-${globalId}`;
      if (idOverride == null) {
        forceRerender();
      }
    }
  }, [idOverride, prefix, forceRerender]);
  return id;
}
var maybeReactUseId = SafeReact.useId;
function useId(idOverride, prefix) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride ?? (prefix ? `${prefix}-${reactId}` : reactId);
  }
  return useGlobalId(idOverride, prefix);
}

// node_modules/@base-ui/react/internals/useBaseUiId.mjs
function useBaseUiId(idOverride) {
  return useId(idOverride, "base-ui");
}

// node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs
function createChangeEventDetails(reason, event, trigger, customProperties) {
  let canceled = false;
  let allowPropagation = false;
  const custom = customProperties ?? EMPTY_OBJECT;
  const details = {
    reason,
    event: event ?? new Event("base-ui"),
    cancel() {
      canceled = true;
    },
    allowPropagation() {
      allowPropagation = true;
    },
    get isCanceled() {
      return canceled;
    },
    get isPropagationAllowed() {
      return allowPropagation;
    },
    trigger,
    ...custom
  };
  return details;
}

// node_modules/@base-ui/react/internals/reason-parts.mjs
var reason_parts_exports = {};
__export(reason_parts_exports, {
  cancelOpen: () => cancelOpen,
  chipRemovePress: () => chipRemovePress,
  clearPress: () => clearPress,
  closePress: () => closePress,
  closeWatcher: () => closeWatcher,
  decrementPress: () => decrementPress,
  disabled: () => disabled,
  drag: () => drag,
  escapeKey: () => escapeKey,
  focusOut: () => focusOut,
  imperativeAction: () => imperativeAction,
  incrementPress: () => incrementPress,
  initial: () => initial,
  inputBlur: () => inputBlur,
  inputChange: () => inputChange,
  inputClear: () => inputClear,
  inputPaste: () => inputPaste,
  inputPress: () => inputPress,
  itemPress: () => itemPress,
  keyboard: () => keyboard,
  linkPress: () => linkPress,
  listNavigation: () => listNavigation,
  missing: () => missing,
  none: () => none,
  outsidePress: () => outsidePress,
  pointer: () => pointer,
  popupClose: () => popupClose,
  scrub: () => scrub,
  siblingOpen: () => siblingOpen,
  swipe: () => swipe,
  trackPress: () => trackPress,
  triggerFocus: () => triggerFocus,
  triggerHover: () => triggerHover,
  triggerPress: () => triggerPress,
  wheel: () => wheel,
  windowResize: () => windowResize
});
var none = "none";
var triggerPress = "trigger-press";
var triggerHover = "trigger-hover";
var triggerFocus = "trigger-focus";
var outsidePress = "outside-press";
var itemPress = "item-press";
var closePress = "close-press";
var linkPress = "link-press";
var clearPress = "clear-press";
var chipRemovePress = "chip-remove-press";
var trackPress = "track-press";
var incrementPress = "increment-press";
var decrementPress = "decrement-press";
var inputChange = "input-change";
var inputClear = "input-clear";
var inputBlur = "input-blur";
var inputPaste = "input-paste";
var inputPress = "input-press";
var focusOut = "focus-out";
var escapeKey = "escape-key";
var closeWatcher = "close-watcher";
var listNavigation = "list-navigation";
var keyboard = "keyboard";
var pointer = "pointer";
var drag = "drag";
var wheel = "wheel";
var scrub = "scrub";
var popupClose = "popup-close";
var cancelOpen = "cancel-open";
var siblingOpen = "sibling-open";
var disabled = "disabled";
var missing = "missing";
var initial = "initial";
var imperativeAction = "imperative-action";
var swipe = "swipe";
var windowResize = "window-resize";

// node_modules/@base-ui/react/internals/useTransitionStatus.mjs
import * as React11 from "react";

// node_modules/@base-ui/utils/useIsoLayoutEffect.mjs
import * as React9 from "react";
var noop = () => {
};
var useIsoLayoutEffect = typeof document !== "undefined" ? React9.useLayoutEffect : noop;

// node_modules/@base-ui/utils/useOnMount.mjs
import * as React10 from "react";
function useOnMount(fn) {
  React10.useEffect(fn, EMPTY_ARRAY);
}

// node_modules/@base-ui/utils/useAnimationFrame.mjs
var EMPTY = null;
var LAST_RAF = globalThis.requestAnimationFrame;
var Scheduler = class {
  /* This implementation uses an array as a backing data-structure for frame callbacks.
   * It allows `O(1)` callback cancelling by inserting a `null` in the array, though it
   * never calls the native `cancelAnimationFrame` if there are no frames left. This can
   * be much more efficient if there is a call pattern that alterns as
   * "request-cancel-request-cancel-…".
   * But in the case of "request-request-…-cancel-cancel-…", it leaves the final animation
   * frame to run anyway. We turn that frame into a `O(1)` no-op via `callbacksCount`. */
  callbacks = [];
  callbacksCount = 0;
  nextId = 1;
  startId = 1;
  isScheduled = false;
  tick = (timestamp) => {
    this.isScheduled = false;
    const currentCallbacks = this.callbacks;
    const currentCallbacksCount = this.callbacksCount;
    this.callbacks = [];
    this.callbacksCount = 0;
    this.startId = this.nextId;
    if (currentCallbacksCount > 0) {
      for (let i = 0; i < currentCallbacks.length; i += 1) {
        currentCallbacks[i]?.(timestamp);
      }
    }
  };
  request(fn) {
    const id = this.nextId;
    this.nextId += 1;
    this.callbacks.push(fn);
    this.callbacksCount += 1;
    const didRAFChange = LAST_RAF !== requestAnimationFrame && (LAST_RAF = requestAnimationFrame, true);
    if (!this.isScheduled || didRAFChange) {
      requestAnimationFrame(this.tick);
      this.isScheduled = true;
    }
    return id;
  }
  cancel(id) {
    const index2 = id - this.startId;
    if (index2 < 0 || index2 >= this.callbacks.length) {
      return;
    }
    if (this.callbacks[index2] === null) {
      return;
    }
    this.callbacks[index2] = null;
    this.callbacksCount -= 1;
  }
};
var scheduler = new Scheduler();
var AnimationFrame = class _AnimationFrame {
  static create() {
    return new _AnimationFrame();
  }
  static request(fn) {
    return scheduler.request(fn);
  }
  static cancel(id) {
    return scheduler.cancel(id);
  }
  currentId = EMPTY;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  request(fn) {
    this.cancel();
    this.currentId = scheduler.request(() => {
      this.currentId = EMPTY;
      fn();
    });
  }
  cancel = () => {
    if (this.currentId !== EMPTY) {
      scheduler.cancel(this.currentId);
      this.currentId = EMPTY;
    }
  };
  disposeEffect = () => {
    return this.cancel;
  };
};
function useAnimationFrame() {
  const timeout = useRefWithInit(AnimationFrame.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

// node_modules/@base-ui/react/internals/useTransitionStatus.mjs
function useTransitionStatus(open3, enableIdleState = false, deferEndingState = false, animateInitialOpen = false) {
  const [transitionStatus, setTransitionStatus] = React11.useState(open3 && enableIdleState ? "idle" : void 0);
  const [mounted, setMounted] = React11.useState(open3 && !animateInitialOpen);
  if (open3 && !mounted) {
    setMounted(true);
    setTransitionStatus("starting");
  }
  if (!open3 && mounted && transitionStatus !== "ending" && !deferEndingState) {
    setTransitionStatus("ending");
  }
  if (!open3 && !mounted && transitionStatus === "ending") {
    setTransitionStatus(void 0);
  }
  useIsoLayoutEffect(() => {
    if (!open3 && mounted && transitionStatus !== "ending" && deferEndingState) {
      const frame = AnimationFrame.request(() => {
        setTransitionStatus("ending");
      });
      return () => {
        AnimationFrame.cancel(frame);
      };
    }
    return void 0;
  }, [open3, mounted, transitionStatus, deferEndingState]);
  useIsoLayoutEffect(() => {
    if (!open3 || enableIdleState || transitionStatus === void 0) {
      return void 0;
    }
    const frame = AnimationFrame.request(() => {
      setTransitionStatus(void 0);
    });
    return () => {
      AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open3, transitionStatus]);
  useIsoLayoutEffect(() => {
    if (!open3 || !enableIdleState) {
      return void 0;
    }
    if (open3 && mounted && transitionStatus !== "idle") {
      setTransitionStatus("starting");
    }
    const frame = AnimationFrame.request(() => {
      setTransitionStatus("idle");
    });
    return () => {
      AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open3, mounted, transitionStatus]);
  return {
    mounted,
    setMounted,
    transitionStatus
  };
}

// node_modules/@base-ui/react/collapsible/root/useCollapsibleRoot.mjs
function useCollapsibleRoot(parameters) {
  const {
    open: openParam,
    defaultOpen = false,
    onOpenChange,
    disabled: disabled2
  } = parameters;
  const [open3, setOpen] = useControlled({
    controlled: openParam,
    default: defaultOpen,
    name: "Collapsible",
    state: "open"
  });
  const {
    mounted,
    setMounted,
    transitionStatus
  } = useTransitionStatus(open3, true, true);
  const defaultPanelId = useBaseUiId();
  const [registeredPanelId, setPanelIdState] = React12.useState();
  const panelId = registeredPanelId === null ? void 0 : registeredPanelId ?? defaultPanelId;
  const handleTrigger = useStableCallback((event) => {
    const nextOpen = !open3;
    const eventDetails = createChangeEventDetails(reason_parts_exports.triggerPress, event.nativeEvent);
    onOpenChange(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    setOpen(nextOpen);
  });
  return React12.useMemo(() => ({
    defaultPanelId,
    disabled: disabled2,
    handleTrigger,
    mounted,
    open: open3,
    panelId,
    setMounted,
    setOpen,
    setPanelIdState,
    transitionStatus
  }), [defaultPanelId, disabled2, handleTrigger, mounted, open3, panelId, setMounted, setOpen, setPanelIdState, transitionStatus]);
}

// node_modules/@base-ui/react/collapsible/root/CollapsibleRootContext.mjs
import * as React13 from "react";
var CollapsibleRootContext = /* @__PURE__ */ React13.createContext(void 0);
if (true) CollapsibleRootContext.displayName = "CollapsibleRootContext";
function useCollapsibleRootContext() {
  const context = React13.useContext(CollapsibleRootContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: CollapsibleRootContext is missing. Collapsible parts must be placed within <Collapsible.Root>." : formatErrorMessage_default(15));
  }
  return context;
}

// node_modules/@base-ui/react/internals/TransitionStatusDataAttributes.mjs
var TransitionStatusDataAttributes_exports = {};
__export(TransitionStatusDataAttributes_exports, {
  endingStyle: () => endingStyle,
  startingStyle: () => startingStyle
});
var startingStyle = "data-starting-style";
var endingStyle = "data-ending-style";

// node_modules/@base-ui/react/internals/stateAttributesMapping.mjs
var STARTING_HOOK = {
  [startingStyle]: ""
};
var ENDING_HOOK = {
  [endingStyle]: ""
};
var transitionStatusMapping = {
  transitionStatus(value) {
    if (value === "starting") {
      return STARTING_HOOK;
    }
    if (value === "ending") {
      return ENDING_HOOK;
    }
    return null;
  }
};

// node_modules/@base-ui/react/collapsible/panel/CollapsiblePanelDataAttributes.mjs
var open = "data-open";
var closed = "data-closed";
var startingStyle2 = TransitionStatusDataAttributes_exports.startingStyle;
var endingStyle2 = TransitionStatusDataAttributes_exports.endingStyle;

// node_modules/@base-ui/react/collapsible/trigger/CollapsibleTriggerDataAttributes.mjs
var panelOpen = "data-panel-open";

// node_modules/@base-ui/react/utils/collapsibleOpenStateMapping.mjs
var PANEL_OPEN_HOOK = {
  [open]: ""
};
var PANEL_CLOSED_HOOK = {
  [closed]: ""
};
var triggerOpenStateMapping = {
  open(value) {
    if (value) {
      return {
        [panelOpen]: ""
      };
    }
    return null;
  }
};
var collapsibleOpenStateMapping = {
  open(value) {
    if (value) {
      return PANEL_OPEN_HOOK;
    }
    return PANEL_CLOSED_HOOK;
  }
};

// node_modules/@base-ui/react/collapsible/root/stateAttributesMapping.mjs
var collapsibleStateAttributesMapping = {
  ...collapsibleOpenStateMapping,
  ...transitionStatusMapping
};

// node_modules/@base-ui/react/collapsible/root/CollapsibleRoot.mjs
import { jsx as _jsx } from "react/jsx-runtime";
var CollapsibleRoot = /* @__PURE__ */ React14.forwardRef(function CollapsibleRoot2(componentProps, forwardedRef) {
  const {
    render: render2,
    className,
    defaultOpen = false,
    disabled: disabled2 = false,
    onOpenChange: onOpenChangeProp,
    open: open3,
    style,
    ...elementProps
  } = componentProps;
  const onOpenChange = useStableCallback(onOpenChangeProp);
  const collapsible = useCollapsibleRoot({
    open: open3,
    defaultOpen,
    onOpenChange,
    disabled: disabled2
  });
  const state = React14.useMemo(() => ({
    open: collapsible.open,
    disabled: collapsible.disabled,
    transitionStatus: collapsible.transitionStatus
  }), [collapsible.open, collapsible.disabled, collapsible.transitionStatus]);
  const contextValue = React14.useMemo(() => ({
    ...collapsible,
    onOpenChange,
    state
  }), [collapsible, onOpenChange, state]);
  const element = useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: elementProps,
    stateAttributesMapping: collapsibleStateAttributesMapping
  });
  return /* @__PURE__ */ _jsx(CollapsibleRootContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) CollapsibleRoot.displayName = "CollapsibleRoot";

// node_modules/@base-ui/react/collapsible/trigger/CollapsibleTrigger.mjs
import * as React18 from "react";

// node_modules/@base-ui/react/internals/use-button/useButton.mjs
import * as React17 from "react";

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
function isTableElement(element) {
  return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
  try {
    if (element.matches(":popover-open")) {
      return true;
    }
  } catch (_e) {
  }
  try {
    return element.matches(":modal");
  } catch (_e) {
    return false;
  }
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
var containRe = /paint|layout|strict|content/;
var isNotNone = (value) => !!value && value !== "none";
var isWebKitValue;
function isContainingBlock(elementOrCss) {
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (isWebKitValue == null) {
    isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
  }
  return isWebKitValue;
}
function isLastTraversableNode(node) {
  return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return (node.ownerDocument || node).body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  } else {
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/@base-ui/react/internals/composite/root/CompositeRootContext.mjs
import * as React15 from "react";
var CompositeRootContext = /* @__PURE__ */ React15.createContext(void 0);
if (true) CompositeRootContext.displayName = "CompositeRootContext";
function useCompositeRootContext(optional = false) {
  const context = React15.useContext(CompositeRootContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>." : formatErrorMessage_default(16));
  }
  return context;
}

// node_modules/@base-ui/react/utils/useFocusableWhenDisabled.mjs
import * as React16 from "react";
function useFocusableWhenDisabled(parameters) {
  const {
    focusableWhenDisabled,
    disabled: disabled2,
    composite = false,
    tabIndex: tabIndexProp = 0,
    isNativeButton
  } = parameters;
  const isFocusableComposite = composite && focusableWhenDisabled !== false;
  const isNonFocusableComposite = composite && focusableWhenDisabled === false;
  const props = React16.useMemo(() => {
    const additionalProps = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(event) {
        if (disabled2 && focusableWhenDisabled && event.key !== "Tab") {
          event.preventDefault();
        }
      }
    };
    if (!composite) {
      additionalProps.tabIndex = tabIndexProp;
      if (!isNativeButton && disabled2) {
        additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
      }
    }
    if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled2) {
      additionalProps["aria-disabled"] = disabled2;
    }
    if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
      additionalProps.disabled = disabled2;
    }
    return additionalProps;
  }, [composite, disabled2, focusableWhenDisabled, isFocusableComposite, isNonFocusableComposite, isNativeButton, tabIndexProp]);
  return {
    props
  };
}

// node_modules/@base-ui/utils/owner.mjs
function ownerDocument(node) {
  return node?.ownerDocument || document;
}

// node_modules/@base-ui/react/utils/dispatchClickWithModifiers.mjs
function dispatchClickWithModifiers(target, sourceEvent, {
  detail = 0,
  pointerType = ""
} = {}) {
  target.dispatchEvent(new (getWindow(target)).PointerEvent("click", {
    bubbles: true,
    cancelable: true,
    composed: true,
    detail,
    pointerType,
    shiftKey: sourceEvent.shiftKey,
    ctrlKey: sourceEvent.ctrlKey,
    altKey: sourceEvent.altKey,
    metaKey: sourceEvent.metaKey
  }));
}

// node_modules/@base-ui/react/internals/use-button/useButton.mjs
function useButton(parameters = {}) {
  const {
    disabled: disabled2 = false,
    focusableWhenDisabled,
    tabIndex = 0,
    native: isNativeButton = true,
    composite: compositeProp
  } = parameters;
  const elementRef = React17.useRef(null);
  const compositeRootContext = useCompositeRootContext(true);
  const isCompositeItem = compositeProp ?? compositeRootContext !== void 0;
  const {
    props: focusableWhenDisabledProps
  } = useFocusableWhenDisabled({
    focusableWhenDisabled,
    disabled: disabled2,
    composite: isCompositeItem,
    tabIndex,
    isNativeButton
  });
  if (true) {
    React17.useEffect(() => {
      if (!elementRef.current) {
        return;
      }
      const isButtonTag = isButtonElement(elementRef.current);
      if (isNativeButton) {
        if (!isButtonTag) {
          const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
          const message = "A component that acts as a button expected a native <button> because the `nativeButton` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Use a real <button> in the `render` prop, or set `nativeButton` to `false`.";
          error(`${message}${ownerStackMessage}`);
        }
      } else if (isButtonTag) {
        const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
        const message = "A component that acts as a button expected a non-<button> because the `nativeButton` prop is false. Rendering a <button> keeps native behavior while Base UI applies non-native attributes and handlers, which can add unintended extra attributes (such as `role` or `aria-disabled`). Use a non-<button> in the `render` prop, or set `nativeButton` to `true`.";
        error(`${message}${ownerStackMessage}`);
      }
    }, [isNativeButton]);
  }
  const updateDisabled = React17.useCallback(() => {
    const element = elementRef.current;
    if (!isButtonElement(element)) {
      return;
    }
    if (isCompositeItem && disabled2 && focusableWhenDisabledProps.disabled === void 0 && element.disabled) {
      element.disabled = false;
    }
  }, [disabled2, focusableWhenDisabledProps.disabled, isCompositeItem]);
  useIsoLayoutEffect(updateDisabled, [updateDisabled]);
  const getButtonProps = React17.useCallback((externalProps = {}) => {
    const {
      onClick: externalOnClick,
      onMouseDown: externalOnMouseDown,
      onKeyUp: externalOnKeyUp,
      onKeyDown: externalOnKeyDown,
      onPointerDown: externalOnPointerDown,
      ...otherExternalProps
    } = externalProps;
    return mergeProps({
      onClick(event) {
        if (disabled2) {
          event.preventDefault();
          return;
        }
        externalOnClick?.(event);
      },
      onMouseDown(event) {
        if (!disabled2) {
          externalOnMouseDown?.(event);
        }
      },
      onKeyDown(event) {
        if (disabled2) {
          return;
        }
        makeEventPreventable(event);
        externalOnKeyDown?.(event);
        if (event.baseUIHandlerPrevented) {
          return;
        }
        const isCurrentTarget = event.target === event.currentTarget;
        const currentTarget = event.currentTarget;
        const isButton = isButtonElement(currentTarget);
        const isLink = !isNativeButton && isValidLinkElement(currentTarget);
        const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
        const isEnterKey = event.key === "Enter";
        const isSpaceKey = event.key === " ";
        const role = currentTarget.getAttribute("role");
        const isTextNavigationRole = role?.startsWith("menuitem") || role === "option" || role === "gridcell";
        if (isCurrentTarget && isCompositeItem && isSpaceKey) {
          if (event.defaultPrevented && isTextNavigationRole) {
            return;
          }
          event.preventDefault();
          if (!isNativeButton || isButton) {
            event.preventBaseUIHandler();
            dispatchClickWithModifiers(currentTarget, event);
          }
          return;
        }
        if (!shouldClick || isNativeButton || !isSpaceKey && !isEnterKey) {
          if (isCurrentTarget && isLink && isSpaceKey) {
            event.preventDefault();
          }
          return;
        }
        if (event.defaultPrevented) {
          return;
        }
        event.preventDefault();
        if (isEnterKey) {
          event.preventBaseUIHandler();
          dispatchClickWithModifiers(currentTarget, event);
        }
      },
      onKeyUp(event) {
        if (disabled2) {
          return;
        }
        makeEventPreventable(event);
        externalOnKeyUp?.(event);
        if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === " ") {
          event.preventDefault();
          return;
        }
        if (event.baseUIHandlerPrevented) {
          return;
        }
        if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && !event.defaultPrevented && event.key === " ") {
          event.preventBaseUIHandler();
          dispatchClickWithModifiers(event.currentTarget, event);
        }
      },
      onPointerDown(event) {
        if (disabled2) {
          event.preventDefault();
          return;
        }
        externalOnPointerDown?.(event);
      }
    }, isNativeButton ? {
      type: "button"
    } : {
      role: "button"
    }, focusableWhenDisabledProps, otherExternalProps);
  }, [disabled2, focusableWhenDisabledProps, isCompositeItem, isNativeButton]);
  const buttonRef = useStableCallback((element) => {
    elementRef.current = element;
    updateDisabled();
  });
  return {
    getButtonProps,
    buttonRef
  };
}
function isButtonElement(elem) {
  return isHTMLElement(elem) && elem.tagName === "BUTTON";
}
function isValidLinkElement(elem) {
  return isHTMLElement(elem) && elem.tagName === "A" && Boolean(elem.href);
}

// node_modules/@base-ui/react/collapsible/trigger/CollapsibleTrigger.mjs
var stateAttributesMapping = {
  ...triggerOpenStateMapping,
  ...transitionStatusMapping
};
var CollapsibleTrigger = /* @__PURE__ */ React18.forwardRef(function CollapsibleTrigger2(componentProps, forwardedRef) {
  const {
    panelId,
    open: open3,
    handleTrigger,
    state,
    disabled: contextDisabled
  } = useCollapsibleRootContext();
  const {
    className,
    disabled: disabled2 = contextDisabled,
    render: render2,
    nativeButton = true,
    style,
    ...elementProps
  } = componentProps;
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled: disabled2,
    native: nativeButton
  });
  const element = useRenderElement("button", componentProps, {
    state,
    ref: [forwardedRef, buttonRef],
    props: [{
      "aria-controls": open3 ? panelId : void 0,
      "aria-expanded": open3,
      onClick: handleTrigger
    }, elementProps, getButtonProps],
    stateAttributesMapping
  });
  return element;
});
if (true) CollapsibleTrigger.displayName = "CollapsibleTrigger";

// node_modules/@base-ui/react/collapsible/panel/CollapsiblePanel.mjs
import * as React21 from "react";

// node_modules/@base-ui/react/collapsible/panel/useCollapsiblePanel.mjs
import * as React20 from "react";

// node_modules/@base-ui/utils/addEventListener.mjs
function addEventListener(target, type, listener, options) {
  target.addEventListener(type, listener, options);
  return () => {
    target.removeEventListener(type, listener, options);
  };
}

// node_modules/@base-ui/utils/useTimeout.mjs
var EMPTY2 = 0;
var Timeout = class _Timeout {
  static create() {
    return new _Timeout();
  }
  currentId = EMPTY2;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = EMPTY2;
      fn();
    }, delay);
  }
  isStarted() {
    return this.currentId !== EMPTY2;
  }
  clear = () => {
    if (this.currentId !== EMPTY2) {
      clearTimeout(this.currentId);
      this.currentId = EMPTY2;
    }
  };
  disposeEffect = () => {
    return this.clear;
  };
};
function useTimeout() {
  const timeout = useRefWithInit(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

// node_modules/@base-ui/utils/useValueAsRef.mjs
function useValueAsRef(value) {
  const latest = useRefWithInit(createLatestRef, value).current;
  latest.next = value;
  useIsoLayoutEffect(latest.effect);
  return latest;
}
function createLatestRef(value) {
  const latest = {
    current: value,
    next: value,
    effect: () => {
      latest.current = latest.next;
    }
  };
  return latest;
}

// node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs
import * as React19 from "react";

// node_modules/@base-ui/react/internals/useAnimationsFinished.mjs
import * as ReactDOM from "react-dom";

// node_modules/@base-ui/react/utils/resolveRef.mjs
function resolveRef(maybeRef) {
  if (maybeRef == null) {
    return maybeRef;
  }
  return "current" in maybeRef ? maybeRef.current : maybeRef;
}

// node_modules/@base-ui/react/utils/getFiniteAnimations.mjs
function getFiniteAnimations(element, options) {
  return element.getAnimations(options).filter((animation) => {
    const timing = animation.effect?.getTiming();
    return timing?.duration !== Infinity && timing?.iterations !== Infinity;
  });
}

// node_modules/@base-ui/react/internals/useAnimationsFinished.mjs
var pendingCallbacks = null;
function flushBeforePaint(fn) {
  if (!pendingCallbacks) {
    const callbacks = [];
    pendingCallbacks = callbacks;
    queueMicrotask(() => {
      pendingCallbacks = null;
      ReactDOM.flushSync(() => {
        for (const callback of callbacks) {
          callback();
        }
      });
    });
  }
  pendingCallbacks.push(fn);
}
function useAnimationsFinished(elementOrRef, waitForStartingStyleRemoved = false, batch = false) {
  const frame = useAnimationFrame();
  return useStableCallback((fnToExecute, signal = null) => {
    frame.cancel();
    const element = resolveRef(elementOrRef);
    if (element == null) {
      return;
    }
    const resolvedElement = element;
    const done = () => {
      if (!batch) {
        ReactDOM.flushSync(fnToExecute);
        return;
      }
      flushBeforePaint(() => {
        if (!signal?.aborted) {
          fnToExecute();
        }
      });
    };
    if (typeof resolvedElement.getAnimations !== "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
      fnToExecute();
      return;
    }
    function exec() {
      Promise.all(getFiniteAnimations(resolvedElement).map((animation) => animation.finished.then(NOOP))).then(() => {
        if (!signal?.aborted) {
          done();
        }
      }, () => {
        if (signal?.aborted) {
          return;
        }
        const currentAnimations = getFiniteAnimations(resolvedElement);
        if (currentAnimations.some((animation) => animation.pending || animation.playState !== "finished")) {
          exec();
          return;
        }
        done();
      });
    }
    if (waitForStartingStyleRemoved) {
      const startingStyleAttribute = startingStyle;
      if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
        frame.request(exec);
        return;
      }
      const attributeObserver = new MutationObserver(() => {
        if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
          attributeObserver.disconnect();
          exec();
        }
      });
      attributeObserver.observe(resolvedElement, {
        attributes: true,
        attributeFilter: [startingStyleAttribute]
      });
      signal?.addEventListener("abort", () => attributeObserver.disconnect(), {
        once: true
      });
      return;
    }
    frame.request(exec);
  });
}

// node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs
function useOpenChangeComplete(parameters) {
  const {
    enabled = true,
    open: open3,
    ref,
    batch = false,
    onComplete: onCompleteParam
  } = parameters;
  const onComplete = useStableCallback(onCompleteParam);
  const runOnceAnimationsFinish = useAnimationsFinished(ref, open3, batch);
  React19.useEffect(() => {
    if (!enabled) {
      return void 0;
    }
    const abortController = new AbortController();
    runOnceAnimationsFinish(onComplete, abortController.signal);
    return () => {
      abortController.abort();
    };
  }, [enabled, open3, onComplete, runOnceAnimationsFinish]);
}

// node_modules/@base-ui/react/collapsible/panel/useCollapsiblePanel.mjs
var EMPTY_DIMENSIONS = {
  height: void 0,
  width: void 0
};
function useCollapsiblePanel(parameters) {
  const {
    externalRef,
    hiddenUntilFound,
    id: idParam,
    keepMounted,
    mounted,
    onOpenChange,
    open: open3,
    setMounted,
    setOpen,
    transitionStatus
  } = parameters;
  const panelRef = React20.useRef(null);
  const animationTypeRef = React20.useRef(null);
  const [dimensions, setDimensionsUnwrapped] = React20.useState(EMPTY_DIMENSIONS);
  const lastMeasuredDimensionsRef = React20.useRef(EMPTY_DIMENSIONS);
  const shouldSkipNextOpenRef = React20.useRef(false);
  const shouldPreventMountAnimationRef = React20.useRef(open3);
  const shouldPreventActivityResumeAnimationRef = React20.useRef(false);
  const [forcePanelIdle, setForcePanelIdle] = React20.useState(false);
  const pendingTemporaryStyleRestoreRef = React20.useRef(null);
  const mergedPanelRef = useMergedRefs(externalRef, panelRef);
  const latestOpenRef = useValueAsRef(open3);
  const runOnceCloseAnimationsFinish = useAnimationsFinished(panelRef);
  const hidden = !open3 && !mounted;
  const panelTransitionStatus = forcePanelIdle ? "idle" : transitionStatus;
  const shouldPreventOpenAnimation = open3 && // These 2 refs are safe to read in render, they are only written from committed
  // layout/effect paths and gate one-shot motion suppression for the next open
  // lifecycle. They intentionally expose the last committed motion snapshot.
  (shouldPreventMountAnimationRef.current || shouldPreventActivityResumeAnimationRef.current);
  const renderedDimensions = !open3 && mounted && // These 2 refs are also safe to read in render, both hold the last committed
  // animation mode and measurement. This fallback only restores a previously
  // measured pixel size after the live dimensions state has been reset back to `auto`.
  animationTypeRef.current === "css-animation" && dimensions.height === void 0 && dimensions.width === void 0 ? lastMeasuredDimensionsRef.current : dimensions;
  const shouldPersistHiddenTransitionStyles = hiddenUntilFound && hidden && animationTypeRef.current !== "css-animation";
  const setDimensions = useStableCallback((nextDimensions, shouldCacheMeasurement = true) => {
    if (shouldCacheMeasurement) {
      lastMeasuredDimensionsRef.current = nextDimensions;
    }
    setDimensionsUnwrapped(nextDimensions);
  });
  const restorePendingTemporaryStyle = useStableCallback(() => {
    pendingTemporaryStyleRestoreRef.current?.();
    pendingTemporaryStyleRestoreRef.current = null;
  });
  const setPendingTemporaryStyleRestore = useStableCallback((restore) => {
    restorePendingTemporaryStyle();
    pendingTemporaryStyleRestoreRef.current = () => {
      pendingTemporaryStyleRestoreRef.current = null;
      restore();
    };
  });
  const markActivityResumeAnimationSuppressed = useStableCallback(() => {
    if (open3 && mounted && animationTypeRef.current === "css-animation") {
      shouldPreventActivityResumeAnimationRef.current = true;
    }
  });
  useIsoLayoutEffect(() => {
    if (!forcePanelIdle || transitionStatus === "starting") {
      return;
    }
    setForcePanelIdle(false);
  }, [forcePanelIdle, transitionStatus]);
  React20.useEffect(() => {
    return () => {
      markActivityResumeAnimationSuppressed();
      restorePendingTemporaryStyle();
    };
  }, [markActivityResumeAnimationSuppressed, restorePendingTemporaryStyle]);
  useIsoLayoutEffect(() => {
    if (!open3) {
      shouldPreventMountAnimationRef.current = false;
      shouldPreventActivityResumeAnimationRef.current = false;
    }
    const panel = panelRef.current;
    if (!panel) {
      return void 0;
    }
    if (!open3 && pendingTemporaryStyleRestoreRef.current) {
      restorePendingTemporaryStyle();
    }
    const animationType = getAnimationType(panel, shouldPreventOpenAnimation);
    animationTypeRef.current = animationType;
    if (open3 && transitionStatus === "idle" && shouldPreventMountAnimationRef.current && animationType === "css-animation") {
      lastMeasuredDimensionsRef.current = getDimensions(panel);
      return void 0;
    }
    if (open3 && transitionStatus === "starting") {
      const skipNextOpen = shouldSkipNextOpenRef.current;
      shouldSkipNextOpenRef.current = false;
      if (animationType === "none") {
        setDimensions(getDimensions(panel));
        setForcePanelIdle(true);
        return void 0;
      }
      if (animationType === "css-transition") {
        const restoreLayoutStyles = resetLayoutStyles(panel);
        setDimensions(getDimensions(panel));
        if (!skipNextOpen) {
          return restoreLayoutStyles;
        }
        const restoreTransitionDuration = setTemporaryStyle(panel, "transition-duration", "0s");
        setPendingTemporaryStyleRestore(restoreTransitionDuration);
        setForcePanelIdle(true);
        return restoreLayoutStyles;
      }
      setDimensions(getDimensions(panel));
      const restoreAnimationName = setTemporaryStyle(panel, "animation-name", "none");
      if (!skipNextOpen) {
        restoreAnimationName();
        return void 0;
      }
      const restoreAnimationDuration = setTemporaryStyle(panel, "animation-duration", "0s");
      restoreAnimationName();
      setPendingTemporaryStyleRestore(restoreAnimationDuration);
      setForcePanelIdle(true);
      return void 0;
    }
    if (!open3 && mounted && (transitionStatus === "idle" || transitionStatus === "starting")) {
      if (animationType === "none") {
        setDimensions(EMPTY_DIMENSIONS, false);
        setMounted(false);
        return void 0;
      }
      setDimensions(getDimensions(panel));
      return void 0;
    }
    if (transitionStatus !== "ending") {
      return void 0;
    }
    if (animationType === "none") {
      setMounted(false);
      return void 0;
    }
    const nextDimensions = getDimensions(panel);
    const hasMeasuredSize = nextDimensions.height > 0 || nextDimensions.width > 0;
    if (!hasMeasuredSize) {
      setMounted(false);
      return void 0;
    }
    setDimensions(nextDimensions);
    if (animationType === "css-animation") {
      const restoreAnimationName = setTemporaryStyle(panel, "animation-name", "none");
      restoreAnimationName();
    }
    return void 0;
  }, [mounted, open3, restorePendingTemporaryStyle, setDimensions, setMounted, setPendingTemporaryStyleRestore, shouldPreventOpenAnimation, transitionStatus]);
  useOpenChangeComplete({
    enabled: open3 && mounted && panelTransitionStatus === "idle",
    open: true,
    ref: panelRef,
    onComplete() {
      if (!open3) {
        return;
      }
      setDimensions(EMPTY_DIMENSIONS, false);
    }
  });
  React20.useEffect(() => {
    if (open3 || !mounted || panelTransitionStatus !== "ending") {
      return void 0;
    }
    const panel = panelRef.current;
    if (!panel) {
      setMounted(false);
      setDimensions(EMPTY_DIMENSIONS, false);
      return void 0;
    }
    const abortController = new AbortController();
    let endingStyleFrame = -1;
    function handleComplete() {
      if (latestOpenRef.current) {
        return;
      }
      setMounted(false);
      setDimensions(EMPTY_DIMENSIONS, false);
    }
    endingStyleFrame = AnimationFrame.request(() => {
      runOnceCloseAnimationsFinish(handleComplete, abortController.signal);
    });
    return () => {
      AnimationFrame.cancel(endingStyleFrame);
      abortController.abort();
    };
  }, [latestOpenRef, mounted, open3, panelTransitionStatus, runOnceCloseAnimationsFinish, setDimensions, setMounted]);
  useIsoLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel || !hiddenUntilFound || !hidden) {
      return;
    }
    panel.setAttribute("hidden", "until-found");
  }, [hidden, hiddenUntilFound]);
  React20.useEffect(function registerBeforeMatchListener() {
    const panel = panelRef.current;
    if (!panel) {
      return void 0;
    }
    const revealDecisionTimeout = Timeout.create();
    let revertRevealFrame = -1;
    const scheduleRevealRevert = (revertSkippedMotion, restoreStartingStyle) => {
      revealDecisionTimeout.start(0, () => {
        if (latestOpenRef.current) {
          return;
        }
        revertRevealFrame = AnimationFrame.request(() => {
          if (latestOpenRef.current) {
            return;
          }
          if (revertSkippedMotion) {
            shouldSkipNextOpenRef.current = false;
          }
          if (restoreStartingStyle) {
            panel.setAttribute(startingStyle2, "");
          }
          panel.setAttribute("hidden", "until-found");
        });
      });
    };
    const handleBeforeMatch = (event) => {
      const eventDetails = createChangeEventDetails(reason_parts_exports.none, event);
      onOpenChange(true, eventDetails);
      if (eventDetails.isCanceled) {
        scheduleRevealRevert(false, false);
        return;
      }
      shouldSkipNextOpenRef.current = true;
      const hadStartingStyle = panel.hasAttribute(startingStyle2);
      panel.removeAttribute(startingStyle2);
      setOpen(true);
      scheduleRevealRevert(true, hadStartingStyle);
    };
    const cleanupBeforeMatchListener = addEventListener(panel, "beforematch", handleBeforeMatch);
    return () => {
      revealDecisionTimeout.clear();
      AnimationFrame.cancel(revertRevealFrame);
      cleanupBeforeMatchListener();
    };
  }, [latestOpenRef, onOpenChange, setOpen]);
  const shouldRender = keepMounted || hiddenUntilFound || mounted || open3;
  return {
    height: renderedDimensions.height,
    props: {
      ...shouldPersistHiddenTransitionStyles ? {
        [startingStyle2]: ""
      } : void 0,
      hidden,
      id: idParam
    },
    ref: mergedPanelRef,
    shouldPreventOpenAnimation,
    shouldRender,
    transitionStatus: panelTransitionStatus,
    width: renderedDimensions.width
  };
}
function getDimensions(element) {
  return {
    height: element.scrollHeight,
    width: element.scrollWidth
  };
}
function getAnimationType(element, hasSuppressedMountAnimation) {
  const panelStyles = getWindow(element).getComputedStyle(element);
  const hasAnimation = (panelStyles.animationName.split(",").map((name) => name.trim()).some((name) => name !== "" && name !== "none") || hasSuppressedMountAnimation) && hasNonZeroDuration(panelStyles.animationDuration);
  const hasTransition = hasNonZeroDuration(panelStyles.transitionDuration);
  if (hasAnimation && hasTransition) {
    if (true) {
      warn("CSS transitions and CSS animations both detected on Collapsible or Accordion panel.", "Only one of either animation type should be used.");
    }
    return "css-transition";
  }
  if (hasTransition) {
    return "css-transition";
  }
  if (hasAnimation) {
    return "css-animation";
  }
  return "none";
}
function hasNonZeroDuration(value) {
  return value.split(",").map((part) => part.trim()).some((part) => part !== "" && Number.parseFloat(part) > 0);
}
function setTemporaryStyle(element, property, value) {
  const previousValue = element.style.getPropertyValue(property);
  const previousPriority = element.style.getPropertyPriority(property);
  element.style.setProperty(property, value);
  return () => {
    if (previousValue === "") {
      element.style.removeProperty(property);
      return;
    }
    element.style.setProperty(property, previousValue, previousPriority);
  };
}
function resetLayoutStyles(element) {
  const originalLayoutStyles = {
    "justify-content": element.style.justifyContent,
    "align-items": element.style.alignItems,
    "align-content": element.style.alignContent,
    "justify-items": element.style.justifyItems
  };
  Object.keys(originalLayoutStyles).forEach((key) => {
    element.style.setProperty(key, "initial", "important");
  });
  function restoreLayoutStyles() {
    Object.entries(originalLayoutStyles).forEach(([key, value]) => {
      if (value === "") {
        element.style.removeProperty(key);
        return;
      }
      element.style.setProperty(key, value);
    });
  }
  const frame = AnimationFrame.request(restoreLayoutStyles);
  return () => {
    AnimationFrame.cancel(frame);
    restoreLayoutStyles();
  };
}

// node_modules/@base-ui/react/collapsible/panel/CollapsiblePanelCssVars.mjs
var collapsiblePanelHeight = "--collapsible-panel-height";
var collapsiblePanelWidth = "--collapsible-panel-width";

// node_modules/@base-ui/react/collapsible/panel/CollapsiblePanel.mjs
var CollapsiblePanel = /* @__PURE__ */ React21.forwardRef(function CollapsiblePanel2(componentProps, forwardedRef) {
  const {
    className,
    hiddenUntilFound: hiddenUntilFoundProp,
    keepMounted: keepMountedProp,
    render: render2,
    id: idProp,
    style,
    ...elementProps
  } = componentProps;
  if (true) {
    React21.useEffect(() => {
      if (hiddenUntilFoundProp && keepMountedProp === false) {
        warn("The `keepMounted={false}` prop on `Collapsible.Panel` is ignored when `hiddenUntilFound` is enabled, since the panel must remain mounted while closed.");
      }
    }, [hiddenUntilFoundProp, keepMountedProp]);
  }
  const {
    defaultPanelId,
    mounted,
    onOpenChange,
    open: open3,
    setMounted,
    setPanelIdState,
    setOpen,
    state,
    transitionStatus
  } = useCollapsibleRootContext();
  const hiddenUntilFound = hiddenUntilFoundProp ?? false;
  const keepMounted = keepMountedProp ?? false;
  const registeredId = idProp || void 0;
  const id = registeredId ?? defaultPanelId;
  useIsoLayoutEffect(() => {
    setPanelIdState((currentId) => registeredId ?? (currentId === null ? void 0 : currentId));
    return () => {
      setPanelIdState((currentId) => currentId === registeredId ? null : currentId);
    };
  }, [registeredId, setPanelIdState]);
  const {
    height,
    props,
    ref,
    shouldPreventOpenAnimation,
    shouldRender,
    transitionStatus: panelTransitionStatus,
    width
  } = useCollapsiblePanel({
    externalRef: forwardedRef,
    hiddenUntilFound,
    id,
    keepMounted,
    mounted,
    onOpenChange,
    open: open3,
    setMounted,
    setOpen,
    transitionStatus
  });
  const panelState = {
    ...state,
    transitionStatus: panelTransitionStatus
  };
  const resolvedStyle = resolveStyle(style, panelState);
  const element = useRenderElement("div", {
    ...componentProps,
    style: void 0
  }, {
    state: panelState,
    ref,
    props: [
      props,
      {
        style: {
          [collapsiblePanelHeight]: height === void 0 ? "auto" : `${height}px`,
          [collapsiblePanelWidth]: width === void 0 ? "auto" : `${width}px`
        }
      },
      elementProps,
      resolvedStyle ? {
        style: resolvedStyle
      } : void 0,
      // Resolve the public `style` prop so temporary `animationName: 'none'`
      // can still win after user's inline styles have been merged.
      shouldPreventOpenAnimation ? {
        style: {
          animationName: "none"
        }
      } : void 0
    ],
    stateAttributesMapping: collapsibleStateAttributesMapping
  });
  if (!shouldRender) {
    return null;
  }
  return element;
});
if (true) CollapsiblePanel.displayName = "CollapsiblePanel";

// src/ui/Disclosure.tsx
function Disclosure({ title, summary, children, className = "" }) {
  const [instant, setInstant] = useState7(false);
  return <index_parts_exports.Root className={className} data-instant={instant || void 0} onOpenChange={(_, { event }) => setInstant(event.type.startsWith("key") || event.type === "click" && "detail" in event && event.detail === 0)}>
    <index_parts_exports.Trigger className="disclosure-trigger"><span className="summary-title">{title}</span>{summary ? <span className="summary-value">{summary}</span> : null}<Icon name="chevron" size={15} /></index_parts_exports.Trigger>
    <index_parts_exports.Panel className="disclosure-panel"><div className="disclosure-body">{children}</div></index_parts_exports.Panel>
  </index_parts_exports.Root>;
}

// src/ui/SelectControl.tsx
import { useRef as useRef30, useState as useState21 } from "react";

// node_modules/@base-ui/react/select/index.parts.mjs
var index_parts_exports2 = {};
__export(index_parts_exports2, {
  Arrow: () => SelectArrow,
  Backdrop: () => SelectBackdrop,
  Group: () => SelectGroup,
  GroupLabel: () => SelectGroupLabel,
  Icon: () => SelectIcon,
  Item: () => SelectItem,
  ItemIndicator: () => SelectItemIndicator,
  ItemText: () => SelectItemText,
  Label: () => SelectLabel,
  List: () => SelectList,
  Popup: () => SelectPopup,
  Portal: () => SelectPortal,
  Positioner: () => SelectPositioner,
  Root: () => SelectRoot,
  ScrollDownArrow: () => SelectScrollDownArrow,
  ScrollUpArrow: () => SelectScrollUpArrow,
  Separator: () => SelectSeparator,
  Trigger: () => SelectTrigger,
  Value: () => SelectValue
});

// node_modules/@base-ui/react/select/root/SelectRoot.mjs
import * as React48 from "react";

// node_modules/@base-ui/utils/visuallyHidden.mjs
var visuallyHiddenBase = {
  clipPath: "inset(50%)",
  overflow: "hidden",
  whiteSpace: "nowrap",
  border: 0,
  padding: 0,
  width: 1,
  height: 1,
  margin: -1
};
var visuallyHidden = {
  ...visuallyHiddenBase,
  position: "fixed",
  margin: 0,
  top: 0,
  left: 0
};
var visuallyHiddenInput = {
  ...visuallyHiddenBase,
  position: "absolute"
};

// node_modules/@base-ui/utils/useOnFirstRender.mjs
import * as React22 from "react";
function useOnFirstRender(fn) {
  const ref = React22.useRef(true);
  if (ref.current) {
    ref.current = false;
    fn();
  }
}

// node_modules/@base-ui/utils/usePreviousValue.mjs
import * as React23 from "react";
function usePreviousValue(value) {
  const [state, setState] = React23.useState({
    current: value,
    previous: null
  });
  if (!Object.is(value, state.current)) {
    setState({
      current: value,
      previous: state.current
    });
  }
  return state.previous;
}

// node_modules/@base-ui/utils/isElementDisabled.mjs
function isElementDisabled(element) {
  return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
}

// node_modules/@base-ui/utils/store/useStore.mjs
var import_shim = __toESM(require_shim(), 1);
var import_with_selector = __toESM(require_with_selector(), 1);
import * as React26 from "react";

// node_modules/@base-ui/utils/fastHooks.mjs
import * as React25 from "react";
var hooks = [];
var currentInstance = void 0;
function getInstance() {
  return currentInstance;
}
function register(hook) {
  hooks.push(hook);
}

// node_modules/@base-ui/utils/store/useStore.mjs
var canUseRawUseSyncExternalStore = isReactVersionAtLeast(19);
var useStoreImplementation = canUseRawUseSyncExternalStore ? useStoreFast : useStoreLegacy;
function useStore(store, selector, a1, a2, a3) {
  return useStoreImplementation(store, selector, a1, a2, a3);
}
function useStoreR19(store, selector, a1, a2, a3) {
  const getSelection = React26.useCallback(() => selector(store.getSnapshot(), a1, a2, a3), [store, selector, a1, a2, a3]);
  return (0, import_shim.useSyncExternalStore)(store.subscribe, getSelection, getSelection);
}
register({
  before(instance) {
    instance.syncIndex = 0;
    if (!instance.didInitialize) {
      instance.syncTick = 1;
      instance.syncHooks = [];
      instance.didChangeStore = true;
      instance.getSnapshot = () => {
        let didChange2 = false;
        for (let i = 0; i < instance.syncHooks.length; i += 1) {
          const hook = instance.syncHooks[i];
          const value = hook.selector(hook.store.state, hook.a1, hook.a2, hook.a3);
          if (!Object.is(hook.value, value)) {
            didChange2 = true;
            hook.value = value;
          }
        }
        if (didChange2) {
          instance.syncTick += 1;
        }
        return instance.syncTick;
      };
    }
  },
  after(instance) {
    if (instance.syncHooks.length > 0) {
      if (instance.didChangeStore) {
        instance.didChangeStore = false;
        instance.subscribe = (onStoreChange) => {
          const stores = /* @__PURE__ */ new Set();
          for (const hook of instance.syncHooks) {
            stores.add(hook.store);
          }
          const unsubscribes = [];
          for (const store of stores) {
            unsubscribes.push(store.subscribe(onStoreChange));
          }
          return () => {
            for (const unsubscribe of unsubscribes) {
              unsubscribe();
            }
          };
        };
      }
      (0, import_shim.useSyncExternalStore)(instance.subscribe, instance.getSnapshot, instance.getSnapshot);
    }
  }
});
function useStoreFast(store, selector, a1, a2, a3) {
  const instance = getInstance();
  if (!instance) {
    return useStoreR19(store, selector, a1, a2, a3);
  }
  const index2 = instance.syncIndex;
  instance.syncIndex += 1;
  let hook;
  if (!instance.didInitialize) {
    hook = {
      store,
      selector,
      a1,
      a2,
      a3,
      value: selector(store.getSnapshot(), a1, a2, a3)
    };
    instance.syncHooks.push(hook);
  } else {
    hook = instance.syncHooks[index2];
    if (hook.store !== store || hook.selector !== selector || !Object.is(hook.a1, a1) || !Object.is(hook.a2, a2) || !Object.is(hook.a3, a3)) {
      if (hook.store !== store) {
        instance.didChangeStore = true;
      }
      hook.store = store;
      hook.selector = selector;
      hook.a1 = a1;
      hook.a2 = a2;
      hook.a3 = a3;
      hook.value = selector(store.getSnapshot(), a1, a2, a3);
    }
  }
  return hook.value;
}
function useStoreLegacy(store, selector, a1, a2, a3) {
  return (0, import_with_selector.useSyncExternalStoreWithSelector)(store.subscribe, store.getSnapshot, store.getSnapshot, (state) => selector(state, a1, a2, a3));
}

// node_modules/@base-ui/utils/store/Store.mjs
var Store = class {
  /**
   * Creates a store with the given initial state, constructing the class it is called on.
   * Calling it on a generic base class (e.g. `ReactStore.create(...)`) constructs that
   * class but degrades the inferred instance type to `Store`; use `new` there instead.
   */
  static create(state) {
    return new this(state);
  }
  /**
   * The current state of the store.
   * This property is updated immediately when the state changes as a result of calling {@link setState}, {@link update}, or {@link set}.
   * To subscribe to state changes, use the {@link useState} method. The value returned by {@link useState} is updated after the component renders (similarly to React's useState).
   * The values can be used directly (to avoid subscribing to the store) in effects or event handlers.
   *
   * Do not modify properties in state directly. Instead, use the provided methods to ensure proper state management and listener notification.
   */
  // Internal state to handle recursive `setState()` calls
  constructor(state) {
    this.state = state;
    this.listeners = /* @__PURE__ */ new Set();
    this.updateTick = 0;
  }
  /**
   * Registers a listener that will be called whenever the store's state changes.
   *
   * @param fn The listener function to be called on state changes.
   * @returns A function to unsubscribe the listener.
   */
  subscribe = (fn) => {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  };
  /**
   * Returns the current state of the store.
   */
  getSnapshot = () => {
    return this.state;
  };
  /**
   * Updates the entire store's state and notifies all registered listeners.
   *
   * @param newState The new state to set for the store.
   */
  setState(newState) {
    if (this.state === newState) {
      return;
    }
    this.state = newState;
    this.updateTick += 1;
    const currentTick = this.updateTick;
    for (const listener of this.listeners) {
      if (currentTick !== this.updateTick) {
        return;
      }
      listener(newState);
    }
  }
  /**
   * Merges the provided changes into the current state and notifies listeners if there are changes.
   * Each value must match its state key. Pass an exact known subset rather than a broad
   * `Partial<State>`, which may contain `undefined` for required state fields.
   *
   * @param changes An object containing the changes to apply to the current state.
   */
  update(changes) {
    for (const key in changes) {
      if (!Object.is(this.state[key], changes[key])) {
        this.setState({
          ...this.state,
          ...changes
        });
        return;
      }
    }
  }
  /**
   * Sets a specific key in the store's state to a new value and notifies listeners if the value has changed.
   *
   * @param key The key in the store's state to update.
   * @param value The new value to set for the specified key.
   */
  set(key, value) {
    if (!Object.is(this.state[key], value)) {
      this.setState({
        ...this.state,
        [key]: value
      });
    }
  }
  /**
   * Gives the state a new reference and updates all registered listeners.
   */
  notifyAll() {
    const newState = {
      ...this.state
    };
    this.setState(newState);
  }
  use(selector, a1, a2, a3) {
    return useStore(this, selector, a1, a2, a3);
  }
};

// node_modules/@base-ui/utils/store/ReactStore.mjs
import * as React27 from "react";
var ReactStore = class extends Store {
  /**
   * Creates a new ReactStore instance.
   *
   * @param state Initial state of the store.
   * @param context Non-reactive context values.
   * @param selectors Optional selectors for use with `useState`.
   */
  constructor(state, context = {}, selectors3) {
    super(state);
    this.context = context;
    this.selectors = selectors3;
  }
  /**
   * Non-reactive values such as refs, callbacks, etc.
   */
  /**
   * Synchronizes a single external value into the store.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */
  useSyncedValue(key, value) {
    React27.useDebugValue(key);
    const store = this;
    useIsoLayoutEffect(() => {
      if (store.state[key] !== value) {
        store.set(key, value);
      }
    }, [store, key, value]);
  }
  /**
   * Synchronizes a single external value into the store and
   * cleans it up (sets to `undefined`) on unmount.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */
  useSyncedValueWithCleanup(key, value) {
    const store = this;
    useIsoLayoutEffect(() => {
      if (store.state[key] !== value) {
        store.set(key, value);
      }
      return () => {
        store.set(key, void 0);
      };
    }, [store, key, value]);
  }
  /**
   * Synchronizes multiple external values into the store.
   * Each value must match its state key. Pass an exact known subset rather than a broad
   * `Partial<State>`, which may contain `undefined` for required state fields.
   *
   * Note that the while the values in `state` are updated immediately, the values returned
   * by `useState` are updated before the next render (similarly to React's `useState`).
   *
   * @param statePart An exact subset of state fields to synchronize. Unknown keys are not accepted.
   */
  useSyncedValues(statePart) {
    const store = this;
    if (true) {
      React27.useDebugValue(statePart, (p) => Object.keys(p));
      const keys = React27.useRef(Object.keys(statePart)).current;
      const nextKeys = Object.keys(statePart);
      if (keys.length !== nextKeys.length || keys.some((key, index2) => key !== nextKeys[index2])) {
        console.error("ReactStore.useSyncedValues expects the same prop keys on every render. Keys should be stable.");
      }
    }
    const dependencies = Object.values(statePart);
    useIsoLayoutEffect(() => {
      store.update(statePart);
    }, [store, ...dependencies]);
  }
  /**
   * Registers a controllable prop pair (`controlled`, `defaultValue`) for a specific key. If `controlled`
   * is non-undefined, the store's state at `key` is updated to match `controlled`.
   */
  useControlledProp(key, controlled) {
    React27.useDebugValue(key);
    const store = this;
    const isControlled = controlled !== void 0;
    useIsoLayoutEffect(() => {
      if (isControlled && !Object.is(store.state[key], controlled)) {
        store.setState({
          ...store.state,
          [key]: controlled
        });
      }
    }, [store, key, controlled, isControlled]);
    if (true) {
      const cache = this.controlledValues ??= /* @__PURE__ */ new Map();
      if (!cache.has(key)) {
        cache.set(key, isControlled);
      }
      const previouslyControlled = cache.get(key);
      if (previouslyControlled !== void 0 && previouslyControlled !== isControlled) {
        console.error(`A component is changing the ${previouslyControlled ? "" : "un"}controlled state of ${key.toString()} to be ${previouslyControlled ? "un" : ""}controlled. Elements should not switch from uncontrolled to controlled (or vice versa).`);
      }
    }
  }
  /** Gets the current value from the store using a selector with the provided key.
   *
   * @param key Key of the selector to use.
   */
  select(key, a1, a2, a3) {
    const selector = this.selectors[key];
    return selector(this.state, a1, a2, a3);
  }
  /**
   * Returns a value from the store's state using a selector function.
   * Used to subscribe to specific parts of the state.
   * This methods causes a rerender whenever the selected state changes.
   *
   * @param key Key of the selector to use.
   */
  useState(key, a1, a2, a3) {
    React27.useDebugValue(key);
    return useStore(this, this.selectors[key], a1, a2, a3);
  }
  /**
   * Wraps a function with `useStableCallback` to ensure it has a stable reference
   * and assigns it to the context.
   *
   * @param key Key of the event callback. Must be a function in the context.
   * @param fn Function to assign.
   */
  useContextCallback(key, fn) {
    React27.useDebugValue(key);
    const stableFunction = useStableCallback(fn ?? NOOP);
    this.context[key] = stableFunction;
  }
  /**
   * Returns a stable setter function for a specific key in the store's state.
   * It's commonly used to pass as a ref callback to React elements.
   *
   * @param key Key of the state to set.
   */
  useStateSetter(key) {
    const ref = React27.useRef(void 0);
    if (ref.current === void 0) {
      ref.current = (value) => {
        this.set(key, value);
      };
    }
    return ref.current;
  }
  /**
   * Observes changes derived from the store's selectors and calls the listener when the selected value changes.
   *
   * @param key Key of the selector to observe.
   * @param listener Listener function called when the selector result changes.
   */
  observe(selector, listener) {
    let selectFn;
    if (typeof selector === "function") {
      selectFn = selector;
    } else {
      selectFn = this.selectors[selector];
    }
    let prevValue = selectFn(this.state);
    listener(prevValue, prevValue, this);
    return this.subscribe((nextState) => {
      const nextValue = selectFn(nextState);
      if (!Object.is(prevValue, nextValue)) {
        const oldValue = prevValue;
        prevValue = nextValue;
        listener(nextValue, oldValue, this);
      }
    });
  }
};

// node_modules/@base-ui/utils/mergeCleanups.mjs
function mergeCleanups(...cleanups) {
  return () => {
    for (let i = 0; i < cleanups.length; i += 1) {
      const cleanup = cleanups[i];
      if (cleanup) {
        cleanup();
      }
    }
  };
}

// node_modules/@base-ui/utils/platform/parts.mjs
var parts_exports = {};
__export(parts_exports, {
  engine: () => engine_exports,
  env: () => env_exports,
  mediaQuery: () => media_query_exports,
  os: () => os_exports,
  screenReader: () => screen_reader_exports
});

// node_modules/@base-ui/utils/platform/os.mjs
var os_exports = {};
__export(os_exports, {
  android: () => android,
  apple: () => apple,
  ios: () => ios,
  linux: () => linux,
  mac: () => mac,
  windows: () => windows
});

// node_modules/@base-ui/utils/platform/shared.mjs
function readRawData() {
  if (typeof navigator === "undefined") {
    return {
      userAgent: "",
      platform: "",
      maxTouchPoints: 0
    };
  }
  if (true) {
    const uaData = navigator.userAgentData;
    if (uaData && Array.isArray(uaData.brands)) {
      return {
        userAgent: uaData.brands.map(({
          brand,
          version: version2
        }) => `${brand}/${version2}`).join(" "),
        platform: uaData.platform ?? navigator.platform ?? "",
        maxTouchPoints: navigator.maxTouchPoints ?? 0
      };
    }
  }
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform ?? "",
    maxTouchPoints: navigator.maxTouchPoints ?? 0
  };
}
var {
  userAgent,
  platform,
  maxTouchPoints
} = readRawData();
var lowerUserAgent = userAgent.toLowerCase();
var lowerPlatform = platform.toLowerCase();

// node_modules/@base-ui/utils/platform/os.mjs
var ios = /^i(os$|p)/.test(lowerPlatform) || lowerPlatform === "macintel" && maxTouchPoints > 1;
var ANDROID_STRING = "android";
var android = lowerPlatform === ANDROID_STRING || lowerUserAgent.includes(ANDROID_STRING);
var mac = !ios && lowerPlatform.startsWith("mac");
var windows = lowerPlatform.startsWith("win");
var linux = !android && /^(linux|chrome os)/.test(lowerPlatform);
var apple = mac || ios;

// node_modules/@base-ui/utils/platform/engine.mjs
var engine_exports = {};
__export(engine_exports, {
  blink: () => blink,
  gecko: () => gecko,
  webkit: () => webkit
});
var webkit = typeof CSS !== "undefined" && !!CSS.supports?.("-webkit-backdrop-filter:none");
var gecko = !webkit && lowerUserAgent.includes("firefox");
var blink = !webkit && lowerUserAgent.includes("chrom");

// node_modules/@base-ui/utils/platform/screen-reader.mjs
var screen_reader_exports = {};
__export(screen_reader_exports, {
  voiceOver: () => voiceOver
});
var voiceOver = apple;

// node_modules/@base-ui/utils/platform/env.mjs
var env_exports = {};
__export(env_exports, {
  jsdom: () => jsdom
});
var jsdom = /jsdom|happydom/.test(lowerUserAgent);

// node_modules/@base-ui/utils/platform/media-query.mjs
var media_query_exports = {};
__export(media_query_exports, {
  iOS: () => iOS
});
var iOS = "@supports (-webkit-touch-callout: none)";

// node_modules/@base-ui/react/floating-ui-react/utils/event.mjs
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
function isReactEvent(event) {
  return "nativeEvent" in event;
}
function isVirtualClick(event) {
  if (event.pointerType === "" && event.isTrusted) {
    return true;
  }
  if (parts_exports.os.android && event.pointerType) {
    return event.type === "click" && event.buttons === 1;
  }
  return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
  if (parts_exports.env.jsdom) {
    return false;
  }
  return !parts_exports.os.android && event.width === 0 && event.height === 0 || // Chrome synthesizes a screen reader press (TalkBack, VoiceOver, NVDA) as a 1x1 mouse
  // `pointerdown` with no pressure. TalkBack can report a pressed button, while desktop
  // mouse presses can report no pressure, so only require no pressed button off Android.
  event.type === "pointerdown" && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse" && (parts_exports.os.android || event.buttons === 0) || // iOS VoiceOver returns 0.333• for width/height.
  event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "touch";
}
function isMouseLikePointerType(pointerType, strict) {
  const values = ["mouse", "pen"];
  if (!strict) {
    values.push("", void 0);
  }
  return values.includes(pointerType);
}
function isClickLikeEvent(event) {
  const type = event.type;
  return type === "click" || type === "mousedown" || type === "keydown" || type === "keyup";
}

// node_modules/@base-ui/utils/shadowDom.mjs
function activeElement(doc) {
  let element = doc.activeElement;
  while (element?.shadowRoot?.activeElement != null) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode?.();
  if (parent.contains(child)) {
    return true;
  }
  if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function closest(node, selector) {
  let current = node;
  while (current) {
    if (isElement(current) && current.matches(selector)) {
      return current;
    }
    current = current.assignedSlot ?? current.parentNode ?? (isShadowRoot(current) ? current.host : null);
  }
  return null;
}
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0] ?? event.target;
  }
  return event.target;
}

// node_modules/@base-ui/react/floating-ui-react/utils/constants.mjs
var FOCUSABLE_ATTRIBUTE = "data-base-ui-focusable";
var TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";

// node_modules/@base-ui/react/utils/CommonPopupDataAttributes.mjs
var open2 = "data-open";
var closed2 = "data-closed";
var anchorHidden = "data-anchor-hidden";

// node_modules/@base-ui/react/utils/CommonTriggerDataAttributes.mjs
var CommonTriggerDataAttributes_exports = {};
__export(CommonTriggerDataAttributes_exports, {
  popupOpen: () => popupOpen,
  pressed: () => pressed
});
var popupOpen = "data-popup-open";
var pressed = "data-pressed";

// node_modules/@base-ui/react/utils/popupStateMapping.mjs
var TRIGGER_HOOK = {
  [popupOpen]: ""
};
var PRESSABLE_TRIGGER_HOOK = {
  [popupOpen]: "",
  [pressed]: ""
};
var POPUP_OPEN_HOOK = {
  [open2]: ""
};
var POPUP_CLOSED_HOOK = {
  [closed2]: ""
};
var ANCHOR_HIDDEN_HOOK = {
  [anchorHidden]: ""
};
var triggerOpenStateMapping2 = {
  open(value) {
    if (value) {
      return TRIGGER_HOOK;
    }
    return null;
  }
};
var pressableTriggerOpenStateMapping = {
  open(value) {
    if (value) {
      return PRESSABLE_TRIGGER_HOOK;
    }
    return null;
  }
};
var popupStateMapping = {
  open(value) {
    if (value) {
      return POPUP_OPEN_HOOK;
    }
    return POPUP_CLOSED_HOOK;
  },
  anchorHidden(value) {
    if (value) {
      return ANCHOR_HIDDEN_HOOK;
    }
    return null;
  }
};
var popupTransitionStateMapping = {
  ...popupStateMapping,
  ...transitionStatusMapping
};

// node_modules/@base-ui/react/floating-ui-react/utils/element.mjs
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ("composedPath" in event) {
    return event.composedPath().includes(node);
  }
  const eventAgain = event;
  return eventAgain.target != null && node.contains(eventAgain.target);
}
function isRootElement(element) {
  return element.matches("html,body");
}
function isTypeableElement(element) {
  return isHTMLElement(element) && element.matches(TYPEABLE_SELECTOR);
}
function isTypeableCombobox(element) {
  if (!element) {
    return false;
  }
  return element.getAttribute("role") === "combobox" && isTypeableElement(element);
}
function getFloatingFocusElement(floatingElement) {
  if (!floatingElement) {
    return null;
  }
  return floatingElement.hasAttribute(FOCUSABLE_ATTRIBUTE) ? floatingElement : floatingElement.querySelector(`[${FOCUSABLE_ATTRIBUTE}]`) || floatingElement;
}

// node_modules/@base-ui/react/floating-ui-react/components/FloatingFocusManager.mjs
import * as React31 from "react";

// node_modules/@base-ui/react/utils/FocusGuard.mjs
import * as React28 from "react";
import { jsx as _jsx2 } from "react/jsx-runtime";
var FocusGuard = /* @__PURE__ */ React28.forwardRef(function FocusGuard2(props, ref) {
  const [role, setRole] = React28.useState();
  useIsoLayoutEffect(() => {
    if (parts_exports.screenReader.voiceOver && parts_exports.engine.webkit) {
      setRole("button");
    }
  }, []);
  const restProps = {
    tabIndex: 0,
    // Role is only for VoiceOver
    role
  };
  return /* @__PURE__ */ _jsx2("span", {
    ...props,
    ref,
    style: visuallyHidden,
    "aria-hidden": role ? void 0 : true,
    ...restProps,
    "data-base-ui-focus-guard": ""
  });
});
if (true) FocusGuard.displayName = "FocusGuard";

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  const firstChar = placement[0];
  return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  const side = getSide(placement);
  return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
  var _padding$top, _padding$right, _padding$bottom, _padding$left;
  return {
    top: (_padding$top = padding.top) != null ? _padding$top : 0,
    right: (_padding$right = padding.right) != null ? _padding$right : 0,
    bottom: (_padding$bottom = padding.bottom) != null ? _padding$bottom : 0,
    left: (_padding$left = padding.left) != null ? _padding$left : 0
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// node_modules/@base-ui/react/floating-ui-react/utils/composite.mjs
function isIndexOutOfListBounds(list, index2) {
  return index2 < 0 || index2 >= list.length;
}
function getMinListIndex(listRef, disabledIndices) {
  return findNonDisabledListIndex(listRef.current, {
    disabledIndices
  });
}
function getMaxListIndex(listRef, disabledIndices) {
  return findNonDisabledListIndex(listRef.current, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function getNextListIndex(list, currentIndex, options) {
  const {
    decrement,
    loopFocus,
    allowEscape,
    disabledIndices,
    minIndex,
    maxIndex
  } = options;
  const step = () => findNonDisabledListIndex(list, {
    startingIndex: currentIndex,
    decrement,
    disabledIndices
  });
  let index2;
  let wrapped = false;
  if (!loopFocus) {
    index2 = decrement ? Math.max(minIndex, step()) : Math.min(maxIndex, step());
  } else if (decrement ? currentIndex <= minIndex : currentIndex >= maxIndex) {
    const outside = decrement ? -1 : list.length;
    if (allowEscape && currentIndex !== outside) {
      index2 = -1;
    } else {
      index2 = decrement ? maxIndex : minIndex;
      wrapped = true;
    }
  } else {
    index2 = step();
  }
  return {
    index: isIndexOutOfListBounds(list, index2) ? -1 : index2,
    wrapped
  };
}
function findNonDisabledListIndex(list, {
  startingIndex = -1,
  decrement = false,
  disabledIndices,
  amount = 1
} = {}) {
  let index2 = startingIndex;
  do {
    index2 += decrement ? -amount : amount;
  } while (index2 >= 0 && index2 <= list.length - 1 && isListIndexDisabled(list, index2, disabledIndices));
  return index2;
}
function isListIndexDisabled(list, index2, disabledIndices) {
  const isExplicitlyDisabled = typeof disabledIndices === "function" ? disabledIndices(index2) : disabledIndices?.includes(index2) ?? false;
  if (isExplicitlyDisabled) {
    return true;
  }
  const element = list[index2];
  if (!element) {
    return false;
  }
  if (!isElementVisible(element)) {
    return true;
  }
  if (element.matches(":disabled")) {
    return true;
  }
  return !disabledIndices && (element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true");
}
function isHiddenByStyles(styles) {
  return styles.visibility === "hidden" || styles.visibility === "collapse";
}
function isElementVisible(element, styles = element ? getComputedStyle2(element) : null) {
  if (!element || !element.isConnected || !styles || isHiddenByStyles(styles)) {
    return false;
  }
  if (typeof element.checkVisibility === "function") {
    return element.checkVisibility();
  }
  return styles.display !== "none" && styles.display !== "contents";
}

// node_modules/@base-ui/react/floating-ui-react/utils/tabbable.mjs
var CANDIDATE_SELECTOR = 'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]';
function getParentElement(element) {
  const assignedSlot = element.assignedSlot;
  if (assignedSlot) {
    return assignedSlot;
  }
  if (element.parentElement) {
    return element.parentElement;
  }
  const rootNode = element.getRootNode();
  return isShadowRoot(rootNode) ? rootNode.host : null;
}
function getDetailsSummary(details) {
  for (const child of Array.from(details.children)) {
    if (getNodeName(child) === "summary") {
      return child;
    }
  }
  return null;
}
function isWithinOpenDetailsSummary(element, details) {
  const summary = getDetailsSummary(details);
  return !!summary && (element === summary || contains(summary, element));
}
function isFocusableCandidate(element) {
  const nodeName = element ? getNodeName(element) : "";
  return element != null && element.matches(CANDIDATE_SELECTOR) && (nodeName !== "summary" || element.parentElement != null && getNodeName(element.parentElement) === "details" && getDetailsSummary(element.parentElement) === element) && (nodeName !== "details" || getDetailsSummary(element) == null) && (nodeName !== "input" || element.type !== "hidden");
}
function isFocusableElement(element) {
  if (!isFocusableCandidate(element) || !element.isConnected || element.matches(":disabled")) {
    return false;
  }
  for (let current = element; current; current = getParentElement(current)) {
    const isAncestor = current !== element;
    const isSlot = getNodeName(current) === "slot";
    if (current.hasAttribute("inert")) {
      return false;
    }
    if (isAncestor && getNodeName(current) === "details" && !current.open && !isWithinOpenDetailsSummary(element, current) || current.hasAttribute("hidden") || !isSlot && !isVisibleInTabbableTree(current, isAncestor)) {
      return false;
    }
  }
  return true;
}
function isVisibleInTabbableTree(element, isAncestor) {
  const styles = getComputedStyle2(element);
  if (!isAncestor) {
    return isElementVisible(element, styles);
  }
  return styles.display !== "none";
}
function getTabIndex(element) {
  const tabIndex = element.tabIndex;
  if (tabIndex < 0) {
    const nodeName = getNodeName(element);
    if (nodeName === "details" || nodeName === "audio" || nodeName === "video" || isHTMLElement(element) && element.isContentEditable) {
      return 0;
    }
  }
  return tabIndex;
}
function getNamedRadioInput(element) {
  if (getNodeName(element) !== "input") {
    return null;
  }
  const input = element;
  return input.type === "radio" && input.name !== "" ? input : null;
}
function isTabbableRadio(element, candidates) {
  const input = getNamedRadioInput(element);
  if (!input) {
    return true;
  }
  const checkedRadio = candidates.find((candidate) => {
    const radio = getNamedRadioInput(candidate);
    return radio?.name === input.name && radio.form === input.form && radio.checked;
  });
  if (checkedRadio) {
    return checkedRadio === input;
  }
  return candidates.find((candidate) => {
    const radio = getNamedRadioInput(candidate);
    return radio?.name === input.name && radio.form === input.form;
  }) === input;
}
function getComposedChildren(container) {
  if (isHTMLElement(container) && getNodeName(container) === "slot") {
    const assignedElements = container.assignedElements({
      flatten: true
    });
    if (assignedElements.length > 0) {
      return assignedElements;
    }
  }
  if (isHTMLElement(container) && container.shadowRoot) {
    return Array.from(container.shadowRoot.children);
  }
  return Array.from(container.children);
}
function appendCandidates(container, list) {
  getComposedChildren(container).forEach((child) => {
    if (isFocusableCandidate(child)) {
      list.push(child);
    }
    appendCandidates(child, list);
  });
}
function appendMatchingElements(container, selector, list) {
  getComposedChildren(container).forEach((child) => {
    if (isHTMLElement(child) && child.matches(selector)) {
      list.push(child);
    }
    appendMatchingElements(child, selector, list);
  });
}
function isTabbable(element) {
  return isFocusableElement(element) && getTabIndex(element) >= 0;
}
function focusable(container) {
  const candidates = [];
  appendCandidates(container, candidates);
  return candidates.filter(isFocusableElement);
}
function tabbable(container) {
  const candidates = focusable(container);
  return candidates.filter((element) => getTabIndex(element) >= 0 && isTabbableRadio(element, candidates));
}
function getTabbableIn(container, dir) {
  const list = tabbable(container);
  const len = list.length;
  if (len === 0) {
    return void 0;
  }
  const active = activeElement(ownerDocument(container));
  const index2 = list.indexOf(active);
  const nextIndex = index2 === -1 ? dir === 1 ? 0 : len - 1 : index2 + dir;
  return list[nextIndex];
}
function getNextTabbable(referenceElement) {
  return getTabbableIn(ownerDocument(referenceElement).body, 1) || referenceElement;
}
function getPreviousTabbable(referenceElement) {
  return getTabbableIn(ownerDocument(referenceElement).body, -1) || referenceElement;
}
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
  const tabbableElements = tabbable(container);
  tabbableElements.forEach((element) => {
    element.dataset.tabindex = element.getAttribute("tabindex") || "";
    element.setAttribute("tabindex", "-1");
  });
}
function enableFocusInside(container) {
  const elements = [];
  appendMatchingElements(container, "[data-tabindex]", elements);
  elements.forEach((element) => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute("tabindex", tabindex);
    } else {
      element.removeAttribute("tabindex");
    }
  });
}

// node_modules/@base-ui/react/floating-ui-react/utils/nodes.mjs
function getNodeChildren(nodes, id, onlyOpenChildren = true) {
  const directChildren = nodes.filter((node) => node.parentId === id);
  return directChildren.flatMap((child) => [...!onlyOpenChildren || child.context?.open ? [child] : [], ...getNodeChildren(nodes, child.id, onlyOpenChildren)]);
}
function getNodeAncestors(nodes, id) {
  let allAncestors = [];
  let currentParentId = nodes.find((node) => node.id === id)?.parentId;
  while (currentParentId) {
    const currentNode = nodes.find((node) => node.id === currentParentId);
    currentParentId = currentNode?.parentId;
    if (currentNode) {
      allAncestors = allAncestors.concat(currentNode);
    }
  }
  return allAncestors;
}

// node_modules/@base-ui/react/floating-ui-react/utils/createAttribute.mjs
function createAttribute(name) {
  return `data-base-ui-${name}`;
}

// node_modules/@base-ui/react/floating-ui-react/utils/enqueueFocus.mjs
var rafId = 0;
function enqueueFocus(el, options = {}) {
  const {
    preventScroll = false,
    sync = false,
    shouldFocus
  } = options;
  cancelAnimationFrame(rafId);
  function exec() {
    if (shouldFocus && !shouldFocus()) {
      return;
    }
    el?.focus({
      preventScroll
    });
  }
  if (sync) {
    exec();
    return NOOP;
  }
  const currentRafId = requestAnimationFrame(exec);
  rafId = currentRafId;
  return () => {
    if (rafId === currentRafId) {
      cancelAnimationFrame(currentRafId);
      rafId = 0;
    }
  };
}

// node_modules/@base-ui/react/floating-ui-react/utils/markOthers.mjs
var markerName = "data-base-ui-inert";
var ariaHiddenCounterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledElementsSet = /* @__PURE__ */ new WeakSet();
var markerCounterMap = /* @__PURE__ */ new WeakMap();
var lockCount = 0;
function unwrapHost(node) {
  if (!node) {
    return null;
  }
  return isShadowRoot(node) ? node.host : unwrapHost(node.parentNode);
}
var correctElements = (parent, targets) => targets.map((target) => {
  if (parent.contains(target)) {
    return target;
  }
  const correctedTarget = unwrapHost(target);
  if (parent.contains(correctedTarget)) {
    return correctedTarget;
  }
  return null;
}).filter((x) => x != null);
var buildKeepSet = (targets) => {
  const keep = /* @__PURE__ */ new Set();
  targets.forEach((target) => {
    let node = target;
    while (node && !keep.has(node)) {
      keep.add(node);
      node = node.parentNode;
    }
  });
  return keep;
};
var collectOutsideElements = (root, keepElements, stopElements) => {
  const outside = [];
  const walk = (parent) => {
    if (!parent || stopElements.has(parent)) {
      return;
    }
    Array.from(parent.children).forEach((node) => {
      if (getNodeName(node) === "script") {
        return;
      }
      if (keepElements.has(node)) {
        walk(node);
      } else {
        outside.push(node);
      }
    });
  };
  walk(root);
  return outside;
};
function applyAttributeToOthers(uncorrectedAvoidElements, body, ariaHidden, {
  mark = true
}) {
  const avoidElements = correctElements(body, uncorrectedAvoidElements);
  const markerTargets = mark ? collectOutsideElements(body, buildKeepSet(avoidElements), new Set(avoidElements)) : [];
  const hiddenElements = [];
  const markedElements = [];
  if (ariaHidden) {
    const ariaLiveElements = correctElements(body, Array.from(body.querySelectorAll("[aria-live]")));
    const controlElements = avoidElements.concat(ariaLiveElements);
    const controlTargets = collectOutsideElements(body, buildKeepSet(controlElements), new Set(controlElements));
    controlTargets.forEach((node) => {
      const attr2 = node.getAttribute("aria-hidden");
      const alreadyHidden = attr2 !== null && attr2 !== "false";
      const counterValue = (ariaHiddenCounterMap.get(node) || 0) + 1;
      ariaHiddenCounterMap.set(node, counterValue);
      hiddenElements.push(node);
      if (counterValue === 1 && alreadyHidden) {
        uncontrolledElementsSet.add(node);
      }
      if (!alreadyHidden) {
        node.setAttribute("aria-hidden", "true");
      }
    });
  }
  if (mark) {
    markerTargets.forEach((node) => {
      const markerValue = (markerCounterMap.get(node) || 0) + 1;
      markerCounterMap.set(node, markerValue);
      markedElements.push(node);
      if (markerValue === 1) {
        node.setAttribute(markerName, "");
      }
    });
  }
  lockCount += 1;
  return () => {
    hiddenElements.forEach((element) => {
      const counterValue = (ariaHiddenCounterMap.get(element) || 0) - 1;
      ariaHiddenCounterMap.set(element, counterValue);
      if (!counterValue) {
        if (!uncontrolledElementsSet.has(element)) {
          element.removeAttribute("aria-hidden");
        }
        uncontrolledElementsSet.delete(element);
      }
    });
    if (mark) {
      markedElements.forEach((element) => {
        const markerValue = (markerCounterMap.get(element) || 0) - 1;
        markerCounterMap.set(element, markerValue);
        if (!markerValue) {
          element.removeAttribute(markerName);
        }
      });
    }
    lockCount -= 1;
    if (!lockCount) {
      ariaHiddenCounterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledElementsSet = /* @__PURE__ */ new WeakSet();
      markerCounterMap = /* @__PURE__ */ new WeakMap();
    }
  };
}
function markOthers(avoidElements, options = {}) {
  const {
    ariaHidden = false,
    mark = true
  } = options;
  const body = ownerDocument(avoidElements[0]).body;
  return applyAttributeToOthers(avoidElements, body, ariaHidden, {
    mark
  });
}

// node_modules/@base-ui/react/floating-ui-react/components/FloatingPortal.mjs
import * as React29 from "react";
import * as ReactDOM2 from "react-dom";

// node_modules/@base-ui/react/internals/constants.mjs
var DISABLED_TRANSITIONS_STYLE = {
  style: {
    transition: "none"
  }
};
var CLICK_TRIGGER_IDENTIFIER = "data-base-ui-click-trigger";
var BASE_UI_SWIPE_IGNORE_ATTRIBUTE = "data-base-ui-swipe-ignore";
var LEGACY_SWIPE_IGNORE_ATTRIBUTE = "data-swipe-ignore";
var BASE_UI_SWIPE_IGNORE_SELECTOR = `[${BASE_UI_SWIPE_IGNORE_ATTRIBUTE}]`;
var LEGACY_SWIPE_IGNORE_SELECTOR = `[${LEGACY_SWIPE_IGNORE_ATTRIBUTE}]`;
var DROPDOWN_COLLISION_AVOIDANCE = {
  fallbackAxisSide: "none"
};
var ownerVisuallyHidden = {
  clipPath: "inset(50%)",
  position: "fixed",
  top: 0,
  left: 0
};

// node_modules/@base-ui/react/floating-ui-react/components/FloatingPortal.mjs
import { jsx as _jsx3, jsxs as _jsxs } from "react/jsx-runtime";
var PortalContext = /* @__PURE__ */ React29.createContext(null);
if (true) PortalContext.displayName = "PortalContext";
var usePortalContext = () => React29.useContext(PortalContext);
var attr = createAttribute("portal");
function useFloatingPortalNode(props = {}) {
  const {
    ref,
    container: containerProp,
    componentProps = EMPTY_OBJECT,
    elementProps
  } = props;
  const uniqueId = useId();
  const portalContext = usePortalContext();
  const parentPortalNode = portalContext?.portalNode;
  const [containerElement, setContainerElement] = React29.useState(null);
  const [portalNode, setPortalNode] = React29.useState(null);
  const setPortalNodeRef = useStableCallback((node) => {
    if (node !== null) {
      setPortalNode(node);
    }
  });
  const containerRef = React29.useRef(null);
  useIsoLayoutEffect(() => {
    if (containerProp === null) {
      if (containerRef.current) {
        containerRef.current = null;
        setPortalNode(null);
        setContainerElement(null);
      }
      return;
    }
    const resolvedContainer = (containerProp && (isNode(containerProp) ? containerProp : containerProp.current)) ?? parentPortalNode ?? document.body;
    if (resolvedContainer == null) {
      if (containerRef.current) {
        containerRef.current = null;
        setPortalNode(null);
        setContainerElement(null);
      }
      return;
    }
    if (containerRef.current !== resolvedContainer) {
      containerRef.current = resolvedContainer;
      setPortalNode(null);
      setContainerElement(resolvedContainer);
    }
  }, [containerProp, parentPortalNode]);
  const portalElement = useRenderElement("div", componentProps, {
    ref: [ref, setPortalNodeRef],
    props: [{
      id: uniqueId,
      [attr]: ""
    }, elementProps]
  });
  const portalSubtree = containerElement && portalElement ? /* @__PURE__ */ ReactDOM2.createPortal(portalElement, containerElement) : null;
  return {
    node: portalNode,
    // `id` and `render` props can override or remove the generated ID. Use the exact
    // rendered value so `aria-owns` never points at an ID absent from the DOM.
    nodeId: /* @__PURE__ */ React29.isValidElement(portalElement) ? portalElement.props.id : void 0,
    subtree: portalSubtree
  };
}
var FloatingPortal = /* @__PURE__ */ React29.forwardRef(function FloatingPortal2(componentProps, forwardedRef) {
  const {
    render: render2,
    className,
    style,
    children,
    container,
    portalOwnerRole,
    ...elementProps
  } = componentProps;
  const {
    node: portalNode,
    nodeId: portalNodeId,
    subtree: portalSubtree
  } = useFloatingPortalNode({
    container,
    ref: forwardedRef,
    componentProps,
    elementProps
  });
  const beforeOutsideRef = React29.useRef(null);
  const afterOutsideRef = React29.useRef(null);
  const beforeInsideRef = React29.useRef(null);
  const afterInsideRef = React29.useRef(null);
  const [focusManagerState, setFocusManagerState] = React29.useState(null);
  const focusInsideDisabledRef = React29.useRef(false);
  const modal = focusManagerState?.modal;
  const open3 = focusManagerState?.open;
  const shouldRenderGuards = !!focusManagerState && !focusManagerState.modal && focusManagerState.open && !!portalNode;
  React29.useEffect(() => {
    if (!portalNode || modal) {
      return void 0;
    }
    function onFocus(event) {
      if (portalNode && event.relatedTarget && isOutsideEvent(event)) {
        if (event.type === "focusin") {
          if (focusInsideDisabledRef.current) {
            enableFocusInside(portalNode);
            focusInsideDisabledRef.current = false;
          }
        } else {
          disableFocusInside(portalNode);
          focusInsideDisabledRef.current = true;
        }
      }
    }
    return mergeCleanups(addEventListener(portalNode, "focusin", onFocus, true), addEventListener(portalNode, "focusout", onFocus, true));
  }, [portalNode, modal]);
  useIsoLayoutEffect(() => {
    if (!portalNode || open3 !== true || !focusInsideDisabledRef.current) {
      return;
    }
    enableFocusInside(portalNode);
    focusInsideDisabledRef.current = false;
  }, [open3, portalNode]);
  const portalContextValue = React29.useMemo(() => ({
    beforeOutsideRef,
    afterOutsideRef,
    beforeInsideRef,
    afterInsideRef,
    portalNode,
    setFocusManagerState
  }), [portalNode]);
  return /* @__PURE__ */ _jsxs(React29.Fragment, {
    children: [portalSubtree, /* @__PURE__ */ _jsxs(PortalContext.Provider, {
      value: portalContextValue,
      children: [shouldRenderGuards && portalNode && /* @__PURE__ */ _jsx3(FocusGuard, {
        "data-type": "outside",
        ref: beforeOutsideRef,
        onFocus: (event) => {
          if (isOutsideEvent(event, portalNode)) {
            beforeInsideRef.current?.focus();
          } else {
            const domReference = focusManagerState ? focusManagerState.domReference : null;
            const prevTabbable = getPreviousTabbable(domReference);
            prevTabbable?.focus();
          }
        }
      }), shouldRenderGuards && portalNode && /* @__PURE__ */ _jsx3("span", {
        role: portalOwnerRole,
        "aria-owns": portalNodeId,
        style: ownerVisuallyHidden
      }), portalNode && /* @__PURE__ */ ReactDOM2.createPortal(children, portalNode), shouldRenderGuards && portalNode && /* @__PURE__ */ _jsx3(FocusGuard, {
        "data-type": "outside",
        ref: afterOutsideRef,
        onFocus: (event) => {
          if (isOutsideEvent(event, portalNode)) {
            afterInsideRef.current?.focus();
          } else {
            const domReference = focusManagerState ? focusManagerState.domReference : null;
            const nextTabbable = getNextTabbable(domReference);
            nextTabbable?.focus();
            if (focusManagerState?.closeOnFocusOut) {
              focusManagerState?.onOpenChange(false, createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent));
            }
          }
        }
      })]
    })]
  });
});
if (true) FloatingPortal.displayName = "FloatingPortal";

// node_modules/@base-ui/react/floating-ui-react/components/FloatingTree.mjs
import * as React30 from "react";

// node_modules/@base-ui/react/floating-ui-react/utils/createEventEmitter.mjs
function createEventEmitter() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      map.get(event)?.forEach((listener) => listener(data));
    },
    on(event, listener) {
      if (!map.has(event)) {
        map.set(event, /* @__PURE__ */ new Set());
      }
      map.get(event).add(listener);
    },
    off(event, listener) {
      map.get(event)?.delete(listener);
    }
  };
}

// node_modules/@base-ui/react/floating-ui-react/components/FloatingTree.mjs
import { jsx as _jsx4 } from "react/jsx-runtime";
var FloatingNodeContext = /* @__PURE__ */ React30.createContext(null);
if (true) FloatingNodeContext.displayName = "FloatingNodeContext";
var FloatingTreeContext = /* @__PURE__ */ React30.createContext(null);
if (true) FloatingTreeContext.displayName = "FloatingTreeContext";
var useFloatingParentNodeId = () => React30.useContext(FloatingNodeContext)?.id || null;
var useFloatingTree = (externalTree) => {
  const contextTree = React30.useContext(FloatingTreeContext);
  return externalTree ?? contextTree;
};

// node_modules/@base-ui/react/floating-ui-react/components/FloatingFocusManager.mjs
import { jsx as _jsx5, jsxs as _jsxs2 } from "react/jsx-runtime";
function getEventType(event, lastInteractionType) {
  const win = getWindow(getTarget(event));
  if (event instanceof win.KeyboardEvent) {
    return "keyboard";
  }
  if (event instanceof win.FocusEvent) {
    return lastInteractionType || "keyboard";
  }
  if ("pointerType" in event) {
    return event.pointerType || (isVirtualClick(event) ? "keyboard" : lastInteractionType || "mouse");
  }
  if ("touches" in event) {
    return "touch";
  }
  if (event instanceof win.MouseEvent) {
    return lastInteractionType || (event.detail === 0 ? "keyboard" : "mouse");
  }
  return "";
}
var LIST_LIMIT = 20;
var previouslyFocusedElements = [];
function clearDisconnectedPreviouslyFocusedElements() {
  previouslyFocusedElements = previouslyFocusedElements.filter((entry) => {
    return entry.deref()?.isConnected;
  });
}
function addPreviouslyFocusedElement(element) {
  clearDisconnectedPreviouslyFocusedElements();
  if (element && getNodeName(element) !== "body") {
    previouslyFocusedElements.push(new WeakRef(element));
    if (previouslyFocusedElements.length > LIST_LIMIT) {
      previouslyFocusedElements = previouslyFocusedElements.slice(-LIST_LIMIT);
    }
  }
}
function getPreviouslyFocusedElement() {
  clearDisconnectedPreviouslyFocusedElements();
  return previouslyFocusedElements[previouslyFocusedElements.length - 1]?.deref();
}
function getFirstTabbableElement(container) {
  if (!container) {
    return null;
  }
  if (isTabbable(container)) {
    return container;
  }
  return tabbable(container)[0] || container;
}
function handleTabIndex(floatingFocusElement) {
  if (floatingFocusElement.hasAttribute("tabindex") && !floatingFocusElement.hasAttribute("data-tabindex")) {
    return;
  }
  if (!floatingFocusElement.getAttribute("role")?.includes("dialog")) {
    return;
  }
  const focusableElements = focusable(floatingFocusElement);
  const tabbableContent = focusableElements.filter((element) => {
    const dataTabIndex = element.getAttribute("data-tabindex") || "";
    return isTabbable(element) || element.hasAttribute("data-tabindex") && !dataTabIndex.startsWith("-");
  });
  const tabIndex = floatingFocusElement.getAttribute("tabindex");
  if (tabbableContent.length === 0) {
    if (tabIndex !== "0") {
      floatingFocusElement.setAttribute("tabindex", "0");
      floatingFocusElement.setAttribute("data-tabindex", "0");
    }
  } else if (tabIndex !== "-1" || floatingFocusElement.hasAttribute("data-tabindex") && floatingFocusElement.getAttribute("data-tabindex") !== "-1") {
    floatingFocusElement.setAttribute("tabindex", "-1");
    floatingFocusElement.setAttribute("data-tabindex", "-1");
  }
}
function FloatingFocusManager(props) {
  const {
    context: store,
    children,
    disabled: disabled2 = false,
    initialFocus = true,
    returnFocus = true,
    explicitReturnFocus,
    restoreFocus = false,
    modal = true,
    closeOnFocusOut = true,
    openInteractionType = "",
    nextFocusableElement,
    previousFocusableElement,
    beforeContentFocusGuardRef,
    externalTree,
    getInsideElements
  } = props;
  const open3 = store.useState("open");
  const domReference = store.useState("domReferenceElement");
  const floating = store.useState("floatingElement");
  const {
    events,
    dataRef
  } = store.context;
  const getNodeId = useStableCallback(() => dataRef.current.floatingContext?.nodeId);
  const ignoreInitialFocus = initialFocus === false;
  const isUntrappedTypeableCombobox = isTypeableCombobox(domReference) && ignoreInitialFocus;
  const initialFocusRef = useValueAsRef(initialFocus);
  const returnFocusRef = useValueAsRef(returnFocus);
  const explicitReturnFocusRef = useValueAsRef(explicitReturnFocus);
  const openInteractionTypeRef = useValueAsRef(openInteractionType);
  const openRef = useValueAsRef(open3);
  const tree = useFloatingTree(externalTree);
  const portalContext = usePortalContext();
  const preventReturnFocusRef = React31.useRef(false);
  const isPointerDownRef = React31.useRef(false);
  const pointerDownOutsideRef = React31.useRef(false);
  const lastFocusedTabbableRef = React31.useRef(null);
  const closeTypeRef = React31.useRef("");
  const lastInteractionTypeRef = React31.useRef("");
  const beforeGuardRef = React31.useRef(null);
  const afterGuardRef = React31.useRef(null);
  const mergedBeforeGuardRef = useMergedRefs(beforeGuardRef, beforeContentFocusGuardRef, portalContext?.beforeInsideRef);
  const mergedAfterGuardRef = useMergedRefs(afterGuardRef, portalContext?.afterInsideRef);
  const blurTimeout = useTimeout();
  const pointerDownTimeout = useTimeout();
  const restoreFocusFrame = useAnimationFrame();
  const isInsidePortal = portalContext != null;
  const floatingFocusElement = getFloatingFocusElement(floating);
  const getTabbableContent = useStableCallback((container = floatingFocusElement) => {
    return container ? tabbable(container) : [];
  });
  const getResolvedInsideElements = useStableCallback(() => getInsideElements?.().filter((element) => element != null) ?? []);
  React31.useEffect(() => {
    if (disabled2 || !modal) {
      return void 0;
    }
    function onKeyDown(event) {
      if (event.key === "Tab") {
        if (contains(floatingFocusElement, activeElement(ownerDocument(floatingFocusElement))) && getTabbableContent().length === 0 && !isUntrappedTypeableCombobox) {
          stopEvent(event);
        }
      }
    }
    const doc = ownerDocument(floatingFocusElement);
    return addEventListener(doc, "keydown", onKeyDown);
  }, [disabled2, floatingFocusElement, modal, isUntrappedTypeableCombobox, getTabbableContent]);
  React31.useEffect(() => {
    if (disabled2 || !open3) {
      return void 0;
    }
    const doc = ownerDocument(floatingFocusElement);
    function clearPointerDownOutside() {
      pointerDownOutsideRef.current = false;
    }
    function onPointerDown(event) {
      const target = getTarget(event);
      const insideElements = getResolvedInsideElements();
      const pointerTargetInside = contains(floating, target) || contains(domReference, target) || contains(portalContext?.portalNode, target) || insideElements.some((element) => element === target || contains(element, target));
      pointerDownOutsideRef.current = !pointerTargetInside;
      lastInteractionTypeRef.current = event.pointerType || "keyboard";
      if (closest(target, `[${CLICK_TRIGGER_IDENTIFIER}]`)) {
        isPointerDownRef.current = true;
        pointerDownTimeout.start(0, () => {
          isPointerDownRef.current = false;
        });
      }
    }
    function onKeyDown() {
      lastInteractionTypeRef.current = "keyboard";
    }
    return mergeCleanups(
      addEventListener(doc, "pointerdown", onPointerDown, true),
      addEventListener(doc, "pointerup", clearPointerDownOutside, true),
      addEventListener(doc, "pointercancel", clearPointerDownOutside, true),
      addEventListener(doc, "keydown", onKeyDown, true),
      // Avoid a stale `true` leaking into the next open (e.g. keep-mounted popups)
      // if the popup dismissed between pointerdown and pointerup.
      clearPointerDownOutside
    );
  }, [disabled2, floating, domReference, floatingFocusElement, open3, portalContext, pointerDownTimeout, getResolvedInsideElements]);
  React31.useEffect(() => {
    if (disabled2 || !closeOnFocusOut) {
      return void 0;
    }
    const doc = ownerDocument(floatingFocusElement);
    function handlePointerDown() {
      isPointerDownRef.current = true;
      pointerDownTimeout.start(0, () => {
        isPointerDownRef.current = false;
      });
    }
    function handleFocusIn(event) {
      const target = getTarget(event);
      if (isTabbable(target)) {
        lastFocusedTabbableRef.current = target;
      }
    }
    function handleFocusOutside(event) {
      const relatedTarget = event.relatedTarget;
      const currentTarget = event.currentTarget;
      const target = getTarget(event);
      if (modal && relatedTarget == null && target != null && contains(floating, target)) {
        addPreviouslyFocusedElement(target);
      }
      queueMicrotask(() => {
        const nodeId = getNodeId();
        const triggers = store.context.triggerElements;
        const insideElements = getResolvedInsideElements();
        const isRelatedFocusGuard = relatedTarget?.hasAttribute(createAttribute("focus-guard")) && [beforeGuardRef.current, afterGuardRef.current, portalContext?.beforeInsideRef.current, portalContext?.afterInsideRef.current, portalContext?.beforeOutsideRef.current, portalContext?.afterOutsideRef.current, resolveRef(previousFocusableElement), resolveRef(nextFocusableElement)].includes(relatedTarget);
        const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext?.portalNode, relatedTarget) || insideElements.some((element) => element === relatedTarget || contains(element, relatedTarget)) || triggers.hasMatchingElement((trigger) => contains(trigger, relatedTarget)) || isRelatedFocusGuard || tree && (getNodeChildren(tree.nodesRef.current, nodeId).find((node) => contains(node.context?.elements.floating, relatedTarget) || contains(node.context?.elements.domReference, relatedTarget)) || getNodeAncestors(tree.nodesRef.current, nodeId).find((node) => [node.context?.elements.floating, getFloatingFocusElement(node.context?.elements.floating)].includes(relatedTarget) || node.context?.elements.domReference === relatedTarget)));
        if (currentTarget === domReference && floatingFocusElement) {
          handleTabIndex(floatingFocusElement);
        }
        if (restoreFocus && currentTarget !== domReference && !isElementVisible(target) && activeElement(doc) === doc.body) {
          if (isHTMLElement(floatingFocusElement)) {
            floatingFocusElement.focus();
            if (restoreFocus === "popup") {
              restoreFocusFrame.request(() => {
                floatingFocusElement.focus();
              });
              return;
            }
          }
          const tabbableContent = getTabbableContent();
          const prevTabbable = lastFocusedTabbableRef.current;
          const nodeToFocus = (prevTabbable && tabbableContent.includes(prevTabbable) ? prevTabbable : null) || tabbableContent[tabbableContent.length - 1] || floatingFocusElement;
          if (isHTMLElement(nodeToFocus)) {
            nodeToFocus.focus();
          }
        }
        if (dataRef.current.insideReactTree) {
          dataRef.current.insideReactTree = false;
          return;
        }
        if ((isUntrappedTypeableCombobox ? true : !modal) && relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        // For an "untrapped" typeable combobox (input role=combobox with
        // initialFocus=false), re-opening the popup and tabbing out should still close it even
        // when the previously focused element (e.g. the next tabbable outside the popup) is
        // focused again. Otherwise, the popup remains open on the second Tab sequence:
        // click input -> Tab (closes) -> click input -> Tab.
        // Allow closing when `isUntrappedTypeableCombobox` regardless of the previously focused element.
        (isUntrappedTypeableCombobox || relatedTarget !== getPreviouslyFocusedElement())) {
          preventReturnFocusRef.current = true;
          store.setOpen(false, createChangeEventDetails(reason_parts_exports.focusOut, event));
        }
      });
    }
    function markInsideReactTree() {
      if (pointerDownOutsideRef.current) {
        return;
      }
      dataRef.current.insideReactTree = true;
      blurTimeout.start(0, () => {
        dataRef.current.insideReactTree = false;
      });
    }
    const domReferenceElement = isHTMLElement(domReference) ? domReference : null;
    if (!floating && !domReferenceElement) {
      return void 0;
    }
    return mergeCleanups(domReferenceElement && addEventListener(domReferenceElement, "focusout", handleFocusOutside), domReferenceElement && addEventListener(domReferenceElement, "pointerdown", handlePointerDown), floating && addEventListener(floating, "focusin", handleFocusIn), floating && addEventListener(floating, "focusout", handleFocusOutside), floating && portalContext && addEventListener(floating, "focusout", markInsideReactTree, true));
  }, [disabled2, domReference, floating, floatingFocusElement, modal, tree, portalContext, store, closeOnFocusOut, restoreFocus, getTabbableContent, isUntrappedTypeableCombobox, getNodeId, dataRef, blurTimeout, pointerDownTimeout, restoreFocusFrame, nextFocusableElement, previousFocusableElement, getResolvedInsideElements]);
  React31.useEffect(() => {
    if (disabled2 || !floating || !open3) {
      return void 0;
    }
    const portalNodes = Array.from(portalContext?.portalNode?.querySelectorAll(`[${createAttribute("portal")}]`) || []);
    const ancestors = tree ? getNodeAncestors(tree.nodesRef.current, getNodeId()) : [];
    const rootAncestorComboboxDomReference = ancestors.find((node) => isTypeableCombobox(node.context?.elements.domReference || null))?.context?.elements.domReference;
    const controlInsideElements = [floating, ...portalNodes, beforeGuardRef.current, afterGuardRef.current, portalContext?.beforeOutsideRef.current, portalContext?.afterOutsideRef.current, ...getResolvedInsideElements()];
    const insideElements = [...controlInsideElements, rootAncestorComboboxDomReference, resolveRef(previousFocusableElement), resolveRef(nextFocusableElement), isUntrappedTypeableCombobox ? domReference : null].filter((x) => x != null);
    const ariaHiddenCleanup = markOthers(insideElements, {
      ariaHidden: modal || isUntrappedTypeableCombobox,
      mark: false
    });
    const markerInsideElements = [floating, ...portalNodes].filter((x) => x != null);
    const markerCleanup = markOthers(markerInsideElements);
    return () => {
      markerCleanup();
      ariaHiddenCleanup();
    };
  }, [open3, disabled2, domReference, floating, modal, portalContext, isUntrappedTypeableCombobox, tree, getNodeId, nextFocusableElement, previousFocusableElement, getResolvedInsideElements]);
  useIsoLayoutEffect(() => {
    if (!open3 || disabled2 || !isHTMLElement(floatingFocusElement)) {
      return;
    }
    closeTypeRef.current = "";
    lastInteractionTypeRef.current = "";
    const doc = ownerDocument(floatingFocusElement);
    const previouslyFocusedElement = activeElement(doc);
    queueMicrotask(() => {
      const initialFocusValueOrFn = initialFocusRef.current;
      const resolvedInitialFocus = typeof initialFocusValueOrFn === "function" ? initialFocusValueOrFn(openInteractionTypeRef.current || "") : initialFocusValueOrFn;
      if (resolvedInitialFocus === void 0 || resolvedInitialFocus === false) {
        return;
      }
      const focusAlreadyInsideFloatingEl = contains(floatingFocusElement, previouslyFocusedElement);
      if (focusAlreadyInsideFloatingEl) {
        return;
      }
      let focusableElements = null;
      const getDefaultFocusElement = () => {
        if (focusableElements == null) {
          focusableElements = getTabbableContent(floatingFocusElement);
        }
        return focusableElements[0] || floatingFocusElement;
      };
      let elToFocus;
      if (resolvedInitialFocus === true || resolvedInitialFocus === null) {
        elToFocus = getDefaultFocusElement();
      } else {
        elToFocus = resolveRef(resolvedInitialFocus);
      }
      elToFocus = elToFocus || getDefaultFocusElement();
      const hadFocusInside = contains(floatingFocusElement, activeElement(doc));
      const openEvent = dataRef.current.openEvent;
      const openedByVirtualPress = openEvent?.type === "mousedown" && isVirtualClick(openEvent);
      void enqueueFocus(elToFocus, {
        sync: openedByVirtualPress,
        preventScroll: elToFocus === floatingFocusElement,
        shouldFocus() {
          if (!openRef.current) {
            return false;
          }
          if (hadFocusInside) {
            return true;
          }
          const currentActiveElement = activeElement(doc);
          const focusMovedInside = currentActiveElement !== elToFocus && contains(floatingFocusElement, currentActiveElement);
          return !focusMovedInside;
        }
      });
    });
  }, [disabled2, open3, floatingFocusElement, getTabbableContent, initialFocusRef, openInteractionTypeRef, openRef, dataRef]);
  const pendingReturnFocusRef = React31.useRef(null);
  useIsoLayoutEffect(() => {
    if (disabled2 || !floatingFocusElement) {
      pendingReturnFocusRef.current = null;
      return void 0;
    }
    if (pendingReturnFocusRef.current) {
      pendingReturnFocusRef.current.cancelled = true;
      pendingReturnFocusRef.current = null;
    }
    const doc = ownerDocument(floatingFocusElement);
    const elementFocusedBeforeOpen = activeElement(doc);
    const preferPreviousFocus = openInteractionTypeRef.current == null;
    addPreviouslyFocusedElement(elementFocusedBeforeOpen);
    function onOpenChangeLocal(details) {
      if (!details.open) {
        closeTypeRef.current = getEventType(details.nativeEvent, lastInteractionTypeRef.current);
      }
      if (details.reason === reason_parts_exports.focusOut && details.triggerElement?.hasAttribute(createAttribute("focus-guard")) || details.reason === reason_parts_exports.triggerHover && details.nativeEvent.type === "mouseleave") {
        preventReturnFocusRef.current = true;
      }
      if (details.reason !== reason_parts_exports.outsidePress) {
        return;
      }
      if (details.nested) {
        preventReturnFocusRef.current = false;
      } else if (isVirtualClick(details.nativeEvent) || isVirtualPointerEvent(details.nativeEvent)) {
        preventReturnFocusRef.current = false;
      } else {
        let isPreventScrollSupported = false;
        ownerDocument(floatingFocusElement).createElement("div").focus({
          get preventScroll() {
            isPreventScrollSupported = true;
            return false;
          }
        });
        if (isPreventScrollSupported) {
          preventReturnFocusRef.current = false;
        } else {
          preventReturnFocusRef.current = true;
        }
      }
    }
    events.on("openchange", onOpenChangeLocal);
    function getReturnElement(closeType) {
      const returnFocusValueOrFn = returnFocusRef.current;
      let resolvedReturnFocusValue = typeof returnFocusValueOrFn === "function" ? returnFocusValueOrFn(closeType) : returnFocusValueOrFn;
      if (resolvedReturnFocusValue === void 0 || resolvedReturnFocusValue === false) {
        return null;
      }
      if (resolvedReturnFocusValue === null) {
        resolvedReturnFocusValue = true;
      }
      const referenceReturnElement = domReference?.isConnected ? domReference : null;
      const previousReturnElement = elementFocusedBeforeOpen?.isConnected && getNodeName(elementFocusedBeforeOpen) !== "body" ? elementFocusedBeforeOpen : null;
      let defaultReturnElement = preferPreviousFocus ? previousReturnElement || referenceReturnElement : referenceReturnElement || previousReturnElement;
      if (!defaultReturnElement) {
        defaultReturnElement = getPreviouslyFocusedElement() || null;
      }
      if (typeof resolvedReturnFocusValue === "boolean") {
        return defaultReturnElement;
      }
      return resolveRef(resolvedReturnFocusValue) || defaultReturnElement || null;
    }
    return () => {
      events.off("openchange", onOpenChangeLocal);
      const activeEl = activeElement(doc);
      const insideElements = getResolvedInsideElements();
      const isFocusInsideFloatingTree = contains(floating, activeEl) || insideElements.some((element) => element === activeEl || contains(element, activeEl)) || tree && getNodeChildren(tree.nodesRef.current, getNodeId(), false).some((node) => contains(node.context?.elements.floating, activeEl));
      const returnFocusValueOrFn = returnFocusRef.current;
      const closeType = closeTypeRef.current;
      const returnElement = getReturnElement(closeType);
      const job = {
        cancelled: false
      };
      pendingReturnFocusRef.current = job;
      queueMicrotask(() => {
        if (pendingReturnFocusRef.current === job) {
          pendingReturnFocusRef.current = null;
        }
        const tabbableReturnElement = getFirstTabbableElement(returnElement);
        const hasExplicitReturnFocus = (
          // eslint-disable-next-line react-hooks/exhaustive-deps
          explicitReturnFocusRef.current ?? typeof returnFocusValueOrFn !== "boolean"
        );
        if (!job.cancelled && returnFocusValueOrFn && !preventReturnFocusRef.current && isHTMLElement(tabbableReturnElement) && // If the focus moved somewhere else after mount, avoid returning focus
        // since it likely entered a different element which should be
        // respected: https://github.com/floating-ui/floating-ui/issues/2607
        (!hasExplicitReturnFocus && tabbableReturnElement !== activeEl && activeEl !== doc.body ? isFocusInsideFloatingTree : true)) {
          const focusOptions = {
            preventScroll: true
          };
          if (closeType === "keyboard") {
            focusOptions.focusVisible = true;
          }
          tabbableReturnElement.focus(focusOptions);
        }
        preventReturnFocusRef.current = false;
      });
    };
  }, [disabled2, floating, floatingFocusElement, returnFocusRef, explicitReturnFocusRef, openInteractionTypeRef, events, tree, domReference, getNodeId, getResolvedInsideElements]);
  useIsoLayoutEffect(() => {
    if (!parts_exports.engine.webkit || open3 || !floating) {
      return;
    }
    const activeEl = activeElement(ownerDocument(floating));
    if (!isHTMLElement(activeEl) || !isTypeableElement(activeEl)) {
      return;
    }
    if (contains(floating, activeEl)) {
      activeEl.blur();
    }
  }, [open3, floating]);
  useIsoLayoutEffect(() => {
    if (disabled2 || !portalContext) {
      return void 0;
    }
    portalContext.setFocusManagerState({
      modal,
      closeOnFocusOut,
      open: open3,
      onOpenChange: store.setOpen,
      domReference
    });
    return () => {
      portalContext.setFocusManagerState(null);
    };
  }, [disabled2, portalContext, modal, open3, store, closeOnFocusOut, domReference]);
  useIsoLayoutEffect(() => {
    if (disabled2 || !floatingFocusElement) {
      return void 0;
    }
    handleTabIndex(floatingFocusElement);
    return () => {
      queueMicrotask(clearDisconnectedPreviouslyFocusedElements);
    };
  }, [disabled2, floatingFocusElement]);
  const shouldRenderGuards = !disabled2 && (modal ? !isUntrappedTypeableCombobox : true) && (isInsidePortal || modal);
  return /* @__PURE__ */ _jsxs2(React31.Fragment, {
    children: [shouldRenderGuards && /* @__PURE__ */ _jsx5(FocusGuard, {
      "data-type": "inside",
      ref: mergedBeforeGuardRef,
      onFocus: (event) => {
        if (modal) {
          const els = getTabbableContent();
          void enqueueFocus(els[els.length - 1]);
        } else if (portalContext?.portalNode) {
          preventReturnFocusRef.current = false;
          if (isOutsideEvent(event, portalContext.portalNode)) {
            const nextTabbable = getNextTabbable(domReference);
            nextTabbable?.focus();
          } else {
            resolveRef(previousFocusableElement ?? portalContext.beforeOutsideRef)?.focus();
          }
        }
      }
    }), children, shouldRenderGuards && /* @__PURE__ */ _jsx5(FocusGuard, {
      "data-type": "inside",
      ref: mergedAfterGuardRef,
      onFocus: (event) => {
        if (modal) {
          void enqueueFocus(getTabbableContent()[0]);
        } else if (portalContext?.portalNode) {
          if (closeOnFocusOut) {
            preventReturnFocusRef.current = true;
          }
          if (isOutsideEvent(event, portalContext.portalNode)) {
            const prevTabbable = getPreviousTabbable(domReference);
            prevTabbable?.focus();
          } else {
            resolveRef(nextFocusableElement ?? portalContext.afterOutsideRef)?.focus();
          }
        }
      }
    })]
  });
}

// node_modules/@base-ui/react/floating-ui-react/hooks/useClick.mjs
import * as React32 from "react";
function useClick(store, props = {}) {
  const {
    enabled = true,
    event: eventOption = "click",
    toggle = true,
    ignoreMouse = false,
    stickIfOpen = true,
    touchOpenDelay = 0,
    reason = reason_parts_exports.triggerPress
  } = props;
  const dataRef = store.context.dataRef;
  const pointerTypeRef = React32.useRef(void 0);
  const frame = useAnimationFrame();
  const touchOpenTimeout = useTimeout();
  const reference = React32.useMemo(() => {
    function setOpenWithTouchDelay(nextOpen, nativeEvent, target, pointerType) {
      const details = createChangeEventDetails(reason, nativeEvent, target);
      if (nextOpen && pointerType === "touch" && touchOpenDelay > 0) {
        touchOpenTimeout.start(touchOpenDelay, () => {
          store.setOpen(true, details);
        });
      } else {
        store.setOpen(nextOpen, details);
      }
    }
    function getNextOpen(open3, currentTarget, isClickLikeOpenEvent) {
      const openEvent = dataRef.current.openEvent;
      const hasClickedOnInactiveTrigger = store.select("domReferenceElement") !== currentTarget;
      if (open3 && hasClickedOnInactiveTrigger) {
        return true;
      }
      if (!open3) {
        return true;
      }
      if (!toggle) {
        return true;
      }
      if (openEvent && (typeof stickIfOpen === "function" ? stickIfOpen() : stickIfOpen)) {
        return !isClickLikeOpenEvent(openEvent.type);
      }
      return false;
    }
    return {
      onPointerDown(event) {
        pointerTypeRef.current = isMouseLikePointerType(event.pointerType, true) && isVirtualPointerEvent(event.nativeEvent) ? "virtual" : event.pointerType;
      },
      onMouseDown(event) {
        const pointerType = pointerTypeRef.current;
        const nativeEvent = event.nativeEvent;
        const open3 = store.select("open");
        if (event.button !== 0 || eventOption === "click" || isMouseLikePointerType(pointerType, true) && ignoreMouse) {
          return;
        }
        const nextOpen = getNextOpen(open3, event.currentTarget, (openEventType) => openEventType === "click" || openEventType === "mousedown");
        const target = getTarget(nativeEvent);
        const isTypeable = isTypeableElement(target);
        if (isTypeable || pointerType === "virtual") {
          setOpenWithTouchDelay(nextOpen, nativeEvent, isTypeable ? target : event.currentTarget, pointerType);
          return;
        }
        const eventCurrentTarget = event.currentTarget;
        frame.request(() => {
          setOpenWithTouchDelay(nextOpen, nativeEvent, eventCurrentTarget, pointerType);
        });
      },
      onClick(event) {
        if (eventOption === "mousedown-only") {
          return;
        }
        const pointerType = pointerTypeRef.current;
        if (eventOption === "mousedown" && pointerType) {
          pointerTypeRef.current = void 0;
          return;
        }
        if (isMouseLikePointerType(pointerType, true) && ignoreMouse) {
          return;
        }
        const open3 = store.select("open");
        const nextOpen = getNextOpen(open3, event.currentTarget, (openEventType) => openEventType === "click" || openEventType === "mousedown" || openEventType === "keydown" || openEventType === "keyup");
        setOpenWithTouchDelay(nextOpen, event.nativeEvent, event.currentTarget, pointerType);
      },
      onKeyDown() {
        pointerTypeRef.current = void 0;
      }
    };
  }, [dataRef, eventOption, ignoreMouse, reason, store, stickIfOpen, toggle, frame, touchOpenTimeout, touchOpenDelay]);
  return React32.useMemo(() => enabled ? {
    reference
  } : EMPTY_OBJECT, [enabled, reference]);
}

// node_modules/@base-ui/react/floating-ui-react/hooks/useDismiss.mjs
import * as React33 from "react";
function alwaysFalse() {
  return false;
}
function normalizeProp(normalizable) {
  return {
    escapeKey: typeof normalizable === "boolean" ? normalizable : normalizable?.escapeKey ?? false,
    outsidePress: typeof normalizable === "boolean" ? normalizable : normalizable?.outsidePress ?? true
  };
}
function useDismiss(store, props = {}) {
  const {
    enabled = true,
    escapeKey: escapeKey2 = true,
    outsidePress: outsidePressProp = true,
    outsidePressEvent = "sloppy",
    referencePress = alwaysFalse,
    bubbles,
    externalTree
  } = props;
  const open3 = store.useState("open");
  const floatingElement = store.useState("floatingElement");
  const {
    dataRef,
    events
  } = store.context;
  const tree = useFloatingTree(externalTree);
  const outsidePressFn = useStableCallback(typeof outsidePressProp === "function" ? outsidePressProp : () => false);
  const outsidePress2 = typeof outsidePressProp === "function" ? outsidePressFn : outsidePressProp;
  const outsidePressEnabled = outsidePress2 !== false;
  const getOutsidePressEventProp = useStableCallback(() => outsidePressEvent);
  const {
    escapeKey: escapeKeyBubbles,
    outsidePress: outsidePressBubbles
  } = normalizeProp(bubbles);
  const pressStartedInsideRef = React33.useRef(false);
  const pressStartPreventedRef = React33.useRef(false);
  const suppressNextOutsideClickRef = React33.useRef(false);
  const sawPressWhileOpenRef = React33.useRef(false);
  const isComposingRef = React33.useRef(false);
  const currentPointerTypeRef = React33.useRef("");
  const touchStateRef = React33.useRef(null);
  const cancelDismissOnEndTimeout = useTimeout();
  const clearInsideReactTreeTimeout = useTimeout();
  const compositionTimeout = useTimeout();
  const clearInsideReactTree = useStableCallback(() => {
    clearInsideReactTreeTimeout.clear();
    dataRef.current.insideReactTree = false;
  });
  const hasBlockingChild = useStableCallback((bubbleKey) => {
    const nodeId = dataRef.current.floatingContext?.nodeId;
    const children = tree ? getNodeChildren(tree.nodesRef.current, nodeId) : [];
    return children.some((child) => child.context?.open && !child.context.dataRef.current[bubbleKey]);
  });
  const isEventWithinOwnElements = useStableCallback((event) => {
    return isEventTargetWithin(event, store.select("floatingElement")) || isEventTargetWithin(event, store.select("domReferenceElement"));
  });
  const closeOnReferencePress = useStableCallback((event) => {
    if (!referencePress()) {
      return;
    }
    store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerPress, event.nativeEvent));
  });
  const closeOnEscapeKeyDown = useStableCallback((event) => {
    if (!open3 || !enabled || !escapeKey2 || event.key !== "Escape") {
      return;
    }
    const native = isReactEvent(event) ? event.nativeEvent : event;
    if (isComposingRef.current || native.isComposing) {
      return;
    }
    if (!escapeKeyBubbles && hasBlockingChild("__escapeKeyBubbles")) {
      return;
    }
    const eventDetails = createChangeEventDetails(reason_parts_exports.escapeKey, native);
    store.setOpen(false, eventDetails);
    if (!eventDetails.isCanceled) {
      event.preventDefault();
    }
    if (!escapeKeyBubbles && !eventDetails.isPropagationAllowed) {
      event.stopPropagation();
    }
  });
  const markInsideReactTree = useStableCallback(() => {
    dataRef.current.insideReactTree = true;
    clearInsideReactTreeTimeout.start(0, clearInsideReactTree);
  });
  const markPressStartedInsideReactTree = useStableCallback((event) => {
    if (!open3 || !enabled || event.button !== 0) {
      return;
    }
    const target = getTarget(event.nativeEvent);
    if (!contains(store.select("floatingElement"), target)) {
      return;
    }
    if (!pressStartedInsideRef.current) {
      pressStartedInsideRef.current = true;
      pressStartPreventedRef.current = false;
    }
  });
  const markInsidePressStartPrevented = useStableCallback((event) => {
    if (!open3 || !enabled) {
      return;
    }
    if (!(event.defaultPrevented || event.nativeEvent.defaultPrevented)) {
      return;
    }
    if (pressStartedInsideRef.current) {
      pressStartPreventedRef.current = true;
    }
  });
  React33.useEffect(() => {
    function handleOpenChange(details) {
      if (!details.open) {
        sawPressWhileOpenRef.current = false;
      }
    }
    events.on("openchange", handleOpenChange);
    return () => {
      events.off("openchange", handleOpenChange);
    };
  }, [events]);
  React33.useEffect(() => clearInsideReactTree, [clearInsideReactTree]);
  React33.useEffect(() => {
    if (!open3 || !enabled) {
      if (!open3) {
        sawPressWhileOpenRef.current = false;
        isComposingRef.current = false;
        currentPointerTypeRef.current = "";
        touchStateRef.current = null;
      }
      return clearInsideReactTree;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    const preventedPressSuppressionTimeout = new Timeout();
    const doc = ownerDocument(floatingElement);
    function handleCompositionStart() {
      compositionTimeout.clear();
      isComposingRef.current = true;
    }
    function handleCompositionEnd() {
      isComposingRef.current = true;
      compositionTimeout.start(
        // 0ms or 1ms don't work in Safari. 5ms appears to consistently work.
        // Only apply to WebKit for the test to remain 0ms.
        parts_exports.engine.webkit ? 5 : 0,
        () => {
          isComposingRef.current = false;
        }
      );
    }
    function suppressImmediateOutsideClickAfterPreventedStart() {
      suppressNextOutsideClickRef.current = true;
      preventedPressSuppressionTimeout.start(0, () => {
        suppressNextOutsideClickRef.current = false;
      });
    }
    function resetPressStartState() {
      pressStartedInsideRef.current = false;
      pressStartPreventedRef.current = false;
    }
    function getOutsidePressEvent() {
      const type = currentPointerTypeRef.current;
      const computedType = type === "pen" || !type ? "mouse" : type;
      const outsidePressEventValue = getOutsidePressEventProp();
      const resolved = typeof outsidePressEventValue === "function" ? outsidePressEventValue() : outsidePressEventValue;
      if (typeof resolved === "string") {
        return resolved;
      }
      return resolved[computedType];
    }
    function shouldIgnoreEvent(event) {
      const computedOutsidePressEvent = getOutsidePressEvent();
      return computedOutsidePressEvent === "intentional" && event.type !== "click" || computedOutsidePressEvent === "sloppy" && event.type === "click";
    }
    function isEventWithinFloatingTree(event) {
      const nodeId = dataRef.current.floatingContext?.nodeId;
      const targetIsInsideChildren = tree && getNodeChildren(tree.nodesRef.current, nodeId).some((node) => isEventTargetWithin(event, node.context?.elements.floating));
      return isEventWithinOwnElements(event) || targetIsInsideChildren;
    }
    function closeOnPressOutside(event) {
      if (shouldIgnoreEvent(event)) {
        if (event.type !== "click" && !isEventWithinOwnElements(event)) {
          preventedPressSuppressionTimeout.clear();
          suppressNextOutsideClickRef.current = false;
        }
        clearInsideReactTree();
        return;
      }
      if (dataRef.current.insideReactTree) {
        clearInsideReactTree();
        return;
      }
      const target = getTarget(event);
      const inertSelector = `[${createAttribute("inert")}]`;
      const targetRoot = isElement(target) ? target.getRootNode() : null;
      const markers = Array.from((isShadowRoot(targetRoot) ? targetRoot : ownerDocument(store.select("floatingElement"))).querySelectorAll(inertSelector));
      const triggers = store.context.triggerElements;
      if (target && (triggers.hasElement(target) || triggers.hasMatchingElement((trigger) => contains(trigger, target)))) {
        return;
      }
      let targetRootAncestor = isElement(target) ? target : null;
      while (targetRootAncestor && !isLastTraversableNode(targetRootAncestor)) {
        const nextParent = getParentNode(targetRootAncestor);
        if (isLastTraversableNode(nextParent) || !isElement(nextParent)) {
          break;
        }
        targetRootAncestor = nextParent;
      }
      if (markers.length && isElement(target) && !isRootElement(target) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
      !contains(target, store.select("floatingElement")) && // If the target root element contains none of the markers, then the
      // element was injected after the floating element rendered.
      markers.every((marker) => !contains(targetRootAncestor, marker))) {
        return;
      }
      if (isHTMLElement(target) && !("touches" in event)) {
        const lastTraversableNode = isLastTraversableNode(target);
        const style = getComputedStyle2(target);
        const scrollRe = /auto|scroll/;
        const isScrollableX = lastTraversableNode || scrollRe.test(style.overflowX);
        const isScrollableY = lastTraversableNode || scrollRe.test(style.overflowY);
        const canScrollX = isScrollableX && target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
        const canScrollY = isScrollableY && target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
        const isRTL2 = style.direction === "rtl";
        const pressedVerticalScrollbar = canScrollY && (isRTL2 ? event.offsetX <= target.offsetWidth - target.clientWidth : event.offsetX > target.clientWidth);
        const pressedHorizontalScrollbar = canScrollX && event.offsetY > target.clientHeight;
        if (pressedVerticalScrollbar || pressedHorizontalScrollbar) {
          return;
        }
      }
      if (isEventWithinFloatingTree(event)) {
        return;
      }
      if (getOutsidePressEvent() === "intentional") {
        if (event.detail !== 0 && !isVirtualClick(event) && !sawPressWhileOpenRef.current) {
          return;
        }
        if (suppressNextOutsideClickRef.current) {
          preventedPressSuppressionTimeout.clear();
          suppressNextOutsideClickRef.current = false;
          return;
        }
      }
      if (typeof outsidePress2 === "function" && !outsidePress2(event)) {
        return;
      }
      if (hasBlockingChild("__outsidePressBubbles")) {
        return;
      }
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.outsidePress, event));
      clearInsideReactTree();
    }
    function handlePointerDown(event) {
      if (getOutsidePressEvent() !== "sloppy" || event.pointerType === "touch" || !store.select("open") || !enabled || isEventWithinOwnElements(event)) {
        return;
      }
      closeOnPressOutside(event);
    }
    function handleTouchStart(event) {
      if (getOutsidePressEvent() !== "sloppy" || !store.select("open") || !enabled || isEventWithinOwnElements(event)) {
        return;
      }
      const touch = event.touches[0];
      if (touch) {
        touchStateRef.current = {
          startTime: Date.now(),
          startX: touch.clientX,
          startY: touch.clientY,
          dismissOnTouchEnd: false,
          dismissOnMouseDown: true
        };
        cancelDismissOnEndTimeout.start(1e3, () => {
          if (touchStateRef.current) {
            touchStateRef.current.dismissOnTouchEnd = false;
            touchStateRef.current.dismissOnMouseDown = false;
          }
        });
      }
    }
    function addTargetEventListenerOnce(event, listener) {
      const target = getTarget(event);
      if (!target) {
        return;
      }
      const unsubscribe2 = addEventListener(target, event.type, () => {
        listener(event);
        unsubscribe2();
      });
    }
    function handleTouchStartCapture(event) {
      currentPointerTypeRef.current = "touch";
      addTargetEventListenerOnce(event, handleTouchStart);
    }
    function closeOnPressOutsideCapture(event) {
      cancelDismissOnEndTimeout.clear();
      if (event.type === "pointerdown") {
        if (event.button === 0) {
          sawPressWhileOpenRef.current = true;
        }
        currentPointerTypeRef.current = event.pointerType;
      }
      if (event.type === "mousedown" && touchStateRef.current && !touchStateRef.current.dismissOnMouseDown) {
        return;
      }
      addTargetEventListenerOnce(event, (targetEvent) => {
        if (targetEvent.type === "pointerdown") {
          handlePointerDown(targetEvent);
        } else {
          closeOnPressOutside(targetEvent);
        }
      });
    }
    function handlePressEndCapture(event) {
      if (event.type === "pointercancel") {
        sawPressWhileOpenRef.current = false;
      }
      if (!pressStartedInsideRef.current) {
        return;
      }
      const pressStartedInsideDefaultPrevented = pressStartPreventedRef.current;
      resetPressStartState();
      if (getOutsidePressEvent() !== "intentional") {
        return;
      }
      if (event.type === "pointercancel") {
        if (pressStartedInsideDefaultPrevented) {
          suppressImmediateOutsideClickAfterPreventedStart();
        }
        return;
      }
      if (isEventWithinFloatingTree(event)) {
        return;
      }
      if (pressStartedInsideDefaultPrevented) {
        suppressImmediateOutsideClickAfterPreventedStart();
        return;
      }
      if (typeof outsidePress2 === "function" && !outsidePress2(event)) {
        return;
      }
      preventedPressSuppressionTimeout.clear();
      suppressNextOutsideClickRef.current = true;
      clearInsideReactTree();
    }
    function handleTouchMove(event) {
      if (getOutsidePressEvent() !== "sloppy" || !touchStateRef.current || isEventWithinOwnElements(event)) {
        return;
      }
      const touch = event.touches[0];
      if (!touch) {
        return;
      }
      const deltaX = Math.abs(touch.clientX - touchStateRef.current.startX);
      const deltaY = Math.abs(touch.clientY - touchStateRef.current.startY);
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (distance > 5) {
        touchStateRef.current.dismissOnTouchEnd = true;
      }
      if (distance > 10) {
        closeOnPressOutside(event);
        cancelDismissOnEndTimeout.clear();
        touchStateRef.current = null;
      }
    }
    function handleTouchMoveCapture(event) {
      addTargetEventListenerOnce(event, handleTouchMove);
    }
    function handleTouchEnd(event) {
      if (getOutsidePressEvent() !== "sloppy" || !touchStateRef.current || isEventWithinOwnElements(event)) {
        return;
      }
      if (touchStateRef.current.dismissOnTouchEnd) {
        closeOnPressOutside(event);
      }
      cancelDismissOnEndTimeout.clear();
      touchStateRef.current = null;
    }
    function handleTouchEndCapture(event) {
      addTargetEventListenerOnce(event, handleTouchEnd);
    }
    const unsubscribe = mergeCleanups(escapeKey2 && mergeCleanups(addEventListener(doc, "keydown", closeOnEscapeKeyDown), addEventListener(doc, "compositionstart", handleCompositionStart), addEventListener(doc, "compositionend", handleCompositionEnd)), outsidePressEnabled && mergeCleanups(addEventListener(doc, "click", closeOnPressOutsideCapture, true), addEventListener(doc, "pointerdown", closeOnPressOutsideCapture, true), addEventListener(doc, "pointerup", handlePressEndCapture, true), addEventListener(doc, "pointercancel", handlePressEndCapture, true), addEventListener(doc, "mousedown", closeOnPressOutsideCapture, true), addEventListener(doc, "mouseup", handlePressEndCapture, true), addEventListener(doc, "touchstart", handleTouchStartCapture, {
      capture: true,
      passive: true
    }), addEventListener(doc, "touchmove", handleTouchMoveCapture, {
      capture: true,
      passive: true
    }), addEventListener(doc, "touchend", handleTouchEndCapture, {
      capture: true,
      passive: true
    })));
    return () => {
      unsubscribe();
      preventedPressSuppressionTimeout.clear();
      resetPressStartState();
      suppressNextOutsideClickRef.current = false;
    };
  }, [dataRef, floatingElement, escapeKey2, outsidePressEnabled, outsidePress2, open3, enabled, escapeKeyBubbles, outsidePressBubbles, closeOnEscapeKeyDown, clearInsideReactTree, getOutsidePressEventProp, hasBlockingChild, isEventWithinOwnElements, tree, store, cancelDismissOnEndTimeout, compositionTimeout]);
  const reference = React33.useMemo(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    onPointerDown: closeOnReferencePress,
    onClick: closeOnReferencePress
  }), [closeOnEscapeKeyDown, closeOnReferencePress]);
  const floating = React33.useMemo(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    // `onMouseDown` may be blocked if `event.preventDefault()` is called in
    // `onPointerDown`, such as with <NumberField.ScrubArea>.
    // See https://github.com/mui/base-ui/pull/3379
    onPointerDown: markInsidePressStartPrevented,
    onMouseDown: markInsidePressStartPrevented,
    onClickCapture: markInsideReactTree,
    onMouseDownCapture(event) {
      markInsideReactTree();
      markPressStartedInsideReactTree(event);
    },
    onPointerDownCapture(event) {
      markInsideReactTree();
      markPressStartedInsideReactTree(event);
    },
    onMouseUpCapture: markInsideReactTree,
    onTouchEndCapture: markInsideReactTree,
    onTouchMoveCapture: markInsideReactTree
  }), [closeOnEscapeKeyDown, markInsideReactTree, markPressStartedInsideReactTree, markInsidePressStartPrevented]);
  return React33.useMemo(() => enabled ? {
    reference,
    floating,
    trigger: reference
  } : {}, [enabled, reference, floating]);
}

// node_modules/@base-ui/react/utils/popups/popupStoreUtils.mjs
import * as React35 from "react";
import * as ReactDOM3 from "react-dom";

// node_modules/@base-ui/react/internals/useUnmountAfterClose.mjs
import * as React34 from "react";
function useUnmountAfterClose(parameters) {
  const {
    open: open3,
    ref,
    preventUnmountOnClose,
    setPreventUnmountOnClose: setPreventUnmountOnCloseParam,
    onUnmount,
    animateInitialOpen
  } = parameters;
  const setPreventUnmountOnClose = useStableCallback(setPreventUnmountOnCloseParam);
  const {
    mounted,
    setMounted,
    transitionStatus
  } = useTransitionStatus(open3, false, false, animateInitialOpen);
  const preventUnmountingOnClose = open3 ? false : preventUnmountOnClose;
  useIsoLayoutEffect(() => {
    if (open3) {
      setPreventUnmountOnClose(false);
    }
  }, [open3, setPreventUnmountOnClose]);
  const mountedRef = React34.useRef(mounted);
  const pendingUnmountRef = React34.useRef(false);
  const rerender = useForcedRerendering();
  const unmount = () => {
    mountedRef.current = false;
    setMounted(false);
    onUnmount();
  };
  useIsoLayoutEffect(() => {
    mountedRef.current = mounted;
    if (pendingUnmountRef.current) {
      pendingUnmountRef.current = false;
      if (!open3 && mounted) {
        unmount();
      }
    }
  });
  const forceUnmount = useStableCallback(() => {
    if (!mountedRef.current) {
      return;
    }
    if (open3) {
      pendingUnmountRef.current = true;
      rerender();
      return;
    }
    unmount();
  });
  useOpenChangeComplete({
    enabled: mounted && !open3 && !preventUnmountingOnClose,
    open: open3,
    ref,
    onComplete() {
      if (!open3) {
        forceUnmount();
      }
    }
  });
  return {
    mounted,
    transitionStatus,
    preventUnmountingOnClose,
    forceUnmount
  };
}

// node_modules/@base-ui/react/utils/popups/popupStoreUtils.mjs
var FOCUSABLE_POPUP_PROPS = {
  tabIndex: -1,
  [FOCUSABLE_ATTRIBUTE]: ""
};
function attachPreventUnmountOnClose(eventDetails) {
  let preventUnmountOnClose = false;
  eventDetails.preventUnmountOnClose = () => {
    preventUnmountOnClose = true;
  };
  return () => preventUnmountOnClose;
}

// node_modules/@base-ui/react/utils/popups/popupTriggerMap.mjs
var devElementIdsByMap;
function getDevElementIds(map) {
  devElementIdsByMap ??= /* @__PURE__ */ new WeakMap();
  let elementIds = devElementIdsByMap.get(map);
  if (!elementIds) {
    elementIds = /* @__PURE__ */ new WeakMap();
    devElementIdsByMap.set(map, elementIds);
  }
  return elementIds;
}
var PopupTriggerMap = class {
  idMap = /* @__PURE__ */ new Map();
  /**
   * Adds a trigger element with the given ID.
   *
   * Note: The provided element is assumed to not be registered under multiple IDs.
   */
  add(id, element) {
    if (true) {
      const elementIds = getDevElementIds(this);
      const existingId = elementIds.get(element);
      if (existingId !== void 0 && existingId !== id) {
        throw new Error("Base UI: A trigger element cannot be registered under multiple IDs in PopupTriggerMap.");
      }
      const previousElement = this.idMap.get(id);
      if (previousElement !== void 0 && previousElement !== element) {
        elementIds.delete(previousElement);
      }
      elementIds.set(element, id);
    }
    this.idMap.set(id, element);
  }
  /**
   * Removes the trigger element with the given ID.
   */
  delete(id) {
    if (true) {
      const element = this.idMap.get(id);
      if (element !== void 0) {
        devElementIdsByMap?.get(this)?.delete(element);
      }
    }
    this.idMap.delete(id);
  }
  /**
   * Whether the given element is registered as a trigger.
   */
  hasElement(element) {
    for (const registered of this.idMap.values()) {
      if (registered === element) {
        return true;
      }
    }
    return false;
  }
  /**
   * Whether there is a registered trigger element matching the given predicate.
   */
  hasMatchingElement(predicate) {
    for (const element of this.idMap.values()) {
      if (predicate(element)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Returns the trigger element associated with the given ID, or undefined if no such element exists.
   */
  getById(id) {
    return this.idMap.get(id);
  }
  /**
   * Returns an iterable of all registered trigger entries, where each entry is a tuple of [id, element].
   */
  entries() {
    return this.idMap.entries();
  }
  /**
   * Returns an iterable of all registered trigger elements.
   */
  elements() {
    return this.idMap.values();
  }
  /**
   * Returns the number of registered trigger elements.
   */
  get size() {
    return this.idMap.size;
  }
};

// node_modules/@base-ui/react/floating-ui-react/components/FloatingRootStore.mjs
var selectors = {
  open: (state) => state.open,
  transitionStatus: (state) => state.transitionStatus,
  domReferenceElement: (state) => state.domReferenceElement,
  referenceElement: (state) => state.positionReference ?? state.referenceElement,
  floatingElement: (state) => state.floatingElement,
  floatingId: (state) => state.floatingId
};
var FloatingRootStore = class extends ReactStore {
  constructor(options) {
    const {
      syncOnly,
      nested,
      onOpenChange,
      triggerElements,
      ...initialState
    } = options;
    super({
      ...initialState,
      positionReference: initialState.referenceElement,
      domReferenceElement: initialState.referenceElement
    }, {
      onOpenChange,
      dataRef: {
        current: {}
      },
      events: createEventEmitter(),
      nested,
      triggerElements
    }, selectors);
    this.syncOnly = syncOnly;
  }
  /**
   * Syncs the event used by hover logic to distinguish hover-open from click-like interaction.
   */
  syncOpenEvent = (newOpen, event) => {
    if (!newOpen || !this.state.open || // Prevent a pending hover-open from overwriting a click-open event, while allowing
    // click events to upgrade a hover-open.
    event != null && isClickLikeEvent(event)) {
      this.context.dataRef.current.openEvent = newOpen ? event : void 0;
    }
  };
  /**
   * Runs the root-owned side effects for an open state change.
   */
  dispatchOpenChange = (newOpen, eventDetails) => {
    this.syncOpenEvent(newOpen, eventDetails.event);
    const details = {
      open: newOpen,
      reason: eventDetails.reason,
      nativeEvent: eventDetails.event,
      nested: this.context.nested,
      triggerElement: eventDetails.trigger
    };
    this.context.events.emit("openchange", details);
  };
  /**
   * Emits the `openchange` event through the internal event emitter and calls the `onOpenChange` handler with the provided arguments.
   *
   * @param newOpen The new open state.
   * @param eventDetails Details about the event that triggered the open state change.
   */
  setOpen = (newOpen, eventDetails) => {
    if (this.syncOnly) {
      this.context.onOpenChange?.(newOpen, eventDetails);
      return;
    }
    this.dispatchOpenChange(newOpen, eventDetails);
    this.context.onOpenChange?.(newOpen, eventDetails);
  };
};

// node_modules/@base-ui/react/floating-ui-react/hooks/useFloatingRootContext.mjs
function useFloatingRootContext(options) {
  const {
    open: open3 = false,
    onOpenChange,
    elements = {}
  } = options;
  const floatingId = useId();
  const nested = useFloatingParentNodeId() != null;
  if (true) {
    const optionDomReference = elements.reference;
    if (optionDomReference && !isElement(optionDomReference)) {
      console.error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `context.setPositionReference()`", "instead.");
    }
  }
  const store = useRefWithInit(() => new FloatingRootStore({
    open: open3,
    transitionStatus: void 0,
    onOpenChange,
    referenceElement: elements.reference ?? null,
    floatingElement: elements.floating ?? null,
    triggerElements: new PopupTriggerMap(),
    floatingId,
    syncOnly: false,
    nested
  })).current;
  useIsoLayoutEffect(() => {
    const valuesToSync = {
      open: open3,
      floatingId
    };
    if (elements.reference !== void 0) {
      valuesToSync.referenceElement = elements.reference;
      valuesToSync.domReferenceElement = isElement(elements.reference) ? elements.reference : null;
    }
    if (elements.floating !== void 0) {
      valuesToSync.floatingElement = elements.floating;
    }
    store.update(valuesToSync);
  }, [open3, floatingId, elements.reference, elements.floating, store]);
  store.context.onOpenChange = onOpenChange;
  store.context.nested = nested;
  return store;
}

// node_modules/@base-ui/react/floating-ui-react/hooks/useListNavigation.mjs
import * as React36 from "react";
function isStationaryWebKitPointer(event) {
  return parts_exports.engine.webkit && event.movementX === 0 && event.movementY === 0;
}
function doSwitch(orientation, vertical, horizontal) {
  switch (orientation) {
    case "vertical":
      return vertical;
    case "horizontal":
      return horizontal;
    default:
      return vertical || horizontal;
  }
}
function isMainOrientationKey(key, orientation) {
  const vertical = key === ARROW_UP || key === ARROW_DOWN;
  const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
  const vertical = key === ARROW_DOWN;
  const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal) || key === "Enter" || key === " " || key === "";
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  const horizontal = key === ARROW_DOWN;
  return doSwitch(orientation, vertical, horizontal);
}
function isCrossOrientationCloseKey(key, orientation, rtl, grid) {
  const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
  const horizontal = key === ARROW_UP;
  if (orientation === "both" || orientation === "horizontal" && grid) {
    return key === "Escape";
  }
  return doSwitch(orientation, vertical, horizontal);
}
function useListNavigation(store, props) {
  const {
    listRef,
    activeIndex,
    onNavigate: onNavigateProp = () => {
    },
    enabled = true,
    selectedIndex = null,
    allowEscape = false,
    loopFocus = false,
    nested = false,
    rtl = false,
    virtual = false,
    focusItemOnOpen = "auto",
    focusItemOnHover = true,
    openOnArrowKeyDown = true,
    disabledIndices = void 0,
    orientation = "vertical",
    triggerOrientation = orientation,
    parentOrientation,
    id,
    resetOnPointerLeave = true,
    externalTree,
    nestedReturnFocusRef,
    grid: navigateGrid
  } = props;
  const isGrid = navigateGrid != null;
  if (true) {
    if (allowEscape) {
      if (!loopFocus) {
        console.warn("`useListNavigation` looping must be enabled to allow escaping.");
      }
      if (!virtual) {
        console.warn("`useListNavigation` must be virtual to allow escaping.");
      }
    }
    if (orientation === "vertical" && isGrid) {
      console.warn("In grid list navigation mode, the `orientation` should", 'be either "horizontal" or "both".');
    }
  }
  const open3 = store.useState("open");
  const floatingElement = store.useState("floatingElement");
  const domReferenceElement = store.useState("domReferenceElement");
  const dataRef = store.context.dataRef;
  const floatingFocusElement = getFloatingFocusElement(floatingElement);
  const typeableComboboxReference = isTypeableCombobox(domReferenceElement);
  const floatingFocusElementRef = useValueAsRef(floatingFocusElement);
  const parentId = useFloatingParentNodeId();
  const tree = useFloatingTree(externalTree);
  const focusItemOnOpenRef = React36.useRef(focusItemOnOpen);
  const indexRef = React36.useRef(selectedIndex ?? -1);
  const keyRef = React36.useRef(null);
  const isPointerModalityRef = React36.useRef(true);
  const onNavigate = useStableCallback((event) => {
    onNavigateProp(indexRef.current === -1 ? null : indexRef.current, event);
  });
  const previousMountedRef = React36.useRef(!!floatingElement);
  const previousOpenRef = React36.useRef(open3);
  const forceSyncFocusRef = React36.useRef(false);
  const forceScrollIntoViewRef = React36.useRef(false);
  const cancelQueuedFocusRef = React36.useRef(null);
  const disabledIndicesRef = useValueAsRef(disabledIndices);
  const latestOpenRef = useValueAsRef(open3);
  const selectedIndexRef = useValueAsRef(selectedIndex);
  const resetOnPointerLeaveRef = useValueAsRef(resetOnPointerLeave);
  const focusFrame = useAnimationFrame();
  const waitForListPopulatedFrame = useAnimationFrame();
  const focusItem = useStableCallback(() => {
    focusFrame.cancel();
    function runFocus(item2) {
      if (!virtual) {
        cancelQueuedFocusRef.current = enqueueFocus(item2, {
          sync: forceSyncFocusRef.current,
          preventScroll: true
        });
      }
    }
    const initialItem = listRef.current[indexRef.current];
    const forceScrollIntoView = forceScrollIntoViewRef.current;
    if (initialItem) {
      runFocus(initialItem);
    }
    const scheduler2 = forceSyncFocusRef.current ? (callback) => callback() : (callback) => focusFrame.request(callback);
    scheduler2(() => {
      const waitedItem = listRef.current[indexRef.current] || initialItem;
      if (!waitedItem) {
        return;
      }
      if (!initialItem) {
        runFocus(waitedItem);
      }
      const shouldScrollIntoView = (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        item && (forceScrollIntoView || !isPointerModalityRef.current)
      );
      if (shouldScrollIntoView) {
        waitedItem.scrollIntoView?.({
          block: "nearest",
          inline: "nearest"
        });
      }
    });
  });
  useIsoLayoutEffect(() => {
    dataRef.current.orientation = orientation;
  }, [dataRef, orientation]);
  useIsoLayoutEffect(() => {
    if (!open3) {
      keyRef.current = null;
    }
    if (!open3 || focusItemOnOpen !== "auto") {
      focusItemOnOpenRef.current = focusItemOnOpen;
    }
  }, [open3, focusItemOnOpen]);
  useIsoLayoutEffect(() => {
    if (!enabled) {
      return;
    }
    if (open3 && floatingElement) {
      indexRef.current = selectedIndex ?? -1;
      if (focusItemOnOpenRef.current && selectedIndex != null) {
        forceScrollIntoViewRef.current = true;
        onNavigate();
      }
    } else if (previousMountedRef.current) {
      indexRef.current = -1;
      onNavigate();
    }
  }, [enabled, open3, floatingElement, selectedIndex, onNavigate]);
  useIsoLayoutEffect(() => {
    if (!enabled) {
      return;
    }
    if (!open3) {
      forceSyncFocusRef.current = false;
      return;
    }
    if (!floatingElement) {
      return;
    }
    if (activeIndex == null) {
      forceSyncFocusRef.current = false;
      if (selectedIndexRef.current != null) {
        return;
      }
      if (previousMountedRef.current) {
        indexRef.current = -1;
        focusItem();
      }
      if ((!previousOpenRef.current || !previousMountedRef.current) && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
        let runs = 0;
        const waitForListPopulated = () => {
          if (listRef.current[0] == null) {
            if (runs < 2) {
              const scheduler2 = runs ? (callback) => waitForListPopulatedFrame.request(callback) : queueMicrotask;
              scheduler2(waitForListPopulated);
            }
            runs += 1;
          } else {
            indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, triggerOrientation, rtl) || nested ? getMinListIndex(listRef) : getMaxListIndex(listRef);
            keyRef.current = null;
            onNavigate();
          }
        };
        waitForListPopulated();
      }
    } else if (!isIndexOutOfListBounds(listRef.current, activeIndex)) {
      indexRef.current = activeIndex;
      focusItem();
      forceScrollIntoViewRef.current = false;
    }
  }, [enabled, open3, floatingElement, activeIndex, selectedIndexRef, nested, listRef, triggerOrientation, rtl, onNavigate, focusItem, waitForListPopulatedFrame]);
  useIsoLayoutEffect(() => {
    if (!enabled || floatingElement || !tree || virtual || !previousMountedRef.current) {
      return;
    }
    const nodes = tree.nodesRef.current;
    const parent = nodes.find((node) => node.id === parentId)?.context?.elements.floating;
    const activeEl = activeElement(ownerDocument(domReferenceElement ?? parent ?? null));
    const treeContainsActiveEl = nodes.some((node) => node.context && contains(node.context.elements.floating, activeEl));
    if (parent && !treeContainsActiveEl && isPointerModalityRef.current) {
      parent.focus({
        preventScroll: true
      });
    }
  }, [enabled, floatingElement, domReferenceElement, tree, parentId, virtual]);
  useIsoLayoutEffect(() => {
    previousOpenRef.current = open3;
    previousMountedRef.current = !!floatingElement;
  });
  const hasActiveIndex = activeIndex != null;
  const syncCurrentTarget = useStableCallback((event) => {
    if (!latestOpenRef.current) {
      return;
    }
    const index2 = listRef.current.indexOf(event.currentTarget);
    if (index2 !== -1 && (indexRef.current !== index2 || activeIndex !== index2)) {
      indexRef.current = index2;
      onNavigate(event);
    }
  });
  const getParentOrientation = useStableCallback(() => {
    return parentOrientation ?? tree?.nodesRef.current.find((node) => node.id === parentId)?.context?.dataRef?.current.orientation;
  });
  const getMinEnabledIndex = useStableCallback(() => {
    return getMinListIndex(listRef, disabledIndicesRef.current);
  });
  const commonOnKeyDown = useStableCallback((event) => {
    isPointerModalityRef.current = false;
    forceSyncFocusRef.current = true;
    if (event.which === 229) {
      return;
    }
    if (!latestOpenRef.current && event.currentTarget === floatingFocusElementRef.current) {
      return;
    }
    if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl, isGrid)) {
      if (!isMainOrientationKey(event.key, getParentOrientation())) {
        stopEvent(event);
      }
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.listNavigation, event.nativeEvent));
      const returnElement = nestedReturnFocusRef?.current ?? domReferenceElement;
      if (isHTMLElement(returnElement)) {
        returnElement.focus();
      }
      return;
    }
    if (activeIndex != null && activeIndex !== indexRef.current && !isIndexOutOfListBounds(listRef.current, activeIndex)) {
      indexRef.current = activeIndex;
    }
    const currentIndex = indexRef.current;
    const minIndex = getMinListIndex(listRef, disabledIndices);
    const maxIndex = getMaxListIndex(listRef, disabledIndices);
    if (!typeableComboboxReference) {
      if (event.key === "Home") {
        stopEvent(event);
        indexRef.current = minIndex;
        onNavigate(event);
      }
      if (event.key === "End") {
        stopEvent(event);
        indexRef.current = maxIndex;
        onNavigate(event);
      }
    }
    if (navigateGrid != null) {
      const index2 = navigateGrid(event, indexRef.current, listRef, orientation, loopFocus, rtl, disabledIndices, minIndex, maxIndex);
      if (index2 != null && index2 !== indexRef.current) {
        indexRef.current = index2;
        onNavigate(event);
      }
      if (orientation === "both") {
        return;
      }
    }
    if (isMainOrientationKey(event.key, orientation)) {
      stopEvent(event);
      const focusedElement = activeElement(event.currentTarget.ownerDocument);
      if (open3 && !virtual && contains(event.currentTarget, focusedElement) && !listRef.current.some((item2) => item2 != null && contains(item2, focusedElement))) {
        indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
        onNavigate(event);
        if (activeIndex === indexRef.current) {
          focusItem();
        }
        return;
      }
      const {
        index: index2,
        wrapped
      } = getNextListIndex(listRef.current, currentIndex, {
        decrement: !isMainOrientationToEndKey(event.key, orientation, rtl),
        loopFocus,
        allowEscape,
        disabledIndices,
        minIndex,
        maxIndex
      });
      if (wrapped) {
        forceSyncFocusRef.current = false;
      }
      indexRef.current = index2;
      onNavigate(event);
    }
  });
  const item = React36.useMemo(() => {
    const itemProps = {
      onFocus(event) {
        forceSyncFocusRef.current = true;
        syncCurrentTarget(event);
      },
      onClick({
        currentTarget
      }) {
        if (!virtual) {
          currentTarget.focus({
            preventScroll: true
          });
        }
      },
      onMouseMove(event) {
        if (isStationaryWebKitPointer(event)) {
          return;
        }
        forceSyncFocusRef.current = true;
        forceScrollIntoViewRef.current = false;
        if (focusItemOnHover) {
          syncCurrentTarget(event);
        }
      },
      onPointerLeave(event) {
        if (!latestOpenRef.current || !isPointerModalityRef.current || event.pointerType === "touch") {
          return;
        }
        forceSyncFocusRef.current = true;
        const relatedTarget = event.relatedTarget;
        if (!focusItemOnHover || listRef.current.includes(relatedTarget)) {
          return;
        }
        if (!resetOnPointerLeaveRef.current) {
          return;
        }
        cancelQueuedFocusRef.current?.();
        cancelQueuedFocusRef.current = null;
        indexRef.current = -1;
        onNavigate(event);
        if (!virtual) {
          const floatingFocusEl = floatingFocusElementRef.current;
          const activeEl = activeElement(ownerDocument(floatingFocusEl));
          if (floatingFocusEl && contains(floatingFocusEl, activeEl)) {
            floatingFocusEl.focus({
              preventScroll: true
            });
          }
        }
      }
    };
    return itemProps;
  }, [syncCurrentTarget, latestOpenRef, floatingFocusElementRef, focusItemOnHover, listRef, onNavigate, resetOnPointerLeaveRef, virtual]);
  const ariaActiveDescendantProp = React36.useMemo(() => {
    return virtual && open3 && hasActiveIndex && {
      "aria-activedescendant": `${id}-${activeIndex}`
    };
  }, [virtual, open3, hasActiveIndex, id, activeIndex]);
  const floating = React36.useMemo(() => {
    return {
      ...!typeableComboboxReference ? ariaActiveDescendantProp : {},
      onKeyDown(event) {
        if (event.key === "Tab" && event.shiftKey && open3 && !virtual) {
          const target = getTarget(event.nativeEvent);
          if (target && !contains(floatingFocusElementRef.current, target)) {
            return;
          }
          stopEvent(event);
          const details = createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent);
          store.setOpen(false, details);
          const returnElement = nestedReturnFocusRef?.current ?? domReferenceElement;
          if (!details.isCanceled && isHTMLElement(returnElement)) {
            returnElement.focus();
          }
          return;
        }
        commonOnKeyDown(event);
      },
      onPointerMove(event) {
        if (isStationaryWebKitPointer(event)) {
          return;
        }
        isPointerModalityRef.current = true;
      }
    };
  }, [ariaActiveDescendantProp, commonOnKeyDown, floatingFocusElementRef, typeableComboboxReference, store, open3, virtual, domReferenceElement, nestedReturnFocusRef]);
  const trigger = React36.useMemo(() => {
    function openOnNavigationKeyDown(event) {
      store.setOpen(true, createChangeEventDetails(reason_parts_exports.listNavigation, event.nativeEvent, event.currentTarget));
    }
    function checkVirtualMouse(event) {
      if (focusItemOnOpen === "auto" && isVirtualClick(event.nativeEvent)) {
        focusItemOnOpenRef.current = !virtual;
      }
    }
    function checkVirtualPointer(event) {
      focusItemOnOpenRef.current = focusItemOnOpen;
      if (focusItemOnOpen === "auto" && isVirtualPointerEvent(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    return {
      onKeyDown(event) {
        const currentOpen = store.select("open");
        isPointerModalityRef.current = false;
        const isArrowKey = event.key.startsWith("Arrow");
        const isParentCrossOpenKey = isCrossOrientationOpenKey(event.key, getParentOrientation(), rtl);
        const isMainKey = isMainOrientationKey(event.key, currentOpen ? orientation : triggerOrientation);
        const isNavigationKey = (nested ? isParentCrossOpenKey : isMainKey) || event.key === "Enter" || event.key.trim() === "";
        if (virtual && currentOpen && (!nested || isTypeableElement(event.currentTarget))) {
          return commonOnKeyDown(event);
        }
        if (!currentOpen && !openOnArrowKeyDown && isArrowKey) {
          return void 0;
        }
        if (isNavigationKey) {
          const isParentMainKey = isMainOrientationKey(event.key, getParentOrientation());
          keyRef.current = nested && isParentMainKey ? null : event.key;
        }
        if (nested) {
          if (isParentCrossOpenKey) {
            stopEvent(event);
            if (currentOpen) {
              indexRef.current = getMinEnabledIndex();
              onNavigate(event);
              if (virtual) {
                floatingFocusElementRef.current?.focus();
              }
            } else {
              openOnNavigationKeyDown(event);
            }
          }
          return void 0;
        }
        if (isMainKey) {
          if (selectedIndexRef.current != null) {
            indexRef.current = selectedIndexRef.current;
          }
          stopEvent(event);
          if (!currentOpen && openOnArrowKeyDown) {
            openOnNavigationKeyDown(event);
          } else {
            commonOnKeyDown(event);
          }
          if (currentOpen) {
            onNavigate(event);
          }
        }
        return void 0;
      },
      onFocus(event) {
        if (event.target !== event.currentTarget) {
          return;
        }
        if (store.select("open") && !virtual) {
          indexRef.current = -1;
          onNavigate(event);
        }
      },
      onPointerDown: checkVirtualPointer,
      onPointerEnter: checkVirtualPointer,
      onMouseDown: checkVirtualMouse,
      onClick: checkVirtualMouse
    };
  }, [commonOnKeyDown, focusItemOnOpen, getMinEnabledIndex, nested, onNavigate, store, openOnArrowKeyDown, orientation, triggerOrientation, getParentOrientation, rtl, selectedIndexRef, virtual, floatingFocusElementRef]);
  const reference = React36.useMemo(() => {
    return {
      ...ariaActiveDescendantProp,
      ...trigger
    };
  }, [ariaActiveDescendantProp, trigger]);
  return React36.useMemo(() => enabled ? {
    reference,
    floating,
    item,
    trigger
  } : {}, [enabled, reference, floating, trigger, item]);
}

// node_modules/@base-ui/react/floating-ui-react/hooks/useTypeahead.mjs
import * as React37 from "react";
function useTypeahead(store, props) {
  const {
    listRef,
    elementsRef,
    activeIndex,
    onMatch: onMatchProp,
    disabledIndices,
    onTyping: onTypingProp,
    enabled = true,
    resetMs = 750,
    selectedIndex = null
  } = props;
  const onTyping = useStableCallback(onTypingProp);
  const open3 = store.useState("open");
  const timeout = useTimeout();
  const stringRef = React37.useRef("");
  const prevIndexRef = React37.useRef(selectedIndex ?? activeIndex ?? -1);
  const matchIndexRef = React37.useRef(null);
  const onKeyDown = useStableCallback((event) => {
    function getElement(index3) {
      return elementsRef?.current[index3];
    }
    function isItemAvailable(index3) {
      const element = getElement(index3);
      if (element && !isElementVisible(element) || element?.matches(":disabled")) {
        return false;
      }
      return disabledIndices == null || !isListIndexDisabled(EMPTY_ARRAY, index3, disabledIndices);
    }
    function getMatchingIndex(list, string, startIndex2 = 0) {
      if (list.length === 0) {
        return -1;
      }
      const normalizedStartIndex = (startIndex2 % list.length + list.length) % list.length;
      const lowerString = string.toLowerCase();
      for (let offset4 = 0; offset4 < list.length; offset4 += 1) {
        const index3 = (normalizedStartIndex + offset4) % list.length;
        const text2 = list[index3];
        if (!text2?.toLowerCase().startsWith(lowerString) || !isItemAvailable(index3)) {
          continue;
        }
        return index3;
      }
      return -1;
    }
    const listContent = listRef.current;
    if (stringRef.current.length > 0 && event.key === " ") {
      stopEvent(event);
      onTyping?.(true);
    }
    if (stringRef.current.length > 0 && stringRef.current[0] !== " ") {
      if (getMatchingIndex(listContent, stringRef.current) === -1 && event.key !== " ") {
        onTyping?.(false);
      }
    }
    if (listContent == null || // Character key.
    event.key.length !== 1 || // Modifier key.
    event.ctrlKey || event.metaKey || event.altKey) {
      return;
    }
    if (open3 && event.key !== " ") {
      stopEvent(event);
      onTyping?.(true);
    }
    const isNewSession = stringRef.current === "";
    if (isNewSession) {
      prevIndexRef.current = selectedIndex ?? activeIndex ?? -1;
    }
    const allowRapidSuccessionOfFirstLetter = listContent.every((text2, index3) => text2 && isItemAvailable(index3) ? text2[0]?.toLowerCase() !== text2[1]?.toLowerCase() : true);
    if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
      stringRef.current = "";
      prevIndexRef.current = matchIndexRef.current;
    }
    stringRef.current += event.key;
    timeout.start(resetMs, () => {
      stringRef.current = "";
      prevIndexRef.current = matchIndexRef.current;
      onTyping?.(false);
    });
    const prevIndex = isNewSession ? selectedIndex ?? activeIndex ?? -1 : prevIndexRef.current;
    const startIndex = (prevIndex ?? 0) + 1;
    const index2 = getMatchingIndex(listContent, stringRef.current, startIndex);
    if (index2 !== -1) {
      onMatchProp?.(index2, event);
      matchIndexRef.current = index2;
    } else if (event.key !== " ") {
      stringRef.current = "";
      onTyping?.(false);
    }
  });
  const onBlur = useStableCallback((event) => {
    const next = event.relatedTarget;
    const currentDomReferenceElement = store.select("domReferenceElement");
    const currentFloatingElement = store.select("floatingElement");
    const withinComposite = contains(currentDomReferenceElement, next) || contains(currentFloatingElement, next);
    if (withinComposite) {
      return;
    }
    timeout.clear();
    stringRef.current = "";
    prevIndexRef.current = matchIndexRef.current;
    onTyping?.(false);
  });
  useIsoLayoutEffect(() => {
    if (!open3 && selectedIndex !== null) {
      return;
    }
    timeout.clear();
    matchIndexRef.current = null;
    if (stringRef.current !== "") {
      stringRef.current = "";
      onTyping?.(false);
    }
  }, [open3, selectedIndex, timeout, onTyping]);
  const sharedProps = React37.useMemo(() => ({
    onKeyDown,
    onBlur
  }), [onKeyDown, onBlur]);
  return React37.useMemo(() => enabled ? {
    reference: sharedProps,
    floating: sharedProps
  } : {}, [enabled, sharedProps]);
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  const alignment = getAlignment(placement);
  if (alignment) {
    coords[alignmentAxis] += commonAlign * (alignment === "end" ? 1 : -1) * (rtl && isVertical ? -1 : 1);
  }
  return coords;
}
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform3,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform3.getClippingRect({
    element: ((_await$platform$isEle = await (platform3.isElement == null ? void 0 : platform3.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform3.getDocumentElement == null ? void 0 : platform3.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform3.getOffsetParent == null ? void 0 : platform3.getOffsetParent(elements.floating));
  const offsetScale = await (platform3.isElement == null ? void 0 : platform3.isElement(offsetParent)) && await (platform3.getScale == null ? void 0 : platform3.getScale(offsetParent)) || {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform3.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform3.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var MAX_RESET_COUNT = 50;
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform3
  } = config;
  const platformWithDetectOverflow = platform3.detectOverflow ? platform3 : {
    ...platform3,
    detectOverflow
  };
  const rtl = await (platform3.isRTL == null ? void 0 : platform3.isRTL(floating));
  let rects = await platform3.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let resetCount = 0;
  const middlewareData = {};
  for (let i = 0; i < middleware.length; i++) {
    const currentMiddleware = middleware[i];
    if (!currentMiddleware) {
      continue;
    }
    const {
      name,
      fn
    } = currentMiddleware;
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platformWithDetectOverflow,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData[name] = {
      ...middlewareData[name],
      ...data
    };
    if (reset && resetCount < MAX_RESET_COUNT) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform3.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform3,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform3.isRTL == null ? void 0 : platform3.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await platform3.detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
var originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform3,
    elements
  } = state;
  const rtl = await (platform3.isRTL == null ? void 0 : platform3.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement,
        platform: platform3
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await platform3.detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const clampCoord = (axis, coord) => clamp(coord + overflow[axis === "y" ? "top" : "left"], coord, coord - overflow[axis === "y" ? "bottom" : "right"]);
      if (checkMainAxis) {
        mainAxisCoord = clampCoord(mainAxis, mainAxisCoord);
      }
      if (checkCrossAxis) {
        crossAxisCoord = clampCoord(crossAxis, crossAxisCoord);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      var _rawOffset$mainAxis, _rawOffset$crossAxis;
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset4 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset4, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: (_rawOffset$mainAxis = rawOffset.mainAxis) != null ? _rawOffset$mainAxis : 0,
        crossAxis: (_rawOffset$crossAxis = rawOffset.crossAxis) != null ? _rawOffset$crossAxis : 0
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform3,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await platform3.detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform3.isRTL == null ? void 0 : platform3.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const shiftData = state.middlewareData.shift;
      const noShift = !shiftData;
      let availableHeight2 = overflowAvailableHeight;
      let availableWidth2 = overflowAvailableWidth;
      if (shiftData != null && shiftData.enabled.x) {
        availableWidth2 = maximumClippingWidth;
      }
      if (shiftData != null && shiftData.enabled.y) {
        availableHeight2 = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        if (isYAxis) {
          availableWidth2 = width - 2 * max(overflow.left, overflow.right);
        } else {
          availableHeight2 = height - 2 * max(overflow.top, overflow.bottom);
        }
      }
      await apply({
        ...state,
        availableWidth: availableWidth2,
        availableHeight: availableHeight2
      });
      const nextDimensions = await platform3.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  return !!floatingOffsetParent && isFixed && floatingOffsetParent === getWindow(element);
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement && offsetParent) {
    const win = getWindow(domElement);
    const offsetWin = isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return element.getClientRects ? Array.from(element.getClientRects()) : [];
}
function getDocumentRect(html) {
  const scroll = getNodeScroll(html);
  const body = html.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(html);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy, rootBoundary) {
  if (rootBoundary === void 0) {
    rootBoundary = "viewport";
  }
  const isLayoutViewport = rootBoundary === "layoutViewport";
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    const layoutRelativeClientCoords = !isWebKit() || strategy === "fixed";
    if (isLayoutViewport) {
      if (!layoutRelativeClientCoords) {
        x = -visualViewport.offsetLeft;
        y = -visualViewport.offsetTop;
      }
    } else {
      width = visualViewport.width;
      height = visualViewport.height;
      if (layoutRelativeClientCoords) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const reservedWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    const gutter = getComputedStyle(html).scrollbarGutter === "stable both-edges" ? reservedWidth / 2 : reservedWidth;
    if (gutter <= SCROLLBAR_MAX) {
      width -= gutter;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = getScale(element);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport" || clippingAncestor === "layoutViewport") {
    rect = getViewportRect(element, strategy, clippingAncestor);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let lastKeptComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    const lastPosition = lastKeptComputedStyle ? lastKeptComputedStyle.position : elementIsFixed ? "fixed" : "";
    const shouldDropCurrentNode = !currentNodeIsContaining && (lastPosition === "fixed" || lastPosition === "absolute" && computedStyle.position === "static");
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      lastKeptComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
  let top = firstRect.top;
  let right = firstRect.right;
  let bottom = firstRect.bottom;
  let left = firstRect.left;
  for (let i = 1; i < clippingAncestors.length; i++) {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
    top = max(rect.top, top);
    right = min(rect.right, right);
    bottom = min(rect.bottom, bottom);
    left = max(rect.left, left);
  }
  return {
    width: right - left,
    height: bottom - top,
    x: left,
    y: top
  };
}
function getDimensions2(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  if (!isOffsetParentAnElement && documentElement) {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions: getDimensions2,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove, ancestorResize) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (!rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        return refresh();
      }
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  const win = getWindow(element);
  const handleResize = () => refresh(ancestorResize);
  win.addEventListener("resize", handleResize);
  refresh(true);
  return () => {
    win.removeEventListener("resize", handleResize);
    cleanup();
  };
}
function autoUpdate(reference, floating, update2, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update2);
    ancestorResize && ancestor.addEventListener("resize", update2);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update2, ancestorResize) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update2();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    if (floating) {
      resizeObserver.observe(floating);
    }
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update2();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update2();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update2);
      ancestorResize && ancestor.removeEventListener("resize", update2);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = options != null ? options : {};
  const platformWithCache = {
    ...platform2,
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
import * as React38 from "react";
import { useLayoutEffect as useLayoutEffect2 } from "react";
import * as ReactDOM4 from "react-dom";
var isClient = typeof document !== "undefined";
var noop2 = function noop3() {
};
var index = isClient ? useLayoutEffect2 : noop2;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React38.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform3,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open: open3
  } = options;
  const [data, setData] = React38.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React38.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React38.useState(null);
  const [_floating, _setFloating] = React38.useState(null);
  const setReference = React38.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React38.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React38.useRef(null);
  const floatingRef = React38.useRef(null);
  const dataRef = React38.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform3);
  const openRef = useLatestRef(open3);
  const update2 = React38.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM4.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open3 === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open3]);
  const isMountedRef = React38.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update2);
      }
      update2();
    }
  }, [referenceEl, floatingEl, update2, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React38.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React38.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React38.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React38.useMemo(() => ({
    ...data,
    update: update2,
    refs,
    elements,
    floatingStyles
  }), [data, update2, refs, elements, floatingStyles]);
}
var offset3 = (options, deps) => {
  const result = offset2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var shift3 = (options, deps) => {
  const result = shift2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var limitShift3 = (options, deps) => {
  const result = limitShift2(options);
  return {
    fn: result.fn,
    options: [options, deps]
  };
};
var flip3 = (options, deps) => {
  const result = flip2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var size3 = (options, deps) => {
  const result = size2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};

// node_modules/@base-ui/react/select/root/SelectRootContext.mjs
import * as React39 from "react";
var SelectRootContext = /* @__PURE__ */ React39.createContext(void 0);
if (true) SelectRootContext.displayName = "SelectRootContext";
var SelectFloatingContext = /* @__PURE__ */ React39.createContext(void 0);
if (true) SelectFloatingContext.displayName = "SelectFloatingContext";
function useSelectRootContext() {
  const store = React39.useContext(SelectRootContext);
  if (store === void 0) {
    throw new Error(true ? "Base UI: SelectRootContext is missing. Select parts must be placed within <Select.Root>." : formatErrorMessage_default(60));
  }
  return store;
}
function useSelectFloatingContext() {
  const context = React39.useContext(SelectFloatingContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: SelectFloatingContext is missing. Select parts must be placed within <Select.Root>." : formatErrorMessage_default(61));
  }
  return context;
}

// node_modules/@base-ui/react/internals/field-root-context/FieldRootContext.mjs
import * as React40 from "react";

// node_modules/@base-ui/react/field/control/FieldControlDataAttributes.mjs
var valid = "data-valid";
var invalid = "data-invalid";

// node_modules/@base-ui/react/internals/field-constants/constants.mjs
var DEFAULT_VALIDITY_STATE = {
  badInput: false,
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valid: null,
  valueMissing: false
};
var DEFAULT_FIELD_STATE_ATTRIBUTES = {
  valid: null,
  touched: false,
  dirty: false,
  filled: false,
  focused: false
};
var DEFAULT_FIELD_ROOT_STATE = {
  disabled: false,
  ...DEFAULT_FIELD_STATE_ATTRIBUTES
};
var fieldValidityMapping = {
  valid(value) {
    if (value === null) {
      return null;
    }
    if (value) {
      return {
        [valid]: ""
      };
    }
    return {
      [invalid]: ""
    };
  }
};

// node_modules/@base-ui/react/internals/field-root-context/FieldRootContext.mjs
var DEFAULT_FIELD_ROOT_CONTEXT = {
  invalid: void 0,
  name: void 0,
  validityData: {
    state: DEFAULT_VALIDITY_STATE,
    errors: [],
    error: "",
    value: "",
    initialValue: null
  },
  setValidityData: NOOP,
  disabled: void 0,
  setTouched: NOOP,
  setDirty: NOOP,
  setFilled: NOOP,
  setFocused: NOOP,
  focusOwnerRef: {
    current: void 0
  },
  validationMode: "onSubmit",
  shouldValidateOnChange: () => false,
  state: DEFAULT_FIELD_ROOT_STATE,
  registerFieldControl: NOOP,
  validation: {
    getValidationProps: (_disabled, props = EMPTY_OBJECT) => props,
    inputRef: {
      current: null
    },
    registeredInputs: /* @__PURE__ */ new Map(),
    registerInput: NOOP,
    getInputControl: () => null,
    commit: async () => {
    },
    change: NOOP
  }
};
var FieldRootContext = /* @__PURE__ */ React40.createContext(DEFAULT_FIELD_ROOT_CONTEXT);
if (true) FieldRootContext.displayName = "FieldRootContext";
function useFieldRootContext(optional = true) {
  const context = React40.useContext(FieldRootContext);
  if (context.setValidityData === NOOP && !optional) {
    throw new Error(true ? "Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>." : formatErrorMessage_default(28));
  }
  return context;
}

// node_modules/@base-ui/react/internals/field-register-control/useRegisterFieldControl.mjs
function useRegisterFieldControl(controlRef, id, value, getFormValueOverride, enabled = true, name) {
  const {
    registerFieldControl
  } = useFieldRootContext();
  const sourceRef = useRefWithInit(() => /* @__PURE__ */ Symbol());
  useIsoLayoutEffect(() => {
    const source = sourceRef.current;
    if (!enabled) {
      registerFieldControl(source, void 0);
      return;
    }
    const registration = {
      controlRef,
      getValue: getFormValueOverride,
      id,
      name,
      value
    };
    registerFieldControl(source, registration);
  }, [controlRef, enabled, getFormValueOverride, id, name, registerFieldControl, sourceRef, value]);
  useIsoLayoutEffect(() => {
    const source = sourceRef.current;
    return () => {
      registerFieldControl(source, void 0);
    };
  }, [registerFieldControl, sourceRef]);
}

// node_modules/@base-ui/react/internals/labelable-provider/useLabelableId.mjs
import * as React42 from "react";

// node_modules/@base-ui/react/internals/labelable-provider/LabelableContext.mjs
import * as React41 from "react";
var LabelableContext = /* @__PURE__ */ React41.createContext({
  controlId: void 0,
  registerControlId: NOOP,
  resetControlId: NOOP,
  labelId: void 0,
  setLabelId: NOOP,
  messageIds: [],
  setMessageIds: NOOP,
  getDescriptionProps: (externalProps) => externalProps
});
if (true) LabelableContext.displayName = "LabelableContext";
function useLabelableContext() {
  return React41.useContext(LabelableContext);
}

// node_modules/@base-ui/react/internals/labelable-provider/useLabelableId.mjs
function useLabelableId(params = {}) {
  const {
    id,
    enabled = true
  } = params;
  const {
    controlId,
    registerControlId,
    resetControlId
  } = useLabelableContext();
  const defaultId = useBaseUiId();
  const controlSourceRef = useRefWithInit(() => /* @__PURE__ */ Symbol());
  const hasRegisteredRef = React42.useRef(false);
  const hadExplicitIdRef = React42.useRef(false);
  const unregisterControlId = useStableCallback(() => {
    if (!hasRegisteredRef.current || registerControlId === NOOP) {
      return;
    }
    hasRegisteredRef.current = false;
    registerControlId(controlSourceRef.current, void 0);
  });
  useIsoLayoutEffect(() => {
    if (!enabled || registerControlId === NOOP) {
      unregisterControlId();
      return void 0;
    }
    let nextId;
    if (id !== void 0) {
      hadExplicitIdRef.current = true;
      nextId = id;
    } else if (hadExplicitIdRef.current) {
      nextId = defaultId;
    } else {
      resetControlId();
      return void 0;
    }
    if (nextId === void 0) {
      unregisterControlId();
      return void 0;
    }
    hasRegisteredRef.current = true;
    registerControlId(controlSourceRef.current, nextId);
    return void 0;
  }, [id, enabled, registerControlId, resetControlId, defaultId, controlSourceRef, unregisterControlId]);
  useIsoLayoutEffect(() => {
    return unregisterControlId;
  }, [unregisterControlId]);
  return (enabled ? controlId : void 0) ?? id ?? defaultId;
}

// node_modules/@base-ui/utils/areArraysEqual.mjs
function areArraysEqual(array1, array2, itemComparer = Object.is) {
  const {
    length
  } = array1;
  if (length !== array2.length) {
    return false;
  }
  for (let i = 0; i < length; i += 1) {
    if (!itemComparer(array1[i], array2[i])) {
      return false;
    }
  }
  return true;
}

// node_modules/@base-ui/react/internals/itemEquality.mjs
var defaultItemEquality = (itemValue, selectedValue) => Object.is(itemValue, selectedValue);
function compareItemEquality(itemValue, selectedValue, comparer) {
  if (itemValue == null || selectedValue == null) {
    return Object.is(itemValue, selectedValue);
  }
  return comparer(itemValue, selectedValue);
}
function isSelectedValueDirty(currentValue, initialValue, comparer) {
  if (Array.isArray(currentValue) && Array.isArray(initialValue)) {
    return !areArraysEqual(currentValue, initialValue, (itemValue, initialItemValue) => compareItemEquality(itemValue, initialItemValue, comparer));
  }
  return currentValue !== initialValue;
}
function selectedValueIncludes(selectedValues, itemValue, comparer) {
  if (!selectedValues) {
    return false;
  }
  return selectedValues.some((selectedValue) => {
    if (selectedValue === void 0) {
      return false;
    }
    return compareItemEquality(itemValue, selectedValue, comparer);
  });
}
function findItemIndex(itemValues, selectedValue, comparer) {
  if (!itemValues) {
    return -1;
  }
  return itemValues.findIndex((itemValue) => {
    if (itemValue === void 0) {
      return false;
    }
    return compareItemEquality(itemValue, selectedValue, comparer);
  });
}
function createSelectionMatcher(selectedValues, comparer) {
  if (comparer !== defaultItemEquality) {
    return (itemValue) => selectedValueIncludes(selectedValues, itemValue, comparer);
  }
  const index2 = new Set(selectedValues);
  index2.delete(void 0);
  return (itemValue) => index2.has(itemValue) && (itemValue !== 0 || selectedValues.some((v) => Object.is(itemValue, v)));
}
function findSelectionIndex(itemValues, selectedValue, comparer, multiple) {
  const index2 = multiple && Array.isArray(selectedValue) ? (
    // Anchor to the first selected item in rendered order so the index does not depend
    // on the order in which the values were added to the array.
    itemValues.findIndex(createSelectionMatcher(selectedValue, comparer))
  ) : findItemIndex(itemValues, selectedValue, comparer);
  return index2 === -1 ? null : index2;
}
function resolveSelectedIndex(index2, itemValue, registry, selectedValues, comparer, currentIndex) {
  if (selectedValueIncludes(selectedValues, itemValue, comparer)) {
    return currentIndex != null && index2 > currentIndex && selectedValueIncludes(selectedValues, registry[currentIndex], comparer) ? currentIndex : index2;
  }
  return index2 === currentIndex ? findSelectionIndex(registry, selectedValues, comparer, true) : currentIndex;
}
function removeItem(selectedValues, itemValue, comparer) {
  return selectedValues.filter((selectedValue) => !compareItemEquality(itemValue, selectedValue, comparer));
}

// node_modules/@base-ui/react/internals/resolveValueLabel.mjs
import * as React43 from "react";

// node_modules/@base-ui/react/internals/serializeValue.mjs
function serializeValue(value) {
  if (value == null) {
    return "";
  }
  if (typeof value === "string") {
    return value;
  }
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

// node_modules/@base-ui/react/internals/resolveValueLabel.mjs
import { jsx as _jsx6 } from "react/jsx-runtime";
function isGroup(item) {
  return typeof item === "object" && item != null && Array.isArray(item.items);
}
function isGroupedItems(items) {
  return isGroup(items?.[0]);
}
function flattenLeafItems(items) {
  return isGroupedItems(items) ? items.flatMap((group) => group.items) : items;
}
function hasNullItemLabel(items) {
  if (!Array.isArray(items)) {
    return items != null && "null" in items;
  }
  const arrayItems = items;
  if (isGroupedItems(arrayItems)) {
    for (const group of arrayItems) {
      for (const item of group.items) {
        if (item && item.value == null && item.label != null) {
          return true;
        }
      }
    }
    return false;
  }
  for (const item of arrayItems) {
    if (item && item.value == null && item.label != null) {
      return true;
    }
  }
  return false;
}
function stringifyAsLabel(item, itemToStringLabel) {
  if (itemToStringLabel && item != null) {
    return itemToStringLabel(item) ?? "";
  }
  if (item && typeof item === "object") {
    if ("label" in item && item.label != null) {
      return String(item.label);
    }
    if ("value" in item) {
      return String(item.value);
    }
  }
  return serializeValue(item);
}
function stringifyAsValue(item, itemToStringValue) {
  if (itemToStringValue && item != null) {
    return itemToStringValue(item) ?? "";
  }
  if (item && typeof item === "object" && "value" in item && "label" in item) {
    return serializeValue(item.value);
  }
  return serializeValue(item);
}
function resolveSelectedLabel(value, items, itemToStringLabel) {
  function fallback() {
    return stringifyAsLabel(value, itemToStringLabel);
  }
  if (itemToStringLabel && value != null) {
    return itemToStringLabel(value);
  }
  if (value && typeof value === "object" && "label" in value && value.label != null) {
    return value.label;
  }
  if (items && !Array.isArray(items)) {
    const label = Object.hasOwn(items, value) ? items[value] : void 0;
    return label ?? fallback();
  }
  if (Array.isArray(items)) {
    const arrayItems = items;
    const flatItems = flattenLeafItems(arrayItems);
    if (value == null || typeof value !== "object") {
      const match = flatItems.find((item) => item.value === value);
      if (match && match.label != null) {
        return match.label;
      }
      return fallback();
    }
    if ("value" in value) {
      const match = flatItems.find((item) => item && item.value === value.value);
      if (match && match.label != null) {
        return match.label;
      }
    }
  }
  return fallback();
}
function resolveMultipleLabels(values, items, itemToStringLabel) {
  return values.reduce((acc, value, index2) => {
    if (index2 > 0) {
      acc.push(", ");
    }
    acc.push(/* @__PURE__ */ _jsx6(React43.Fragment, {
      children: resolveSelectedLabel(value, items, itemToStringLabel)
    }, index2));
    return acc;
  }, []);
}

// node_modules/@base-ui/react/select/store.mjs
var selectors2 = {
  id: (state) => state.id,
  labelId: (state) => state.labelId,
  modal: (state) => state.modal,
  multiple: (state) => state.multiple,
  disabled: (state) => state.disabled,
  readOnly: (state) => state.readOnly,
  required: (state) => state.required,
  highlightItemOnHover: (state) => state.highlightItemOnHover,
  items: (state) => state.items,
  itemToStringLabel: (state) => state.itemToStringLabel,
  isItemEqualToValue: (state) => state.isItemEqualToValue,
  value: (state) => state.value,
  hasSelectedValue: (state) => {
    const {
      value,
      multiple,
      itemToStringValue
    } = state;
    if (value == null) {
      return false;
    }
    if (multiple && Array.isArray(value)) {
      return value.length > 0;
    }
    return stringifyAsValue(value, itemToStringValue) !== "";
  },
  hasNullItemLabel: (state, enabled) => {
    return enabled ? hasNullItemLabel(state.items) : false;
  },
  open: (state) => state.open,
  mounted: (state) => state.mounted,
  forceMount: (state) => state.forceMount,
  transitionStatus: (state) => state.transitionStatus,
  openMethod: (state) => state.openMethod,
  activeIndex: (state) => state.activeIndex,
  selectedIndex: (state) => state.selectedIndex,
  isActive: (state, index2) => state.activeIndex === index2,
  isSelected: (state, itemValue) => {
    const comparer = state.isItemEqualToValue;
    const storeValue = state.value;
    if (state.multiple) {
      return Array.isArray(storeValue) && storeValue.some((selectedItem) => compareItemEquality(itemValue, selectedItem, comparer));
    }
    return compareItemEquality(itemValue, storeValue, comparer);
  },
  isSelectedByFocus: (state, index2) => {
    return state.selectedIndex === index2;
  },
  popupProps: (state) => state.popupProps,
  triggerProps: (state) => state.triggerProps,
  itemRoot: (state) => state.itemRoot,
  triggerElement: (state) => state.triggerElement,
  positionerElement: (state) => state.positionerElement,
  listElement: (state) => state.listElement,
  popupSide: (state) => state.popupSide,
  scrollUpArrowVisible: (state) => state.scrollUpArrowVisible,
  scrollDownArrowVisible: (state) => state.scrollDownArrowVisible,
  hasScrollArrows: (state) => state.hasScrollArrows
};

// node_modules/@base-ui/react/internals/form-context/FormContext.mjs
import * as React44 from "react";
var FormContext = /* @__PURE__ */ React44.createContext({
  elementRef: {
    current: null
  },
  formRef: {
    current: {
      fields: /* @__PURE__ */ new Map()
    }
  },
  errors: {},
  clearErrors: NOOP,
  validationMode: "onSubmit",
  submitCountRef: {
    current: 0
  }
});
if (true) FormContext.displayName = "FormContext";
function useFormContext() {
  return React44.useContext(FormContext);
}

// node_modules/@base-ui/react/internals/useValueChanged.mjs
import * as React45 from "react";
function useValueChanged(value, onChange) {
  const valueRef = React45.useRef(value);
  const onChangeCallback = useStableCallback(onChange);
  useIsoLayoutEffect(() => {
    if (valueRef.current !== value) {
      onChangeCallback(valueRef.current);
    }
    valueRef.current = value;
  }, [value, onChangeCallback]);
}

// node_modules/@base-ui/react/utils/useOpenInteractionType.mjs
import * as React47 from "react";

// node_modules/@base-ui/utils/useEnhancedClickHandler.mjs
import * as React46 from "react";
function useEnhancedClickHandler(handler) {
  const lastClickInteractionTypeRef = React46.useRef("");
  const handlePointerDown = React46.useCallback((event) => {
    if (event.defaultPrevented) {
      return;
    }
    lastClickInteractionTypeRef.current = event.pointerType;
    handler(event, event.pointerType);
  }, [handler]);
  const handleClick = React46.useCallback((event) => {
    if (event.detail === 0) {
      handler(event, "keyboard");
      return;
    }
    if ("pointerType" in event) {
      handler(event, event.pointerType);
    } else {
      handler(event, lastClickInteractionTypeRef.current);
    }
    lastClickInteractionTypeRef.current = "";
  }, [handler]);
  return {
    onClick: handleClick,
    onPointerDown: handlePointerDown
  };
}

// node_modules/@base-ui/react/utils/useOpenInteractionType.mjs
function useOpenMethodTriggerProps(open3, setOpenMethod) {
  const handleTriggerClick = useStableCallback((_, interactionType) => {
    const isOpen = typeof open3 === "function" ? open3() : open3;
    if (!isOpen) {
      setOpenMethod(interactionType || // On iOS Safari, the hitslop around touch targets means tapping outside an element's
      // bounds does not fire `pointerdown` but does fire `mousedown`. The `interactionType`
      // will be "" in that case.
      (parts_exports.os.ios ? "touch" : ""));
    }
  });
  const {
    onClick,
    onPointerDown
  } = useEnhancedClickHandler(handleTriggerClick);
  return React47.useMemo(() => ({
    onClick,
    onPointerDown
  }), [onClick, onPointerDown]);
}
function useOpenInteractionType(open3) {
  const [openMethod, setOpenMethod] = React47.useState(null);
  const triggerProps = useOpenMethodTriggerProps(open3, setOpenMethod);
  useValueChanged(open3, (previousOpen) => {
    if (previousOpen && !open3) {
      setOpenMethod(null);
    }
  });
  return React47.useMemo(() => ({
    openMethod,
    triggerProps
  }), [openMethod, triggerProps]);
}

// node_modules/@base-ui/utils/clamp.mjs
function clamp2(val, min2 = Number.MIN_SAFE_INTEGER, max2 = Number.MAX_SAFE_INTEGER) {
  return Math.max(min2, Math.min(val, max2));
}

// node_modules/@base-ui/react/utils/scrollEdges.mjs
var SCROLL_EDGE_TOLERANCE_PX = 1;
function getMaxScrollOffset(scrollSize, clientSize) {
  return Math.max(0, scrollSize - clientSize);
}
function normalizeScrollOffset(value, max2) {
  if (max2 <= 0) {
    return 0;
  }
  const clamped = clamp2(value, 0, max2);
  const startDistance = clamped;
  const endDistance = max2 - clamped;
  const withinStartTolerance = startDistance <= SCROLL_EDGE_TOLERANCE_PX;
  const withinEndTolerance = endDistance <= SCROLL_EDGE_TOLERANCE_PX;
  if (withinStartTolerance && withinEndTolerance) {
    return startDistance <= endDistance ? 0 : max2;
  }
  if (withinStartTolerance) {
    return 0;
  }
  if (withinEndTolerance) {
    return max2;
  }
  return clamped;
}

// node_modules/@base-ui/react/select/root/SelectRoot.mjs
import { jsx as _jsx7, jsxs as _jsxs3 } from "react/jsx-runtime";
function SelectRoot(props) {
  const {
    id,
    value: valueProp,
    defaultValue = null,
    onValueChange,
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    name: nameProp,
    form,
    autoComplete,
    disabled: disabledProp = false,
    readOnly = false,
    required = false,
    modal = true,
    actionsRef,
    inputRef,
    onOpenChangeComplete,
    items,
    multiple = false,
    itemToStringLabel,
    itemToStringValue,
    isItemEqualToValue = defaultItemEquality,
    highlightItemOnHover = true,
    children
  } = props;
  const {
    clearErrors
  } = useFormContext();
  const {
    setDirty,
    setTouched,
    setFocused,
    validityData,
    setFilled,
    name: fieldName,
    disabled: fieldDisabled,
    validation,
    validationMode
  } = useFieldRootContext();
  const generatedId = useLabelableId({
    id
  });
  const disabled2 = fieldDisabled || disabledProp;
  const name = fieldName ?? nameProp;
  const [value, setValueUnwrapped] = useControlled({
    controlled: valueProp,
    default: multiple ? defaultValue ?? EMPTY_ARRAY : defaultValue,
    name: "Select",
    state: "value"
  });
  const [open3, setOpenUnwrapped] = useControlled({
    controlled: openProp,
    default: defaultOpen,
    name: "Select",
    state: "open"
  });
  const listRef = React48.useRef([]);
  const labelsRef = React48.useRef([]);
  const popupRef = React48.useRef(null);
  const scrollHandlerRef = React48.useRef(null);
  const scrollArrowsMountedCountRef = React48.useRef(0);
  const valueRef = React48.useRef(null);
  const valuesRef = React48.useRef([]);
  const typingRef = React48.useRef(false);
  const firstItemTextRef = React48.useRef(null);
  const selectedItemTextRef = React48.useRef(null);
  const selectionRef = React48.useRef({
    allowSelectedMouseUp: false,
    allowUnselectedMouseUp: false,
    dragY: 0
  });
  const alignItemWithTriggerActiveRef = React48.useRef(false);
  const initialValueRef = React48.useRef(value);
  const {
    openMethod,
    triggerProps: interactionTypeProps
  } = useOpenInteractionType(open3);
  const store = useRefWithInit(() => new ReactStore({
    id: generatedId,
    labelId: void 0,
    modal,
    multiple,
    disabled: disabled2,
    readOnly,
    required,
    highlightItemOnHover,
    itemToStringLabel,
    itemToStringValue,
    isItemEqualToValue,
    value,
    open: open3,
    // Seeded with the initial values of `useUnmountAfterClose`, which is called after the
    // store because its unmount cleanup writes to it. `useSyncedValues` keeps them in sync.
    mounted: open3,
    transitionStatus: void 0,
    items,
    forceMount: false,
    openMethod: null,
    activeIndex: null,
    selectedIndex: null,
    popupProps: EMPTY_OBJECT,
    triggerProps: EMPTY_OBJECT,
    itemRoot: {
      props: EMPTY_OBJECT,
      multiple,
      disabled: disabled2,
      readOnly,
      isItemEqualToValue
    },
    triggerElement: null,
    positionerElement: null,
    listElement: null,
    popupSide: null,
    scrollUpArrowVisible: false,
    scrollDownArrowVisible: false,
    hasScrollArrows: false
  }, {
    setValue: NOOP,
    setOpen: NOOP,
    handleScrollArrowVisibility: NOOP,
    onOpenChangeComplete: NOOP,
    listRef,
    popupRef,
    scrollHandlerRef,
    scrollArrowsMountedCountRef,
    valueRef,
    valuesRef,
    labelsRef,
    typingRef,
    selectionRef,
    firstItemTextRef,
    selectedItemTextRef,
    alignItemWithTriggerActiveRef,
    initialValueRef
  }, selectors2)).current;
  const [preventUnmountOnClose, setPreventUnmountOnClose] = React48.useState(false);
  const {
    mounted,
    transitionStatus,
    forceUnmount: handleUnmount
  } = useUnmountAfterClose({
    open: open3,
    ref: popupRef,
    preventUnmountOnClose,
    setPreventUnmountOnClose,
    onUnmount() {
      store.update({
        activeIndex: null,
        openMethod: null,
        scrollUpArrowVisible: false,
        scrollDownArrowVisible: false
      });
      onOpenChangeComplete?.(false);
    }
  });
  const activeIndex = store.useState("activeIndex");
  const selectedIndex = store.useState("selectedIndex");
  const triggerElement = store.useState("triggerElement");
  const positionerElement = store.useState("positionerElement");
  const previousOpenMethod = usePreviousValue(openMethod);
  const renderedOpenMethod = openMethod ?? previousOpenMethod;
  const serializedValue = React48.useMemo(() => {
    if (multiple) {
      return "";
    }
    return stringifyAsValue(value, itemToStringValue);
  }, [multiple, value, itemToStringValue]);
  const fieldStringValue = React48.useMemo(() => {
    if (multiple && Array.isArray(value)) {
      return value.map((currentValue) => stringifyAsValue(currentValue, itemToStringValue));
    }
    return stringifyAsValue(value, itemToStringValue);
  }, [multiple, value, itemToStringValue]);
  const controlRef = useValueAsRef(triggerElement);
  const getStringifiedValueForForm = useStableCallback(() => fieldStringValue);
  useRegisterFieldControl(controlRef, generatedId, value, getStringifiedValueForForm, !disabled2, nameProp);
  const hasSelectedValue = multiple ? Array.isArray(value) && value.length > 0 : value != null && serializedValue !== "";
  useIsoLayoutEffect(() => {
    setFilled(hasSelectedValue);
  }, [hasSelectedValue, setFilled]);
  useIsoLayoutEffect(function syncSelectedIndex() {
    const nextIndex = findSelectionIndex(valuesRef.current, value, isItemEqualToValue, multiple);
    if (nextIndex === null) {
      selectedItemTextRef.current = null;
    }
    if (open3) {
      return;
    }
    store.set("selectedIndex", nextIndex);
  }, [multiple, open3, value, isItemEqualToValue, store]);
  useValueChanged(value, () => {
    clearErrors(name);
    setDirty(isSelectedValueDirty(value, validityData.initialValue, isItemEqualToValue));
    validation.change(value);
  });
  const setOpen = useStableCallback((nextOpen, eventDetails) => {
    const openEventDetails = eventDetails;
    const shouldPreventUnmountOnClose = attachPreventUnmountOnClose(openEventDetails);
    onOpenChange?.(nextOpen, openEventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    if (!nextOpen) {
      setPreventUnmountOnClose(shouldPreventUnmountOnClose());
    }
    setOpenUnwrapped(nextOpen);
    if (!nextOpen && (eventDetails.reason === reason_parts_exports.focusOut || eventDetails.reason === reason_parts_exports.outsidePress)) {
      setTouched(true);
      setFocused(false);
      if (validationMode === "onBlur") {
        validation.commit(value);
      }
    }
  });
  React48.useImperativeHandle(actionsRef, () => ({
    unmount: handleUnmount,
    close: () => {
      if (store.state.open) {
        setOpen(false, createChangeEventDetails(reason_parts_exports.imperativeAction));
      }
    }
  }), [handleUnmount, setOpen, store]);
  const setValue = useStableCallback((nextValue, eventDetails) => {
    onValueChange?.(nextValue, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    setValueUnwrapped(nextValue);
  });
  const handleScrollArrowVisibility = useStableCallback((scroller) => {
    const maxScrollTop = getMaxScrollOffset(scroller.scrollHeight, scroller.clientHeight);
    const scrollTop = normalizeScrollOffset(scroller.scrollTop, maxScrollTop);
    const shouldShowUp = scrollTop > 0;
    const shouldShowDown = scrollTop < maxScrollTop;
    store.set("scrollUpArrowVisible", shouldShowUp);
    store.set("scrollDownArrowVisible", shouldShowDown);
  });
  const floatingContext = useFloatingRootContext({
    open: open3,
    onOpenChange: setOpen,
    elements: {
      reference: triggerElement,
      floating: positionerElement
    }
  });
  const click = useClick(floatingContext, {
    enabled: !disabled2,
    event: "mousedown"
  });
  const dismiss = useDismiss(floatingContext);
  const listNavigation2 = useListNavigation(floatingContext, {
    enabled: !disabled2,
    listRef,
    activeIndex,
    selectedIndex,
    disabledIndices: EMPTY_ARRAY,
    onNavigate(nextActiveIndex) {
      if (nextActiveIndex === null && !open3) {
        return;
      }
      store.set("activeIndex", nextActiveIndex);
    },
    focusItemOnHover: highlightItemOnHover
  });
  const typeahead = useTypeahead(floatingContext, {
    // Typeahead on an open popup only moves the highlight, so it remains available while
    // `readOnly`. The closed-trigger variant commits a value instead, so it doesn't.
    enabled: !disabled2 && (open3 || !readOnly && !multiple),
    listRef: labelsRef,
    activeIndex,
    selectedIndex,
    // Skip disabled items while matching so typeahead advances to the next selectable item
    // (a click can never select a disabled item and native `<select>` skips them too). Resolve
    // the disabled state from the element via the attribute-only `isElementDisabled` so the
    // hidden, force-mounted items used for closed-trigger typeahead aren't dropped by the
    // `elementsRef`/visibility filter that `disabledIndices` deliberately sidesteps.
    disabledIndices: (index2) => isElementDisabled(listRef.current[index2]),
    onMatch(index2) {
      if (open3) {
        store.set("activeIndex", index2);
      } else {
        setValue(valuesRef.current[index2], createChangeEventDetails(reason_parts_exports.none));
      }
    },
    onTyping(typing) {
      typingRef.current = typing;
    }
  });
  const mergedTriggerProps = React48.useMemo(() => mergeProps(typeahead.reference, listNavigation2.reference, dismiss.reference, click.reference, interactionTypeProps), [click.reference, typeahead.reference, listNavigation2.reference, dismiss.reference, interactionTypeProps]);
  const popupProps = React48.useMemo(() => mergeProps(FOCUSABLE_POPUP_PROPS, typeahead.floating, listNavigation2.floating, dismiss.floating), [typeahead.floating, listNavigation2.floating, dismiss.floating]);
  const itemProps = listNavigation2.item ?? EMPTY_OBJECT;
  const itemRoot = React48.useMemo(() => ({
    props: itemProps,
    multiple,
    disabled: disabled2,
    readOnly,
    isItemEqualToValue
  }), [itemProps, multiple, disabled2, readOnly, isItemEqualToValue]);
  store.useContextCallback("setValue", setValue);
  store.useContextCallback("setOpen", setOpen);
  store.useContextCallback("handleScrollArrowVisibility", handleScrollArrowVisibility);
  store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
  useOnFirstRender(() => {
    store.update({
      popupProps,
      triggerProps: mergedTriggerProps,
      itemRoot
    });
  });
  store.useSyncedValues({
    id: generatedId,
    modal,
    multiple,
    disabled: disabled2,
    readOnly,
    required,
    highlightItemOnHover,
    value,
    open: open3,
    mounted,
    transitionStatus,
    popupProps,
    triggerProps: mergedTriggerProps,
    itemRoot,
    items,
    itemToStringLabel,
    itemToStringValue,
    isItemEqualToValue,
    openMethod: renderedOpenMethod
  });
  const ref = useMergedRefs(inputRef, validation.inputRef);
  const hiddenInputName = multiple ? void 0 : name;
  const hiddenInputs = React48.useMemo(() => {
    if (!multiple || !Array.isArray(value) || !name) {
      return null;
    }
    return value.map((v) => {
      const currentSerializedValue = stringifyAsValue(v, itemToStringValue);
      return /* @__PURE__ */ _jsx7("input", {
        type: "hidden",
        form,
        name,
        value: currentSerializedValue,
        disabled: disabled2
      }, currentSerializedValue);
    });
  }, [multiple, value, form, name, itemToStringValue, disabled2]);
  return /* @__PURE__ */ _jsxs3(SelectRootContext.Provider, {
    value: store,
    children: [/* @__PURE__ */ _jsx7(SelectFloatingContext.Provider, {
      value: floatingContext,
      children
    }), /* @__PURE__ */ _jsx7("input", {
      ...validation.getValidationProps(disabled2, {
        onFocus() {
          store.state.triggerElement?.focus({
            // Supported in Chrome from 144 (January 2026)
            focusVisible: true
          });
        },
        // Handle browser autofill.
        onChange(event) {
          if (event.nativeEvent.defaultPrevented || disabled2 || readOnly) {
            return;
          }
          const nextValue = event.currentTarget.value;
          const details = createChangeEventDetails(reason_parts_exports.none, event.nativeEvent);
          function handleChange() {
            if (multiple) {
              return;
            }
            const nextValueLower = nextValue.toLowerCase();
            let matchingIndex = valuesRef.current.findIndex((candidate) => stringifyAsValue(candidate, itemToStringValue).toLowerCase() === nextValueLower || stringifyAsLabel(candidate, itemToStringLabel).toLowerCase() === nextValueLower);
            if (matchingIndex === -1) {
              matchingIndex = valuesRef.current.findIndex((_, index2) => {
                const renderedLabel = labelsRef.current[index2];
                return renderedLabel != null && renderedLabel.toLowerCase() === nextValueLower;
              });
            }
            const matchingValue = valuesRef.current[matchingIndex];
            if (matchingValue != null) {
              setValue(matchingValue, details);
            }
          }
          store.set("forceMount", true);
          queueMicrotask(handleChange);
        }
      }),
      id: generatedId && hiddenInputName == null ? `${generatedId}-hidden-input` : void 0,
      form,
      name: hiddenInputName,
      autoComplete,
      value: serializedValue,
      disabled: disabled2,
      required: required && !(multiple && hasSelectedValue),
      readOnly,
      ref,
      style: name ? visuallyHiddenInput : visuallyHidden,
      tabIndex: -1,
      "aria-hidden": true,
      suppressHydrationWarning: true
    }), hiddenInputs]
  });
}

// node_modules/@base-ui/react/select/label/SelectLabel.mjs
import * as React49 from "react";

// node_modules/@base-ui/react/utils/useRegisteredLabelId.mjs
function useRegisteredLabelId(idProp, setLabelId) {
  const id = useBaseUiId(idProp);
  useIsoLayoutEffect(() => {
    setLabelId(id);
    return () => {
      setLabelId((currentId) => currentId === id ? void 0 : currentId);
    };
  }, [id, setLabelId]);
  return id;
}

// node_modules/@base-ui/react/internals/labelable-provider/useLabel.mjs
function useLabel(params = {}) {
  const {
    id: idProp,
    fallbackControlId,
    native = false,
    setLabelId: setLabelIdProp,
    focusControl: focusControlProp
  } = params;
  const {
    controlId: contextControlId,
    setLabelId: setContextLabelId
  } = useLabelableContext();
  const syncLabelId = useStableCallback((nextLabelId) => {
    setContextLabelId(nextLabelId);
    setLabelIdProp?.(nextLabelId);
  });
  const id = useRegisteredLabelId(idProp, syncLabelId);
  const resolvedControlId = contextControlId ?? fallbackControlId;
  function focusControl(event) {
    if (focusControlProp) {
      focusControlProp(event, resolvedControlId);
      return;
    }
    if (!resolvedControlId) {
      return;
    }
    const controlElement = getControlById(event.currentTarget, resolvedControlId);
    if (isHTMLElement(controlElement)) {
      focusElementWithVisible(controlElement);
    }
  }
  function handleInteraction(event) {
    const target = getTarget(event.nativeEvent);
    if (closest(target, "button,input,select,textarea")) {
      return;
    }
    if (!event.defaultPrevented && event.detail > 1) {
      event.preventDefault();
    }
    if (native) {
      return;
    }
    focusControl(event);
  }
  return native ? {
    id,
    htmlFor: resolvedControlId,
    onMouseDown: handleInteraction
  } : {
    id,
    onClick: handleInteraction,
    onPointerDown(event) {
      event.preventDefault();
    }
  };
}
function getControlById(label, id) {
  let root = label.getRootNode();
  while (isShadowRoot(root)) {
    const element = root.getElementById(id);
    if (element) {
      return element;
    }
    root = root.host.getRootNode();
  }
  return ownerDocument(label).getElementById(id);
}
function focusElementWithVisible(element) {
  element.focus({
    // Available from Chrome 144+ (January 2026).
    // Safari and Firefox already support it.
    focusVisible: true
  });
}

// node_modules/@base-ui/react/utils/resolveAriaLabelledBy.mjs
function getDefaultLabelId(id) {
  return id == null ? void 0 : `${id}-label`;
}
function resolveAriaLabelledBy(fieldLabelId, localLabelId) {
  return fieldLabelId ?? localLabelId;
}

// node_modules/@base-ui/react/select/label/SelectLabel.mjs
var SelectLabel = /* @__PURE__ */ React49.forwardRef(function SelectLabel2(componentProps, forwardedRef) {
  const {
    render: render2,
    className,
    style,
    ...elementProps
  } = componentProps;
  const elementPropsWithoutId = elementProps;
  delete elementPropsWithoutId.id;
  const fieldRootContext = useFieldRootContext();
  const store = useSelectRootContext();
  const triggerElement = store.useState("triggerElement");
  const rootId = store.useState("id");
  const defaultLabelId = getDefaultLabelId(rootId);
  const labelProps = useLabel({
    id: defaultLabelId,
    fallbackControlId: triggerElement?.id ?? rootId,
    setLabelId(nextLabelId) {
      const resolvedLabelId = typeof nextLabelId === "function" ? nextLabelId(store.state.labelId) : nextLabelId;
      store.set("labelId", resolvedLabelId);
    }
  });
  return useRenderElement("div", componentProps, {
    ref: forwardedRef,
    state: fieldRootContext.state,
    props: [labelProps, elementProps],
    stateAttributesMapping: fieldValidityMapping
  });
});
if (true) SelectLabel.displayName = "SelectLabel";

// node_modules/@base-ui/react/select/trigger/SelectTrigger.mjs
import * as React50 from "react";

// node_modules/@base-ui/react/internals/field-root-context/useSetFieldFocused.mjs
function useSetFieldFocused(disabled2, focusTargetRef, onFocusedChange) {
  const {
    setFocused,
    focusOwnerRef
  } = useFieldRootContext();
  const setFieldFocused = useStableCallback((focused) => {
    if (focused ? !disabled2 : focusOwnerRef.current === setFieldFocused) {
      focusOwnerRef.current = focused && setFieldFocused;
      onFocusedChange?.(focused);
      setFocused(focused);
    }
  });
  useIsoLayoutEffect(() => {
    const el = focusTargetRef.current;
    const root = el?.getRootNode();
    if (root?.activeElement === el) {
      setFieldFocused(true);
    }
    return () => setFieldFocused(false);
  }, [disabled2, focusTargetRef, setFieldFocused]);
  return setFieldFocused;
}

// node_modules/@base-ui/react/utils/getPseudoElementBounds.mjs
var BOUNDARY_OFFSET = 5;
function isMouseWithinBounds(event, element) {
  const bounds = getPseudoElementBounds(element);
  return event.clientX >= bounds.left - BOUNDARY_OFFSET && event.clientX <= bounds.right + BOUNDARY_OFFSET && event.clientY >= bounds.top - BOUNDARY_OFFSET && event.clientY <= bounds.bottom + BOUNDARY_OFFSET;
}
function getPseudoElementBounds(element) {
  const elementRect = element.getBoundingClientRect();
  const win = getWindow(element);
  if (parts_exports.env.jsdom) {
    return elementRect;
  }
  const beforeStyles = win.getComputedStyle(element, "::before");
  const afterStyles = win.getComputedStyle(element, "::after");
  const hasPseudoElements = beforeStyles.content !== "none" || afterStyles.content !== "none";
  if (!hasPseudoElements) {
    return elementRect;
  }
  const beforeWidth = parseFloat(beforeStyles.width) || 0;
  const beforeHeight = parseFloat(beforeStyles.height) || 0;
  const afterWidth = parseFloat(afterStyles.width) || 0;
  const afterHeight = parseFloat(afterStyles.height) || 0;
  const totalWidth = Math.max(elementRect.width, beforeWidth, afterWidth);
  const totalHeight = Math.max(elementRect.height, beforeHeight, afterHeight);
  const widthDiff = totalWidth - elementRect.width;
  const heightDiff = totalHeight - elementRect.height;
  return {
    left: elementRect.left - widthDiff / 2,
    right: elementRect.right + widthDiff / 2,
    top: elementRect.top - heightDiff / 2,
    bottom: elementRect.bottom + heightDiff / 2
  };
}

// node_modules/@base-ui/react/select/trigger/SelectTriggerDataAttributes.mjs
var popupOpen2 = CommonTriggerDataAttributes_exports.popupOpen;
var pressed2 = CommonTriggerDataAttributes_exports.pressed;
var popupSide = "data-popup-side";

// node_modules/@base-ui/react/select/trigger/SelectTrigger.mjs
var SELECTED_DELAY = 400;
var stateAttributesMapping2 = {
  ...pressableTriggerOpenStateMapping,
  ...fieldValidityMapping,
  popupSide: (side) => side ? {
    [popupSide]: side
  } : null,
  value: () => null
};
var SelectTrigger = /* @__PURE__ */ React50.forwardRef(function SelectTrigger2(componentProps, forwardedRef) {
  const {
    render: render2,
    className,
    id: idProp,
    disabled: disabledProp = false,
    nativeButton = true,
    style,
    ...elementProps
  } = componentProps;
  const {
    setTouched,
    validationMode,
    validation,
    state: fieldState,
    disabled: fieldDisabled
  } = useFieldRootContext();
  const {
    labelId: fieldLabelId
  } = useLabelableContext();
  const store = useSelectRootContext();
  const readOnly = store.useState("readOnly");
  const required = store.useState("required");
  const selectDisabled = store.useState("disabled");
  const disabled2 = fieldDisabled || selectDisabled || disabledProp;
  const open3 = store.useState("open");
  const mounted = store.useState("mounted");
  const value = store.useState("value");
  const triggerProps = store.useState("triggerProps");
  const positionerElement = store.useState("positionerElement");
  const listElement = store.useState("listElement");
  const popupSideValue = store.useState("popupSide");
  const rootId = store.useState("id");
  const selectLabelId = store.useState("labelId");
  const hasSelectedValue = store.useState("hasSelectedValue");
  const popupSide2 = mounted && positionerElement ? popupSideValue : null;
  const id = idProp ?? rootId;
  const ariaLabelledBy = resolveAriaLabelledBy(fieldLabelId, selectLabelId);
  useLabelableId({
    id: idProp
  });
  const positionerRef = useValueAsRef(positionerElement);
  const triggerRef = React50.useRef(null);
  const setFocused = useSetFieldFocused(disabled2, triggerRef);
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled: disabled2,
    native: nativeButton
  });
  const setTriggerElement = store.useStateSetter("triggerElement");
  const timeoutFocus = useTimeout();
  const timeoutMouseDown = useTimeout();
  const selectedDelayTimeout = useTimeout();
  React50.useEffect(() => {
    if (open3) {
      selectedDelayTimeout.start(SELECTED_DELAY, () => {
        store.context.selectionRef.current.allowUnselectedMouseUp = true;
        store.context.selectionRef.current.allowSelectedMouseUp = true;
      });
      return () => {
        selectedDelayTimeout.clear();
      };
    }
    store.context.selectionRef.current = {
      allowSelectedMouseUp: false,
      allowUnselectedMouseUp: false,
      dragY: 0
    };
    timeoutMouseDown.clear();
    return void 0;
  }, [open3, store, timeoutMouseDown, selectedDelayTimeout]);
  const mergedProps = mergeProps(triggerProps, {
    id,
    role: "combobox",
    "aria-expanded": open3,
    "aria-haspopup": "listbox",
    "aria-controls": open3 ? listElement?.id ?? getFloatingFocusElement(positionerElement)?.id : void 0,
    "aria-labelledby": ariaLabelledBy,
    "aria-readonly": readOnly || void 0,
    "aria-required": required || void 0,
    tabIndex: disabled2 ? -1 : 0,
    onFocus(event) {
      setFocused(true);
      if (open3 && store.context.alignItemWithTriggerActiveRef.current) {
        store.context.setOpen(false, createChangeEventDetails(reason_parts_exports.none, event.nativeEvent));
      }
      timeoutFocus.start(0, () => {
        store.set("forceMount", true);
      });
    },
    onBlur(event) {
      if (contains(positionerElement, event.relatedTarget)) {
        return;
      }
      setTouched(true);
      setFocused(false);
      if (validationMode === "onBlur") {
        validation.commit(value);
      }
    },
    onMouseDown(event) {
      if (open3) {
        return;
      }
      const doc = ownerDocument(event.currentTarget);
      function handleMouseUp(mouseEvent) {
        if (!triggerRef.current) {
          return;
        }
        const mouseUpTarget = mouseEvent.target;
        if (contains(triggerRef.current, mouseUpTarget) || contains(positionerRef.current, mouseUpTarget)) {
          return;
        }
        if (isMouseWithinBounds(mouseEvent, triggerRef.current)) {
          return;
        }
        store.context.setOpen(false, createChangeEventDetails(reason_parts_exports.cancelOpen, mouseEvent));
      }
      timeoutMouseDown.start(0, () => {
        doc.addEventListener("mouseup", handleMouseUp, {
          once: true
        });
      });
    }
  }, elementProps, getButtonProps);
  const props = validation.getValidationProps(disabled2, mergedProps);
  props.role = "combobox";
  const state = {
    ...fieldState,
    open: open3,
    disabled: disabled2,
    value,
    readOnly,
    popupSide: popupSide2,
    placeholder: !hasSelectedValue
  };
  return useRenderElement("button", componentProps, {
    ref: [forwardedRef, triggerRef, buttonRef, setTriggerElement],
    state,
    stateAttributesMapping: stateAttributesMapping2,
    props
  });
});
if (true) SelectTrigger.displayName = "SelectTrigger";

// node_modules/@base-ui/react/select/value/SelectValue.mjs
import * as React51 from "react";
var stateAttributesMapping3 = {
  value: () => null
};
var SelectValue = /* @__PURE__ */ React51.forwardRef(function SelectValue2(componentProps, forwardedRef) {
  const {
    className,
    render: render2,
    children: childrenProp,
    placeholder,
    style,
    ...elementProps
  } = componentProps;
  const store = useSelectRootContext();
  const value = store.useState("value");
  const items = store.useState("items");
  const itemToStringLabel = store.useState("itemToStringLabel");
  const hasSelectedValue = store.useState("hasSelectedValue");
  const shouldCheckNullItemLabel = !hasSelectedValue && placeholder != null && childrenProp == null;
  const hasNullLabel = store.useState("hasNullItemLabel", shouldCheckNullItemLabel);
  const state = {
    value,
    placeholder: !hasSelectedValue
  };
  let children = null;
  if (typeof childrenProp === "function") {
    children = childrenProp(value);
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (shouldCheckNullItemLabel && !hasNullLabel) {
    children = placeholder;
  } else if (Array.isArray(value)) {
    children = resolveMultipleLabels(value, items, itemToStringLabel);
  } else {
    children = resolveSelectedLabel(value, items, itemToStringLabel);
  }
  const element = useRenderElement("span", componentProps, {
    state,
    ref: [forwardedRef, store.context.valueRef],
    props: [{
      children
    }, elementProps],
    stateAttributesMapping: stateAttributesMapping3
  });
  return element;
});
if (true) SelectValue.displayName = "SelectValue";

// node_modules/@base-ui/react/select/icon/SelectIcon.mjs
import * as React52 from "react";
var SelectIcon = /* @__PURE__ */ React52.forwardRef(function SelectIcon2(componentProps, forwardedRef) {
  const {
    render: render2,
    className,
    style,
    ...elementProps
  } = componentProps;
  const store = useSelectRootContext();
  const open3 = store.useState("open");
  const state = {
    open: open3
  };
  const element = useRenderElement("span", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      "aria-hidden": true,
      children: "\u25BC"
    }, elementProps],
    stateAttributesMapping: triggerOpenStateMapping2
  });
  return element;
});
if (true) SelectIcon.displayName = "SelectIcon";

// node_modules/@base-ui/react/select/portal/SelectPortal.mjs
import * as React53 from "react";
import { jsx as _jsx8 } from "react/jsx-runtime";
var SelectPortal = /* @__PURE__ */ React53.forwardRef(function SelectPortal2(portalProps, forwardedRef) {
  const store = useSelectRootContext();
  const mounted = store.useState("mounted");
  const forceMount = store.useState("forceMount");
  const shouldRender = mounted || forceMount;
  if (!shouldRender) {
    return null;
  }
  return /* @__PURE__ */ _jsx8(FloatingPortal, {
    ref: forwardedRef,
    ...portalProps
  });
});
if (true) SelectPortal.displayName = "SelectPortal";

// node_modules/@base-ui/react/select/backdrop/SelectBackdrop.mjs
import * as React54 from "react";
var stateAttributesMapping4 = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var SelectBackdrop = /* @__PURE__ */ React54.forwardRef(function SelectBackdrop2(componentProps, forwardedRef) {
  const {
    render: render2,
    className,
    style,
    ...elementProps
  } = componentProps;
  const store = useSelectRootContext();
  const open3 = store.useState("open");
  const mounted = store.useState("mounted");
  const transitionStatus = store.useState("transitionStatus");
  const state = {
    open: open3,
    transitionStatus
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      role: "presentation",
      hidden: !mounted,
      style: {
        userSelect: "none",
        WebkitUserSelect: "none"
      }
    }, elementProps],
    stateAttributesMapping: stateAttributesMapping4
  });
  return element;
});
if (true) SelectBackdrop.displayName = "SelectBackdrop";

// node_modules/@base-ui/react/select/positioner/SelectPositioner.mjs
import * as React63 from "react";

// node_modules/@base-ui/utils/inertValue.mjs
function inertValue(value) {
  if (isReactVersionAtLeast(19)) {
    return value;
  }
  return value ? "true" : void 0;
}

// node_modules/@base-ui/react/internals/composite/list/CompositeList.mjs
import * as React56 from "react";

// node_modules/@base-ui/react/internals/composite/list/CompositeListContext.mjs
import * as React55 from "react";
var CompositeListContext = /* @__PURE__ */ React55.createContext({
  register: () => {
  },
  unregister: () => {
  },
  subscribeMapChange: () => () => {
  },
  nextIndexRef: {
    current: 0
  }
});
if (true) CompositeListContext.displayName = "CompositeListContext";
function useCompositeListContext() {
  return React55.useContext(CompositeListContext);
}

// node_modules/@base-ui/react/internals/composite/list/CompositeList.mjs
import { jsx as _jsx9 } from "react/jsx-runtime";
function CompositeList(props) {
  const {
    children,
    elementsRef,
    labelsRef,
    onMapChange: onMapChangeProp
  } = props;
  const onMapChange = useStableCallback(onMapChangeProp);
  const [, setMapTick] = React56.useState(0);
  const listeners = useRefWithInit(createListeners).current;
  const map = useRefWithInit(createMap).current;
  const nextIndexRef = React56.useRef(0);
  const isDirtyRef = React56.useRef(true);
  const itemsRef = React56.useRef(null);
  const mutationObserverRef = React56.useRef(null);
  const scheduleMapUpdate = useStableCallback(() => {
    if (isDirtyRef.current) {
      return;
    }
    isDirtyRef.current = true;
    setMapTick((tick) => tick + 1);
  });
  const register2 = useStableCallback((node, registration) => {
    map.set(node, registration);
    scheduleMapUpdate();
  });
  const unregister = useStableCallback((node) => {
    map.delete(node);
    scheduleMapUpdate();
  });
  const syncRefs = useStableCallback((items) => {
    const nextMap = /* @__PURE__ */ new Map();
    elementsRef.current.length = 0;
    if (labelsRef) {
      labelsRef.current.length = 0;
    }
    items.forEach((item) => {
      nextMap.set(item.element, {
        ...item.registration.metadata ?? {},
        index: item.index
      });
      elementsRef.current[item.index] = item.element;
      if (labelsRef) {
        labelsRef.current[item.index] = item.registration.label !== void 0 ? item.registration.label : item.registration.textRef?.current?.textContent ?? item.element.textContent;
      }
    });
    nextIndexRef.current = elementsRef.current.length;
    return nextMap;
  });
  function observe(sortedNodes) {
    mutationObserverRef.current?.disconnect();
    mutationObserverRef.current = null;
    if (typeof MutationObserver !== "function" || sortedNodes.length < 2) {
      return;
    }
    const mutationObserver = new MutationObserver((entries) => {
      if (!hasMovedNode(entries)) {
        return;
      }
      let previousConnectedNode = null;
      for (const node of sortedNodes) {
        if (!node.isConnected) {
          continue;
        }
        if (previousConnectedNode && sortByDocumentPosition(previousConnectedNode, node) > 0) {
          mutationObserver.disconnect();
          scheduleMapUpdate();
          return;
        }
        previousConnectedNode = node;
      }
    });
    mutationObserverRef.current = mutationObserver;
    const roots = /* @__PURE__ */ new Set();
    for (let i = 1; i < sortedNodes.length; i += 1) {
      const root = getCommonAncestor(sortedNodes[i - 1], sortedNodes[i]);
      if (root) {
        roots.add(root);
      }
    }
    roots.forEach((root) => mutationObserver.observe(root, {
      childList: true
    }));
  }
  const flush = useStableCallback(() => {
    const [items, automaticNodes] = getCompositeListSnapshot(map);
    const nextMap = syncRefs(items);
    const previousItems = itemsRef.current;
    const changed = !previousItems || previousItems.length !== items.length || items.some((item, index2) => {
      const previousItem = previousItems[index2];
      return item.index !== previousItem.index || item.element !== previousItem.element || item.registration.index !== previousItem.registration.index || item.registration.metadata !== previousItem.registration.metadata;
    });
    observe(automaticNodes);
    itemsRef.current = items;
    isDirtyRef.current = false;
    if (!changed) {
      return;
    }
    listeners.forEach((listener) => listener(nextMap));
    onMapChange(nextMap);
  });
  useIsoLayoutEffect(() => {
    if (!isDirtyRef.current && itemsRef.current) {
      syncRefs(itemsRef.current);
    }
    return () => {
      elementsRef.current = [];
      if (labelsRef) {
        labelsRef.current = [];
      }
    };
  }, [elementsRef, labelsRef, syncRefs]);
  useIsoLayoutEffect(() => {
    if (isDirtyRef.current) {
      flush();
    }
  });
  useIsoLayoutEffect(() => {
    return () => {
      mutationObserverRef.current?.disconnect();
      isDirtyRef.current = true;
    };
  }, []);
  const subscribeMapChange = useStableCallback((fn) => {
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  });
  const contextValue = React56.useMemo(() => ({
    register: register2,
    unregister,
    subscribeMapChange,
    nextIndexRef
  }), [register2, unregister, subscribeMapChange, nextIndexRef]);
  return /* @__PURE__ */ _jsx9(CompositeListContext.Provider, {
    value: contextValue,
    children
  });
}
function createMap() {
  return /* @__PURE__ */ new Map();
}
function createListeners() {
  return /* @__PURE__ */ new Set();
}
function getCompositeListSnapshot(map) {
  const reservedIndices = /* @__PURE__ */ new Set();
  const items = [];
  const automaticItems = [];
  map.forEach((registration, node) => {
    if (!node.isConnected) {
      return;
    }
    const index2 = registration.index;
    const item = {
      index: index2 ?? -1,
      element: node,
      registration
    };
    if (index2 === null) {
      automaticItems.push(item);
    } else if (index2 >= 0) {
      reservedIndices.add(index2);
      items.push(item);
    }
  });
  let nextAutomaticIndex = 0;
  automaticItems.sort((a, b) => sortByDocumentPosition(a.element, b.element));
  automaticItems.forEach((item) => {
    while (reservedIndices.has(nextAutomaticIndex)) {
      nextAutomaticIndex += 1;
    }
    item.index = nextAutomaticIndex;
    items.push(item);
    nextAutomaticIndex += 1;
  });
  if (reservedIndices.size > 0) {
    items.sort((a, b) => a.index - b.index);
  }
  return [items, automaticItems.map((item) => item.element)];
}
function getCommonAncestor(firstNode, lastNode) {
  let ancestor = firstNode.parentElement;
  while (ancestor && !ancestor.contains(lastNode)) {
    ancestor = ancestor.parentElement;
  }
  return ancestor;
}
function hasMovedNode(entries) {
  for (const entry of entries) {
    for (let i = 0; i < entry.removedNodes.length; i += 1) {
      if (entry.removedNodes[i].isConnected) {
        return true;
      }
    }
  }
  return false;
}
function sortByDocumentPosition(a, b) {
  if (a.nextElementSibling === b) {
    return -1;
  }
  if (b.nextElementSibling === a) {
    return 1;
  }
  return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}

// node_modules/@base-ui/react/internals/useAnchorPositioning.mjs
import * as React59 from "react";

// node_modules/@base-ui/react/floating-ui-react/hooks/useFloating.mjs
import * as React57 from "react";
function useBaseUIFloating(options) {
  const {
    nodeId,
    externalTree,
    rootContext: store
  } = options;
  const referenceElement = store.useState("referenceElement");
  const floatingElement = store.useState("floatingElement");
  const domReferenceElement = store.useState("domReferenceElement");
  const open3 = store.useState("open");
  const floatingId = store.useState("floatingId");
  const [positionReference, setPositionReferenceRaw] = React57.useState(null);
  const domReferenceRef = React57.useRef(null);
  const tree = useFloatingTree(externalTree);
  const storeElements = React57.useMemo(() => ({
    reference: referenceElement,
    floating: floatingElement,
    domReference: domReferenceElement
  }), [referenceElement, floatingElement, domReferenceElement]);
  const position = useFloating({
    ...options,
    elements: {
      ...storeElements,
      ...positionReference && {
        reference: positionReference
      }
    }
  });
  const setPositionReference = React57.useCallback((node) => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      getClientRects: () => node.getClientRects(),
      contextElement: node
    } : node;
    setPositionReferenceRaw(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const refs = React57.useMemo(() => ({
    ...position.refs,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setPositionReference]);
  const elements = React57.useMemo(() => ({
    ...position.elements,
    domReference: domReferenceElement
  }), [position.elements, domReferenceElement]);
  const context = React57.useMemo(() => ({
    ...position,
    dataRef: store.context.dataRef,
    open: open3,
    onOpenChange: store.setOpen,
    events: store.context.events,
    floatingId,
    refs,
    elements,
    nodeId,
    rootStore: store
  }), [position, refs, elements, nodeId, store, open3, floatingId]);
  useIsoLayoutEffect(() => {
    if (domReferenceElement) {
      domReferenceRef.current = domReferenceElement;
    }
  }, [domReferenceElement]);
  useIsoLayoutEffect(() => {
    store.context.dataRef.current.floatingContext = context;
    const node = tree?.nodesRef.current.find((n) => n.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React57.useMemo(() => ({
    ...position,
    context,
    refs,
    elements,
    rootStore: store
  }), [position, refs, elements, context, store]);
}

// node_modules/@base-ui/react/internals/direction-context/DirectionContext.mjs
import * as React58 from "react";
var DirectionContext = /* @__PURE__ */ React58.createContext(void 0);
if (true) DirectionContext.displayName = "DirectionContext";
function useDirection() {
  const context = React58.useContext(DirectionContext);
  return context?.direction ?? "ltr";
}

// node_modules/@base-ui/react/floating-ui-react/middleware/arrow.mjs
var baseArrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform3,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform3.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const clientSize = elements.floating[clientProp] || rects.floating[length];
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = Math.min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = Math.min(paddingObject[maxProp], largestPossiblePadding);
    const min2 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset4 = clamp(min2, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < min2 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min2 ? center - min2 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset4,
        centerOffset: center - offset4 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var arrow4 = (options, deps) => {
  const {
    name,
    fn
  } = baseArrow(options);
  return {
    name,
    fn,
    options: [options, deps]
  };
};

// node_modules/@base-ui/react/utils/hideMiddleware.mjs
var hide4 = {
  name: "hide",
  async fn(state) {
    const {
      width,
      height,
      x,
      y
    } = state.rects.reference;
    const anchorHidden2 = width === 0 && height === 0 && x === 0 && y === 0;
    const overflow = await state.platform.detectOverflow(state, {
      elementContext: "reference"
    });
    const referenceHidden = overflow.top - height >= 0 || overflow.right - width >= 0 || overflow.bottom - height >= 0 || overflow.left - width >= 0;
    return {
      data: {
        referenceHidden: referenceHidden || anchorHidden2
      }
    };
  }
};

// node_modules/@base-ui/react/utils/adaptiveOriginConstants.mjs
var DEFAULT_SIDES = {
  sideX: "left",
  sideY: "top"
};

// node_modules/@base-ui/react/utils/CommonPositionerCssVars.mjs
var availableWidth = "--available-width";
var availableHeight = "--available-height";
var anchorWidth = "--anchor-width";
var anchorHeight = "--anchor-height";
var transformOrigin = "--transform-origin";

// node_modules/@base-ui/react/internals/useAnchorPositioning.mjs
var AVAILABLE_WIDTH_VAR = availableWidth;
var AVAILABLE_HEIGHT_VAR = availableHeight;
function getLogicalSide(sideParam, renderedSide, isRtl) {
  const isLogicalSideParam = sideParam === "inline-start" || sideParam === "inline-end";
  const logicalRight = isRtl ? "inline-start" : "inline-end";
  const logicalLeft = isRtl ? "inline-end" : "inline-start";
  return {
    top: "top",
    right: isLogicalSideParam ? logicalRight : "right",
    bottom: "bottom",
    left: isLogicalSideParam ? logicalLeft : "left"
  }[renderedSide];
}
function getOffsetData(state, sideParam, isRtl) {
  const {
    rects,
    placement
  } = state;
  const data = {
    side: getLogicalSide(sideParam, getSide(placement), isRtl),
    align: getAlignment(placement) || "center",
    anchor: {
      width: rects.reference.width,
      height: rects.reference.height
    },
    positioner: {
      width: rects.floating.width,
      height: rects.floating.height
    }
  };
  return data;
}
function useAnchorPositioning(params) {
  return useAnchorPositioningWithHook(params, useBaseUIFloating);
}
function useAnchorPositioningWithHook(params, useFloatingHook) {
  const {
    // Public parameters
    anchor,
    positionMethod = "absolute",
    side: sideParam = "bottom",
    sideOffset = 0,
    align = "center",
    alignOffset = 0,
    collisionBoundary,
    collisionPadding: collisionPaddingParam = 5,
    sticky = false,
    arrowPadding = 5,
    disableAnchorTracking = false,
    inline: inlineMiddleware,
    // Private parameters
    keepMounted = false,
    floatingRootContext,
    mounted,
    collisionAvoidance,
    shift: shift4,
    nodeId,
    adaptiveOrigin,
    lazyFlip = false,
    externalTree
  } = params;
  const collisionAvoidanceSide = collisionAvoidance.side || "flip";
  const collisionAvoidanceAlign = collisionAvoidance.align || "flip";
  const collisionAvoidanceFallbackAxisSide = collisionAvoidance.fallbackAxisSide || "end";
  const shiftCrossAxis = shift4?.crossAxis ?? false;
  const shiftRootBoundary = shift4?.rootBoundary;
  const anchorFn = typeof anchor === "function" ? anchor : void 0;
  const anchorFnCallback = useStableCallback(anchorFn);
  const anchorDep = anchorFn ? anchorFnCallback : anchor;
  const anchorValueRef = useValueAsRef(anchor);
  const mountedRef = useValueAsRef(mounted);
  const direction = useDirection();
  const isRtl = direction === "rtl";
  const [mountPlacement, setMountPlacement] = React59.useState(null);
  if (!mounted && mountPlacement !== null) {
    setMountPlacement(null);
  }
  const lockAlign = lazyFlip === "placement";
  const mountSide = mountPlacement ? getSide(mountPlacement) : null;
  const mountAlign = mountPlacement && lockAlign ? getAlignment(mountPlacement) || "center" : null;
  const side = mountSide || {
    top: "top",
    right: "right",
    bottom: "bottom",
    left: "left",
    "inline-end": isRtl ? "left" : "right",
    "inline-start": isRtl ? "right" : "left"
  }[sideParam];
  const placementAlign = mountAlign || align;
  const placement = placementAlign === "center" ? side : `${side}-${placementAlign}`;
  let collisionPadding = collisionPaddingParam;
  if (typeof collisionPadding === "number") {
    collisionPadding = {
      top: collisionPadding,
      right: collisionPadding,
      bottom: collisionPadding,
      left: collisionPadding
    };
  } else if (collisionPadding) {
    collisionPadding = {
      top: collisionPadding.top || 0,
      right: collisionPadding.right || 0,
      bottom: collisionPadding.bottom || 0,
      left: collisionPadding.left || 0
    };
  }
  const bias = 1;
  const biasTop = sideParam === "bottom" ? bias : 0;
  const biasBottom = sideParam === "top" ? bias : 0;
  const biasLeft = sideParam === "right" ? bias : 0;
  const biasRight = sideParam === "left" ? bias : 0;
  const commonCollisionProps = {
    boundary: collisionBoundary === "clipping-ancestors" ? "clippingAncestors" : collisionBoundary,
    padding: collisionPadding
  };
  const arrowRef = React59.useRef(null);
  const sideOffsetRef = useValueAsRef(sideOffset);
  const alignOffsetRef = useValueAsRef(alignOffset);
  const sideOffsetDep = typeof sideOffset !== "function" ? sideOffset : 0;
  const alignOffsetDep = typeof alignOffset !== "function" ? alignOffset : 0;
  const middleware = [];
  if (inlineMiddleware) {
    middleware.push(inlineMiddleware);
  }
  middleware.push(offset3((state) => {
    const data = getOffsetData(state, sideParam, isRtl);
    const sideAxis = typeof sideOffsetRef.current === "function" ? sideOffsetRef.current(data) : sideOffsetRef.current;
    const alignAxis = typeof alignOffsetRef.current === "function" ? alignOffsetRef.current(data) : alignOffsetRef.current;
    return {
      mainAxis: sideAxis,
      crossAxis: alignAxis,
      alignmentAxis: alignAxis
    };
  }, [sideOffsetDep, alignOffsetDep, isRtl, sideParam]));
  const shiftDisabled = collisionAvoidanceAlign === "none" && collisionAvoidanceSide !== "shift";
  const crossAxisShiftEnabled = !shiftDisabled && (sticky || shiftCrossAxis || collisionAvoidanceSide === "shift");
  const flipMiddleware = collisionAvoidanceSide === "none" ? null : flip3({
    ...commonCollisionProps,
    // Ensure the popup flips if it's been limited by its --available-height and it resizes.
    // Since the size() padding is smaller than the flip() padding, flip() will take precedence.
    padding: {
      top: collisionPadding.top + bias + biasTop,
      right: collisionPadding.right + bias + biasRight,
      bottom: collisionPadding.bottom + bias + biasBottom,
      left: collisionPadding.left + bias + biasLeft
    },
    mainAxis: !shiftCrossAxis && collisionAvoidanceSide === "flip",
    crossAxis: collisionAvoidanceAlign === "flip" ? "alignment" : false,
    fallbackAxisSideDirection: collisionAvoidanceFallbackAxisSide
  });
  const shiftMiddleware = shiftDisabled ? null : shift3({
    ...commonCollisionProps,
    // Use the Layout Viewport to avoid shifting around when pinch-zooming.
    rootBoundary: shiftRootBoundary,
    mainAxis: collisionAvoidanceAlign !== "none",
    crossAxis: crossAxisShiftEnabled,
    limiter: sticky || shiftCrossAxis ? void 0 : limitShift3((limitData) => {
      if (!arrowRef.current) {
        return {};
      }
      const {
        width,
        height
      } = arrowRef.current.getBoundingClientRect();
      const sideAxis = getSideAxis(getSide(limitData.placement));
      const arrowSize = sideAxis === "y" ? width : height;
      const offsetAmount = sideAxis === "y" ? collisionPadding.left + collisionPadding.right : collisionPadding.top + collisionPadding.bottom;
      return {
        offset: arrowSize / 2 + offsetAmount / 2
      };
    })
  }, [commonCollisionProps, sticky, shiftCrossAxis, shiftRootBoundary, collisionPadding, collisionAvoidanceAlign]);
  if (collisionAvoidanceSide === "shift" || collisionAvoidanceAlign === "shift" || placementAlign === "center") {
    middleware.push(shiftMiddleware, flipMiddleware);
  } else {
    middleware.push(flipMiddleware, shiftMiddleware);
  }
  middleware.push(size3({
    ...commonCollisionProps,
    apply({
      elements: {
        floating
      },
      availableWidth: availableWidth2,
      availableHeight: availableHeight2,
      rects
    }) {
      if (!mountedRef.current) {
        return;
      }
      const floatingStyle = floating.style;
      floatingStyle.setProperty(AVAILABLE_WIDTH_VAR, `${availableWidth2}px`);
      floatingStyle.setProperty(AVAILABLE_HEIGHT_VAR, `${availableHeight2}px`);
      const dpr = getWindow(floating).devicePixelRatio || 1;
      const {
        x: x2,
        y: y2,
        width,
        height
      } = rects.reference;
      const anchorWidth2 = (Math.round((x2 + width) * dpr) - Math.round(x2 * dpr)) / dpr;
      const anchorHeight2 = (Math.round((y2 + height) * dpr) - Math.round(y2 * dpr)) / dpr;
      floatingStyle.setProperty(anchorWidth, `${anchorWidth2}px`);
      floatingStyle.setProperty(anchorHeight, `${anchorHeight2}px`);
    }
  }), arrow4((state) => ({
    // `transform-origin` calculations rely on an element existing. If the arrow hasn't been set,
    // we'll create a fake element.
    element: arrowRef.current || ownerDocument(state.elements.floating).createElement("div"),
    // No padding for the fake arrow: it would displace aligned popups on narrow anchors.
    padding: arrowRef.current ? arrowPadding : 0
  }), [arrowPadding]), {
    name: "transformOrigin",
    fn(state) {
      const {
        elements: {
          floating
        },
        middlewareData: middlewareData2,
        placement: renderedPlacement2,
        platform: platform3,
        rects,
        y: y2
      } = state;
      const renderedSide2 = getSide(renderedPlacement2);
      const renderedAlign2 = getAlignment(renderedPlacement2);
      const isVertical = getSideAxis(renderedSide2) === "y";
      const arrowEl = arrowRef.current;
      const sideOffsetValue = typeof sideOffset === "function" ? sideOffset(getOffsetData(state, sideParam, isRtl)) : sideOffset;
      let crossOrigin;
      if (!arrowEl && renderedAlign2 && Math.abs(isVertical ? middlewareData2.shift?.x || 0 : middlewareData2.shift?.y || 0) <= 1) {
        crossOrigin = renderedAlign2 === "start" === (isVertical && platform3.isRTL?.(floating) === true) ? "100%" : "0%";
      } else {
        const arrowOffset = isVertical ? middlewareData2.arrow?.x || 0 : middlewareData2.arrow?.y || 0;
        const arrowSize = isVertical ? arrowEl?.clientWidth || 0 : arrowEl?.clientHeight || 0;
        crossOrigin = `${arrowOffset + arrowSize / 2}px`;
      }
      let sideOrigin = renderedSide2 === "top" || renderedSide2 === "left" ? `calc(100% + ${sideOffsetValue}px)` : `${-sideOffsetValue}px`;
      if (crossAxisShiftEnabled && isVertical && Math.abs(middlewareData2.shift?.y || 0) > sideOffsetValue) {
        sideOrigin = `${rects.reference.y + rects.reference.height / 2 - y2}px`;
      }
      floating.style.setProperty(transformOrigin, isVertical ? `${crossOrigin} ${sideOrigin}` : `${sideOrigin} ${crossOrigin}`);
      return {};
    }
  }, hide4, adaptiveOrigin);
  useIsoLayoutEffect(() => {
    if (!mounted && floatingRootContext) {
      floatingRootContext.update({
        referenceElement: null,
        floatingElement: null,
        domReferenceElement: null,
        positionReference: null
      });
    }
  }, [mounted, floatingRootContext]);
  const autoUpdateOptions = React59.useMemo(() => ({
    ancestorScroll: !disableAnchorTracking,
    elementResize: !disableAnchorTracking && typeof ResizeObserver !== "undefined",
    layoutShift: !disableAnchorTracking && typeof IntersectionObserver !== "undefined"
  }), [disableAnchorTracking]);
  const {
    refs,
    elements,
    x,
    y,
    middlewareData,
    update: update2,
    placement: renderedPlacement,
    context,
    isPositioned,
    floatingStyles: originalFloatingStyles
  } = useFloatingHook({
    rootContext: floatingRootContext,
    open: keepMounted ? mounted : void 0,
    placement,
    middleware,
    strategy: positionMethod,
    whileElementsMounted: keepMounted ? void 0 : (...args) => autoUpdate(...args, autoUpdateOptions),
    nodeId,
    externalTree
  });
  const {
    sideX,
    sideY
  } = middlewareData.adaptiveOrigin || DEFAULT_SIDES;
  const resolvedPosition = isPositioned ? positionMethod : "fixed";
  const floatingStyles = React59.useMemo(() => {
    let base;
    if (!isPositioned) {
      base = {
        position: resolvedPosition,
        top: 0,
        left: 0
      };
    } else if (adaptiveOrigin) {
      base = {
        position: resolvedPosition,
        [sideX]: x,
        [sideY]: y
      };
    } else {
      base = {
        ...originalFloatingStyles,
        position: resolvedPosition
      };
    }
    base[AVAILABLE_WIDTH_VAR] = "100vw";
    base[AVAILABLE_HEIGHT_VAR] = "100vh";
    if (!isPositioned) {
      base.opacity = 0;
    }
    return base;
  }, [adaptiveOrigin, resolvedPosition, sideX, x, sideY, y, originalFloatingStyles, isPositioned]);
  const registeredPositionReferenceRef = React59.useRef(null);
  useIsoLayoutEffect(() => {
    if (!mounted) {
      return;
    }
    const anchorValue = anchorValueRef.current;
    const resolvedAnchor = typeof anchorValue === "function" ? anchorValue() : anchorValue;
    const unwrappedElement = (isRef(resolvedAnchor) ? resolvedAnchor.current : resolvedAnchor) || null;
    const finalAnchor = unwrappedElement || null;
    if (finalAnchor !== registeredPositionReferenceRef.current) {
      refs.setPositionReference(finalAnchor);
      registeredPositionReferenceRef.current = finalAnchor;
    }
  }, [mounted, refs, anchorDep, anchorValueRef]);
  React59.useEffect(() => {
    if (!mounted) {
      return;
    }
    const anchorValue = anchorValueRef.current;
    if (typeof anchorValue === "function") {
      return;
    }
    if (isRef(anchorValue) && anchorValue.current !== registeredPositionReferenceRef.current) {
      refs.setPositionReference(anchorValue.current);
      registeredPositionReferenceRef.current = anchorValue.current;
    }
  }, [mounted, refs, anchorDep, anchorValueRef]);
  React59.useEffect(() => {
    if (keepMounted && mounted && elements.reference && elements.floating) {
      return autoUpdate(elements.reference, elements.floating, update2, autoUpdateOptions);
    }
    return void 0;
  }, [keepMounted, mounted, elements, update2, autoUpdateOptions]);
  const renderedSide = getSide(renderedPlacement);
  const logicalRenderedSide = getLogicalSide(sideParam, renderedSide, isRtl);
  const renderedAlign = getAlignment(renderedPlacement) || "center";
  const anchorHidden2 = Boolean(middlewareData.hide?.referenceHidden);
  useIsoLayoutEffect(() => {
    if (lazyFlip && mounted && isPositioned && (renderedSide !== side || lockAlign && renderedAlign !== placementAlign)) {
      setMountPlacement(renderedPlacement);
    }
  }, [lazyFlip, lockAlign, mounted, isPositioned, renderedPlacement, renderedSide, renderedAlign, side, placementAlign]);
  const arrowStyles = React59.useMemo(() => ({
    position: "absolute",
    top: middlewareData.arrow?.y,
    left: middlewareData.arrow?.x
  }), [middlewareData.arrow]);
  const arrowUncentered = middlewareData.arrow?.centerOffset !== 0;
  return React59.useMemo(() => ({
    positionerStyles: floatingStyles,
    arrowStyles,
    arrowRef,
    arrowUncentered,
    side: logicalRenderedSide,
    align: renderedAlign,
    physicalSide: renderedSide,
    anchorHidden: anchorHidden2,
    refs,
    context,
    isPositioned,
    update: update2
  }), [floatingStyles, arrowStyles, arrowRef, arrowUncentered, logicalRenderedSide, renderedAlign, renderedSide, anchorHidden2, refs, context, isPositioned, update2]);
}
function isRef(param) {
  return param != null && "current" in param;
}

// node_modules/@base-ui/react/select/positioner/SelectPositionerContext.mjs
import * as React60 from "react";
var SelectPositionerContext = /* @__PURE__ */ React60.createContext(void 0);
if (true) SelectPositionerContext.displayName = "SelectPositionerContext";
function useSelectPositionerContext() {
  const context = React60.useContext(SelectPositionerContext);
  if (!context) {
    throw new Error(true ? "Base UI: SelectPositionerContext is missing. SelectPositioner parts must be placed within <Select.Positioner>." : formatErrorMessage_default(59));
  }
  return context;
}

// node_modules/@base-ui/react/utils/InternalBackdrop.mjs
import * as React61 from "react";
import { jsx as _jsx10 } from "react/jsx-runtime";
var InternalBackdrop = /* @__PURE__ */ React61.forwardRef(function InternalBackdrop2(props, ref) {
  const {
    cutout,
    ...otherProps
  } = props;
  let clipPath;
  if (cutout) {
    const rect = cutout.getBoundingClientRect();
    clipPath = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${rect.left}px ${rect.top}px,${rect.left}px ${rect.bottom}px,${rect.right}px ${rect.bottom}px,${rect.right}px ${rect.top}px,${rect.left}px ${rect.top}px)`;
  }
  return /* @__PURE__ */ _jsx10("div", {
    ref,
    role: "presentation",
    "data-base-ui-inert": "",
    ...otherProps,
    style: {
      position: "fixed",
      inset: 0,
      userSelect: "none",
      WebkitUserSelect: "none",
      clipPath
    }
  });
});
if (true) InternalBackdrop.displayName = "InternalBackdrop";

// node_modules/@base-ui/react/select/popup/utils.mjs
function clearStyles(element, originalStyles) {
  if (element) {
    Object.assign(element.style, originalStyles);
  }
}
var LIST_FUNCTIONAL_STYLES = {
  position: "relative",
  maxHeight: "100%",
  overflowX: "hidden",
  overflowY: "auto"
};

// node_modules/@base-ui/react/internals/getDisabledMountTransitionStyles.mjs
function getDisabledMountTransitionStyles(transitionStatus) {
  return transitionStatus === "starting" ? DISABLED_TRANSITIONS_STYLE : EMPTY_OBJECT;
}

// node_modules/@base-ui/react/utils/usePositioner.mjs
function usePositioner(componentProps, state, {
  styles,
  transitionStatus,
  props,
  refs,
  hidden,
  inert = false
}) {
  const style = {
    ...styles
  };
  if (inert) {
    style.pointerEvents = "none";
  }
  return useRenderElement("div", componentProps, {
    state,
    ref: refs,
    props: [{
      role: "presentation",
      hidden,
      style
    }, getDisabledMountTransitionStyles(transitionStatus), props],
    stateAttributesMapping: popupStateMapping
  });
}

// node_modules/@base-ui/react/utils/useAnchoredPopupScrollLock.mjs
import * as React62 from "react";

// node_modules/@base-ui/utils/useScrollLock.mjs
var originalHtmlStyles = {};
var originalBodyStyles = {};
var originalHtmlScrollBehavior = "";
function getViewportScroller(html, body) {
  return isOverflowElement(html) ? html : body;
}
function isPageScrollLocked(win, html, body) {
  return /hidden|clip/.test(win.getComputedStyle(getViewportScroller(html, body)).overflowY);
}
function hasInsetScrollbars(referenceElement) {
  if (typeof document === "undefined") {
    return false;
  }
  const doc = ownerDocument(referenceElement);
  const win = getWindow(doc);
  return win.innerWidth - doc.documentElement.clientWidth > 0;
}
function supportsStableScrollbarGutter(referenceElement) {
  const supported = typeof CSS !== "undefined" && CSS.supports && CSS.supports("scrollbar-gutter", "stable");
  if (!supported || typeof document === "undefined") {
    return false;
  }
  const doc = ownerDocument(referenceElement);
  const html = doc.documentElement;
  const body = doc.body;
  const scrollContainer = getViewportScroller(html, body);
  const originalScrollContainerOverflowY = scrollContainer.style.overflowY;
  const originalHtmlStyleGutter = html.style.scrollbarGutter;
  html.style.scrollbarGutter = "stable";
  scrollContainer.style.overflowY = "scroll";
  const before = scrollContainer.offsetWidth;
  scrollContainer.style.overflowY = "hidden";
  const after = scrollContainer.offsetWidth;
  scrollContainer.style.overflowY = originalScrollContainerOverflowY;
  html.style.scrollbarGutter = originalHtmlStyleGutter;
  return before === after;
}
function preventScrollOverlayScrollbars(referenceElement) {
  const doc = ownerDocument(referenceElement);
  const html = doc.documentElement;
  const body = doc.body;
  const elementToLock = getViewportScroller(html, body);
  const originalElementToLockStyles = {
    overflowY: elementToLock.style.overflowY,
    overflowX: elementToLock.style.overflowX
  };
  Object.assign(elementToLock.style, {
    overflowY: "hidden",
    overflowX: "hidden"
  });
  return () => {
    Object.assign(elementToLock.style, originalElementToLockStyles);
  };
}
function preventScrollInsetScrollbars(referenceElement) {
  const doc = ownerDocument(referenceElement);
  const html = doc.documentElement;
  const body = doc.body;
  const win = getWindow(html);
  let scrollTop = 0;
  let scrollLeft = 0;
  let updateGutterOnly = false;
  const resizeFrame = AnimationFrame.create();
  if (parts_exports.engine.webkit && (win.visualViewport?.scale ?? 1) !== 1) {
    return () => {
    };
  }
  function lockScroll() {
    const htmlStyles = win.getComputedStyle(html);
    const bodyStyles = win.getComputedStyle(body);
    const htmlScrollbarGutterValue = htmlStyles.scrollbarGutter || "";
    const hasBothEdges = htmlScrollbarGutterValue.includes("both-edges");
    const scrollbarGutterValue = hasBothEdges ? "stable both-edges" : "stable";
    scrollTop = html.scrollTop;
    scrollLeft = html.scrollLeft;
    originalHtmlStyles = {
      scrollbarGutter: html.style.scrollbarGutter,
      overflowY: html.style.overflowY,
      overflowX: html.style.overflowX
    };
    originalHtmlScrollBehavior = html.style.scrollBehavior;
    originalBodyStyles = {
      position: body.style.position,
      height: body.style.height,
      width: body.style.width,
      boxSizing: body.style.boxSizing,
      overflowY: body.style.overflowY,
      overflowX: body.style.overflowX,
      scrollBehavior: body.style.scrollBehavior
    };
    const isScrollableY = html.scrollHeight > html.clientHeight;
    const isScrollableX = html.scrollWidth > html.clientWidth;
    const hasConstantOverflowY = htmlStyles.overflowY === "scroll" || bodyStyles.overflowY === "scroll";
    const hasConstantOverflowX = htmlStyles.overflowX === "scroll" || bodyStyles.overflowX === "scroll";
    const scrollbarWidth = Math.max(0, win.innerWidth - body.clientWidth);
    const scrollbarHeight = Math.max(0, win.innerHeight - body.clientHeight);
    const marginY = parseFloat(bodyStyles.marginTop) + parseFloat(bodyStyles.marginBottom);
    const marginX = parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight);
    const elementToLock = getViewportScroller(html, body);
    updateGutterOnly = supportsStableScrollbarGutter(referenceElement);
    if (updateGutterOnly) {
      html.style.scrollbarGutter = scrollbarGutterValue;
      elementToLock.style.overflowY = "hidden";
      elementToLock.style.overflowX = "hidden";
      return;
    }
    Object.assign(html.style, {
      scrollbarGutter: scrollbarGutterValue,
      overflowY: "hidden",
      overflowX: "hidden"
    });
    if (isScrollableY || hasConstantOverflowY) {
      html.style.overflowY = "scroll";
    }
    if (isScrollableX || hasConstantOverflowX) {
      html.style.overflowX = "scroll";
    }
    Object.assign(body.style, {
      position: "relative",
      height: marginY || scrollbarHeight ? `calc(100dvh - ${marginY + scrollbarHeight}px)` : "100dvh",
      width: marginX || scrollbarWidth ? `calc(100vw - ${marginX + scrollbarWidth}px)` : "100vw",
      boxSizing: "border-box",
      // Assign the longhands that `cleanup` restores, so nothing is left behind.
      overflowY: "hidden",
      overflowX: "hidden",
      scrollBehavior: "unset"
    });
    body.scrollTop = scrollTop;
    body.scrollLeft = scrollLeft;
    html.setAttribute("data-base-ui-scroll-locked", "");
    html.style.scrollBehavior = "unset";
  }
  function cleanup() {
    Object.assign(html.style, originalHtmlStyles);
    Object.assign(body.style, originalBodyStyles);
    if (!updateGutterOnly) {
      html.scrollTop = scrollTop;
      html.scrollLeft = scrollLeft;
      html.removeAttribute("data-base-ui-scroll-locked");
      html.style.scrollBehavior = originalHtmlScrollBehavior;
    }
  }
  function handleResize() {
    cleanup();
    resizeFrame.request(lockScroll);
  }
  lockScroll();
  const unsubscribeResize = addEventListener(win, "resize", handleResize);
  return () => {
    resizeFrame.cancel();
    cleanup();
    if (typeof win.removeEventListener === "function") {
      unsubscribeResize();
    }
  };
}
var ScrollLocker = class {
  lockCount = 0;
  restore = null;
  timeoutLock = Timeout.create();
  timeoutUnlock = Timeout.create();
  acquire(referenceElement) {
    this.lockCount += 1;
    if (this.lockCount === 1 && this.restore === null) {
      this.timeoutLock.start(0, () => this.lock(referenceElement));
    }
    return this.release;
  }
  release = () => {
    this.lockCount -= 1;
    if (this.lockCount === 0 && this.restore) {
      this.timeoutUnlock.start(0, this.unlock);
    }
  };
  unlock = () => {
    if (this.lockCount === 0 && this.restore) {
      this.restore?.();
      this.restore = null;
    }
  };
  lock(referenceElement) {
    if (this.lockCount === 0 || this.restore !== null) {
      return;
    }
    const doc = ownerDocument(referenceElement);
    const html = doc.documentElement;
    const body = doc.body;
    const win = getWindow(html);
    if (isPageScrollLocked(win, html, body)) {
      const observer = new win.MutationObserver(() => {
        if (isPageScrollLocked(win, html, body)) {
          return;
        }
        observer.disconnect();
        this.restore = null;
        this.lock(referenceElement);
      });
      const options = {
        attributes: true
      };
      observer.observe(html, options);
      observer.observe(body, options);
      this.restore = () => observer.disconnect();
      return;
    }
    const hasOverlayScrollbars = parts_exports.os.ios || !hasInsetScrollbars(referenceElement);
    this.restore = hasOverlayScrollbars ? preventScrollOverlayScrollbars(referenceElement) : preventScrollInsetScrollbars(referenceElement);
  }
};
var SCROLL_LOCKER = new ScrollLocker();
function useScrollLock(enabled = true, referenceElement = null) {
  useIsoLayoutEffect(() => {
    if (!enabled) {
      return void 0;
    }
    return SCROLL_LOCKER.acquire(referenceElement);
  }, [enabled, referenceElement]);
}

// node_modules/@base-ui/react/utils/useAnchoredPopupScrollLock.mjs
var VIEWPORT_WIDTH_TOLERANCE_PX = 20;
function useAnchoredPopupScrollLock(enabled, touchOpen, positionerElement, referenceElement) {
  const [touchOpenShouldLockScroll, setTouchOpenShouldLockScroll] = React62.useState(false);
  useIsoLayoutEffect(() => {
    if (!enabled || !touchOpen || positionerElement == null) {
      setTouchOpenShouldLockScroll(false);
      return;
    }
    const viewportWidth = ownerDocument(positionerElement).documentElement.clientWidth;
    const popupWidth = positionerElement.offsetWidth;
    setTouchOpenShouldLockScroll(viewportWidth > 0 && popupWidth > 0 && popupWidth >= viewportWidth - VIEWPORT_WIDTH_TOLERANCE_PX);
  }, [enabled, touchOpen, positionerElement]);
  useScrollLock(enabled && (!touchOpen || touchOpenShouldLockScroll), referenceElement);
}

// node_modules/@base-ui/react/select/positioner/SelectPositioner.mjs
import { jsx as _jsx11, jsxs as _jsxs4 } from "react/jsx-runtime";
var FIXED = {
  position: "fixed"
};
var SelectPositioner = /* @__PURE__ */ React63.forwardRef(function SelectPositioner2(componentProps, forwardedRef) {
  const {
    anchor,
    className,
    render: render2,
    // `useAnchorPositioning` applies the same defaults to the undefined values; the names
    // remain destructured to exclude the props from `elementProps`.
    positionMethod,
    side,
    align,
    sideOffset,
    alignOffset,
    collisionBoundary = "clipping-ancestors",
    collisionPadding,
    arrowPadding,
    sticky,
    disableAnchorTracking,
    alignItemWithTrigger = true,
    collisionAvoidance = DROPDOWN_COLLISION_AVOIDANCE,
    style,
    ...elementProps
  } = componentProps;
  const store = useSelectRootContext();
  const floatingRootContext = useSelectFloatingContext();
  const open3 = store.useState("open");
  const mounted = store.useState("mounted");
  const modal = store.useState("modal");
  const value = store.useState("value");
  const openMethod = store.useState("openMethod");
  const positionerElement = store.useState("positionerElement");
  const triggerElement = store.useState("triggerElement");
  const isItemEqualToValue = store.useState("isItemEqualToValue");
  const transitionStatus = store.useState("transitionStatus");
  const scrollUpArrowRef = React63.useRef(null);
  const scrollDownArrowRef = React63.useRef(null);
  const [controlledAlignItemWithTrigger, setControlledAlignItemWithTrigger] = React63.useState(alignItemWithTrigger);
  const alignItemWithTriggerActive = mounted && controlledAlignItemWithTrigger && openMethod !== "touch";
  if (!mounted && controlledAlignItemWithTrigger !== alignItemWithTrigger) {
    setControlledAlignItemWithTrigger(alignItemWithTrigger);
  }
  React63.useImperativeHandle(store.context.alignItemWithTriggerActiveRef, () => alignItemWithTriggerActive);
  useAnchoredPopupScrollLock((alignItemWithTriggerActive || modal) && open3, openMethod === "touch", positionerElement, triggerElement);
  const positioning = useAnchorPositioning({
    anchor,
    floatingRootContext,
    positionMethod,
    mounted,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    disableAnchorTracking: disableAnchorTracking ?? alignItemWithTriggerActive,
    collisionAvoidance,
    keepMounted: true
  });
  const renderedSide = alignItemWithTriggerActive ? "none" : positioning.side;
  const positionerStyles = alignItemWithTriggerActive ? FIXED : positioning.positionerStyles;
  const state = {
    open: open3,
    side: renderedSide,
    align: positioning.align,
    anchorHidden: positioning.anchorHidden
  };
  useIsoLayoutEffect(() => {
    store.set("popupSide", positioning.side);
  }, [store, positioning.side]);
  const setPositionerElement = store.useStateSetter("positionerElement");
  const element = usePositioner(componentProps, state, {
    styles: positionerStyles,
    transitionStatus,
    props: elementProps,
    refs: [forwardedRef, setPositionerElement],
    hidden: !mounted,
    inert: !open3
  });
  const prevMapSizeRef = React63.useRef(0);
  const onMapChange = useStableCallback((map) => {
    if (store.context.valuesRef.current.length === 0) {
      return;
    }
    const prevSize = prevMapSizeRef.current;
    prevMapSizeRef.current = map.size;
    const eventDetails = createChangeEventDetails(reason_parts_exports.none);
    if (prevSize !== 0 && !store.state.multiple && value !== null) {
      const selectedValueIndex = findItemIndex(store.context.valuesRef.current, value, isItemEqualToValue);
      if (selectedValueIndex === -1) {
        const initialSelectedValue = store.context.initialValueRef.current;
        const hasInitial = initialSelectedValue != null && findItemIndex(store.context.valuesRef.current, initialSelectedValue, isItemEqualToValue) !== -1;
        const nextValue = hasInitial ? initialSelectedValue : null;
        store.context.setValue(nextValue, eventDetails);
        if (nextValue === null) {
          store.set("selectedIndex", null);
          store.context.selectedItemTextRef.current = null;
        }
      }
    }
    if (prevSize !== 0 && store.state.multiple && Array.isArray(value)) {
      const nextValue = value.filter((selectedItemValue) => findItemIndex(store.context.valuesRef.current, selectedItemValue, isItemEqualToValue) !== -1);
      if (nextValue.length !== value.length) {
        store.context.setValue(nextValue, eventDetails);
        if (nextValue.length === 0) {
          store.set("selectedIndex", null);
          store.context.selectedItemTextRef.current = null;
        }
      }
    }
    if (open3 && alignItemWithTriggerActive) {
      store.update({
        scrollUpArrowVisible: false,
        scrollDownArrowVisible: false
      });
      const stylesToClear = {
        height: ""
      };
      clearStyles(positionerElement, stylesToClear);
      clearStyles(store.context.popupRef.current, stylesToClear);
    }
  });
  const contextValue = React63.useMemo(() => ({
    ...positioning,
    side: renderedSide,
    alignItemWithTriggerActive,
    setControlledAlignItemWithTrigger,
    scrollUpArrowRef,
    scrollDownArrowRef
  }), [positioning, renderedSide, alignItemWithTriggerActive, setControlledAlignItemWithTrigger]);
  return /* @__PURE__ */ _jsx11(CompositeList, {
    elementsRef: store.context.listRef,
    labelsRef: store.context.labelsRef,
    onMapChange,
    children: /* @__PURE__ */ _jsxs4(SelectPositionerContext.Provider, {
      value: contextValue,
      children: [mounted && modal && /* @__PURE__ */ _jsx11(InternalBackdrop, {
        inert: inertValue(!open3),
        cutout: triggerElement
      }), element]
    })
  });
});
if (true) SelectPositioner.displayName = "SelectPositioner";

// node_modules/@base-ui/react/select/popup/SelectPopup.mjs
import * as React66 from "react";

// node_modules/@base-ui/react/utils/styles.mjs
import { jsx as _jsx12 } from "react/jsx-runtime";
var DISABLE_SCROLLBAR_CLASS_NAME = "base-ui-disable-scrollbar";
var styleDisableScrollbar = {
  className: DISABLE_SCROLLBAR_CLASS_NAME,
  getElement(nonce) {
    return /* @__PURE__ */ _jsx12("style", {
      nonce,
      href: DISABLE_SCROLLBAR_CLASS_NAME,
      precedence: "base-ui:low",
      children: `.${DISABLE_SCROLLBAR_CLASS_NAME}{scrollbar-width:none}.${DISABLE_SCROLLBAR_CLASS_NAME}::-webkit-scrollbar{display:none}`
    });
  }
};
if (true) styleDisableScrollbar.getElement.displayName = "styleDisableScrollbar.getElement";

// node_modules/@base-ui/react/toolbar/root/ToolbarRootContext.mjs
import * as React64 from "react";
var ToolbarRootContext = /* @__PURE__ */ React64.createContext(void 0);
if (true) ToolbarRootContext.displayName = "ToolbarRootContext";
function useToolbarRootContext(optional) {
  const context = React64.useContext(ToolbarRootContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: ToolbarRootContext is missing. Toolbar parts must be placed within <Toolbar.Root>." : formatErrorMessage_default(69));
  }
  return context;
}

// node_modules/@base-ui/react/internals/composite/composite.mjs
var ARROW_UP2 = "ArrowUp";
var ARROW_DOWN2 = "ArrowDown";
var ARROW_LEFT2 = "ArrowLeft";
var ARROW_RIGHT2 = "ArrowRight";
var HOME = "Home";
var END = "End";
var COMPOSITE_KEYS = /* @__PURE__ */ new Set([ARROW_UP2, ARROW_DOWN2, ARROW_LEFT2, ARROW_RIGHT2, HOME, END]);

// node_modules/@base-ui/react/internals/csp-context/CSPContext.mjs
import * as React65 from "react";
var CSPContext = /* @__PURE__ */ React65.createContext(void 0);
if (true) CSPContext.displayName = "CSPContext";
var DEFAULT_CSP_CONTEXT_VALUE = {
  disableStyleElements: false
};
function useCSPContext() {
  return React65.useContext(CSPContext) ?? DEFAULT_CSP_CONTEXT_VALUE;
}

// node_modules/@base-ui/react/select/positioner/SelectPositionerCssVars.mjs
var transformOrigin2 = "--transform-origin";

// node_modules/@base-ui/react/select/popup/SelectPopup.mjs
import { jsx as _jsx13, jsxs as _jsxs5 } from "react/jsx-runtime";
var stateAttributesMapping5 = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var SelectPopup = /* @__PURE__ */ React66.forwardRef(function SelectPopup2(componentProps, forwardedRef) {
  const {
    render: render2,
    className,
    style,
    finalFocus,
    ...elementProps
  } = componentProps;
  const store = useSelectRootContext();
  const multiple = store.useState("multiple");
  const readOnly = store.useState("readOnly");
  const highlightItemOnHover = store.useState("highlightItemOnHover");
  const floatingRootContext = useSelectFloatingContext();
  const {
    side,
    align,
    alignItemWithTriggerActive,
    isPositioned,
    setControlledAlignItemWithTrigger
  } = useSelectPositionerContext();
  const insideToolbar = useToolbarRootContext(true) != null;
  const direction = useDirection();
  const {
    nonce,
    disableStyleElements
  } = useCSPContext();
  const id = store.useState("id");
  const open3 = store.useState("open");
  const openMethod = store.useState("openMethod");
  const mounted = store.useState("mounted");
  const popupProps = store.useState("popupProps");
  const transitionStatus = store.useState("transitionStatus");
  const triggerElement = store.useState("triggerElement");
  const positionerElement = store.useState("positionerElement");
  const listElement = store.useState("listElement");
  const reachedMaxHeightRef = React66.useRef(false);
  const initialPlacedRef = React66.useRef(false);
  const originalPositionerStylesRef = React66.useRef({});
  const scrollArrowFrame = useAnimationFrame();
  const handleScroll = useStableCallback((scroller) => {
    if (!positionerElement || !store.context.popupRef.current || !initialPlacedRef.current) {
      return;
    }
    const isTopPositioned = positionerElement.style.top === "0px";
    const isBottomPositioned = positionerElement.style.bottom === "0px";
    if (reachedMaxHeightRef.current || !alignItemWithTriggerActive || !isTopPositioned && !isBottomPositioned) {
      store.context.handleScrollArrowVisibility(scroller);
      return;
    }
    const scale = getScale2(positionerElement);
    const currentHeight = normalizeSize(positionerElement.getBoundingClientRect().height, "y", scale);
    const doc = ownerDocument(positionerElement);
    const win = getWindow(positionerElement);
    const positionerStyles = win.getComputedStyle(positionerElement);
    const marginTop = parseFloat(positionerStyles.marginTop);
    const marginBottom = parseFloat(positionerStyles.marginBottom);
    const maxPopupHeight = getMaxPopupHeight(win.getComputedStyle(store.context.popupRef.current));
    const maxAvailableHeight = Math.min(doc.documentElement.clientHeight - marginTop - marginBottom, maxPopupHeight);
    const scrollTop = scroller.scrollTop;
    const maxScrollTop = getMaxScrollTop(scroller);
    let nextScrollTop = null;
    const setHeight = (height) => {
      positionerElement.style.height = `${height}px`;
    };
    const diff = isTopPositioned ? maxScrollTop - scrollTop : scrollTop;
    const nextHeight = Math.min(currentHeight + diff, maxAvailableHeight);
    if (diff <= SCROLL_EDGE_TOLERANCE_PX) {
      const heightDelta = clamp2(diff, 0, maxAvailableHeight - currentHeight);
      if (heightDelta > 0) {
        setHeight(currentHeight + heightDelta);
      }
      scroller.scrollTop = isTopPositioned ? maxScrollTop : 0;
      if (maxAvailableHeight - (currentHeight + heightDelta) <= SCROLL_EDGE_TOLERANCE_PX) {
        reachedMaxHeightRef.current = true;
      }
      store.context.handleScrollArrowVisibility(scroller);
      return;
    }
    if (maxAvailableHeight - nextHeight > SCROLL_EDGE_TOLERANCE_PX) {
      nextScrollTop = isTopPositioned ? Infinity : 0;
    } else if (isBottomPositioned && scrollTop < maxScrollTop) {
      const overshoot = currentHeight + diff - maxAvailableHeight;
      nextScrollTop = scrollTop - (diff - overshoot);
    }
    const nextPositionerHeight = Math.ceil(nextHeight);
    if (nextPositionerHeight !== 0) {
      setHeight(nextPositionerHeight);
    }
    if (nextScrollTop != null) {
      const target = clamp2(nextScrollTop, 0, getMaxScrollTop(scroller));
      if (Math.abs(scroller.scrollTop - target) > SCROLL_EDGE_TOLERANCE_PX) {
        scroller.scrollTop = target;
      }
    }
    if (nextPositionerHeight >= maxAvailableHeight - SCROLL_EDGE_TOLERANCE_PX) {
      reachedMaxHeightRef.current = true;
    }
    store.context.handleScrollArrowVisibility(scroller);
  });
  React66.useImperativeHandle(store.context.scrollHandlerRef, () => handleScroll, [handleScroll]);
  useOpenChangeComplete({
    open: open3,
    ref: store.context.popupRef,
    onComplete() {
      if (open3) {
        store.context.onOpenChangeComplete(true);
      }
    }
  });
  const state = {
    open: open3,
    transitionStatus,
    side,
    align
  };
  useIsoLayoutEffect(() => {
    if (!positionerElement || !store.context.popupRef.current || Object.keys(originalPositionerStylesRef.current).length) {
      return;
    }
    originalPositionerStylesRef.current = {
      top: positionerElement.style.top || "0",
      left: positionerElement.style.left || "0",
      right: positionerElement.style.right,
      height: positionerElement.style.height,
      bottom: positionerElement.style.bottom,
      minHeight: positionerElement.style.minHeight,
      maxHeight: positionerElement.style.maxHeight,
      marginTop: positionerElement.style.marginTop,
      marginBottom: positionerElement.style.marginBottom
    };
  }, [store, positionerElement]);
  useIsoLayoutEffect(() => {
    if (open3 || alignItemWithTriggerActive) {
      return;
    }
    initialPlacedRef.current = false;
    reachedMaxHeightRef.current = false;
    clearStyles(positionerElement, originalPositionerStylesRef.current);
  }, [open3, alignItemWithTriggerActive, positionerElement]);
  useIsoLayoutEffect(() => {
    const popupElement = store.context.popupRef.current;
    if (!open3 || !triggerElement || !positionerElement || !popupElement || alignItemWithTriggerActive && !isPositioned || store.state.transitionStatus === "ending") {
      return;
    }
    initialPlacedRef.current = true;
    popupElement.style.removeProperty(transformOrigin2);
    if (!alignItemWithTriggerActive) {
      scrollArrowFrame.request(() => store.context.handleScrollArrowVisibility(listElement || popupElement));
      return;
    }
    const restoreTransformStyles = unsetTransformStyles(popupElement);
    try {
      let textElement = store.context.selectedItemTextRef.current;
      if (!textElement?.isConnected) {
        const hasSelectedValue = store.select("hasSelectedValue");
        textElement = !hasSelectedValue && store.context.firstItemTextRef.current?.isConnected ? store.context.firstItemTextRef.current : null;
      }
      const valueElement = store.context.valueRef.current;
      const win = getWindow(positionerElement);
      const positionerStyles = win.getComputedStyle(positionerElement);
      const popupStyles = win.getComputedStyle(popupElement);
      const doc = ownerDocument(triggerElement);
      const scale = getScale2(triggerElement);
      const triggerRect = normalizeRect(triggerElement.getBoundingClientRect(), scale);
      const positionerRect = normalizeRect(positionerElement.getBoundingClientRect(), scale);
      const triggerHeight = triggerRect.height;
      const scroller = listElement || popupElement;
      const scrollHeight = scroller.scrollHeight;
      const borderBottom = parseFloat(popupStyles.borderBottomWidth);
      const marginTop = parseFloat(positionerStyles.marginTop) || 10;
      const marginBottom = parseFloat(positionerStyles.marginBottom) || 10;
      const minHeight = parseFloat(positionerStyles.minHeight) || 100;
      const maxPopupHeight = getMaxPopupHeight(popupStyles);
      const paddingLeft = 5;
      const paddingRight = 5;
      const triggerCollisionThreshold = 20;
      const viewportHeight = doc.documentElement.clientHeight - marginTop - marginBottom;
      const viewportWidth = doc.documentElement.clientWidth;
      const availableSpaceBeneathTrigger = viewportHeight - triggerRect.bottom + triggerHeight;
      let textRect;
      let alignedLeft = direction === "rtl" ? triggerRect.right - positionerRect.width : triggerRect.left;
      let offsetY = 0;
      if (textElement && valueElement) {
        const valueRect = normalizeRect(valueElement.getBoundingClientRect(), scale);
        textRect = normalizeRect(textElement.getBoundingClientRect(), scale);
        alignedLeft = positionerRect.left + (direction === "rtl" ? valueRect.right - textRect.right : valueRect.left - textRect.left);
        const valueCenterFromTriggerTop = valueRect.top - triggerRect.top + valueRect.height / 2;
        const textCenterFromPositionerTop = textRect.top - positionerRect.top + textRect.height / 2;
        offsetY = textCenterFromPositionerTop - valueCenterFromTriggerTop;
      }
      const idealHeight = availableSpaceBeneathTrigger + offsetY + marginBottom + borderBottom;
      let height = Math.min(viewportHeight, idealHeight);
      const maxHeight = viewportHeight - marginTop - marginBottom;
      const scrollTop = idealHeight - height;
      const maxRight = viewportWidth - paddingRight;
      positionerElement.style.left = `${clamp2(alignedLeft, paddingLeft, maxRight - positionerRect.width)}px`;
      positionerElement.style.height = `${height}px`;
      positionerElement.style.maxHeight = "none";
      positionerElement.style.marginTop = `${marginTop}px`;
      positionerElement.style.marginBottom = `${marginBottom}px`;
      popupElement.style.height = "100%";
      const maxScrollTop = getMaxScrollTop(scroller);
      const isTopPositioned = scrollTop >= maxScrollTop - SCROLL_EDGE_TOLERANCE_PX;
      if (isTopPositioned) {
        height = Math.min(viewportHeight, positionerRect.height) - (scrollTop - maxScrollTop);
      }
      const fallbackToAlignPopupToTrigger = triggerRect.top < triggerCollisionThreshold || triggerRect.bottom > viewportHeight - triggerCollisionThreshold || Math.ceil(height) + SCROLL_EDGE_TOLERANCE_PX < Math.min(scrollHeight, minHeight);
      const isPinchZoomed = (win.visualViewport?.scale ?? 1) !== 1 && parts_exports.engine.webkit;
      if (fallbackToAlignPopupToTrigger || isPinchZoomed) {
        clearStyles(positionerElement, originalPositionerStylesRef.current);
        setControlledAlignItemWithTrigger(false);
        return;
      }
      const initialHeight = Math.max(minHeight, height);
      if (isTopPositioned) {
        const topOffset = Math.max(0, viewportHeight - idealHeight);
        positionerElement.style.top = positionerRect.height >= maxHeight ? "0" : `${topOffset}px`;
        positionerElement.style.height = `${height}px`;
        scroller.scrollTop = getMaxScrollTop(scroller);
      } else {
        positionerElement.style.bottom = "0";
        scroller.scrollTop = scrollTop;
      }
      if (textRect) {
        const popupTop = positionerRect.top;
        const popupHeight = positionerRect.height;
        const textCenterY = textRect.top + textRect.height / 2;
        const clampedY = clamp2(popupHeight > 0 ? (textCenterY - popupTop) / popupHeight * 100 : 50, 0, 100);
        popupElement.style.setProperty(transformOrigin2, `50% ${clampedY}%`);
      }
      if (initialHeight === viewportHeight || height >= maxPopupHeight) {
        reachedMaxHeightRef.current = true;
      }
      store.context.handleScrollArrowVisibility(scroller);
      if (highlightItemOnHover && store.state.selectedIndex === null && store.state.activeIndex === null && store.context.listRef.current[0] != null) {
        store.set("activeIndex", 0);
      }
    } finally {
      restoreTransformStyles();
    }
  }, [store, open3, positionerElement, triggerElement, alignItemWithTriggerActive, setControlledAlignItemWithTrigger, scrollArrowFrame, listElement, highlightItemOnHover, direction, isPositioned]);
  React66.useEffect(() => {
    if (!alignItemWithTriggerActive || !positionerElement || !open3) {
      return void 0;
    }
    const win = getWindow(positionerElement);
    function handleResize(event) {
      store.context.setOpen(false, createChangeEventDetails(reason_parts_exports.windowResize, event));
    }
    return addEventListener(win, "resize", handleResize);
  }, [store, alignItemWithTriggerActive, positionerElement, open3]);
  const defaultProps = {
    ...listElement ? {
      role: "presentation"
    } : {
      role: "listbox",
      "aria-multiselectable": multiple || void 0,
      "aria-readonly": readOnly || void 0,
      id: `${id}-list`
    },
    onKeyDown(event) {
      if (insideToolbar && COMPOSITE_KEYS.has(event.key)) {
        event.stopPropagation();
      }
    },
    onScroll(event) {
      if (listElement) {
        return;
      }
      handleScroll(event.currentTarget);
    },
    ...alignItemWithTriggerActive && {
      style: listElement ? {
        height: "100%"
      } : LIST_FUNCTIONAL_STYLES
    },
    className: !listElement && alignItemWithTriggerActive ? styleDisableScrollbar.className : void 0
  };
  const element = useRenderElement("div", componentProps, {
    ref: [forwardedRef, store.context.popupRef],
    state,
    stateAttributesMapping: stateAttributesMapping5,
    props: [popupProps, defaultProps, getDisabledMountTransitionStyles(transitionStatus), elementProps]
  });
  return /* @__PURE__ */ _jsxs5(React66.Fragment, {
    children: [!disableStyleElements && styleDisableScrollbar.getElement(nonce), /* @__PURE__ */ _jsx13(FloatingFocusManager, {
      context: floatingRootContext,
      modal: false,
      disabled: !mounted,
      openInteractionType: openMethod,
      returnFocus: finalFocus,
      restoreFocus: true,
      children: element
    })]
  });
});
if (true) SelectPopup.displayName = "SelectPopup";
function getMaxPopupHeight(popupStyles) {
  const maxHeightStyle = popupStyles.maxHeight;
  return maxHeightStyle.endsWith("px") ? parseFloat(maxHeightStyle) || Infinity : Infinity;
}
function getMaxScrollTop(scroller) {
  return getMaxScrollOffset(scroller.scrollHeight, scroller.clientHeight);
}
function getScale2(element) {
  return platform2.getScale(element);
}
function normalizeSize(size4, axis, scale) {
  return size4 / scale[axis];
}
function normalizeRect(rect, scale) {
  return rectToClientRect({
    x: normalizeSize(rect.x, "x", scale),
    y: normalizeSize(rect.y, "y", scale),
    width: normalizeSize(rect.width, "x", scale),
    height: normalizeSize(rect.height, "y", scale)
  });
}
var TRANSFORM_STYLE_RESETS = [["transform", "none"], ["scale", "1"], ["translate", "0 0"]];
function unsetTransformStyles(popupElement) {
  const {
    style
  } = popupElement;
  const originalStyles = {};
  for (const [property, value] of TRANSFORM_STYLE_RESETS) {
    originalStyles[property] = style.getPropertyValue(property);
    style.setProperty(property, value, "important");
  }
  return () => {
    for (const [property] of TRANSFORM_STYLE_RESETS) {
      const originalValue = originalStyles[property];
      if (originalValue) {
        style.setProperty(property, originalValue);
      } else {
        style.removeProperty(property);
      }
    }
  };
}

// node_modules/@base-ui/react/select/list/SelectList.mjs
import * as React67 from "react";
var SelectList = /* @__PURE__ */ React67.forwardRef(function SelectList2(componentProps, forwardedRef) {
  const {
    render: render2,
    className,
    style,
    ...elementProps
  } = componentProps;
  const store = useSelectRootContext();
  const multiple = store.useState("multiple");
  const readOnly = store.useState("readOnly");
  const {
    alignItemWithTriggerActive
  } = useSelectPositionerContext();
  const hasScrollArrows = store.useState("hasScrollArrows");
  const openMethod = store.useState("openMethod");
  const id = store.useState("id");
  const defaultProps = {
    id: `${id}-list`,
    role: "listbox",
    "aria-multiselectable": multiple || void 0,
    "aria-readonly": readOnly || void 0,
    onScroll(event) {
      store.context.scrollHandlerRef.current?.(event.currentTarget);
    },
    ...alignItemWithTriggerActive && {
      style: LIST_FUNCTIONAL_STYLES
    },
    className: hasScrollArrows && openMethod !== "touch" ? styleDisableScrollbar.className : void 0
  };
  const setListElement = store.useStateSetter("listElement");
  return useRenderElement("div", componentProps, {
    ref: [forwardedRef, setListElement],
    props: [defaultProps, elementProps]
  });
});
if (true) SelectList.displayName = "SelectList";

// node_modules/@base-ui/react/select/item/SelectItem.mjs
import * as React70 from "react";

// node_modules/@base-ui/react/internals/composite/list/useCompositeListItem.mjs
import * as React68 from "react";
function useCompositeListItem(params = {}) {
  const {
    guess,
    label,
    metadata,
    textRef,
    index: externalIndex
  } = params;
  const {
    register: register2,
    unregister,
    subscribeMapChange,
    nextIndexRef
  } = useCompositeListContext();
  const indexRef = React68.useRef(-1);
  const [internalIndex, setInternalIndex] = React68.useState(externalIndex == null && guess ? () => {
    if (indexRef.current === -1) {
      const newIndex = nextIndexRef.current;
      nextIndexRef.current += 1;
      indexRef.current = newIndex;
    }
    return indexRef.current;
  } : -1);
  const index2 = externalIndex ?? internalIndex;
  const componentRef = React68.useRef(null);
  const ref = React68.useCallback((node) => {
    const previousNode = componentRef.current;
    if (previousNode) {
      unregister(previousNode);
    }
    componentRef.current = node;
    if (node) {
      register2(node, {
        metadata: metadata ?? null,
        index: externalIndex ?? null,
        label,
        textRef
      });
    }
  }, [externalIndex, register2, unregister, metadata, label, textRef]);
  useIsoLayoutEffect(() => {
    if (externalIndex != null) {
      return void 0;
    }
    return subscribeMapChange((map) => {
      const i = componentRef.current ? map.get(componentRef.current)?.index : null;
      if (i != null) {
        setInternalIndex(i);
      }
    });
  }, [externalIndex, subscribeMapChange]);
  return {
    ref,
    index: index2
  };
}

// node_modules/@base-ui/react/select/item/SelectItemContext.mjs
import * as React69 from "react";
var SelectItemContext = /* @__PURE__ */ React69.createContext(void 0);
if (true) SelectItemContext.displayName = "SelectItemContext";
function useSelectItemContext() {
  const context = React69.useContext(SelectItemContext);
  if (!context) {
    throw new Error(true ? "Base UI: SelectItemContext is missing. SelectItem parts must be placed within <Select.Item>." : formatErrorMessage_default(57));
  }
  return context;
}

// node_modules/@base-ui/react/select/item/SelectItem.mjs
import { jsx as _jsx14 } from "react/jsx-runtime";
var SelectItem = /* @__PURE__ */ React70.memo(/* @__PURE__ */ React70.forwardRef(function SelectItem2(componentProps, forwardedRef) {
  const {
    render: render2,
    className,
    style,
    value: itemValue = null,
    label,
    disabled: disabledProp = false,
    nativeButton = false,
    ...elementProps
  } = componentProps;
  const textRef = React70.useRef(null);
  const listItem = useCompositeListItem({
    guess: true,
    label,
    textRef
  });
  const store = useSelectRootContext();
  const {
    props: itemProps,
    multiple,
    disabled: selectDisabled,
    readOnly,
    isItemEqualToValue
  } = store.useState("itemRoot");
  const disabled2 = selectDisabled || disabledProp;
  const highlighted = store.useState("isActive", listItem.index);
  const open3 = store.useState("open");
  const selected = store.useState("isSelected", itemValue);
  const selectedByFocus = store.useState("isSelectedByFocus", listItem.index);
  const index2 = listItem.index;
  const itemRef = React70.useRef(null);
  useIsoLayoutEffect(() => {
    const values = store.context.valuesRef.current;
    values[index2] = itemValue;
    return () => {
      delete values[index2];
    };
  }, [index2, itemValue, store]);
  useIsoLayoutEffect(() => {
    const selectedValue = store.state.value;
    const currentIndex = store.state.selectedIndex;
    let nextIndex = currentIndex;
    let claims;
    if (multiple && Array.isArray(selectedValue)) {
      nextIndex = resolveSelectedIndex(index2, itemValue, store.context.valuesRef.current, selectedValue, isItemEqualToValue, currentIndex);
      claims = nextIndex === index2;
      if (index2 === currentIndex && !claims) {
        store.context.selectedItemTextRef.current = null;
      }
    } else {
      claims = selectedValue !== void 0 && compareItemEquality(itemValue, selectedValue, isItemEqualToValue);
      if (claims) {
        nextIndex = index2;
      }
    }
    store.set("selectedIndex", nextIndex);
    if (claims && textRef.current) {
      store.context.selectedItemTextRef.current = textRef.current;
    }
  }, [index2, multiple, isItemEqualToValue, store, itemValue]);
  const pointerTypeRef = React70.useRef("mouse");
  const allowMouseSelectionRef = React70.useRef(false);
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled: disabled2,
    focusableWhenDisabled: true,
    native: nativeButton,
    composite: true
  });
  const state = {
    disabled: disabled2,
    selected,
    highlighted
  };
  function commitSelection(event) {
    if (selectDisabled || readOnly) {
      return;
    }
    const selectedValue = store.state.value;
    if (multiple) {
      const currentValue = Array.isArray(selectedValue) ? selectedValue : [];
      const nextValue = selected ? removeItem(currentValue, itemValue, isItemEqualToValue) : [...currentValue, itemValue];
      store.context.setValue(nextValue, createChangeEventDetails(reason_parts_exports.itemPress, event));
    } else {
      store.context.setValue(itemValue, createChangeEventDetails(reason_parts_exports.itemPress, event));
      store.context.setOpen(false, createChangeEventDetails(reason_parts_exports.itemPress, event));
    }
  }
  function resetDragMovement() {
    store.context.selectionRef.current.dragY = 0;
  }
  const defaultProps = {
    role: "option",
    "aria-selected": selected,
    tabIndex: open3 && highlighted ? 0 : -1,
    onKeyDown(event) {
      store.set("activeIndex", index2);
      if (event.key === " " && store.context.typingRef.current) {
        event.preventDefault();
      }
    },
    onClick(event) {
      const isMouseClick = pointerTypeRef.current !== "touch";
      const clickPointerType = event.nativeEvent.pointerType;
      const isVirtualMouseClick = isMouseClick && isVirtualClick(event.nativeEvent) && // Generic no-pointer `detail === 0` clicks stay tied to highlight state. Virtual
      // clicks that carry browser pointer data, including an empty string from assistive
      // technology, can activate unhighlighted items.
      (clickPointerType !== void 0 || highlighted);
      const isInvalidMouseClick = isMouseClick && !isVirtualMouseClick && !allowMouseSelectionRef.current;
      allowMouseSelectionRef.current = false;
      if (disabled2 || isInvalidMouseClick) {
        return;
      }
      commitSelection(event.nativeEvent);
    },
    onPointerEnter(event) {
      pointerTypeRef.current = event.pointerType;
    },
    onPointerMove(event) {
      if (event.pointerType === "mouse" && event.buttons === 1) {
        const selection = store.context.selectionRef.current;
        selection.dragY += event.movementY;
        if (selection.dragY ** 2 >= 64) {
          selection.allowUnselectedMouseUp = true;
        }
      }
    },
    onPointerDown(event) {
      pointerTypeRef.current = event.pointerType;
      allowMouseSelectionRef.current = true;
      resetDragMovement();
    },
    onMouseUp() {
      resetDragMovement();
      if (disabled2 || pointerTypeRef.current === "touch") {
        return;
      }
      if (allowMouseSelectionRef.current) {
        return;
      }
      const disallowSelectedMouseUp = !store.context.selectionRef.current.allowSelectedMouseUp && selected;
      const disallowUnselectedMouseUp = !store.context.selectionRef.current.allowUnselectedMouseUp && !selected;
      if (disallowSelectedMouseUp || disallowUnselectedMouseUp) {
        return;
      }
      allowMouseSelectionRef.current = true;
      itemRef.current?.click();
      allowMouseSelectionRef.current = false;
    }
  };
  const element = useRenderElement("div", componentProps, {
    ref: [buttonRef, forwardedRef, listItem.ref, itemRef],
    state,
    props: [itemProps, defaultProps, elementProps, getButtonProps]
  });
  const contextValue = React70.useMemo(() => ({
    selected,
    index: index2,
    textRef,
    selectedByFocus
  }), [selected, index2, textRef, selectedByFocus]);
  return /* @__PURE__ */ _jsx14(SelectItemContext.Provider, {
    value: contextValue,
    children: element
  });
}));
if (true) SelectItem.displayName = "SelectItem";

// node_modules/@base-ui/react/select/item-indicator/SelectItemIndicator.mjs
import * as React72 from "react";

// node_modules/@base-ui/react/utils/ItemIndicator.mjs
import * as React71 from "react";
var ItemIndicator = /* @__PURE__ */ React71.memo(/* @__PURE__ */ React71.forwardRef(function ItemIndicator2(componentProps, forwardedRef) {
  const {
    render: render2,
    className,
    style,
    keepMounted,
    selected,
    ...elementProps
  } = componentProps;
  const indicatorRef = React71.useRef(null);
  const {
    transitionStatus,
    setMounted
  } = useTransitionStatus(selected);
  const state = {
    selected,
    transitionStatus
  };
  const element = useRenderElement("span", componentProps, {
    ref: [forwardedRef, indicatorRef],
    state,
    props: [{
      "aria-hidden": true,
      children: "\u2714\uFE0F"
    }, elementProps],
    stateAttributesMapping: transitionStatusMapping
  });
  useOpenChangeComplete({
    batch: true,
    enabled: !selected,
    open: selected,
    ref: indicatorRef,
    onComplete() {
      if (!selected) {
        setMounted(false);
      }
    }
  });
  return element;
}));
if (true) ItemIndicator.displayName = "ItemIndicator";

// node_modules/@base-ui/react/select/item-indicator/SelectItemIndicator.mjs
import { jsx as _jsx15 } from "react/jsx-runtime";
var SelectItemIndicator = /* @__PURE__ */ React72.forwardRef(function SelectItemIndicator2(componentProps, forwardedRef) {
  const {
    selected
  } = useSelectItemContext();
  const shouldRender = componentProps.keepMounted || selected;
  if (!shouldRender) {
    return null;
  }
  return /* @__PURE__ */ _jsx15(ItemIndicator, {
    ...componentProps,
    selected,
    ref: forwardedRef
  });
});
if (true) SelectItemIndicator.displayName = "SelectItemIndicator";

// node_modules/@base-ui/react/select/item-text/SelectItemText.mjs
import * as React73 from "react";
var SelectItemText = /* @__PURE__ */ React73.memo(/* @__PURE__ */ React73.forwardRef(function SelectItemText2(componentProps, forwardedRef) {
  const {
    index: index2,
    textRef,
    selectedByFocus
  } = useSelectItemContext();
  const store = useSelectRootContext();
  const {
    render: render2,
    className,
    style,
    ...elementProps
  } = componentProps;
  const localRef = React73.useCallback((node) => {
    if (!node) {
      return;
    }
    if (index2 === 0) {
      store.context.firstItemTextRef.current = node;
    }
    if (selectedByFocus) {
      store.context.selectedItemTextRef.current = node;
    }
  }, [store, index2, selectedByFocus]);
  const element = useRenderElement("div", componentProps, {
    ref: [localRef, forwardedRef, textRef],
    props: elementProps
  });
  return element;
}));
if (true) SelectItemText.displayName = "SelectItemText";

// node_modules/@base-ui/react/select/arrow/SelectArrow.mjs
import * as React74 from "react";
var SelectArrow = /* @__PURE__ */ React74.forwardRef(function SelectArrow2(componentProps, forwardedRef) {
  const {
    render: render2,
    className,
    style,
    ...elementProps
  } = componentProps;
  const store = useSelectRootContext();
  const {
    side,
    align,
    arrowRef,
    arrowStyles,
    arrowUncentered,
    alignItemWithTriggerActive
  } = useSelectPositionerContext();
  const open3 = store.useState("open");
  const state = {
    open: open3,
    side,
    align,
    uncentered: arrowUncentered
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [arrowRef, forwardedRef],
    props: [{
      style: arrowStyles,
      "aria-hidden": true
    }, elementProps],
    stateAttributesMapping: popupTransitionStateMapping
  });
  if (alignItemWithTriggerActive) {
    return null;
  }
  return element;
});
if (true) SelectArrow.displayName = "SelectArrow";

// node_modules/@base-ui/react/select/scroll-down-arrow/SelectScrollDownArrow.mjs
import * as React76 from "react";

// node_modules/@base-ui/react/select/scroll-arrow/SelectScrollArrow.mjs
import * as React75 from "react";
var SelectScrollArrow = /* @__PURE__ */ React75.forwardRef(function SelectScrollArrow2(componentProps, forwardedRef) {
  const {
    render: render2,
    className,
    style,
    direction,
    keepMounted,
    ...elementProps
  } = componentProps;
  const isUp = direction === "up";
  const store = useSelectRootContext();
  const {
    side,
    scrollDownArrowRef,
    scrollUpArrowRef
  } = useSelectPositionerContext();
  const visibleSelector = isUp ? "scrollUpArrowVisible" : "scrollDownArrowVisible";
  const stateVisible = store.useState(visibleSelector);
  const openMethod = store.useState("openMethod");
  const visible = stateVisible && openMethod !== "touch";
  const timeout = useTimeout();
  const scrollArrowRef = isUp ? scrollUpArrowRef : scrollDownArrowRef;
  const {
    mounted,
    transitionStatus,
    setMounted
  } = useTransitionStatus(visible);
  useIsoLayoutEffect(() => {
    store.context.scrollArrowsMountedCountRef.current += 1;
    store.set("hasScrollArrows", true);
    return () => {
      store.context.scrollArrowsMountedCountRef.current = Math.max(0, store.context.scrollArrowsMountedCountRef.current - 1);
      if (store.context.scrollArrowsMountedCountRef.current === 0) {
        store.set("hasScrollArrows", false);
      }
    };
  }, [store]);
  useOpenChangeComplete({
    open: visible,
    ref: scrollArrowRef,
    onComplete() {
      if (!visible) {
        setMounted(false);
      }
    }
  });
  const state = {
    direction,
    visible,
    side,
    transitionStatus
  };
  const defaultProps = {
    "aria-hidden": true,
    children: isUp ? "\u25B2" : "\u25BC",
    style: {
      position: "absolute"
    },
    onMouseMove(event) {
      if (event.movementX === 0 && event.movementY === 0 || timeout.isStarted()) {
        return;
      }
      store.set("activeIndex", null);
      function scrollNextItem() {
        const scroller = store.state.listElement ?? store.context.popupRef.current;
        if (!scroller) {
          return;
        }
        store.set("activeIndex", null);
        store.context.handleScrollArrowVisibility(scroller);
        const maxScrollTop = getMaxScrollOffset(scroller.scrollHeight, scroller.clientHeight);
        const scrollTop = normalizeScrollOffset(scroller.scrollTop, maxScrollTop);
        const isScrolledToEdge = scrollTop === (isUp ? 0 : maxScrollTop);
        const items = store.context.listRef.current;
        if (scrollTop !== scroller.scrollTop) {
          scroller.scrollTop = scrollTop;
        }
        if (isScrolledToEdge) {
          timeout.clear();
          return;
        }
        if (items.length > 0) {
          const scrollArrowHeight = scrollArrowRef.current?.offsetHeight || 0;
          scroller.scrollTop = getTargetScrollTop(items, isUp, scrollTop, scroller.clientHeight, scrollArrowHeight, maxScrollTop);
        }
        timeout.start(40, scrollNextItem);
      }
      timeout.start(40, scrollNextItem);
    },
    onMouseLeave() {
      timeout.clear();
    }
  };
  const element = useRenderElement("div", componentProps, {
    ref: [forwardedRef, scrollArrowRef],
    state,
    props: [defaultProps, elementProps],
    stateAttributesMapping: transitionStatusMapping
  });
  const shouldRender = mounted || keepMounted;
  if (!shouldRender) {
    return null;
  }
  return element;
});
if (true) SelectScrollArrow.displayName = "SelectScrollArrow";
function getTargetScrollTop(items, isUp, scrollTop, clientHeight, scrollArrowHeight, maxScrollTop) {
  if (isUp) {
    let firstVisibleIndex = 0;
    const visibleTop = scrollTop + scrollArrowHeight - SCROLL_EDGE_TOLERANCE_PX;
    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];
      if (item && item.offsetTop >= visibleTop) {
        firstVisibleIndex = i;
        break;
      }
    }
    const targetIndex2 = Math.max(0, firstVisibleIndex - 1);
    const targetItem2 = items[targetIndex2];
    return targetIndex2 < firstVisibleIndex && targetItem2 ? normalizeScrollOffset(targetItem2.offsetTop - scrollArrowHeight, maxScrollTop) : 0;
  }
  let lastVisibleIndex = items.length - 1;
  const visibleBottom = scrollTop + clientHeight - scrollArrowHeight + SCROLL_EDGE_TOLERANCE_PX;
  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    if (item && item.offsetTop + item.offsetHeight > visibleBottom) {
      lastVisibleIndex = Math.max(0, i - 1);
      break;
    }
  }
  const targetIndex = Math.min(items.length - 1, lastVisibleIndex + 1);
  const targetItem = items[targetIndex];
  return targetIndex > lastVisibleIndex && targetItem ? normalizeScrollOffset(targetItem.offsetTop + targetItem.offsetHeight - clientHeight + scrollArrowHeight, maxScrollTop) : maxScrollTop;
}

// node_modules/@base-ui/react/select/scroll-down-arrow/SelectScrollDownArrow.mjs
import { jsx as _jsx16 } from "react/jsx-runtime";
var SelectScrollDownArrow = /* @__PURE__ */ React76.forwardRef(function SelectScrollDownArrow2(props, forwardedRef) {
  return /* @__PURE__ */ _jsx16(SelectScrollArrow, {
    ...props,
    ref: forwardedRef,
    direction: "down"
  });
});
if (true) SelectScrollDownArrow.displayName = "SelectScrollDownArrow";

// node_modules/@base-ui/react/select/scroll-up-arrow/SelectScrollUpArrow.mjs
import * as React77 from "react";
import { jsx as _jsx17 } from "react/jsx-runtime";
var SelectScrollUpArrow = /* @__PURE__ */ React77.forwardRef(function SelectScrollUpArrow2(props, forwardedRef) {
  return /* @__PURE__ */ _jsx17(SelectScrollArrow, {
    ...props,
    ref: forwardedRef,
    direction: "up"
  });
});
if (true) SelectScrollUpArrow.displayName = "SelectScrollUpArrow";

// node_modules/@base-ui/react/select/group/SelectGroup.mjs
import * as React79 from "react";

// node_modules/@base-ui/react/select/group/SelectGroupContext.mjs
import * as React78 from "react";
var SelectGroupContext = /* @__PURE__ */ React78.createContext(void 0);
if (true) SelectGroupContext.displayName = "SelectGroupContext";
function useSelectGroupContext() {
  const context = React78.useContext(SelectGroupContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: SelectGroupContext is missing. SelectGroup parts must be placed within <Select.Group>." : formatErrorMessage_default(56));
  }
  return context;
}

// node_modules/@base-ui/react/select/group/SelectGroup.mjs
import { jsx as _jsx18 } from "react/jsx-runtime";
var SelectGroup = /* @__PURE__ */ React79.forwardRef(function SelectGroup2(componentProps, forwardedRef) {
  const {
    render: render2,
    className,
    style,
    ...elementProps
  } = componentProps;
  const [labelId, setLabelId] = React79.useState();
  const contextValue = React79.useMemo(() => ({
    labelId,
    setLabelId
  }), [labelId, setLabelId]);
  const element = useRenderElement("div", componentProps, {
    ref: forwardedRef,
    props: [{
      role: "group",
      "aria-labelledby": labelId
    }, elementProps]
  });
  return /* @__PURE__ */ _jsx18(SelectGroupContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) SelectGroup.displayName = "SelectGroup";

// node_modules/@base-ui/react/select/group-label/SelectGroupLabel.mjs
import * as React80 from "react";
var SelectGroupLabel = /* @__PURE__ */ React80.forwardRef(function SelectGroupLabel2(componentProps, forwardedRef) {
  const {
    render: render2,
    className,
    style,
    id: idProp,
    ...elementProps
  } = componentProps;
  const {
    setLabelId
  } = useSelectGroupContext();
  const id = useBaseUiId(idProp);
  useIsoLayoutEffect(() => {
    setLabelId(id);
    return () => {
      setLabelId((currentId) => currentId === id ? void 0 : currentId);
    };
  }, [id, setLabelId]);
  const element = useRenderElement("div", componentProps, {
    ref: forwardedRef,
    props: [{
      id,
      "aria-hidden": true
    }, elementProps]
  });
  return element;
});
if (true) SelectGroupLabel.displayName = "SelectGroupLabel";

// node_modules/@base-ui/react/utils/listbox-separator/ListboxSeparator.mjs
import * as React81 from "react";
var ListboxSeparator = /* @__PURE__ */ React81.forwardRef(function ListboxSeparator2(componentProps, forwardedRef) {
  const {
    className,
    render: render2,
    orientation = "horizontal",
    style,
    ...elementProps
  } = componentProps;
  const state = {
    orientation
  };
  return useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      role: "presentation"
    }, elementProps]
  });
});
if (true) ListboxSeparator.displayName = "ListboxSeparator";

// node_modules/@base-ui/react/select/separator/SelectSeparator.mjs
var SelectSeparator = ListboxSeparator;

// src/ui/SelectControl.tsx
function SelectControl({ value, options, onChange, label, required = false }) {
  const [open3, setOpen] = useState21(false);
  const trigger = useRef30(null);
  return <index_parts_exports2.Root value={value} onValueChange={(v) => onChange(v ?? "")} items={options} open={open3} onOpenChange={setOpen} modal={false}>
    <index_parts_exports2.Trigger ref={trigger} className="select-trigger" aria-label={label} aria-required={required}>
      <index_parts_exports2.Value /><index_parts_exports2.Icon><Icon name="chevron" size={15} /></index_parts_exports2.Icon>
    </index_parts_exports2.Trigger>
    <index_parts_exports2.Portal container={trigger.current?.closest(".preview-shell") ?? null}>
      <index_parts_exports2.Positioner className="select-positioner" sideOffset={6} alignItemWithTrigger={false}>
        <index_parts_exports2.Popup className="select-popup"><index_parts_exports2.List className="select-list">
          {options.map((option) => <index_parts_exports2.Item className="select-option" key={option.value} value={option.value} disabled={option.disabled}>
            <index_parts_exports2.ItemText>{option.label}</index_parts_exports2.ItemText><index_parts_exports2.ItemIndicator><Icon name="check" size={15} /></index_parts_exports2.ItemIndicator>
          </index_parts_exports2.Item>)}
        </index_parts_exports2.List></index_parts_exports2.Popup>
      </index_parts_exports2.Positioner>
    </index_parts_exports2.Portal>
  </index_parts_exports2.Root>;
}

// src/ui/provider-order.ts
function splitList(value) {
  return value.split(",").map((part) => part.trim()).filter(Boolean);
}
function moveProvider(list, from, to) {
  if (from < 0 || to < 0 || from >= list.length || to >= list.length || from === to) return [...list];
  const next = [...list];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}
function toggleProvider(list, provider, single) {
  if (list.includes(provider)) return list.filter((item) => item !== provider);
  return single ? [provider] : [...list, provider];
}
function providerDraft(list) {
  return { only: list.join(", "), order: list.length > 1 ? list.join(", ") : "" };
}

// src/ui/Routing.tsx
function OrderedProviders({ value, onChange, reorderable }) {
  const [dragging, setDragging] = useState22(null);
  const [overIndex, setOverIndex] = useState22(null);
  const listRef = useRef31(null);
  const drag2 = useRef31(null);
  const over = useRef31(null);
  const indexAt = (clientY) => {
    const rects = drag2.current?.rects ?? [];
    for (let index2 = 0; index2 < rects.length; index2 += 1) {
      const rect = rects[index2];
      if (clientY < rect.top + rect.height / 2) return index2;
    }
    return Math.max(0, rects.length - 1);
  };
  const startDrag = (event, provider) => {
    if (!reorderable || event.button !== 0) return;
    const items = [...listRef.current?.querySelectorAll(":scope > li") ?? []];
    drag2.current = { from: value.indexOf(provider), rects: items.map((item) => item.getBoundingClientRect()) };
    over.current = value.indexOf(provider);
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(provider);
    setOverIndex(over.current);
    event.preventDefault();
  };
  const moveDrag = (event) => {
    if (!drag2.current) return;
    const index2 = indexAt(event.clientY);
    over.current = index2;
    setOverIndex(index2);
  };
  const endDrag = () => {
    const state = drag2.current;
    const target = over.current;
    drag2.current = null;
    over.current = null;
    setDragging(null);
    setOverIndex(null);
    if (!state || target === null) return;
    onChange(moveProvider(value, state.from, target));
  };
  if (!value.length) return null;
  return <ol className="provider-order" aria-label="Порядок провайдеров" ref={listRef}>
    {value.map((provider, position) => <li
    key={provider}
    className={[dragging === provider ? "dragging" : "", overIndex === position && dragging !== provider ? "drop-target" : ""].filter(Boolean).join(" ") || void 0}
  >
      {reorderable ? <span
    className="drag-handle"
    title="Перетащите, чтобы изменить порядок"
    onPointerDown={(event) => startDrag(event, provider)}
    onPointerMove={moveDrag}
    onPointerUp={endDrag}
    onPointerCancel={endDrag}
  >⠿</span> : null}
      <span className="provider-name">{provider}</span>
      {reorderable ? <>
        <button type="button" className="text-button" aria-label={`\u041F\u043E\u0434\u043D\u044F\u0442\u044C ${provider}`} disabled={position === 0} onClick={() => onChange(moveProvider(value, position, position - 1))}>Выше</button>
        <button type="button" className="text-button" aria-label={`\u041E\u043F\u0443\u0441\u0442\u0438\u0442\u044C ${provider}`} disabled={position === value.length - 1} onClick={() => onChange(moveProvider(value, position, position + 1))}>Ниже</button>
      </> : null}
      <button type="button" className="text-button" aria-label={`\u0423\u0431\u0440\u0430\u0442\u044C ${provider}`} onClick={() => onChange(value.filter((item) => item !== provider))}>Убрать</button>
    </li>)}
  </ol>;
}
function Routing({ draft, providers, isChat, onChange, onRepresentation, onReset }) {
  const r = draft.routing;
  const group = useId2();
  const alias = draft.representation === "alias";
  const update2 = (key, value) => onChange({ ...r, [key]: value });
  const only = splitList(r.only);
  const chosen = only.length ? only : splitList(r.order);
  const ignored = splitList(r.ignore);
  const options = [.../* @__PURE__ */ new Set([...providers, ...chosen, ...ignored])];
  const setChosen = (next) => onChange({ ...r, ...providerDraft(next) });
  const toggle = (provider) => setChosen(toggleProvider(chosen, provider, alias));
  const summary = chosen.length ? chosen.join(" \u2192 ") : r.ignore || r.data_residency || Object.values(r.prices).some(Boolean) || r.allow_fallbacks || r.require_parameters || r.sort ? "\u041D\u0430\u0441\u0442\u0440\u043E\u0435\u043D" : "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438";
  return <Disclosure className="routing section-disclosure" title={<><Icon name="settings" />Роутинг провайдеров</>} summary={summary}>
      <div className="field provider-picker">
        <span>Провайдеры</span>
        <fieldset className="provider-list">
          <legend>Провайдеры модели</legend>
          {options.map((provider) => <label key={provider}>
            <input type="checkbox" checked={chosen.includes(provider)} disabled={alias ? !chosen.includes(provider) : ignored.includes(provider)} onChange={() => toggle(provider)} />
            <span>{provider}{!providers.includes(provider) ? " \u2014 \u043D\u0435\u0442 \u0443 \u044D\u0442\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438" : ""}</span>
          </label>)}
        </fieldset>
        <OrderedProviders value={chosen} onChange={setChosen} reorderable={!alias} />
        <small>{alias ? "\u0412 alias \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u043E\u0434\u0438\u043D \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440: \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0438 \u0441\u043F\u0438\u0441\u043E\u043A \u0438\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0432 Body. \u0412\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E." : "\u041E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u044B \u0437\u0430\u0434\u0430\u044E\u0442 provider.only \u0438 provider.order. \u041F\u043E\u0440\u044F\u0434\u043E\u043A \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435\u043C \u0438\u043B\u0438 \u043A\u043D\u043E\u043F\u043A\u0430\u043C\u0438 \xAB\u0412\u044B\u0448\u0435\xBB/\xAB\u041D\u0438\u0436\u0435\xBB."}</small>
      </div>
      <div className="field-pair">
        <div className="field"><span>Резервные провайдеры</span><SelectControl label="Резервные провайдеры" value={r.allow_fallbacks} onChange={(v) => update2("allow_fallbacks", v)} options={[{ value: "", label: "\u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C" }, { value: "true", label: "\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044C" }, { value: "false", label: "\u0417\u0430\u043F\u0440\u0435\u0442\u0438\u0442\u044C" }]} /></div>
        <div className="field"><span>Поддержка параметров</span><SelectControl label="Поддержка параметров" value={r.require_parameters} onChange={(v) => update2("require_parameters", v)} options={[{ value: "", label: "\u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C" }, { value: "true", label: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F" }, { value: "false", label: "\u041D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F" }]} /></div>
      </div>
      <div className="field-pair">
        <div className="field"><span>Сортировка</span><SelectControl label="Сортировка" value={r.sort} onChange={(v) => update2("sort", v)} options={[{ value: "", label: "\u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C" }, { value: "price", label: "\u041F\u043E \u0446\u0435\u043D\u0435" }, { value: "latency", label: "\u041F\u043E \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0435" }, { value: "throughput", label: "\u041F\u043E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438" }]} /></div>
        <div className="field"><span>Размещение данных</span><SelectControl label="Размещение данных" value={r.data_residency} onChange={(v) => update2("data_residency", v)} options={[{ value: "", label: "\u0411\u0435\u0437 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F" }, { value: "ru", label: "\u0420\u043E\u0441\u0441\u0438\u044F \xB7 ru" }]} /></div>
      </div>
      {isChat ? <fieldset className="representation"><legend>Передавать настройки</legend><label><input type="radio" name={group} checked={draft.representation === "body"} onChange={() => onRepresentation("body")} />Body</label><label><input type="radio" name={group} checked={draft.representation === "alias"} onChange={() => onRepresentation("alias")} />Alias в model</label></fieldset> : null}
      <Disclosure className="advanced-routing" title="Фильтры провайдеров">
          <fieldset className="provider-list" disabled={alias}><legend>Исключённые провайдеры <code>provider.ignore</code></legend>
            {options.map((provider) => <label key={provider}><input type="checkbox" checked={ignored.includes(provider)} onChange={(e) => update2("ignore", e.target.checked ? [...ignored, provider].join(", ") : ignored.filter((v) => v !== provider).join(", "))} /><span>{provider}{!providers.includes(provider) ? " \u2014 \u043D\u0435\u0442 \u0443 \u044D\u0442\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438" : ""}</span></label>)}
            <small>{alias ? "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0432 Body. \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E \u2014 \u0432\u0435\u0440\u043D\u0438\u0442\u0435\u0441\u044C \u0432 Body, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0435\u0433\u043E." : "\u041F\u0443\u0441\u0442\u043E\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u2014 \u043D\u0438\u043A\u043E\u0433\u043E \u043D\u0435 \u0438\u0441\u043A\u043B\u044E\u0447\u0430\u0442\u044C. \u0418\u0441\u043A\u043B\u044E\u0447\u0451\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u043D\u0435\u043B\u044C\u0437\u044F \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0432 \u0441\u043F\u0438\u0441\u043A\u0435 \u0432\u044B\u0448\u0435."}</small>
          </fieldset>
      </Disclosure>
      {r.data_residency === "ru" ? <p className="field-note">ru сохраняется и при fallback. Внешние инструменты модели этим условием не ограничиваются.</p> : null}
      <button type="button" className="text-button" onClick={onReset}>Сбросить роутинг</button>
  </Disclosure>;
}

// src/ui/AttachmentInput.tsx
import { useEffect as useEffect14, useRef as useRef32, useState as useState23 } from "react";
var formats = { image: ".png,.jpg,.jpeg,.gif,.webp", file: ".pdf,.docx,.txt", audio: ".mp3,.wav,.flac,.m4a,.ogg", video: ".mp4,.mov,.webm" };
function Attachments({ label, value, kinds, urlKinds = kinds, uploadKinds = kinds, multiple = true, min: min2, max: max2, required = false, onChange, youtube = false }) {
  const [url, setUrl] = useState23("");
  const [kind, setKind] = useState23(urlKinds[0] ?? kinds[0] ?? "image");
  const [error2, setError] = useState23("");
  const [busy, setBusy] = useState23(false);
  const generation = useRef32(0);
  useEffect14(() => () => {
    generation.current++;
  }, []);
  const limit = max2 === void 0 ? void 0 : Math.max(0, max2);
  const full = limit !== void 0 && value.length >= limit;
  const plural = (count) => {
    const last = count % 10, tens = count % 100;
    if (last === 1 && tens !== 11) return "\u0444\u0430\u0439\u043B";
    if (last >= 2 && last <= 4 && (tens < 12 || tens > 14)) return "\u0444\u0430\u0439\u043B\u0430";
    return "\u0444\u0430\u0439\u043B\u043E\u0432";
  };
  const itemLimit = limit !== void 0 && min2 !== void 0 ? min2 === limit ? ` \u041C\u043E\u0434\u0435\u043B\u044C \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0440\u043E\u0432\u043D\u043E ${min2} ${plural(min2)}.` : ` \u041C\u043E\u0434\u0435\u043B\u044C \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043E\u0442 ${min2} \u0434\u043E ${limit} ${plural(limit)}.` : limit !== void 0 ? ` \u041C\u043E\u0434\u0435\u043B\u044C \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 ${limit} ${plural(limit)}.` : min2 !== void 0 ? ` \u041C\u043E\u0434\u0435\u043B\u044C \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 ${min2} ${plural(min2)}.` : "";
  const append = (items) => onChange(multiple ? [...value, ...items].slice(0, limit) : items.slice(-1));
  const addLink = () => {
    try {
      append([attachmentUrl(url, urlKinds.includes(kind) ? kind : urlKinds[0], attachmentId())]);
      setUrl("");
      setError("");
    } catch (cause) {
      setError(cause.message);
    }
  };
  const load = async (files) => {
    if (!files?.length) return;
    const current = ++generation.current;
    setBusy(true);
    setError("");
    try {
      const added = await attachmentsFromFiles(Array.from(files), uploadKinds, multiple ? value : []);
      if (generation.current === current) append(added);
    } catch (cause) {
      if (generation.current === current) setError(cause instanceof Error ? cause.message : "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0444\u0430\u0439\u043B.");
    } finally {
      if (generation.current === current) setBusy(false);
    }
  };
  return <fieldset className="attachment-field"><legend>{label}{required ? <span className="required"> *</span> : null}</legend>
    {value.length ? <ul className="attachment-items">{value.map((item) => <li key={item.id}><Icon name={item.kind === "file" ? "file" : item.kind} size={16} /><span><strong>{item.name}</strong><small>{item.source === "url" ? "\u0421\u0441\u044B\u043B\u043A\u0430" : "\u0424\u0430\u0439\u043B \xB7 base64"}</small></span><button type="button" className="attachment-remove" disabled={busy} aria-label={`\u0423\u0434\u0430\u043B\u0438\u0442\u044C ${item.name}`} onClick={() => {
    onChange(value.filter((v) => v.id !== item.id));
    setError("");
  }}><Icon name="close" size={15} /></button></li>)}</ul> : null}
    {urlKinds.length && !full ? <div className="attachment-url">
      {urlKinds.length > 1 ? <SelectControl label={`\u0422\u0438\u043F \u0441\u0441\u044B\u043B\u043A\u0438: ${label}`} value={urlKinds.includes(kind) ? kind : urlKinds[0]} options={urlKinds.map((value2) => ({ value: value2, label: attachmentNames[value2] }))} onChange={(v) => setKind(v)} /> : null}
      <input aria-label={`\u0421\u0441\u044B\u043B\u043A\u0430: ${label}`} value={url} type="url" maxLength={4e3} placeholder={urlKinds.length === 1 && urlKinds[0] === "video" ? "\u0421\u0441\u044B\u043B\u043A\u0430 YouTube" : "https://\u2026"} onChange={(e) => {
    setUrl(e.target.value);
    setError("");
  }} onKeyDown={(e) => {
    if (e.key === "Enter" && url.trim() && !busy) {
      e.preventDefault();
      addLink();
    }
  }} />
      <button type="button" className="attachment-add" disabled={!url.trim() || busy} onClick={addLink}>Добавить</button>
    </div> : null}
    {uploadKinds.length && !full ? <label className={"attachment-upload" + (busy ? " is-busy" : "")}><Icon name="upload" size={17} /><span>{busy ? "\u0427\u0438\u0442\u0430\u0435\u043C \u0444\u0430\u0439\u043B\u2026" : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B"}</span><input type="file" aria-label={`\u0424\u0430\u0439\u043B: ${label}`} accept={uploadKinds.map((k) => formats[k]).join(",")} multiple={multiple} disabled={busy} onChange={(e) => {
    void load(e.target.files);
    e.target.value = "";
  }} /></label> : null}
    <small className="attachment-hint">{uploadKinds.length ? "\u0424\u0430\u0439\u043B\u044B \u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E, \u0434\u043E 650 \u041A\u0411 \u0441\u0443\u043C\u043C\u0430\u0440\u043D\u043E. \u0412 \u043A\u043E\u0434 \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F base64." : "\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u0443\u044E HTTPS-\u0441\u0441\u044B\u043B\u043A\u0443."}{youtube ? " \u0412\u0438\u0434\u0435\u043E \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 YouTube." : ""}{itemLimit}</small>
    {error2 ? <p className="attachment-error" role="alert">{error2}</p> : null}
  </fieldset>;
}

// src/ui/RequestBuilder.tsx
var tasks = [
  { label: "\u0427\u0430\u0442", profile: "chat", icon: "chat" },
  { label: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F", profile: "image.media", icon: "image" },
  { label: "\u0412\u0438\u0434\u0435\u043E", profile: "video.media", icon: "video" },
  { label: "\u0410\u0443\u0434\u0438\u043E", profile: "audio.tts", icon: "audio" },
  { label: "\u041C\u0443\u0437\u044B\u043A\u0430", profile: "music.media", icon: "music" }
];
var languages = [
  { id: "curl-bash", name: "cURL" },
  { id: "python", name: "Python" },
  { id: "typescript", name: "TypeScript" },
  { id: "javascript", name: "JavaScript" },
  { id: "openai-sdk", name: "OpenAI SDK" }
];
var optionLabels = {
  web_search_engine: { yandex: "\u042F\u043D\u0434\u0435\u043A\u0441", google: "Google", off: "\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D" }
};
function ParameterField({ field, value, onChange }) {
  const Container = field.values || field.type === "boolean" ? "div" : "label";
  return <Container className={"field" + (field.unavailable ? " field-unavailable" : "")}>
    <span>{field.label}{field.required ? <span className="required" aria-label="обязательный">*</span> : null}</span>
    {field.unavailable ? <p className="unavailable-value">{field.unavailable}</p> : field.values || field.type === "boolean" ? <SelectControl label={field.label} value={value} required={field.required ?? false} onChange={onChange} options={[
    ...field.key === "web_search_engine" ? [] : [{ value: "", label: field.required ? "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435" : "\u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C" }],
    ...(field.values ?? ["true", "false"]).map((v) => ({ value: v, label: optionLabels[field.key]?.[v] ?? (field.type === "boolean" ? v === "true" ? "\u0414\u0430" : "\u041D\u0435\u0442" : v) })),
    ...value && field.values && !field.values.includes(value) ? [{ value, label: value + " \u2014 \u043D\u0435 \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0441\u043F\u0438\u0441\u043E\u043A" }] : []
  ]} /> : field.type === "json" ? <textarea rows={4} value={value} name={field.key} spellCheck={false} autoComplete="off" maxLength={9e5} aria-required={field.required ?? false} placeholder="JSON…" onChange={(e) => onChange(e.target.value)} /> : <input name={field.key} type={field.type === "number" ? "number" : "text"} value={value} min={field.min} max={field.max} step="any" autoComplete="off" aria-required={field.required ?? false} placeholder={field.type === "number" ? field.min === void 0 ? "\u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C" : `${field.min}${field.max !== void 0 ? " \u2014 " + field.max : " \u0438 \u0431\u043E\u043B\u044C\u0448\u0435"}` : "\u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C"} onChange={(e) => onChange(e.target.value)} />}
    {field.hint ? <small>{field.hint}</small> : null}
    {field.link ? <a className="field-link" href={field.link.href} target="_blank" rel="noreferrer noopener">{field.link.label}</a> : null}
  </Container>;
}
var CodeText = memo4(function CodeText2({ value }) {
  if (value.length > 64e3) return <pre className="code-text" tabIndex={0} aria-label="Сгенерированный код"><code>{value}</code></pre>;
  return <pre className="code-text" tabIndex={0} aria-label="Сгенерированный код"><code>{value.split("\n").map((line, i, lines) => <span className="code-line" key={i} data-line={i + 1}>{tokenize(line)}{i < lines.length - 1 ? "\n" : ""}</span>)}</code></pre>;
});
function tokenize(line) {
  const pattern = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|#[^\n]*|\/\/[^\n]*|\b(?:import|from|const|let|if|else|try|catch|throw|new|await|async|function|return|class|def|with|as|raise|for|in|while|True|False|None|true|false|null)\b)/gu;
  const parts = [];
  let start = 0;
  for (const match of line.matchAll(pattern)) {
    if (match.index > start) parts.push(line.slice(start, match.index));
    const token = match[0];
    parts.push(<span key={match.index} className={token.startsWith("#") || token.startsWith("//") ? "syntax-comment" : token.startsWith('"') || token.startsWith("'") ? "syntax-string" : "syntax-keyword"}>{token}</span>);
    start = match.index + token.length;
  }
  parts.push(line.slice(start));
  return parts;
}
function moveTab(event, index2, total, select) {
  const next = event.key === "ArrowRight" ? (index2 + 1) % total : event.key === "ArrowLeft" ? (index2 + total - 1) % total : event.key === "Home" ? 0 : event.key === "End" ? total - 1 : void 0;
  if (next === void 0) return;
  event.preventDefault();
  select(next);
  event.currentTarget.parentElement?.querySelectorAll("button")[next]?.focus();
}
function RequestBuilder({ embedded = false, models } = {}) {
  const [result, setResult] = useState24();
  const [failed, setFailed] = useState24(false);
  const [syncing, setSyncing] = useState24(true);
  const [attempt, setAttempt] = useState24(0);
  useEffect15(() => {
    if (models) return;
    let active = true;
    setFailed(false);
    setSyncing(true);
    void startupCatalog({ force: attempt > 0 }).then((value) => {
      if (active) {
        setResult((previous) => retainUnavailableCatalog(previous, value));
        setSyncing(false);
      }
    }, () => {
      if (active) {
        setFailed(true);
        setSyncing(false);
      }
    });
    return () => {
      active = false;
    };
  }, [models, attempt]);
  const catalog = models ?? result?.models;
  const retry = () => {
    setAttempt((n) => n + 1);
  };
  const degraded = failed || !!(result && (result.fallback.length || result.unavailable.length || result.retained.length));
  if (!catalog?.length && syncing) return <CatalogLoading embedded={embedded} />;
  const status = failed ? "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433." : result?.fallback.length ? "\u0421\u0435\u0442\u044C \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0434\u043B\u044F \u0447\u0430\u0441\u0442\u0438 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0430\u044F \u043A\u043E\u043F\u0438\u044F." : "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433. \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0440\u0430\u0431\u043E\u0447\u0430\u044F \u043A\u043E\u043F\u0438\u044F.";
  return <>{degraded ? <div className="catalog-status" role="status" aria-live="polite">{status}<button type="button" disabled={syncing} onClick={retry}>{syncing ? "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C\u2026" : "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443"}</button></div> : null}
    {catalog?.length ? <RequestBuilderView embedded={embedded} models={catalog} catalogLabel={models ? "\u0422\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u043A\u0430\u0442\u0430\u043B\u043E\u0433" : result.retained.length ? "\u0427\u0430\u0441\u0442\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430 \u043D\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u2014 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u0435\u0430\u043D\u0441\u0430" : result.fallback.length ? "\u0427\u0430\u0441\u0442\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430 \u2014 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u044B\u0439 \u0441\u043D\u0438\u043C\u043E\u043A 26.10.2026" : `\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u043E\u0431\u043D\u043E\u0432\u043B\u0451\u043D ${new Date(result.syncedAt).toLocaleDateString("ru-RU")}`} /> : catalog ? <p role="alert">Каталог недоступен. Проверьте соединение и повторите загрузку.</p> : null}</>;
}
function RequestBuilderView({ embedded, models, catalogLabel }) {
  const catalog = models;
  const [profile, setProfile] = useState24("chat");
  const [drafts, setDrafts] = useState24(() => ({ chat: initialDraft("chat"), "image.media": initialDraft("image.media"), "video.media": initialDraft("video.media"), "music.media": initialDraft("music.media"), "audio.tts": initialDraft("audio.tts"), "audio.stt": initialDraft("audio.stt") }));
  const [language, setLanguage] = useState24("curl-bash");
  const [search, setSearch] = useState24("");
  const [feedback, setFeedback] = useState24("");
  const [theme, setTheme] = useState24("light");
  const [articleWidth, setArticleWidth] = useState24(false);
  const picker = useRef33(null);
  const id = useId3();
  const draft = drafts[profile];
  const update2 = (patch) => {
    setDrafts((previous) => ({ ...previous, [profile]: { ...previous[profile], ...patch } }));
    setFeedback("");
  };
  const model = useMemo19(() => catalog.find((m) => m.model === draft.model && m.primary_profile === profile) ?? { model: draft.model, primary_profile: profile, providers_list_missing: true, routes: [] }, [catalog, draft.model, profile]);
  const fields = useMemo19(() => fieldsFor(profile, model, draft.routing), [profile, model, draft.routing]);
  const effective = useMemo19(() => model.providers_list_missing ? draft : reconcileDraft(profile, draft, fields), [profile, draft, fields, model]);
  useEffect15(() => {
    if (model.providers_list_missing) return;
    setDrafts((previous) => {
      const current = previous[profile];
      const next = reconcileDraft(profile, current, fieldsFor(profile, model, current.routing));
      return next === current ? previous : { ...previous, [profile]: next };
    });
  }, [profile, model, draft.routing]);
  const setValue = (key, value) => update2({ values: { ...effective.values, [key]: value } });
  const isAudio = profile.startsWith("audio.");
  const searchIndex = useMemo19(() => catalog.filter((m) => m.primary_profile === profile).map((m) => ({ model: m, search: (m.model + " " + modelName(m.model)).toLowerCase() })), [catalog, profile]);
  const filtered = useMemo19(() => searchIndex.filter((m) => m.search.includes(search.toLowerCase().slice(0, 100))).map((m) => m.model), [searchIndex, search]);
  const { bundles, error: error2, advisory, imageNotice } = useMemo19(() => {
    try {
      const plan = compileRequest(configFromDraft(profile, effective, fields), catalog);
      return { bundles: emitExamples(plan, { ui: true }), error: void 0, advisory: plan.warnings.filter((w) => w.includes("operation DTO")), imageNotice: plan.warnings.some((w) => w.includes("Image input is not confirmed")) };
    } catch (cause) {
      return { bundles: [], error: explainError(cause), advisory: [], imageNotice: false };
    }
  }, [profile, effective, fields, catalog]);
  const bundle = bundles.find((b) => b.language === language);
  const entrypoint = bundle?.entrypoint ?? (language === "python" ? "request.py" : language === "typescript" ? "request.ts" : language === "javascript" || language === "openai-sdk" ? "request.mjs" : language === "curl-bash" ? "request.sh" : "request.ps1");
  const filename = entrypoint;
  const code = bundle?.files[filename] ?? "";
  const chosenTask = isAudio ? 3 : tasks.findIndex((t) => t.profile === profile);
  const providers = [...new Set(model.routes.filter((r) => r.source === "providers").map((r) => r.provider))];
  const setTask = (value) => {
    setProfile(value);
    setSearch("");
    setFeedback("");
    if (picker.current) picker.current.open = false;
  };
  const copy = async () => {
    if (!code || error2) return;
    try {
      let copied = false;
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(code);
          copied = true;
        } catch {
        }
      }
      if (!copied) {
        const previousFocus = document.activeElement;
        const area = document.createElement("textarea");
        area.value = code;
        area.readOnly = true;
        area.tabIndex = -1;
        const onCopy = (event) => {
          if (event.clipboardData) {
            event.clipboardData.setData("text/plain", code);
            event.preventDefault();
          }
        };
        area.style.position = "fixed";
        area.style.left = "0";
        area.style.top = "0";
        area.style.opacity = "0";
        document.body.append(area);
        document.addEventListener("copy", onCopy, true);
        try {
          area.focus({ preventScroll: true });
          area.select();
          area.setSelectionRange(0, area.value.length);
          copied = document.execCommand("copy");
        } finally {
          document.removeEventListener("copy", onCopy, true);
          area.remove();
          if (previousFocus instanceof HTMLElement) previousFocus.focus({ preventScroll: true });
        }
        if (!copied) throw new Error("Clipboard unavailable");
      }
      setFeedback("\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E");
    } catch {
      setFeedback("\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E. \u0412\u044B\u0434\u0435\u043B\u0438\u0442\u0435 \u043A\u043E\u0434 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0438\u043B\u0438 \u0441\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043B.");
    }
  };
  const download = () => {
    if (!code || error2) return;
    const url = URL.createObjectURL(new Blob([code], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
    setFeedback("\u0421\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0435 \u043D\u0430\u0447\u0430\u0442\u043E");
  };
  const setAttachments = (key, items) => {
    setDrafts((previous) => {
      const current = previous[profile];
      if (current.model !== draft.model) return previous;
      const values = { ...current.values };
      delete values[key];
      return { ...previous, [profile]: { ...current, attachments: { ...current.attachments, [key]: items }, values } };
    });
    setFeedback("");
  };
  const mediaKinds = { images: "image", reference_images: "image", videos: "video", audios: "audio", super_resolution_references: "image" };
  const extendedOn = draft.values.customMode === "true";
  const visibleFields = fields.filter((f) => !f.advancedOnly || extendedOn);
  const fileFields = visibleFields.filter((f) => mediaKinds[f.key]);
  const inputKinds = chatInputKinds(model);
  const chatUrlKinds = inputKinds.filter((k) => k === "image" || k === "video" && model.model.startsWith("google/gemini"));
  const chatUploadKinds = inputKinds.filter((k) => k !== "video");
  const chatAttachments = draft.attachments.chat ?? [];
  const retainedChat = chatAttachments.filter((item) => !inputKinds.includes(item.kind));
  const searchDisabled = profile === "chat" && effective.values.web_search_engine === "off";
  const otherFields = visibleFields.filter((f) => !fileFields.includes(f) && !(searchDisabled && ["web_search_max_results", "max_tool_calls"].includes(f.key)));
  const primaryFields = otherFields.filter((f) => profile === "chat" || profile === "music.media" || ["voice", "response_format", "aspect_ratio", "duration", "resolution", "image_resolution", "temperature", "max_tokens"].includes(f.key));
  const advancedFields = otherFields.filter((f) => !primaryFields.includes(f));
  const retained = Object.keys(effective.values).filter((key) => effective.values[key] !== "" && !fields.some((f) => f.key === key) && !["file", "stream"].includes(key));
  return <div className={"preview-shell theme-" + theme}>
    {!embedded ? <header className="site-header"><a href="https://polza.ai/docs-new" className="brand" target="_blank" rel="noreferrer"><img src="/brand/polza.svg" width="141" height="36" alt="Polza.ai" /></a><span className="header-divider" /><span className="header-label">Документация</span>
      <div className="header-actions"><span className="local-label">Локальный макет</span><button className={"preview-width-button" + (articleWidth ? " is-active" : "")} aria-pressed={articleWidth} onClick={() => setArticleWidth((v) => !v)}>В ширине статьи</button><button className="icon-button" aria-label={theme === "light" ? "\u0422\u0451\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430" : "\u0421\u0432\u0435\u0442\u043B\u0430\u044F \u0442\u0435\u043C\u0430"} onClick={() => setTheme((t) => t === "light" ? "dark" : "light")}><Icon name={theme === "light" ? "moon" : "sun"} /></button></div>
    </header> : null}
    <main className={"page" + (articleWidth ? " page-article" : "")}>
      {!embedded ? <><nav className="breadcrumb" aria-label="Хлебные крошки"><a href="https://polza.ai/docs-new" target="_blank" rel="noreferrer">Документация</a><span>/</span><span>Инструменты</span><span>/</span><span aria-current="page">Конструктор запросов</span></nav>
      <div className="page-heading"><div><h1>Конструктор запросов</h1><p>Выберите модель и параметры. Скопируйте код — и используйте в своём проекте.</p></div><a className="guide-link" href="https://polza.ai/docs-new/gaidy/provider-selection" target="_blank" rel="noreferrer">О роутинге <Icon name="arrow" size={16} /></a></div></> : null}
      <div className="builder" id="request-builder">
        <div className="task-tabs" role="tablist" aria-label="Тип задачи">{tasks.map((task, index2) => <button key={task.label} id={`${id}-task-${index2}`} role="tab" type="button" aria-selected={chosenTask === index2} aria-controls={`${id}-form`} tabIndex={chosenTask === index2 ? 0 : -1} onKeyDown={(e) => moveTab(e, index2, tasks.length, (n) => setTask(tasks[n].profile))} onClick={() => setTask(task.profile)}><Icon name={task.icon} size={19} />{task.label}</button>)}</div>
        <div className="builder-columns">
          <section className="configuration" role="tabpanel" id={`${id}-form`} aria-labelledby={`${id}-task-${chosenTask}`}>
            {isAudio ? <div className="audio-modes" aria-label="Задача аудио"><button aria-pressed={profile === "audio.tts"} onClick={() => setTask("audio.tts")}>Текст в речь</button><button aria-pressed={profile === "audio.stt"} onClick={() => setTask("audio.stt")}>Речь в текст</button></div> : null}
            <div className="model-field"><span className="field-title">Модель</span><details className="model-picker" ref={picker} onKeyDown={(e) => {
    if (e.key === "Escape") {
      e.currentTarget.open = false;
      e.currentTarget.querySelector("summary")?.focus();
    }
  }} onBlur={(e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) e.currentTarget.open = false;
  }} onToggle={(e) => {
    if (e.currentTarget.open) setSearch("");
  }}><summary aria-label={`\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C: ${modelName(draft.model)}, ${draft.model}`}><ModelIcon model={draft.model} assetBase={embedded ? "/request-builder-assets/model-icons" : "/model-icons"} /><span className="model-selection"><strong>{modelName(draft.model)}</strong><small>{draft.model}</small></span><Icon name="chevron" /></summary>
              <div className="model-menu"><label className="model-search"><Icon name="search" size={17} /><input aria-label="Найти модель" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Название или ID модели" maxLength={100} autoComplete="off" /></label><div className="model-results">{filtered.length ? filtered.map((m) => <button key={m.model} className={draft.model === m.model ? "selected" : ""} onClick={() => {
    update2({ model: m.model });
    if (picker.current) picker.current.open = false;
  }}><ModelIcon model={m.model} assetBase={embedded ? "/request-builder-assets/model-icons" : "/model-icons"} /><span className="model-result-name"><strong>{modelName(m.model)}</strong><small>{m.model}</small></span>{draft.model === m.model ? <Icon name="check" size={16} /> : null}</button>) : <p className="empty-models">Моделей не найдено. Попробуйте другое название.</p>}</div><span className="model-count">{filtered.length} моделей · {catalogLabel}</span></div>
            </details><span className="model-caption">{providers.length} {providers.length === 1 ? "\u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440" : providers.length < 5 ? "\u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430" : "\u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u043E\u0432"}<span>Доступность зависит от API-ключа</span></span></div>
            <div className="input-section">
              {profile === "audio.stt" ? <Attachments key={profile + draft.model} label="Входное аудио" kinds={["audio"]} urlKinds={model.model === "openai/whisper-1" ? [] : ["audio"]} value={draft.attachments.file ?? []} multiple={false} onChange={(items) => setAttachments("file", items)} /> : <label className="field prompt-field"><span>{profile === "audio.tts" ? "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u043E\u0437\u0432\u0443\u0447\u0438\u0432\u0430\u043D\u0438\u044F" : profile === "chat" ? "\u041F\u0440\u043E\u043C\u0442" : "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"} <span className="required">*</span></span><textarea value={draft.prompt} onChange={(e) => update2({ prompt: e.target.value })} rows={profile === "chat" ? 4 : 3} maxLength={profile === "audio.tts" || profile === "music.media" ? 5e3 : 1e5} spellCheck={false} /><span className="textarea-footer"><small>{profile === "chat" ? "\u0422\u0435\u043A\u0441\u0442 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043A \u043C\u043E\u0434\u0435\u043B\u0438" : "\u041F\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043A\u043E\u0434"}</small><small>{draft.prompt.length.toLocaleString("ru-RU")} симв.</small></span></label>}
              {profile === "chat" ? <details className="system-instructions"><summary>Системный промт <span>необязательно</span><Icon name="chevron" size={15} /></summary><textarea aria-label="Системный промт" rows={3} value={draft.system} placeholder="Например: отвечай кратко и на русском языке" onChange={(e) => update2({ system: e.target.value })} maxLength={5e4} /></details> : null}
            </div>
            {profile === "chat" && (inputKinds.length || draft.attachments.chat?.length) ? <Attachments key={profile + draft.model} label="Вложения" kinds={inputKinds} urlKinds={chatUrlKinds} uploadKinds={chatUploadKinds} youtube={chatUrlKinds.includes("video")} value={draft.attachments.chat ?? []} onChange={(items) => setAttachments("chat", items)} /> : null}
            {retainedChat.length ? <div className="retained-value"><span>Вложение «{attachmentNames[retainedChat[0].kind]}» осталось от другой модели.</span><button className="text-button" onClick={() => setAttachments("chat", chatAttachments.filter((item) => !retainedChat.includes(item)))}>Убрать вложение</button></div> : null}
            {fileFields.map((field) => <Attachments key={draft.model + field.key} label={field.label} kinds={[mediaKinds[field.key]]} uploadKinds={field.key === "super_resolution_references" ? [] : [mediaKinds[field.key]]} {...field.minItems === void 0 ? {} : { min: field.minItems }} {...field.required ? { required: true } : {}} {...field.maxItems === void 0 ? {} : { max: field.maxItems }} value={draft.attachments[field.key] ?? []} onChange={(items) => setAttachments(field.key, items)} />)}
            {Object.entries(draft.attachments).filter(([key, items]) => items.length && !["chat", "file"].includes(key) && !fileFields.some((f) => f.key === key)).map(([key]) => <div className="retained-value" key={key}><span>Вложение {key} осталось от другой модели.</span><button className="text-button" onClick={() => setAttachments(key, [])}>Убрать вложение</button></div>)}
            {primaryFields.length ? <div className="parameters"><h2>Параметры <span>пустые не передаются</span></h2><div className="field-pair">{primaryFields.map((field) => <ParameterField key={field.key} field={field} value={effective.values[field.key] ?? ""} onChange={(v) => setValue(field.key, v)} />)}</div></div> : null}
            {profile === "chat" ? <label className="stream-toggle"><span><strong>Стриминг</strong><small>Получать ответ по частям, через SSE</small></span><input type="checkbox" role="switch" checked={effective.values.stream === "true"} onChange={(e) => setValue("stream", e.target.checked ? "true" : "false")} /><span className="toggle-track" aria-hidden="true" /></label> : null}
            <Routing draft={draft} providers={providers} isChat={profile === "chat"} onChange={(routing) => update2({ routing })} onRepresentation={(representation) => update2({ representation })} onReset={() => update2({ routing: emptyRouting(), representation: "body" })} />
            {advancedFields.length ? <details className="extra-parameters section-disclosure"><summary><span className="summary-title">Другие параметры</span><span className="summary-value">{advancedFields.length}</span><Icon name="chevron" /></summary><div className="disclosure-body"><div className="field-pair">{advancedFields.map((field) => <ParameterField key={field.key} field={field} value={effective.values[field.key] ?? ""} onChange={(v) => setValue(field.key, v)} />)}</div></div></details> : null}
            {retained.map((key) => <div className="retained-value" key={key}><span>Параметр {key} остался от другой модели.</span><button className="text-button" onClick={() => {
    const next = { ...draft.values };
    delete next[key];
    update2({ values: next });
  }}>Убрать параметр</button></div>)}
            {error2 ? <div className="config-error" role="alert"><strong>Проверьте настройки</strong><p>{error2.message}</p><code>{error2.field}</code>{draft.representation === "alias" ? <button className="text-button" onClick={() => update2({ representation: "body" })}>Переключить на Body</button> : null}<button className="text-button" onClick={() => update2(initialDraft(profile))}>Вернуться к примеру</button></div> : null}
          </section>
          <section className="code-section" aria-label="Код запроса">
            <div className="language-tabs" role="tablist" aria-label="Язык примера">{languages.map((l, index2) => <button key={l.id} role="tab" id={`${id}-language-${l.id}`} aria-selected={language === l.id} aria-controls={`${id}-code`} tabIndex={language === l.id ? 0 : -1} onKeyDown={(e) => moveTab(e, index2, languages.length, (n) => {
    setLanguage(languages[n].id);
    setFeedback("");
  })} onClick={() => {
    setLanguage(l.id);
    setFeedback("");
  }}>{l.name}</button>)}</div>
            <div className="code-window" role="tabpanel" id={`${id}-code`} aria-labelledby={`${id}-language-${language}`}>
              <div className="code-toolbar"><span className="file-name"><Icon name="code" size={14} />{entrypoint}</span><button className="copy-button" onClick={copy} disabled={!bundle || !!error2} aria-label="Скопировать код"><Icon name={feedback === "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E" ? "check" : "copy"} size={15} /><span>{feedback === "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E" ? "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E" : "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C"}</span></button></div>
              <div className="endpoint"><span>POST</span><code>{operations[profile].path}</code></div>
              {error2 ? <div className="code-empty"><Icon name="code" size={30} /><strong>Сначала исправьте настройки</strong><p>После этого здесь появится код запроса.</p></div> : <CodeText value={code} />}
              <div className="code-status"><span className="status-dot" /><span>{error2 ? "\u0415\u0441\u0442\u044C \u043E\u0448\u0438\u0431\u043A\u0438 \u0432 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u0445" : "\u041A\u043E\u0434 \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E"}</span><span>{code ? code.split("\n").length + " \u0441\u0442\u0440\u043E\u043A" : ""}</span></div>
            </div>
            <div className="code-actions"><p>{language === "openai-sdk" ? <>Node.js · <code>npm install openai</code>. </> : language === "python" ? <><code>pip install requests</code>. </> : language === "curl-bash" ? <>Bash · UTF-8. Windows: системный curl.exe или WSL. </> : null}</p><button className="download-button" onClick={download} disabled={!bundle || !!error2}><Icon name="download" size={16} />Скачать код</button></div>
            <p className="clipboard-feedback" role="status" aria-live="polite">{feedback}</p>
            {profile.endsWith(".media") ? <p className="result-note">{effective.values.async === "true" ? `${language === "curl-bash" ? "\u0417\u0430\u043C\u0435\u043D\u0438\u0442\u0435 TASK_ID \u0432 GET \u043D\u0430 id \u0438\u0437 \u043E\u0442\u0432\u0435\u0442\u0430 POST. " : ""}POST \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u0437\u0430\u0434\u0430\u0447\u0443, GET \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442 \u0435\u0451 \u0441\u0442\u0430\u0442\u0443\u0441. \u041F\u043E\u0432\u0442\u043E\u0440\u044F\u0439\u0442\u0435 GET \u0434\u043E completed; \u0433\u043E\u0442\u043E\u0432\u044B\u0435 \u0444\u0430\u0439\u043B\u044B \u0431\u0443\u0434\u0443\u0442 \u0432 \u043E\u0442\u0432\u0435\u0442\u0435.` : "POST \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442. \u0413\u043E\u0442\u043E\u0432\u044B\u0435 \u0444\u0430\u0439\u043B\u044B \u0431\u0443\u0434\u0443\u0442 \u0432 \u043E\u0442\u0432\u0435\u0442\u0435 API."}</p> : null}
            {advisory.length ? <p className="result-note">Для части параметров аудио есть общая схема API, но не хватает данных конкретного маршрута.</p> : null}
            {imageNotice ? <p className="result-note">Провайдеры этой модели не подтверждают приём картинки в чате. Запрос разрешён, но маршрут может отклонить изображение.</p> : null}
          </section>
        </div>
      </div>
      {!embedded ? <footer className="page-footer"><span>{catalogLabel}</span><span>Без запросов к моделям · Без ввода ключа</span></footer> : null}
    </main>
  </div>;
}

// src/ui/MintlifyBuilder.tsx
function MintlifyBuilder({ models, css }) {
  const [ready, setReady] = useState25(false);
  useEffect16(() => {
    setReady(true);
  }, []);
  return <div className={clsx("not-prose", "polza-builder-host")} aria-busy={!ready}>
    {ready ? <><style>{css}</style><RequestBuilder embedded {...models ? { models } : {}} /></> : <CatalogLoading embedded />}
  </div>;
}

// mintlify-entry.tsx
var adapterCss = `@font-face{font-family:PolzaBuilderManrope;src:url('/request-builder-assets/manrope.ttf') format('truetype');font-style:normal;font-weight:200 800;font-display:swap}\r
.polza-builder-host{font-family:PolzaBuilderManrope,Arial,sans-serif;font-synthesis:none;color:#232723;background:#f8f9f7;font-size:14px;line-height:1.5;font-weight:450}\r
.polza-builder-host *{box-sizing:border-box}.polza-builder-host{margin:0}.polza-builder-host button,.polza-builder-host input,.polza-builder-host textarea,.polza-builder-host select{font:inherit}.polza-builder-host button,.polza-builder-host a,.polza-builder-host input,.polza-builder-host textarea,.polza-builder-host select,.polza-builder-host summary{-webkit-tap-highlight-color:transparent}\r
.polza-builder-host button{cursor:pointer}.polza-builder-host button:disabled{cursor:not-allowed;opacity:.45}.polza-builder-host a{color:inherit;text-decoration:none}.polza-builder-host button{color:inherit}.polza-builder-host svg{flex-shrink:0}\r
.polza-builder-host button:focus-visible,.polza-builder-host a:focus-visible,.polza-builder-host summary:focus-visible,.polza-builder-host pre:focus-visible{outline:2px solid #689e08;outline-offset:4px}.polza-builder-host input:focus-visible,.polza-builder-host textarea:focus-visible,.polza-builder-host select:focus-visible{outline:2px solid #689e08;outline-offset:2px}\r
.polza-builder-host ::selection{background:#d4f69b;color:#182406}.polza-builder-host input,.polza-builder-host textarea{caret-color:#5b8d08}.polza-builder-host code{font-family:Consolas,'Liberation Mono',monospace;font-size:.9em}.polza-builder-host h1,.polza-builder-host h2,.polza-builder-host p{margin:0}.polza-builder-host button{transition:background-color .16s ease,color .16s ease,border-color .16s ease}\r
.polza-builder-host .preview-shell{--surface:#fff;--page:#fafafa;--soft:#f5f5f5;--line:#e5e5e5;--text:#202020;--muted:#666;--accent:#b2f72a;--accent-soft:#edfacf;--accent-ink:#36550d;min-height:100vh;background:var(--page);color:var(--text);color-scheme:light}\r
.polza-builder-host .site-header{height:76px;background:var(--surface);border-bottom:1px solid var(--line);display:flex;align-items:center;padding:0 max(32px,calc((100vw - 1184px)/2));gap:24px}\r
.polza-builder-host .brand{display:flex;align-items:center}.polza-builder-host .brand img{width:128px;height:auto}.polza-builder-host .header-divider{height:21px;width:1px;background:var(--line)}.polza-builder-host .header-label{font-weight:550;font-size:13px}.polza-builder-host .header-actions{margin-left:auto;display:flex;gap:18px;align-items:center}.polza-builder-host .local-label{color:var(--muted);font-size:12px}.polza-builder-host .local-label:before{content:'';display:inline-block;width:6px;height:6px;margin-right:7px;background:#7b8868;border-radius:50%}\r
.polza-builder-host .preview-width-button{border:1px solid var(--line);background:var(--surface);padding:7px 12px;border-radius:7px;font-size:12px}.polza-builder-host .preview-width-button:hover,.polza-builder-host .preview-width-button.is-active{background:var(--accent-soft);color:var(--accent-ink)}.polza-builder-host .icon-button{background:transparent;border:1px solid var(--line);width:34px;height:34px;display:grid;place-items:center;border-radius:7px}.polza-builder-host .icon-button:hover{background:var(--soft)}\r
.polza-builder-host .page{max-width:1184px;margin:0 auto;padding:26px 0 36px;container-type:inline-size}.polza-builder-host .page-article{max-width:760px}.polza-builder-host .breadcrumb{display:flex;align-items:center;gap:11px;color:var(--muted);font-size:11px;margin-bottom:29px}.polza-builder-host .breadcrumb [aria-current]{color:var(--text)}.polza-builder-host .breadcrumb a:hover{text-decoration:underline;text-underline-offset:4px}\r
.polza-builder-host .page-heading{display:flex;align-items:center;justify-content:space-between;gap:24px;margin-bottom:29px}.polza-builder-host .page-heading h1{font-size:32px;font-weight:760;line-height:1.3;letter-spacing:-.035em;text-wrap:balance}.polza-builder-host .page-heading p{margin-top:10px;color:var(--muted);font-size:13px;line-height:1.7;max-width:70ch}.polza-builder-host .guide-link{display:flex;gap:8px;align-items:center;font-size:12px;color:var(--muted);white-space:nowrap}.polza-builder-host .guide-link:hover{color:var(--accent-ink);text-decoration:underline;text-underline-offset:4px}\r
.polza-builder-host .builder{border:1px solid var(--line);border-radius:14px;background:var(--surface);min-width:0}.polza-builder-host .task-tabs{display:flex;padding:13px 20px;gap:8px;border-bottom:1px solid var(--line)}.polza-builder-host .task-tabs button{display:flex;gap:9px;align-items:center;border:0;background:transparent;border-radius:7px;padding:11px 20px;font-size:13px;color:var(--muted);font-weight:600}.polza-builder-host .task-tabs button:hover{background:var(--soft);color:var(--text)}.polza-builder-host .task-tabs button[aria-selected=true]{background:var(--accent-soft);color:var(--accent-ink)}\r
.polza-builder-host .builder-columns{display:grid;grid-template-columns:minmax(330px, .76fr) minmax(0, 1.24fr)}.polza-builder-host .configuration{padding:25px 27px 22px;border-right:1px solid var(--line);min-width:0}.polza-builder-host .code-section{padding:18px 23px 25px;min-width:0}.polza-builder-host .field-title{font-size:12px;font-weight:650;display:block;margin-bottom:9px}\r
.polza-builder-host .model-picker{position:relative}.polza-builder-host .model-picker>summary{list-style:none;display:flex;align-items:center;gap:12px;min-height:69px;padding:11px 13px;border:1px solid #dce1d6;border-radius:9px;cursor:pointer}.polza-builder-host .model-picker>summary::-webkit-details-marker{display:none}.polza-builder-host .model-picker>summary:hover{border-color:#a9b49a}.polza-builder-host .model-picker>summary>.model-selection{min-width:0;flex:1}.polza-builder-host .model-author{width:34px;height:34px;display:grid;place-items:center;background:var(--soft);border:1px solid var(--line);border-radius:8px;font-size:17px;font-weight:700}.polza-builder-host .model-selection strong{font-size:14px;font-weight:700;display:block}.polza-builder-host .model-selection small{display:block;font-size:11px;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px}.polza-builder-host .model-picker>summary>.model-selection strong{overflow-wrap:anywhere}\r
.polza-builder-host .model-caption{display:flex;justify-content:space-between;gap:10px;font-size:10px;margin-top:8px;color:var(--muted)}.polza-builder-host .model-menu{position:absolute;z-index:20;left:0;right:0;top:calc(100% + 6px);background:var(--surface);border:1px solid var(--line);border-radius:10px;overflow:hidden}.polza-builder-host .model-search{display:flex;align-items:center;padding:10px 12px;gap:9px;border-bottom:1px solid var(--line);color:var(--muted)}.polza-builder-host .model-search input{border:0;background:transparent;color:var(--text);padding:4px;width:100%;font-size:12px;min-width:0}.polza-builder-host .model-results{max-height:270px;overflow-y:auto;overscroll-behavior:contain;scrollbar-color:#a4b191 var(--soft);scrollbar-width:thin}.polza-builder-host .model-results button{display:flex;align-items:center;justify-content:space-between;text-align:left;gap:8px;width:100%;border:0;padding:10px 13px;background:transparent}.polza-builder-host .model-results button:hover{background:var(--soft)}.polza-builder-host .model-results button.selected{background:var(--accent-soft);color:var(--accent-ink)}.polza-builder-host .model-results button .model-result-name{min-width:0;flex:1}.polza-builder-host .model-results .model-author{width:30px;height:30px;flex:none;border:0;background:transparent}.polza-builder-host .model-author img{width:26px;height:26px;object-fit:contain}.polza-builder-host .model-author{flex:none;background:#fff;border-color:#e5e5e5}.polza-builder-host .model-results .model-author img{width:22px;height:22px}.polza-builder-host .model-results button{gap:10px}.polza-builder-host .model-results strong{display:block;font-size:12px;font-weight:650;overflow-wrap:anywhere}.polza-builder-host .model-results small{display:block;color:var(--muted);font-size:10px;overflow-wrap:anywhere}.polza-builder-host .model-count{display:block;border-top:1px solid var(--line);padding:8px 12px;font-size:10px;color:var(--muted)}.polza-builder-host .empty-models{padding:20px 14px;font-size:12px;color:var(--muted)}\r
.polza-builder-host .input-section{margin-top:23px}.polza-builder-host .field{display:flex;flex-direction:column;gap:7px;min-width:0;font-size:12px}.polza-builder-host .field>span:first-child{font-weight:650;min-height:18px}.polza-builder-host .field input:not([type=checkbox]):not([type=radio]),.polza-builder-host .field select,.polza-builder-host .field textarea,.polza-builder-host .system-instructions textarea{width:100%;border:1px solid #dce1d6;border-radius:7px;background:var(--surface);color:var(--text);padding:10px 11px;min-width:0;font-weight:450;font-size:12px;line-height:1.5}.polza-builder-host .field input:not([type=checkbox]):not([type=radio]),.polza-builder-host .field select{min-height:40px}.polza-builder-host .field input:not([type=checkbox]):not([type=radio]):hover,.polza-builder-host .field select:hover,.polza-builder-host .field textarea:hover{border-color:#b5bfa8}.polza-builder-host .field input:not([type=checkbox]):not([type=radio])::placeholder,.polza-builder-host .field textarea::placeholder,.polza-builder-host .system-instructions textarea::placeholder{color:#727c69;opacity:1}.polza-builder-host .field select{padding-right:25px;text-overflow:ellipsis}.polza-builder-host .field textarea,.polza-builder-host .system-instructions textarea{resize:vertical;min-height:104px;line-height:1.8}.polza-builder-host .prompt-field textarea{min-height:118px;padding:12px 13px;font-size:13px}.polza-builder-host .field small,.polza-builder-host .field-note{font-size:10px;line-height:1.6;color:var(--muted);font-weight:450}.polza-builder-host .required{font-size:12px;color:#637847;margin-left:3px}.polza-builder-host .textarea-footer{display:flex;justify-content:space-between;gap:8px;margin-top:-2px}.polza-builder-host .field-pair{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px 14px}.polza-builder-host .field-pair>.field:only-child{grid-column:1 / -1}\r
.polza-builder-host .system-instructions{margin-top:12px}.polza-builder-host .system-instructions summary{display:flex;align-items:center;gap:8px;font-size:11px;cursor:pointer;color:var(--muted);list-style:none}.polza-builder-host .system-instructions summary>span{font-size:10px;margin-left:auto}.polza-builder-host .system-instructions textarea{margin-top:10px}.polza-builder-host .system-instructions[open] summary svg{transform:rotate(180deg)}\r
.polza-builder-host .parameters{margin-top:24px}.polza-builder-host .parameters h2{font-size:12px;font-weight:700;margin-bottom:12px;display:flex;align-items:center;justify-content:space-between;gap:8px}.polza-builder-host .parameters h2 span{font-size:10px;font-weight:450;color:var(--muted)}.polza-builder-host .stream-toggle{display:flex;align-items:center;gap:14px;position:relative;margin:21px 0 4px;cursor:pointer}.polza-builder-host .stream-toggle>span:first-child{flex:1}.polza-builder-host .stream-toggle strong{display:block;font-size:12px;font-weight:600}.polza-builder-host .stream-toggle small{display:block;font-size:10px;color:var(--muted);margin-top:3px}.polza-builder-host .stream-toggle input{position:absolute;right:0;width:34px;height:20px;opacity:0;cursor:pointer;z-index:1}.polza-builder-host .toggle-track{width:33px;height:19px;border-radius:10px;background:#dce2d4;transition:background-color .18s ease}.polza-builder-host .toggle-track:after{content:'';display:block;width:13px;height:13px;background:white;border-radius:50%;position:relative;top:3px;left:3px;transition:transform .18s ease}.polza-builder-host .stream-toggle input:checked+.toggle-track{background:#8aca19}.polza-builder-host .stream-toggle input:checked+.toggle-track:after{transform:translateX(14px)}.polza-builder-host .stream-toggle input:focus-visible+.toggle-track{outline:2px solid #689e08;outline-offset:3px}\r
.polza-builder-host .section-disclosure{margin-top:24px;border-top:1px solid var(--line)}.polza-builder-host .section-disclosure>summary{display:flex;align-items:center;gap:8px;list-style:none;cursor:pointer;min-height:57px;padding-top:1px;font-size:12px}.polza-builder-host .section-disclosure>summary .summary-title{display:flex;align-items:center;gap:9px;font-weight:650}.polza-builder-host .summary-value{margin-left:auto;font-size:10px;color:var(--muted);max-width:45%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.polza-builder-host .section-disclosure>summary>svg{color:var(--muted);width:15px}.polza-builder-host .section-disclosure[open]>summary>svg{transform:rotate(180deg)}.polza-builder-host .disclosure-body{display:flex;flex-direction:column;gap:16px;padding-bottom:15px}.polza-builder-host .representation{margin:0;padding:0;border:0;display:flex;gap:22px;align-items:center;font-size:11px}.polza-builder-host .representation legend{font-size:11px;margin-bottom:9px;font-weight:600}.polza-builder-host .representation label{display:flex;gap:6px;align-items:center;cursor:pointer}.polza-builder-host .representation input{accent-color:#648e0f;margin:0}.polza-builder-host .advanced-routing{border-top:1px solid var(--line);padding-top:12px}.polza-builder-host .advanced-routing>summary{list-style:none;display:flex;justify-content:space-between;align-items:center;font-size:11px;font-weight:600;cursor:pointer}.polza-builder-host .advanced-routing[open]>summary{margin-bottom:14px}.polza-builder-host .advanced-routing[open]>summary svg{transform:rotate(180deg)}.polza-builder-host .advanced-routing code{color:var(--muted);font-size:10px;font-weight:400}.polza-builder-host .field-note{margin:5px 0 12px}.polza-builder-host .price-fields{margin-top:12px}.polza-builder-host .text-button,.polza-builder-host .inline-button{padding:0;border:0;background:none;color:var(--accent-ink);font-size:11px;text-align:left;width:fit-content;text-decoration:underline;text-underline-offset:3px}.polza-builder-host .text-button:hover,.polza-builder-host .inline-button:hover{color:#5a8218}.polza-builder-host .extra-parameters{margin-top:0}.polza-builder-host .field-unavailable{opacity:.8}.polza-builder-host .unavailable-value{font-size:10px;line-height:1.6;font-weight:450;color:var(--muted);min-height:40px;padding:10px 0}.polza-builder-host .retained-value{display:flex;flex-direction:column;gap:6px;font-size:11px;margin-top:15px}.polza-builder-host .config-error{margin-top:18px;border:1px solid #efc8a9;border-radius:8px;padding:13px;background:#fff8ed;font-size:11px;color:#713e0d}.polza-builder-host .config-error>strong{font-size:12px}.polza-builder-host .config-error>p{margin:5px 0 7px;line-height:1.7}.polza-builder-host .config-error>code{display:block;overflow-wrap:anywhere}.polza-builder-host .config-error .text-button{display:block;color:#713e0d;margin-top:8px}\r
.polza-builder-host .language-tabs{display:flex;align-items:center;gap:18px;padding:0 3px;min-height:39px;margin-bottom:12px;overflow-x:auto;scrollbar-width:thin}.polza-builder-host .language-tabs button{border:0;border-bottom:2px solid transparent;background:none;padding:9px 0;font-size:12px;font-weight:550;color:var(--muted);white-space:nowrap}.polza-builder-host .language-tabs button[aria-selected=true]{color:var(--text);border-color:#90c725;font-weight:750}.polza-builder-host .language-tabs button:hover{color:var(--text)}.polza-builder-host .code-window{background:#171b20;border-radius:10px;overflow:hidden;color:#e8eae6}.polza-builder-host .code-toolbar{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:49px;background:#20252b;padding:0 12px;border-bottom:1px solid #333941}.polza-builder-host .file-tabs{display:flex;gap:7px;min-width:0}.polza-builder-host .file-tabs button{display:flex;align-items:center;gap:7px;font-family:Consolas,'Liberation Mono',monospace;border:0;border-radius:5px;background:transparent;color:#aeb6be;padding:5px 7px;font-size:11px;white-space:nowrap}.polza-builder-host .file-tabs button.active{color:#eef2e9;background:#343b43}.polza-builder-host .file-tabs button:hover{color:#fff}.polza-builder-host .copy-button{border:1px solid #47505a;border-radius:5px;display:flex;gap:6px;align-items:center;color:#d9e1d2;background:transparent;padding:5px 8px;font-size:10px;white-space:nowrap;min-height:28px}.polza-builder-host .copy-button:hover{background:#333d45}.polza-builder-host .endpoint{display:flex;align-items:center;gap:10px;padding:10px 19px 11px;border-bottom:1px solid #30363e;color:#c2cad1;font-size:10px}.polza-builder-host .endpoint>span{font-family:Consolas,monospace;font-size:10px;color:#c3ea87;font-weight:700}.polza-builder-host .endpoint code{font-size:10px;overflow-wrap:anywhere}\r
.polza-builder-host .code-text{margin:0;padding:16px 18px 16px 0;height:476px;overflow:auto;font-family:Consolas,'Liberation Mono',monospace;font-size:11px;line-height:1.9;tab-size:4;scrollbar-color:#515e6b #171b20;scrollbar-width:thin;white-space:pre-wrap;overflow-wrap:anywhere}.polza-builder-host .code-text code{font:inherit}.polza-builder-host .code-line{display:block;position:relative;padding-left:47px;min-height:20.9px}.polza-builder-host .code-line:before{content:attr(data-line);position:absolute;left:0;width:32px;text-align:right;color:#909ba7;user-select:none;font-variant-numeric:tabular-nums}.polza-builder-host .syntax-string{color:#c0de9c}.polza-builder-host .syntax-keyword{color:#d8b5ed}.polza-builder-host .syntax-comment{color:#95a5b2}.polza-builder-host .code-status{min-height:35px;border-top:1px solid #30363e;display:flex;align-items:center;padding:8px 14px;gap:7px;font-size:9px;color:#a8b4bf}.polza-builder-host .status-dot{background:#aadf63;width:5px;height:5px;border-radius:50%}.polza-builder-host .code-status>span:last-child{margin-left:auto}.polza-builder-host .code-empty{height:476px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:12px;padding:30px;color:#bdc7d1}.polza-builder-host .code-empty strong{font-size:13px;color:#e3e7e1}.polza-builder-host .code-empty p{font-size:11px}\r
.polza-builder-host .code-actions{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:16px}.polza-builder-host .code-actions p{font-size:10px;color:var(--muted);line-height:1.7}.polza-builder-host .code-actions code{font-size:10px}.polza-builder-host .code-actions .inline-button{font-family:Consolas,monospace;font-size:10px;color:var(--muted)}.polza-builder-host .download-button{display:flex;align-items:center;gap:7px;flex-shrink:0;background:var(--accent);border:1px solid transparent;color:#213700;border-radius:7px;padding:8px 12px;font-size:11px;font-weight:700;min-height:36px}.polza-builder-host .download-button:hover{background:#a2e127}.polza-builder-host .clipboard-feedback{font-size:10px;color:var(--accent-ink);min-height:17px;margin-top:7px}.polza-builder-host .usage-note{display:flex;gap:10px;align-items:center;color:var(--muted);padding-top:9px}.polza-builder-host .usage-note svg{color:#6f795f}.polza-builder-host .usage-note p{font-size:10px;line-height:1.7}.polza-builder-host .result-note{font-size:10px;color:var(--muted);line-height:1.8;margin-top:11px;max-width:65ch}.polza-builder-host .page-footer{display:flex;justify-content:space-between;gap:12px;margin-top:18px;font-size:10px;color:var(--muted)}.polza-builder-host .audio-modes{display:flex;gap:4px;background:var(--soft);border-radius:7px;padding:4px;margin-bottom:20px}.polza-builder-host .audio-modes button{border:0;background:transparent;color:var(--muted);font-size:11px;flex:1;border-radius:5px;padding:7px}.polza-builder-host .audio-modes button[aria-pressed=true]{background:var(--surface);color:var(--text);font-weight:700}\r
.polza-builder-host .theme-dark,:is(.dark, [data-theme="dark"]) .polza-builder-host .preview-shell{--surface:#101010;--page:#0c0c0c;--soft:#191919;--line:#2a2a2a;--text:#eee;--muted:#aaa;--accent-soft:#202916;--accent-ink:#b8df87;color-scheme:dark}.polza-builder-host .theme-dark .brand img,:is(.dark, [data-theme="dark"]) .polza-builder-host .preview-shell .brand img{filter:brightness(0) invert(1)}.polza-builder-host .theme-dark .field input:not([type=checkbox]):not([type=radio]),:is(.dark, [data-theme="dark"]) .polza-builder-host .preview-shell .field input:not([type=checkbox]):not([type=radio]),.polza-builder-host .theme-dark .field select,:is(.dark, [data-theme="dark"]) .polza-builder-host .preview-shell .field select,.polza-builder-host .theme-dark .field textarea,:is(.dark, [data-theme="dark"]) .polza-builder-host .preview-shell .field textarea,.polza-builder-host .theme-dark .model-picker>summary,:is(.dark, [data-theme="dark"]) .polza-builder-host .preview-shell .model-picker>summary,.polza-builder-host .theme-dark .system-instructions textarea,:is(.dark, [data-theme="dark"]) .polza-builder-host .preview-shell .system-instructions textarea{border-color:#393939}.polza-builder-host .theme-dark .field input:not([type=checkbox]):not([type=radio])::placeholder,:is(.dark, [data-theme="dark"]) .polza-builder-host .preview-shell .field input:not([type=checkbox]):not([type=radio])::placeholder,.polza-builder-host .theme-dark .field textarea::placeholder,:is(.dark, [data-theme="dark"]) .polza-builder-host .preview-shell .field textarea::placeholder{color:#aaa}.polza-builder-host .theme-dark .config-error,:is(.dark, [data-theme="dark"]) .polza-builder-host .preview-shell .config-error{background:#342817;color:#f0c88c;border-color:#6d5026}.polza-builder-host .theme-dark .config-error .text-button,:is(.dark, [data-theme="dark"]) .polza-builder-host .preview-shell .config-error .text-button{color:#f0c88c}.polza-builder-host .theme-dark .required,:is(.dark, [data-theme="dark"]) .polza-builder-host .preview-shell .required{color:#b1ca8c}.polza-builder-host .theme-dark .text-button:hover,:is(.dark, [data-theme="dark"]) .polza-builder-host .preview-shell .text-button:hover{color:#d1edaa}\r
@container (max-width:900px){.polza-builder-host .builder-columns{grid-template-columns:minmax(0,1fr)}.polza-builder-host .configuration{border-right:0;border-bottom:1px solid var(--line);padding:24px}.polza-builder-host .code-section{padding:21px 24px 24px}.polza-builder-host .model-caption{justify-content:flex-start;gap:16px}.polza-builder-host .configuration>.parameters>.field-pair{grid-template-columns:repeat(2,minmax(0,1fr))}.polza-builder-host .code-text{height:440px}.polza-builder-host .guide-link{display:none}}\r
@media(max-width:1240px){.polza-builder-host .page{margin-left:32px;margin-right:32px}.polza-builder-host .page-article{margin-left:auto;margin-right:auto}.polza-builder-host .site-header{padding:0 32px}.polza-builder-host .language-tabs{gap:16px}.polza-builder-host .code-section{padding-left:19px;padding-right:19px}.polza-builder-host .configuration{padding-left:23px;padding-right:23px}}\r
@media(max-width:820px){.polza-builder-host .page{margin-left:24px;margin-right:24px}.polza-builder-host .site-header{padding:0 24px;height:66px}.polza-builder-host .header-actions{gap:12px}.polza-builder-host .page-heading h1{font-size:29px}.polza-builder-host .page-heading p{max-width:58ch}.polza-builder-host .local-label{display:none}.polza-builder-host .breadcrumb{font-size:10px;gap:8px;margin-bottom:24px}.polza-builder-host .page-heading{margin-bottom:24px}.polza-builder-host .task-tabs button{padding-left:15px;padding-right:15px}}\r
@media(max-width:520px){.polza-builder-host .site-header{padding:0 18px;gap:14px;height:62px}.polza-builder-host .brand img{width:105px}.polza-builder-host .header-divider,.polza-builder-host .header-label{display:none}.polza-builder-host .header-actions{gap:8px}.polza-builder-host .preview-width-button{font-size:10px;padding:6px 8px}.polza-builder-host .icon-button{height:30px;width:30px}.polza-builder-host .page{padding:20px 0 24px;margin:0 16px}.polza-builder-host .breadcrumb{gap:7px;font-size:9px;margin-bottom:22px}.polza-builder-host .breadcrumb>span:nth-last-child(2){display:none}.polza-builder-host .breadcrumb [aria-current]{display:none}.polza-builder-host .page-heading h1{font-size:26px;line-height:1.35;letter-spacing:-.03em}.polza-builder-host .page-heading p{font-size:12px;margin-top:9px;line-height:1.7;max-width:34ch}.polza-builder-host .page-heading{margin-bottom:21px}.polza-builder-host .builder{border-radius:11px}.polza-builder-host .task-tabs{gap:3px;padding:9px 8px;justify-content:space-between}.polza-builder-host .task-tabs button{padding:10px 7px;font-size:10px;gap:5px}.polza-builder-host .task-tabs button svg{width:15px;height:15px}.polza-builder-host .configuration{padding:19px 17px}.polza-builder-host .model-caption{font-size:9px;justify-content:space-between;gap:6px}.polza-builder-host .model-picker>summary{min-height:67px}.polza-builder-host .model-selection strong{font-size:13px}.polza-builder-host .model-selection small{font-size:10px}.polza-builder-host .parameters{margin-top:21px}.polza-builder-host .field-pair{gap:15px 12px}.polza-builder-host .field input,.polza-builder-host .field select{font-size:12px;min-height:43px}.polza-builder-host .field-pair .field>span:first-child{font-size:11px}.polza-builder-host .field small{font-size:9px}.polza-builder-host .parameters h2 span{font-size:9px}.polza-builder-host .section-disclosure{margin-top:20px}.polza-builder-host .code-section{padding:15px 13px 19px}.polza-builder-host .language-tabs{gap:17px;padding:0 2px;margin-bottom:10px}.polza-builder-host .language-tabs button{font-size:10px}.polza-builder-host .code-toolbar{padding:0 8px;gap:5px}.polza-builder-host .file-tabs{gap:3px}.polza-builder-host .file-tabs button{font-size:10px;padding:5px}.polza-builder-host .file-tabs button svg{display:none}.polza-builder-host .copy-button{padding:6px;font-size:9px;gap:4px}.polza-builder-host .copy-button svg{width:12px;height:12px}.polza-builder-host .code-text{height:420px;font-size:10px;line-height:1.9;padding-right:11px}.polza-builder-host .code-line{padding-left:34px;min-height:19px}.polza-builder-host .code-line:before{width:23px}.polza-builder-host .endpoint{padding:9px 12px;font-size:9px;gap:7px}.polza-builder-host .endpoint code{font-size:9px}.polza-builder-host .code-actions{gap:8px;align-items:flex-start}.polza-builder-host .code-actions p{font-size:9px;max-width:170px}.polza-builder-host .code-actions code{font-size:9px;overflow-wrap:anywhere}.polza-builder-host .download-button{font-size:10px;padding:8px 10px}.polza-builder-host .page-footer{flex-direction:column;font-size:9px;gap:5px;margin-top:15px}.polza-builder-host .representation{gap:16px}.polza-builder-host .system-instructions summary{font-size:10px}.polza-builder-host .summary-value{font-size:9px;max-width:38%}}\r
@media(prefers-reduced-motion:reduce){.polza-builder-host *,.polza-builder-host *:before,.polza-builder-host *:after{transition:none!important;animation:none!important}}\r
\r
.polza-builder-host .file-name{display:flex;align-items:center;gap:8px;color:inherit;font-size:11px;min-width:0}\r
.polza-builder-host .provider-list{margin:0;padding:0;border:0;min-width:0;display:grid;gap:8px}\r
.polza-builder-host .provider-list legend{font-weight:650;font-size:12px;margin-bottom:10px}\r
.polza-builder-host .provider-list>label{display:flex;align-items:center;gap:8px;font-size:12px;overflow-wrap:anywhere}\r
.polza-builder-host .provider-list small{font-size:11px;color:var(--muted)}\r
.polza-builder-host .provider-list input{accent-color:var(--accent-ink);width:15px;height:15px;min-height:0;margin:0;padding:0;flex:none}\r
.polza-builder-host .provider-list:disabled label,.polza-builder-host .provider-list:disabled .provider-order{opacity:.5}\r
.polza-builder-host .provider-order{padding-left:22px;margin:4px 0;font-size:12px}\r
.polza-builder-host .provider-order li{padding:4px 0;overflow-wrap:anywhere}\r
.polza-builder-host .provider-order button{margin-left:8px}\r
.polza-builder-host .provider-picker{gap:10px}\r
.polza-builder-host .provider-order li{display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid var(--line)}\r
.polza-builder-host .provider-order li:last-child{border-bottom:0}\r
.polza-builder-host .provider-order .provider-name{flex:1 1 auto;overflow-wrap:anywhere}\r
.polza-builder-host .provider-order .drag-handle{cursor:grab;color:var(--muted);font-size:13px;line-height:1;touch-action:none;user-select:none;-webkit-user-select:none}\r
.polza-builder-host .provider-order li.dragging{opacity:.45}\r
.polza-builder-host .provider-order li.drop-target{border-bottom-color:var(--accent)}\r
.polza-builder-host .provider-order button{margin-left:0}\r
.polza-builder-host .field-link{font-size:10px;color:var(--accent-ink);text-decoration:underline;text-underline-offset:3px}\r
\r
.polza-builder-host .preview-shell{--ease-out:cubic-bezier(.23,1,.32,1)}\r
.polza-builder-host .select-trigger{display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;min-width:0;min-height:42px;padding:10px 11px;border:1px solid var(--line);border-radius:8px;background:var(--surface);color:var(--text);font-size:12px;line-height:1.5;text-align:left;font-weight:450}\r
.polza-builder-host .select-trigger>span:first-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\r
.polza-builder-host .select-trigger>span:last-child{display:flex;align-items:center;color:var(--muted)}\r
.polza-builder-host .select-trigger:hover,.polza-builder-host .select-trigger[data-popup-open]{border-color:var(--muted)}\r
.polza-builder-host .select-trigger[data-popup-open]>span:last-child{transform:rotate(180deg)}\r
.polza-builder-host .select-positioner{z-index:80;isolation:isolate;max-width:calc(100vw - 24px)}\r
.polza-builder-host .select-popup{min-width:var(--anchor-width);max-height:min(320px,var(--available-height));overflow:hidden;padding:5px;background:var(--surface);color:var(--text);border:1px solid var(--line);border-radius:9px;box-shadow:0 8px 24px #0002;font:inherit}\r
.polza-builder-host .select-list{max-height:300px;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:var(--muted) var(--surface);outline:none}\r
.polza-builder-host .select-option{display:flex;align-items:center;justify-content:space-between;gap:18px;min-height:36px;padding:8px 10px;border-radius:5px;font-size:12px;cursor:default;outline:none;overflow-wrap:anywhere}\r
.polza-builder-host .select-option[data-highlighted]{background:var(--soft)}\r
.polza-builder-host .select-option[data-selected]{color:var(--accent-ink);font-weight:650}\r
.polza-builder-host .select-option[data-disabled]{opacity:.5}\r
.polza-builder-host .disclosure-trigger{display:flex;align-items:center;gap:8px;width:100%;padding:0;border:0;background:transparent;text-align:left;min-height:57px;font-size:12px;color:var(--text)}\r
.polza-builder-host .disclosure-trigger .summary-title{display:flex;align-items:center;gap:9px;font-weight:650}\r
.polza-builder-host .disclosure-trigger>svg{margin-left:auto;color:var(--muted);transition:transform 200ms var(--ease-out)}\r
.polza-builder-host .disclosure-trigger[aria-expanded=true]>svg{transform:rotate(180deg)}\r
.polza-builder-host .disclosure-panel{height:var(--collapsible-panel-height);overflow:hidden;transition:height 200ms var(--ease-out),opacity 200ms var(--ease-out)}\r
.polza-builder-host .disclosure-panel[data-starting-style],.polza-builder-host .disclosure-panel[data-ending-style]{height:0;opacity:0}\r
.polza-builder-host [data-instant]>.disclosure-panel,.polza-builder-host [data-instant]>.disclosure-trigger>svg{transition:none}\r
.polza-builder-host .advanced-routing>.disclosure-trigger{font-size:11px;min-height:30px}\r
.polza-builder-host .advanced-routing>.disclosure-panel>.disclosure-body{padding-top:12px}\r
.polza-builder-host .attachment-field{border:0;padding:0;margin:20px 0 0;min-width:0;display:flex;flex-direction:column;gap:10px}\r
.polza-builder-host .attachment-field legend{font-size:12px;font-weight:650;margin-bottom:10px}\r
.polza-builder-host .attachment-items{list-style:none;margin:0;padding:0;display:grid;gap:7px}\r
.polza-builder-host .attachment-items li{display:flex;align-items:center;gap:9px;min-width:0;background:var(--soft);border:1px solid var(--line);border-radius:7px;padding:9px 10px}\r
.polza-builder-host .attachment-items li>span{flex:1;min-width:0}\r
.polza-builder-host .attachment-items strong{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px;font-weight:550}\r
.polza-builder-host .attachment-items small{font-size:10px;color:var(--muted)}\r
.polza-builder-host .attachment-remove{border:0;background:transparent;padding:4px;display:flex;border-radius:4px;color:var(--muted)}\r
.polza-builder-host .attachment-remove:hover{background:var(--surface);color:var(--text)}\r
.polza-builder-host .attachment-url{display:flex;gap:7px;align-items:stretch;flex-wrap:wrap}\r
.polza-builder-host .attachment-url .select-trigger{flex:1 0 100%}\r
.polza-builder-host .attachment-url input{flex:1;min-width:80px;width:0;border:1px solid var(--line);border-radius:7px;padding:9px 10px;background:var(--surface);color:var(--text);font-size:12px}\r
.polza-builder-host .attachment-add{border:1px solid var(--line);border-radius:7px;background:var(--soft);padding:8px 10px;font-size:11px}\r
.polza-builder-host .attachment-upload{position:relative;display:flex;justify-content:center;align-items:center;gap:8px;border:1px dashed var(--line);border-radius:7px;padding:12px;background:var(--surface);font-size:12px;cursor:pointer}\r
.polza-builder-host .attachment-upload:hover{background:var(--soft);border-color:var(--muted)}\r
.polza-builder-host .attachment-upload:focus-within{outline:2px solid #689e08;outline-offset:2px}\r
.polza-builder-host .attachment-upload input{position:absolute;inset:0;width:100%;height:100%;opacity:0;cursor:pointer}\r
.polza-builder-host .attachment-hint{font-size:10px;color:var(--muted);line-height:1.6}\r
.polza-builder-host .attachment-error{color:#a83c21;font-size:11px;line-height:1.6}\r
.polza-builder-host .theme-dark .attachment-error,:is(.dark, [data-theme="dark"]) .polza-builder-host .preview-shell .attachment-error{color:#f5a48f}\r
@media(prefers-reduced-motion:reduce){.polza-builder-host .disclosure-panel,.polza-builder-host .disclosure-trigger>svg{transition:none}}\r
.polza-builder-host .catalog-status{max-width:1184px;margin:12px auto;padding:10px 16px;font:13px/1.6 Arial,sans-serif;overflow-wrap:anywhere}\r
.polza-builder-host .catalog-status button{margin-left:12px;padding:4px 8px}\r
.polza-builder-host .task-tabs{overflow-x:auto;scrollbar-width:thin}.polza-builder-host .task-tabs button{flex-shrink:0}\r

.polza-builder-host{display:block;min-width:0;width:100%;background:transparent;font-size:14px;line-height:1.5}
.polza-builder-host .preview-shell{min-height:0;background:transparent}
.polza-builder-host .page{max-width:none;margin:0;padding:0;width:100%}
.polza-builder-host .builder{border:0;border-radius:0;background:transparent}
.polza-builder-host .task-tabs{padding:0;gap:24px;margin-bottom:24px;border-bottom:1px solid var(--line)}
.polza-builder-host .task-tabs button{border-radius:0;padding:12px 0 15px;gap:8px;font-size:13px;background:transparent;border-bottom:2px solid transparent;margin-bottom:-1px}
.polza-builder-host .task-tabs button[aria-selected=true]{background:transparent;border-bottom-color:var(--accent);color:var(--text)}
.polza-builder-host .builder-columns{grid-template-columns:minmax(260px,.9fr) minmax(0,1.1fr);gap:26px;align-items:start}
.polza-builder-host .configuration{padding:0;border:0}
.polza-builder-host .code-section{padding:0;position:sticky;top:140px}
.polza-builder-host .language-tabs{gap:16px;margin-bottom:14px;min-height:24px;padding:0}
.polza-builder-host .language-tabs button{font-size:11px;padding-top:0;min-height:24px}
.polza-builder-host .code-text{height:490px;font-size:11px}
.polza-builder-host .code-window{border:1px solid #303030;border-radius:10px}
.polza-builder-host .model-picker>summary{min-height:64px;background:var(--soft);border-color:var(--line)}
.polza-builder-host .model-caption{font-size:10px;gap:8px;flex-wrap:wrap;justify-content:flex-start}
.polza-builder-host .field-title{font-size:13px;margin-bottom:10px}
.polza-builder-host .field>span:first-child{font-size:12px}
.polza-builder-host .field input:not([type=checkbox]):not([type=radio]),.polza-builder-host .field select,.polza-builder-host .field textarea{border-color:var(--line);font-size:13px;border-radius:8px;min-height:42px}
.polza-builder-host .prompt-field textarea{min-height:112px}
.polza-builder-host .input-section{margin-top:24px}
.polza-builder-host .parameters h2{font-size:13px}
.polza-builder-host .usage-note p,.polza-builder-host .code-actions p{font-size:11px}
.polza-builder-host .download-button{font-size:11px;padding:8px 10px;min-height:36px}
.polza-builder-host .code-actions{flex-wrap:wrap;align-items:center;gap:12px}
.polza-builder-host .code-actions p{max-width:180px;overflow-wrap:anywhere}
@container (max-width:700px){
.polza-builder-host .builder-columns{grid-template-columns:minmax(0,1fr);gap:26px}
.polza-builder-host .code-section{position:static;border-top:1px solid var(--line);padding-top:20px}
.polza-builder-host .task-tabs{gap:0;justify-content:space-between}
.polza-builder-host .task-tabs button{font-size:11px;gap:5px}
.polza-builder-host .task-tabs button svg{width:15px;height:15px}
.polza-builder-host .language-tabs{justify-content:space-between;gap:8px}
.polza-builder-host .code-text{height:420px}
}
.polza-builder-host .model-menu{z-index:40}
.polza-builder-host .builder{margin:0}
.polza-builder-host p:empty{display:none}
`;
var PolzaRequestBuilder = () => <MintlifyBuilder css={adapterCss} />;
export {
  PolzaRequestBuilder
};
