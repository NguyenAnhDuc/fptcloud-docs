"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[11323],{

/***/ 658186
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_guard_index_md_0f5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-guard-index-md-0f5.json
const site_docs_cloud_guard_index_md_0f5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-guard/index","title":"2. FPT Cloud Guard","description":"FPT Cloud Guard","source":"@site/docs/cloud-guard/index.md","sourceDirName":"cloud-guard","slug":"/cloud-guard/","permalink":"/cloud-guard/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"FPT Cloud Guard","title":"2. FPT Cloud Guard","source":"https://fptcloud.com/documents/cloud-guard/","lang":"vi","converted":"2026-03-19"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-guard/index.md


const frontMatter = {
	sidebar_label: 'FPT Cloud Guard',
	title: '2. FPT Cloud Guard',
	source: 'https://fptcloud.com/documents/cloud-guard/',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Cloud Guard';

const assets = {

};



const toc = [{
  "value": "Trang chủ",
  "id": "trang-chủ",
  "level": 2
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Initial Setup",
  "id": "initial-setup",
  "level": 2
}, {
  "value": "Hướng dẫn chi tiết (Tutorials)",
  "id": "hướng-dẫn-chi-tiết-tutorials",
  "level": 2
}, {
  "value": "Các câu hỏi thường gặp (FAQs)",
  "id": "các-câu-hỏi-thường-gặp-faqs",
  "level": 2
}, {
  "value": "Một số gợi ý mẫu (Samples)",
  "id": "một-số-gợi-ý-mẫu-samples",
  "level": 2
}, {
  "value": "Release note",
  "id": "release-note",
  "level": 2
}, {
  "value": "FPT Cloud Guard (Alert 2.0) –Tính năng quản lý và tự động cảnh báo tài nguyên trên FPT Cloud Portal",
  "id": "fpt-cloud-guard-alert-20-tính-năng-quản-lý-và-tự-động-cảnh-báo-tài-nguyên-trên-fpt-cloud-portal",
  "level": 3
}, {
  "value": "FPT Cloud Guard (Alert 2.1) ra mắt các cảnh báo mới về băng thông mạng và ổ cứng",
  "id": "fpt-cloud-guard-alert-21-ra-mắt-các-cảnh-báo-mới-về-băng-thông-mạng-và-ổ-cứng",
  "level": 3
}, {
  "value": "FPT Cloud Guard hỗ trợ cảnh báo đa kênh",
  "id": "fpt-cloud-guard-hỗ-trợ-cảnh-báo-đa-kênh",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "2-fpt-cloud-guard",
        children: "2. FPT Cloud Guard"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Cloud Guard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Cloud Guard - Alert là dịch vụ giúp khách hàng giám sát, theo dõi trạng thái hoạt động của các dịch vụ khác trên FPT Cloud hoàn toàn tự động (Cloud Server, Load Balancer, Autoscaling, Object Storage, Kubernetes, Database,...). Cho phép khách hàng cấu hình và gửi các cảnh báo khi tài nguyên bị vượt ngưỡng, hỗ trợ gửi cảnh báo qua nhiều kênh (Email, Webhook, Telegram, Slack, SMS, Call,...). Khi sử dụng FPT Cloud Guard, khách hàng có thể chủ động theo dõi các tài nguyên của mình trên hệ thống FPT Cloud mà không cần nhân sự duy trì và chi phí ở mức tối thiểu. Tài liệu này sẽ cung cấp cho bạn thông tin về những điều bạn nên cân nhắc trước khi sử dụng FPT Cloud Guard, cách bạn tạo và quản lý nó."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Những điều cần lưu ý trước khi bạn tạo một Alert?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Các loại thông số cần theo dõi và ngưỡng bất thường:"
          }), " Với mỗi loại tài nguyên trên FPT Cloud sẽ có các thông số kỹ thuật khác nhau, tùy vào nhu cầu và mục đích sử dụng tài nguyên mà bạn cần đưa ra thông số cần theo dõi và ngưỡng bất thường cho các thông số đấy."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Phương thức nhận cảnh báo:"
          }), " Bạn cần chọn một phương thức nhận cảnh báo phù hợp với tổ chức của mình, giúp người phụ trách nhận được thông tin cảnh báo và xử lý sự cố nhanh nhất."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Kịch bản nhận cảnh báo:"
          }), " Bạn nên đưa ra các kịch bản cảnh báo khác nhau cho các trường hợp cụ thể. Ví dụ nếu vượt ngưỡng sẽ cảnh báo trong bao nhiêu lâu, cảnh báo cho bao nhiêu người,…"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "trang-chủ",
      children: "Trang chủ"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./overview",
          children: " Cloud Guard "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "initial-setup",
      children: "Initial Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./initial-setup",
          children: " Initial Setup "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hướng-dẫn-chi-tiết-tutorials",
      children: "Hướng dẫn chi tiết (Tutorials)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Quản lý Alert\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./khoi-tao-canh-bao-virtual-machine",
              children: " Khởi tạo cảnh báo cho Virtual Machine (VM) "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./khoi-tao-canh-bao-object-storage",
              children: " Khởi tạo cảnh báo cho Object Storage "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./khoi-tao-canh-bao-load-balancer",
              children: " Khởi tạo cảnh báo cho Load Balancer "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./khoi-tao-canh-bao-vpn",
              children: " Khởi tạo cảnh báo cho VPN site-to-site "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./khoi-tao-mot-alert-moi-activity-alert",
              children: " Khởi tạo một Activity Alert mới "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./khoi-tao-mot-alert-moi-threat-alert",
              children: " Khởi tạo một Threat Alert mới "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./kiem-tra-trang-thai-cua-alert",
              children: " Kiểm tra trạng thái của Alert "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./bat-tat-alert",
              children: " Bật/Tắt Alert "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./chinh-sua-alert",
              children: " Chỉnh sửa Alert "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./xoa-alert",
              children: " Xóa Alert "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Quản lý Recipient\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./recipient-la-gi",
              children: " Recipient là gì? "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./tao-moi-recipient",
              children: " Tạo mới Recipient "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./recipient-teams",
              children: " Tạo mới người nhận qua MSTeams "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./chinh-sua-recipient",
              children: " Chỉnh sửa Recipient "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./xoa-recipient",
              children: " Xóa Recipient "
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "các-câu-hỏi-thường-gặp-faqs",
      children: "Các câu hỏi thường gặp (FAQs)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "một-số-gợi-ý-mẫu-samples",
      children: "Một số gợi ý mẫu (Samples)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "release-note",
      children: "Release note"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fpt-cloud-guard-alert-20-tính-năng-quản-lý-và-tự-động-cảnh-báo-tài-nguyên-trên-fpt-cloud-portal",
      children: "FPT Cloud Guard (Alert 2.0) –Tính năng quản lý và tự động cảnh báo tài nguyên trên FPT Cloud Portal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Cloud chính thức ra mắt tính năng FPT Cloud Guard trên giao diện Portal. Với tính năng này, người dùng có thể dễ dàng thiết lập các kịch bản cảnh báo và cài đặt người nhận cảnh báo tương ứng qua phương thức Email. FPT Cloud Guard sẽ giám sát, tính toán liên tục và gửi cảnh báo khi mức sử dụng của tài nguyên vượt ngưỡng đã đặt. Từ đó giúp người dùng tiết kiệm thời gian giám sát và quản lý tài nguyên trên FPT Cloud Portal. Các tính năng của FPT Cloud Guard - AlertTạo và tùy chỉnh mức cảnh báo khi tài nguyên RAM/CPU của máy chủ ảo vượt ngưỡng.Tạo cảnh báo mức sử dụng RAM/CPU cho các Autoscale Group và thiết lập kịch bản Scale In hoặc Scale Out tự độngKiểm tra trạng thái trên giao diện theo thời gian thựcBật/ tắt chức năng gửi cảnh báo và quản phương thức nhận cảnh báoXem lại các lịch sử và chi tiết cảnh báoTại sao bạn nên sử dụng FPT Cloud Guard - AlertChủ động trong quản lý tài nguyên, không cần thường xuyên kiểm tra mà chỉ cần vào khi có cảnh báo gửi về email giúp tiết kiệm thời gian quản lý và và kịp thời xử lý các tình huống khẩn cấp.Đơn giản hóa công việc quản lý bằng giao diện Alert tinh giản giúp thao tác cài đặt, quản trị nhanh chóng và dễ dàng."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fpt-cloud-guard-alert-21-ra-mắt-các-cảnh-báo-mới-về-băng-thông-mạng-và-ổ-cứng",
      children: "FPT Cloud Guard (Alert 2.1) ra mắt các cảnh báo mới về băng thông mạng và ổ cứng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Cloud chính thức ra mắt các cảnh báo về băng thông mạng và ổ cứng bao gồm:Network bandwidth in/out (Mbps): Cảnh báo về băng thông đến/đi của tất cả các Network Interface Card (NIC) của máy chủ nếu vượt ngưỡng.Total network bandwidth (Mbps): Cảnh báo về tổng băng thông đến và đi của tất cả các Network Interface Card (NIC) của máy chủ nếu vượt ngưỡngDisk IOPS (IOPS): Cảnh báo về hiệu năng đọc ghi ổ cứng (In/Out per second) nếu vượt ngưỡng, hỗ trợ đặt cảnh báo cho ổ cứng của từng máy chủ.Disk Read/Write Bandwidth (MBps): Cảnh báo về băng thông đọc/ghi của ổ cứng nếu vượt ngưỡng, hỗ trợ đặt cảnh báo cho ổ cứng của từng máy chủ.Ngoài ra, phiên bản 2.1 có thêm các tính năng sửa cảnh báo đã đặt, sửa xóa người nhận, xem chi tiết lịch sử bắn cảnh báo và hỗ trợ trên cả 2 nền tảng ảo hóa Openstack và VMWare."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fpt-cloud-guard-hỗ-trợ-cảnh-báo-đa-kênh",
      children: "FPT Cloud Guard hỗ trợ cảnh báo đa kênh"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Cloud Guard cập nhật thêm các phương thức nhận cảnh báo mới và phổ biến hiện nay là:- Slack- TelegramNgoài ra, phiên bản 2.2 cho phép người dùng dễ dàng thêm mới cảnh báo với tính năng chọn nhiều máy chủ áp dụng trong điều kiện của 1 cảnh báo (apply to multiple virtual machine) Hình 1: Tạo cảnh báo cùng lúc cho tất cả máy chủ Hình 2: Chọn phương thức cảnh báo qua Slack và Telegram Vì sao nên sử dụng FPT Cloud Guard v2.2Dễ dàng tạo và quản lý cảnh báo cho nhiều máy chủ có cùng một điều kiện cảnh báo.Đa dạng phương thức nhận thông tin cảnh báo"
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