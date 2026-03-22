"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[70002],{

/***/ 828347
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_backup_index_md_aee_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-backup-index-md-aee.json
const site_docs_backup_index_md_aee_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"backup/index","title":"Backup","description":"Backup","source":"@site/docs/backup/index.md","sourceDirName":"backup","slug":"/backup/","permalink":"/backup/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Backup","title":"Backup","source":"https://fptcloud.com/documents/backup/","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Incremental backup là gì và lợi ích khi sử dụng?","permalink":"/backup/incremental-backup-la-gi-va-loi-ich-khi-su-dung"},"next":{"title":"Kiểm tra thông tin backup và restore của VM.","permalink":"/backup/kiem-tra-thong-tin-backup-va-restore-cua-vm"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/backup/index.md


const frontMatter = {
	sidebar_label: 'Backup',
	title: 'Backup',
	source: 'https://fptcloud.com/documents/backup/',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Backup';

const assets = {

};



const toc = [{
  "value": "1.1. Backup Native là gì?",
  "id": "11-backup-native-là-gì",
  "level": 2
}, {
  "value": "1.2. Những lợi ích khi sử dụng",
  "id": "12-những-lợi-ích-khi-sử-dụng",
  "level": 2
}, {
  "value": "1.3. Các đối tượng được hỗ trợ",
  "id": "13-các-đối-tượng-được-hỗ-trợ",
  "level": 2
}, {
  "value": "Cloud Server (VM)",
  "id": "cloud-server-vm",
  "level": 3
}, {
  "value": "PVC của FPT Kubernetes Engine (FKE)",
  "id": "pvc-của-fpt-kubernetes-engine-fke",
  "level": 3
}, {
  "value": "1.4. Các usecase phổ biến",
  "id": "14-các-usecase-phổ-biến",
  "level": 2
}, {
  "value": "Trang chủ",
  "id": "trang-chủ",
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
        id: "backup",
        children: "Backup"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Backup"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-backup-native-là-gì",
      children: "1.1. Backup Native là gì?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Backup Native là dịch vụ sao lưu dữ liệu dành cho Cloud Server (VM) và Volume trên FPT Cloud."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dịch vụ giúp người dùng tạo ra các bản sao lưu (backup) theo lịch hẹn hoặc thủ công, và có thể khôi phục lại hệ thống về thời điểm mong muốn khi xảy ra lỗi, sự cố, hay nhầm lẫn thao tác."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các bản sao lưu được quản lý ngay trong giao diện Backup Management, dễ theo dõi, dễ thao tác, và hoàn toàn tự động."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-những-lợi-ích-khi-sử-dụng",
      children: "1.2. Những lợi ích khi sử dụng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Backup Native mang đến cho bạn các lợi ích sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Bảo vệ dữ liệu toàn diện"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các bản sao lưu định kỳ giúp bạn luôn có điểm khôi phục an toàn khi VM hoặc Volume gặp sự cố."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Khôi phục nhanh chóng"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chỉ vài thao tác là có thể đưa hệ thống trở lại trạng thái trước đó mà không cần xử lý thủ công phức tạp."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Hoạt động tự động"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các job sao lưu được tạo theo lịch, chạy ngầm, không làm gián đoạn ứng dụng đang sử dụng."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Hỗ trợ cả VM và Volume"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linh hoạt cho nhiều loại workload: ứng dụng, database, file server, môi trường dev/test…"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Dễ quản lý, dễ theo dõi"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Toàn bộ trạng thái job, lịch sử chạy, report… được hiển thị rõ ràng trong một giao diện duy nhất."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "An tâm vận hành dài hạn"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hạn chế rủi ro mất dữ liệu do lỗi thao tác, lỗi phần mềm, hoặc sự cố bất ngờ."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-các-đối-tượng-được-hỗ-trợ",
      children: "1.3. Các đối tượng được hỗ trợ"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Backup Native hiện hỗ trợ hai nhóm tài nguyên chính:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cloud-server-vm",
      children: "Cloud Server (VM)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sao lưu toàn bộ trạng thái VM tại thời điểm backup."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phù hợp cho các ứng dụng, website, hệ thống chạy trực tiếp trên máy chủ."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pvc-của-fpt-kubernetes-engine-fke",
      children: "PVC của FPT Kubernetes Engine (FKE)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chỉ các volume được tạo ra bởi dịch vụ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FKE"
        }), " mới được phép tạo job backup."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hỗ trợ sao lưu dữ liệu ứng dụng đang chạy trong cluster K8S (database, file storage, ứng dụng stateful…)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phù hợp cho workload containerized cần đảm bảo tính toàn vẹn dữ liệu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-các-usecase-phổ-biến",
      children: "1.4. Các usecase phổ biến"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dưới đây là những tình huống mà khách hàng thường sử dụng Backup Native:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Khôi phục dữ liệu khi xóa nhầm file hoặc config"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể restore volume về bản sao gần nhất."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Rollback ứng dụng khi update lỗi"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi deploy phiên bản mới gây lỗi, bạn có thể khôi phục VM về snapshot an toàn."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Bảo vệ dữ liệu định kỳ"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lên lịch backup mỗi ngày/tuần/tháng để đảm bảo hệ thống luôn có điểm an toàn."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Sao lưu trước khi thực hiện thay đổi lớn"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ nâng cấp hệ điều hành, thay đổi cấu trúc database, nâng cấp phần mềm."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Lưu bản backup cho môi trường test/dev"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Giúp đội dev/QA dễ dàng quay lại trạng thái ban đầu khi test chức năng."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "trang-chủ",
      children: "Trang chủ"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "initial-setup",
      children: "Initial Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./backup-initial-setup",
          children: " Initial Setup "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hướng-dẫn-chi-tiết-tutorials",
      children: "Hướng dẫn chi tiết (Tutorials)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./quan-ly-backup-job",
          children: " Quản lý Backup job "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./restore-lai-vm-tu-cac-restore-point",
          children: " Restore lại VM từ các Restore Point "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./clone-vm-tu-cac-restore-point",
          children: " Tạo VM mới từ các Restore Point "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./xem-lich-su-backup-and-recovery",
          children: " Xem lịch sử Backup & Recovery "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./kiem-tra-thong-tin-backup-va-restore-cua-vm",
          children: " Kiểm tra thông tin backup và restore của VM. "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./backup-report",
          children: " Report "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./backup-volume",
          children: " Backup Volume "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "các-câu-hỏi-thường-gặp-faqs",
      children: "Các câu hỏi thường gặp (FAQs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./toi-duoc-ho-tro-nhung-gi-khi-thue-may-chu-va-dung-dich-vu-backup-tren-fpt-cloud",
          children: " Tôi được hỗ trợ những gì khi thuê máy chủ và dùng dịch vụ Backup trên FPT Cloud? "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./incremental-backup-la-gi-va-loi-ich-khi-su-dung",
          children: " Incremental backup là gì và lợi ích khi sử dụng? "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./tai-sao-djoi-luc-toi-thay-so-luong-restore-point-tren-he-thong-nhieu-hon-so-luong-lastest-backup-to-keep-dja-khai-bao",
          children: " Tại sao đôi lúc tôi thấy số lượng Restore Point trên hệ thống nhiều hơn số lượng Lastest backup to keep đã khai báo? "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./toi-muon-tim-hieu-ve-backup-fpt-cloud-co-chinh-sach-dung-thu-khong",
          children: " Tôi muốn tìm hiểu về Backup, FPT Cloud có chính sách dùng thử không? "
        })
      }), "\n"]
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