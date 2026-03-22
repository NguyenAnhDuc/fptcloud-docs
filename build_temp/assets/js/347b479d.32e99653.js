"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[81381],{

/***/ 114750
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_huong_dan_su_dung_grafana_contact_point_md_347_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-huong-dan-su-dung-grafana-contact-point-md-347.json
const site_docs_huong_dan_su_dung_grafana_contact_point_md_347_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"huong-dan-su-dung-grafana/contact-point","title":"2. Hướng dẫn sử dụng Grafana","description":"6.2. Cấu hình contact point","source":"@site/docs/huong-dan-su-dung-grafana/contact-point.md","sourceDirName":"huong-dan-su-dung-grafana","slug":"/huong-dan-su-dung-grafana/contact-point","permalink":"/huong-dan-su-dung-grafana/contact-point","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Contact point","title":"2. Hướng dẫn sử dụng Grafana","source":"https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=contact-point","parent":"https://fptcloud.com/documents/huong-dan-su-dung-grafana","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cau hoi thuong gap","permalink":"/huong-dan-su-dung-grafana/cau-hoi-thuong-gap"},"next":{"title":"Huong dan tich hop database","permalink":"/huong-dan-su-dung-grafana/huong-dan-tich-hop-database"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/huong-dan-su-dung-grafana/contact-point.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Contact point',
	title: '2. Hướng dẫn sử dụng Grafana',
	source: 'https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=contact-point',
	parent: 'https://fptcloud.com/documents/huong-dan-su-dung-grafana',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Hướng dẫn sử dụng Grafana';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-hướng-dẫn-sử-dụng-grafana",
        children: "2. Hướng dẫn sử dụng Grafana"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6.2. Cấu hình contact point"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Có nhiều contact point khác nhau như Slack, Discord, Webhook, Email, Teams, Telegram ... và mỗi contact point sẽ có cách cấu hình khác nhau."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dưới đây là hướng dẫn cụ thể cho cấu hình Telegram để gửi thông báo khi kích hoạt alert."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Các cách cấu hình cho các contact point khác, bạn tham khảo hướng dẫn chi tiết tại trang chủ Grafana ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points",
          children: "TẠI ĐÂY"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để tích hợp Grafana với Telegram, bạn cần có:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Telegram bot API token"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chat ID (ID của cuộc trò chuyện Telegram nơi bạn muốn nhận thông báo alert)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để hoàn tất việc tích hợp, bạn cần sử dụng phiên bản Telegram trên trình duyệt (web)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Cách thiết lập Telegram bot"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thực hiện các bước sau để thiết lập bot:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Mở ứng dụng Telegram trên thiết bị của bạn."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tìm bot có tên BotFather."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Gõ hoặc chọn lệnh /newbot."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn tên cho bot (tên phải kết thúc bằng bot hoặc _bot, ví dụ: my_bot)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sao chép API token."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Cách lấy Chat ID"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thêm bot vào một group chat theo các bước dưới đây. Sau khi bot được thêm vào group, bạn có thể định tuyến thông báo alert đến group đó."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trong Telegram, mở một group có sẵn hoặc tạo group mới."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tìm và thêm bot vào group."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sao chép chat ID từ URL trên thanh địa chỉ của trình duyệt."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["URL sẽ có dạng: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://web.telegram.org/a/#-4266674385",
        children: "https://web.telegram.org/a/#-4266674385"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chat ID là dãy số nằm sau ký tự #, ví dụ: -4266674385."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Thực hiện cấu hình"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để tạo tích hợp Telegram trong Grafana Alerting, thực hiện các bước sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Truy cập Alerts → Alerting → Contact points."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(612493)/* ["default"] */ .A) + "",
        width: "228",
        height: "603"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhấn + Add contact point."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(621161)/* ["default"] */ .A) + "",
        width: "1243",
        height: "484"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nhập tên contact point."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Trong danh sách Integration, chọn Telegram."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tại trường BOT API Token, dán bot API token."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tại trường Chat ID, dán chat ID."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nhấn Test để kiểm tra tích hợp hoạt động đúng."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Nhấn Save contact point."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lúc này, Contact point Telegram đã sẵn sàng để nhận thông báo alert."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(674024)/* ["default"] */ .A) + "",
        width: "1243",
        height: "564"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Để gán contact point này cho alert, thực hiện các bước sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trong Grafana, truy cập Alerting → Alert rules."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chỉnh sửa alert rule hiện có hoặc tạo alert rule mới."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cuộn xuống phần Configure labels and notifications."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tại mục Notifications, chọn Select contact point."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn contact point Telegram đã tạo trước đó từ danh sách."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nhấn Save rule and exit."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tao-alert-rule",
        children: " Previous 6.1. Tạo alert rule "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./usage",
        children: " Next 7. Hướng dẫn kiểm tra trạng thái usage (timeseries, log, trace) trên trang console portal "
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 612493
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/308c5dfa34ca-Screenshot_43-d0c3cc38266724c3762cdf94c2381d49.png");

/***/ },

/***/ 621161
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c0aae8f04dc3-Screenshot_44-da659cee41e9e23c6534bb3be7e4721c.png");

/***/ },

/***/ 674024
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d7a0f2580212-Screenshot_45-fb06af72279183858ee9c842bc6d88d5.png");

/***/ },

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);