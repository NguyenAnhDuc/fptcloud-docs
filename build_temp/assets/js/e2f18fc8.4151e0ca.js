"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[76250],{

/***/ 167714
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_container_registry_2_index_md_e2f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-container-registry-2-index-md-e2f.json
const site_docs_fpt_container_registry_2_index_md_e2f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-container-registry-2/index","title":"2. FPT Container Registry","description":"FPT Container Registry","source":"@site/docs/fpt-container-registry-2/index.md","sourceDirName":"fpt-container-registry-2","slug":"/fpt-container-registry-2/","permalink":"/fpt-container-registry-2/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"FPT Container Registry","title":"2. FPT Container Registry","source":"https://fptcloud.com/documents/fpt-container-registry-2/","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Huong dan su dung tren docker cli","permalink":"/fpt-container-registry-2/huong-dan-su-dung-tren-docker-cli"},"next":{"title":"FPT Container Registry","permalink":"/fpt-container-registry-2/initial-setup"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-container-registry-2/index.md


const frontMatter = {
	sidebar_label: 'FPT Container Registry',
	title: '2. FPT Container Registry',
	source: 'https://fptcloud.com/documents/fpt-container-registry-2/',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Container Registry';

const assets = {

};



const toc = [{
  "value": "Trang chủ",
  "id": "trang-chủ",
  "level": 2
}, {
  "value": "Overviews",
  "id": "overviews",
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
  "value": "Ra mắt dịch vụ FPT Container Registry",
  "id": "ra-mắt-dịch-vụ-fpt-container-registry",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
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
        id: "2-fpt-container-registry",
        children: "2. FPT Container Registry"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Container Registry"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Container Registry"
      }), " là dịch vụ máy chủ cung cấp tài nguyên lưu trữ các container image được cung cấp bới FPT Cloud. Người dùng có thể đơn giản hóa và thống nhất quản lý toàn bộ vòng đời của sản phẩm, bao gồm lưu trữ, bảo mật, tạo bản sao, quản trị.., và có thể tích hợp với các công cụ DevOps, CI/CDs, Kubernetes Engine, các Virtual Machines."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bài viết này sẽ cung cấp cho bạn thông tin về những điều bạn nên cân nhắc trước khi sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Container Registry"
      }), " , cách bạn tạo và quản lý nó."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Những điều cần lưu ý trước khi sử dụng FPT Container Registry?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "Vị trí địa lý đặt Container Registry"
            })
          }), " : Vị trí địa lý (Region) có thể sẽ ảnh hưởng đến tốc độ pull, push image đến máy chủ Container Registry trong quá trình sử dụng. Bạn nên chọn Region gần nhất với đối tượng phát sinh traffic để tối ưu được tốc độ."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "Số lượng Repository và dung lượng của từng Repository cần sử dụng"
            })
          }), " : Các tài khoản FPT Cloud đều được cấp một hạn mức nhất định cho Container Registry, bạn nên xác định số lượng Repository cần tạo và dung lượng tối đa của từng Repository để FPT Cloud hỗ trợ bạn tốt nhất."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "trang-chủ",
      children: "Trang chủ"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overviews",
      children: "Overviews"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "initial-setup",
      children: "Initial Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./initial/initial-setup",
          children: " Initial Setup "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hướng-dẫn-chi-tiết-tutorials",
      children: "Hướng dẫn chi tiết (Tutorials)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./initial/kich-hoat-dich-vu-fpt-container-registry",
          children: " Kích hoạt dịch vụ FPT Container Registry "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./initial/kiem-tra-thong-tin-goi-dich-vu",
              children: " Kiểm tra thông tin gói dịch vụ "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./kich-hoat-dich-vu",
              children: " Kích hoạt dịch vụ "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./images/huong-dan-su-dung-tren-docker-cli",
          children: " Hướng dẫn sử dụng trên Docker CLI "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./images/docker-login",
              children: " Docker Login "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./images/tag-va-push-image-len-fpt-container-registry",
              children: " Tag và Push image lên FPT Container Registry "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./images/pull-docker-image-tu-fpt-container-registry-ve-local",
              children: " Pull docker image từ FPT Container Registry về local "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./images/quan-ly-repositories-tren-fpt-portal",
          children: " Quản lý Repositories trên FPT Portal "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./images/xem-danh-sach-repositories",
              children: " Xem danh sách Repositories "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./images/xoa-image-hoac-artifact-trong-repositories",
              children: " Xóa Image hoặc Artifact trong Repositories "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./retention/quan-ly-retention-rule",
          children: " Quản lý Retention Rule "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./retention/them-moi-tag-retention-rule",
              children: " Thêm mới Tag Retention Rule "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./retention/quan-ly-tag-retention-rule",
              children: " Quản lý Tag Retention Rule "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./retention/cau-hinh-lap-lich-chay-retention-rule",
              children: " Cấu hình lập lịch chạy Retention Rule "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./retention/quan-ly-retention-run",
              children: " Quản lý Retention Run "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./robot-account/quan-ly-robot-account",
          children: " Quản lý Robot Account "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./robot-account/tao-moi-robot-account",
              children: " Tạo mới Robot Account "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./robot-account/xem-danh-sach-robot-account",
              children: " Xem danh sách Robot Account "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./robot-account/cap-nhat-robot-account",
              children: " Cập nhật Robot Account "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./robot-account/disable-robot-account-dang-su-dung",
              children: " Disable Robot Account đang sử dụng "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./robot-account/enable-robot-account",
              children: " Enable Robot Account "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./robot-account/xoa-mot-robot-account",
              children: " Xoá một Robot Account "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./robot-account/refresh-robot-account",
              children: " Refresh Robot Account "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./robot-account/huong-dan-su-dung-robot-account",
              children: " Hướng dẫn sử dụng Robot Account "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./initial/quan-ly-goi-dich-vu",
          children: " Quản lý Gói dịch vụ "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./cem-chi-tiet-quota-dich-vu",
              children: " Xem chi tiết Quota dịch vụ "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./initial/huong-dan-nang-goi-dich-vu-dang-su-dung",
              children: " Hướng dẫn nâng gói dịch vụ đang sử dụng "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./images/scan-image",
          children: " Scan Images "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./images/scan-image-1",
              children: " Scan Image "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./images/stop-scan",
              children: " Stop Scan "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./images/quan-ly-ket-qua-scan-images",
              children: " Quản lý kết quả Scan images "
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
      id: "ra-mắt-dịch-vụ-fpt-container-registry",
      children: "Ra mắt dịch vụ FPT Container Registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Cloud chính thức ra mắt dịch vụ Container Registry trên giao diện Portal. Dịch vụ FPT Container Registry cung cấp cho khách hàng dịch vụ lưu trữ các image container của tổ chức và doanh nghiệp. Sử dụng dịch vụ FPT Container Registry, khách hàng có thể đơn giản hóa và thống nhất quản lý toàn bộ vòng đời của container, bao gồm lưu trữ, bảo mật, tạo bản sao, quản trị container image, thuận tiện cho việc quản lý số lượng lớn docker image, đồng thời có thể tích hợp qua các môi trường khác, như các công cụ DevOps, Kubernetes engine, các Virtual Machines."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Lưu ý: Dịch vụ này chỉ được kích hoạt bởi Tenant Owner."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Các lợi ích của việc sử dụng FPT Cloud Container Registry"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Khách hàng được cung cấp kho lưu trữ image đồng nhất với các dịch vụ mà FPT Cloud đang cung cấp, trên nền tảng dịch vụ lưu trữ S3."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Dễ dàng tích hợp vào các hệ thống CI/CD giúp triển khai ứng dụng lên các môi trường khác nhau."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Không giới hạn số lần pull/push imageFPT Cloud có các region Hà Nội và TP HCM, cho phép doanh nghiệp có thể lưu trữ thuận tiện cho việc tải và nạp image với tốc độ cao."
        }), "\n"]
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