"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[80992],{

/***/ 207751
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_file_storage_high_performance_vn_su_dung_file_storage_high_performance_tren_baremetal_gpu_server_md_1dd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-file-storage-high-performance-vn-su-dung-file-storage-high-performance-tren-baremetal-gpu-server-md-1dd.json
const site_docs_file_storage_high_performance_vn_su_dung_file_storage_high_performance_tren_baremetal_gpu_server_md_1dd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"file-storage-high-performance/vn-su-dung-file-storage-high-performance-tren-baremetal-gpu-server","title":"2. File Storage – High Performance","description":"Sử dụng File Storage - High Performance trên Baremetal (GPU Server)","source":"@site/docs/file-storage-high-performance/vn-su-dung-file-storage-high-performance-tren-baremetal-gpu-server.md","sourceDirName":"file-storage-high-performance","slug":"/file-storage-high-performance/vn-su-dung-file-storage-high-performance-tren-baremetal-gpu-server","permalink":"/file-storage-high-performance/vn-su-dung-file-storage-high-performance-tren-baremetal-gpu-server","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Vn Su Dung File Storage High Performance Tren Baremetal Gpu Server","title":"2. File Storage – High Performance","source":"https://fptcloud.com/documents/file-storage-high-performance/?doc=vn-su-dung-file-storage-high-performance-tren-baremetal-gpu-server","parent":"https://fptcloud.com/documents/file-storage-high-performance","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"S ","permalink":"/file-storage-high-performance/s-"},"next":{"title":"Khởi tạo & Cấu hình ban đầu","permalink":"/managed-fpt-kubernetes-engine/initial/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/file-storage-high-performance/vn-su-dung-file-storage-high-performance-tren-baremetal-gpu-server.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Vn Su Dung File Storage High Performance Tren Baremetal Gpu Server',
	title: '2. File Storage – High Performance',
	source: 'https://fptcloud.com/documents/file-storage-high-performance/?doc=vn-su-dung-file-storage-high-performance-tren-baremetal-gpu-server',
	parent: 'https://fptcloud.com/documents/file-storage-high-performance',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. File Storage – High Performance';

const assets = {

};



const toc = [{
  "value": "<strong>1. Tổng quan</strong>",
  "id": "1-tổng-quan",
  "level": 2
}, {
  "value": "<strong>2. Hướng dẫn sử dụng</strong>",
  "id": "2-hướng-dẫn-sử-dụng",
  "level": 2
}, {
  "value": "<strong>A. Sử dụng image từ FPT AI FACTORY</strong>",
  "id": "a-sử-dụng-image-từ-fpt-ai-factory",
  "level": 3
}, {
  "value": "<strong>B. Sử dụng custom Ubuntu OS</strong>",
  "id": "b-sử-dụng-custom-ubuntu-os",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-file-storage--high-performance",
        children: "2. File Storage – High Performance"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sử dụng File Storage - High Performance trên Baremetal (GPU Server)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-tổng-quan",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Tổng quan"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi request cấp phát dịch vụ được chấp nhận, bạn sẽ nhận được các thông tin để sử dụng File Storage trên Baremetal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Một số lưu ý quan trọng:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mỗi subnet sẽ có 1 endpoint khác nhau dùng để access vào data File Storage. Trước khi mount hãy kiểm tra thật kỹ các thông tin đã được cung cấp để tránh bị lỗi trong quá trình cấu hình."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-hướng-dẫn-sử-dụng",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Hướng dẫn sử dụng"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "a-sử-dụng-image-từ-fpt-ai-factory",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A. Sử dụng image từ FPT AI FACTORY"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1: Tạo mountpoint trên OS"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Create Mount Point\nmkdir /mnt/hps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2: Mount File System"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thay endpoint ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "10.101.33.1"
      }), " bằng Endpoint được cung cấp"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mount VAST NFS qua TCP"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mount -o proto=tcp,vers=3 10.101.33.1:/test /mnt/hps\nmount -o proto=tcp,vers=3,nconnect=64 10.101.33.1:/mountpoint /mnt/hps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mount VAST NFS qua RDMA"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mount -o proto=rdma,port=20049,vers=3 10.101.33.1:/mountpoint /mnt/hps\nmount -o proto=rdma,port=20049,nconnect=64,vers=3 10.101.33.1:/mountpoint /mnt/hps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mount Multi-Path RDMA"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sudo mount -v -o vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 10.101.33.1:/test /mnt/hps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3: Cấu hình tự động mount khi khởi động lại"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉnh sửa file ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/etc/fstab"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Write followings entries to /etc/fstab\n10.101.33.1:/test /mnt/hps nfs vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 0 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Chạy lệnh để kiểm tra lại xem cấu hình mount có lỗi gì không."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mount -a\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-sử-dụng-custom-ubuntu-os",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "B. Sử dụng custom Ubuntu OS"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu bạn dùng image tuỳ chỉnh thì cần cài thêm VAST Client theo hướng dẫn sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Cài đặt ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VAST NFS Client"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apt update && apt install -y nfs-common dpkg-dev autotools-dev debhelper curl\ncurl -sSf <https://s3-sgn10.fptcloud.com/file-storage-resource/download.sh> | bash -s\ntar xvf vastnfs-*.tar.xz\ncd vastnfs-*/\n./build.sh bin\nsudo apt install ./dist/*.deb\nsudo depmod -a\nsudo update-initramfs -u -k $(uname -r)\nsudo apt update\nsudo apt install nfs-common -y\nsudo reboot\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2: Tạo mountpoint trên OS"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Create Mount Point\nmkdir /mnt/hps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3: Mount File System"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thay endpoint ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "10.101.33.1"
      }), " bằng Endpoint được cung cấp"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mount VAST NFS qua TCP"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mount -o proto=tcp,vers=3 10.101.33.1:/test /mnt/hps\nmount -o proto=tcp,vers=3,nconnect=64 10.101.33.1:/mountpoint /mnt/hps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mount VAST NFS qua RDMA"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mount -o proto=rdma,port=20049,vers=3 10.101.33.1:/mountpoint /mnt/hps\nmount -o proto=rdma,port=20049,nconnect=64,vers=3 10.101.33.1:/mountpoint /mnt/hps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mount Multi-Path RDMA"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sudo mount -v -o vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 10.101.33.1:/test /mnt/hps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4: Cấu hình tự động mount khi khởi động lại"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chỉnh sửa file ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/etc/fstab"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "## LustreFS ##\n# Write followings entries to /etc/fstab\n10.101.33.1:/test /mnt/hps nfs vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 0 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Chạy lệnh để kiểm tra lại xem cấu hình mount có lỗi gì không."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mount -a\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-mountpoint",
        children: " Previous Quản lý MountPoint "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./s%E1%BB%AD-d%E1%BB%A5ng-file-storage---high-performance-tr%C3%AAn-kubernetes-(k8s-cluster)",
        children: " Next Sử dụng File Storage - High Performance trên Kubernetes (K8S Cluster) "
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