"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[76583],{

/***/ 78312
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_backup_restore_vn_md_a01_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-backup-restore-vn-md-a01.json
const site_docs_managed_fpt_kubernetes_engine_backup_restore_vn_md_a01_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/backup-restore-vn","title":"2. Managed – FPT Kubernetes Engine","description":"Tính năng Backup & Restore","source":"@site/docs/managed-fpt-kubernetes-engine/backup-restore-vn.md","sourceDirName":"managed-fpt-kubernetes-engine","slug":"/managed-fpt-kubernetes-engine/backup-restore-vn","permalink":"/managed-fpt-kubernetes-engine/backup-restore-vn","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Backup restore vn","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=backup-restore-vn","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Audit log vn","permalink":"/managed-fpt-kubernetes-engine/audit-log-vn"},"next":{"title":"Bat tat node auto repair","permalink":"/managed-fpt-kubernetes-engine/bat-tat-node-auto-repair"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/backup-restore-vn.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Backup restore vn',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=backup-restore-vn',
	parent: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Kubernetes Engine';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
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
        id: "2-managed--fpt-kubernetes-engine",
        children: "2. Managed – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng Backup & Restore"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng Backup & Restore là một tính năng trong sản phẩm M-FKE với mục tiêu tạo ra các bản Snapshot cho PVC ."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "M-FKE release tính năng Backup & Restore version 1.0.0 bao gồm các tiện ích sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Backup Plan:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hiển thị danh sách các Backup Plan"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tạo mới Backup Plan"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1 Backup Plan có thể cài đặt nhiều thời điểm để hệ thống tự động tạo snapshot PVC, áp dụng cho 1 hoặc nhiều PVC cùng lúc"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cấu hình khoảng thời gian Retention, theo minutes/ hours/ days."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chỉnh sửa Backup Plan"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enable / Disable Backup Plan"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Xóa Backup Plan"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PVC Snapshot:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hiển thị danh sách các bản Snapshot PVC (Có hiển thị phương thức khởi tạo theo Manually / Scheduled)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Đồng bộ danh sách snapshot từ dưới cluster lên FPT Cloud Portal"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tạo mới PVC Snapshot"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Xóa PVC Snapshot"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Restore PVC Snapshot"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PVC Restored:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hiển thị danh sách các bản PVC được restore"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Reload cập nhật trạng thái"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: Tính năng áp dụng với driver Cinder (đã được tạo sẵn bởi FPT Cloud)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hướng dẫn tạo Backup plan"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Truy cập Portal > Containers > Kubernetes > Details Cluster > Backup Tab"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(230934)/* ["default"] */ .A) + "",
        width: "1915",
        height: "920"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(969985)/* ["default"] */ .A) + "",
        width: "1907",
        height: "852"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Hình 1: Backup Tab"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Tại tab Backup, bấm “New Plan” để khởi tạo một Backup Plan mới"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(831700)/* ["default"] */ .A) + "",
        width: "1899",
        height: "910"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➤ Điền thông tin của Backup Plan, bao gồm:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "① Essential Information:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "• Plan Name: tên của Backup Plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "• Retention: thời gian tồn tại của 1 snapshot. Sau thời gian này, snapshot sẽ bị xoá vĩnh viễn"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "② Schedule Scope:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "• PVC Backup List: danh sách các pvc có trong cụm cluster"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "③ Schedules Information: nhập tháng/ngày/năm cụ thể để lập lịch Backup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: có thể tạo nhiều bản Backup Plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(975285)/* ["default"] */ .A) + "",
        width: "1271",
        height: "840"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Hình 2: Điền tên của Plan, lựa chọn khoảng thời gian Retention (default 10 hours)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: Retention áp dụng cho các bản snapshot của PVC được lựa chọn trong Plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(2913)/* ["default"] */ .A) + "",
        width: "1376",
        height: "837"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Hình 3: Lựa chọn các PVC mong muốn được áp dụng Plan"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: Danh sách hiển thị theo “pvc_name(pvc_namespace)”"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(1914)/* ["default"] */ .A) + "",
        width: "1256",
        height: "832"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Hình 4: Cấu hình các lịch mong muốn, Thêm hoặc Xóa"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(149833)/* ["default"] */ .A) + "",
        width: "1366",
        height: "758"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Hình 5: Lưu Backup Plan và quay trở lại tab Backup"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(653909)/* ["default"] */ .A) + "",
        width: "1907",
        height: "752"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Hình 6: Backup Plan mới tạo sẽ được thêm vào danh sách Backup Plan List"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(670658)/* ["default"] */ .A) + "",
        width: "1884",
        height: "809"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Hình 7: Edit / Disable / Delete Backup Plan"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Những snapshot được tạo theo lịch của Backup Plan sẽ nằm trong danh sách Snapshot List với ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Type = “Scheduled\""
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hướng dẫn sử dụng tab PVC Snapshot"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ở trong sub-tab này sẽ hiển thị các snapshot đã được khởi tạo, bao gồm của khách hàng tự tạo ", (0,jsx_runtime.jsxs)(_components.em, {
        children: ["(Type =", (0,jsx_runtime.jsx)(_components.strong, {
          children: "“Manually\""
        }), ")"]
      }), ", hoặc tạo bởi Backup Plan (", (0,jsx_runtime.jsxs)(_components.em, {
        children: ["Type =", (0,jsx_runtime.jsx)(_components.strong, {
          children: "“Scheduled\""
        })]
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2023/01/10.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Hình 8: Màn hiển thị danh sách các Snapshot đã được tạo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(732985)/* ["default"] */ .A) + "",
        width: "1899",
        height: "905"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Hình 9: Người dùng chọn Create Snapshot để khởi tạo bản Snapshot trực tiếp"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(349497)/* ["default"] */ .A) + "",
        width: "1904",
        height: "736"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Hình 10: Người dùng chọn Delete để xóa, Refresh để cập nhật trạng thái gần nhất của Snapshot, và Restore để phục hồi PVC vào trong cụm K8s."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(852468)/* ["default"] */ .A) + "",
        width: "1892",
        height: "823"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Hình 11: Đồng thời, nút Sync để người dùng trực tiếp đồng bộ các trạng thái của Snapshot, PVC, từ dưới cụm K8s lên trên FPT Cloud Portal."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hướng dẫn sử dụng tab PVC Restored"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi người dùng lựa chọn khôi phục snapshot (Restore Snapshot) từ sub-tab PVC Snapshot, PVC được khôi phục sẽ hiển thị ở sub-tab PVC Restored."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(393536)/* ["default"] */ .A) + "",
        width: "1893",
        height: "816"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Hình 12: Restore PVC ở sub-tab PVC snapshot"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(555505)/* ["default"] */ .A) + "",
        width: "1899",
        height: "810"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Hình 13: Màn hiển thị danh sách các PVC đã được restored. Với các PVC chưa được gán vào pod, sẽ nằm ở trạng thái Pending"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng sau đó truy cập vào cụm K8s của mình, và cấu hình deployment cho pod được map với PVC vừa được khôi phục, khi đó, trạng thái PVC sẽ được cập nhật."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(78945)/* ["default"] */ .A) + "",
        width: "1887",
        height: "812"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Hình 14: Bấm Reload để cập nhật lại trạng thái của PVC, hoặc Sync để cập nhật tất cả"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [". ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Số lượng bản snapshot trong mỗi VPC đang giới hạn tối đa 10 bản, nếu mong muốn được nâng cấp thêm, vui lòng liên hệ FPT Cloud Support."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Người dùng nên cân đối tạo các Plan phù hợp, tránh việc tạo ra nhiều Snapshot nhưng không xóa đi, dẫn đến việc hạ tầng đạt tới ngưỡng và không thể tạo thêm Snapshot."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nếu Snapshot có trạng thái Failed, vui lòng truy cập cụm K8s và gõ lệnh sau để tìm hiểu nguyên nhân trước:"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "kubectl describe volumesnapshots.snapshot.storage.k8s.io -n"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./danh-tag-cho-vm",
        children: " Previous Tính năng đánh Tag cho Virtual Machine  "
      })
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

/***/ 831700
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0cf67abf6e30-3-e46d4d4b88f1b9b0e7dbf77b7407f788.png");

/***/ },

/***/ 555505
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/19e79103661e-15-9aaa6907c898043e33a546c30efbfe8f.png");

/***/ },

/***/ 2913
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/32ab0027d236-5-fc1cb5dedf9479d81b6ae76f450545f4.png");

/***/ },

/***/ 230934
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4a954f79ff04-1-51391b12ba6fd85fac6dd77867d67ff3.png");

/***/ },

/***/ 852468
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5d9716110eab-13-8d341d8b291fe4b8a7348f099cd9bdef.png");

/***/ },

/***/ 78945
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/67c3e2c991bf-16-49f55391a1c3a89397fe75fdf0d9651a.png");

/***/ },

/***/ 149833
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/68d5de2f6d6f-7-10298e91365ac2b595a8d9ca90f1833c.png");

/***/ },

/***/ 670658
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/785e1b704e0c-9-ae2cebb806088177d0f1e0cbccd1a2b5.png");

/***/ },

/***/ 732985
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/85c4a667837c-11-dd3601d467c787a2f0650a8bc5132463.png");

/***/ },

/***/ 349497
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8c235c23f672-12-447d4780c1e2a1855ddb2e98d09fe4c2.png");

/***/ },

/***/ 1914
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b988ff7b6c1d-6-2c5ebc11b65d57f6609e6ec6f96b3feb.png");

/***/ },

/***/ 393536
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bc0ca284f8ce-14-cd6cfa589d1a69b78d139afaf6646e2c.png");

/***/ },

/***/ 969985
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e5cd1ce39531-2-be46a537b028ad27c8c14c2ae6b3771f.png");

/***/ },

/***/ 653909
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e7bf7afc29af-8-081067ede99eb0fe64e67931ca3ce301.png");

/***/ },

/***/ 975285
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f33feb8b6783-4-8b8a4f123afca70521e7772c5cdcc8f1.png");

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