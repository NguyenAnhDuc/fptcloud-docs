"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[18279],{

/***/ 400026
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_tinh_nang_workload_scan_md_dd0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-tinh-nang-workload-scan-md-dd0.json
const site_docs_managed_fpt_kubernetes_engine_tinh_nang_workload_scan_md_dd0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/tinh-nang-workload-scan","title":"2. Managed – FPT Kubernetes Engine","description":"Tính năng Workload Managed Kubernetes Cluster","source":"@site/docs/managed-fpt-kubernetes-engine/tinh-nang-workload-scan.md","sourceDirName":"managed-fpt-kubernetes-engine","slug":"/managed-fpt-kubernetes-engine/tinh-nang-workload-scan","permalink":"/managed-fpt-kubernetes-engine/tinh-nang-workload-scan","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tinh nang workload scan","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=tinh-nang-workload-scan","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tinh nang tang cuong bao mat mfke","permalink":"/managed-fpt-kubernetes-engine/tinh-nang-tang-cuong-bao-mat-mfke"},"next":{"title":"Cấu hình file manifest để triển khai ứng dụng","permalink":"/managed-fpt-kubernetes-engine/trien-khai-ung-dung-tren-worker-pool"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/tinh-nang-workload-scan.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tinh nang workload scan',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=tinh-nang-workload-scan',
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
      children: "Tính năng Workload Managed Kubernetes Cluster"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Giới thiệu chung tính năng Workload Security"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.1. Configuration Auditing Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Với việc tổ chức deploy các containerized workloads bên trong môi trường Kubernetes, bạn sẽ đối mặt với nhiều lựa chọn cấu hình liên quan tới images, containers, control plane và data plane. Việc cài đặt các cấu hình không phù hợp sẽ tạo nên những mối nguy tiềm tàng về bảo mật. Devops và Platform owners cần có khả năng liên tục đánh giá các công cụ, workloads và cơ sở hạ tầng theo các tiêu chuẩn cứng hóa cấu hình để khắc phục bất kỳ vi phạm nào."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.2. Vulnerability Report"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vulnerability Report cung cấp những lỗ hổng gần nhất được tìm thấy trong container image của một Kubernetes workload cho trước. Nó bao gồm list của OS package và lỗ hổng ứng dụng, kèm theo đó là bản summary được nhóm theo Severity (độ quan trọng)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vulnerability Report cung cấp những lỗ hổng gần nhất được tìm thấy trong container image của một Kubernetes workload cho trước. Nó bao gồm list của OS package và lỗ hổng ứng dụng, kèm theo đó là bản summary được nhóm theo Severity (độ quan trọng)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đối với từng namespace, sẽ có một Vulnerability Report tương ứng, lưu kết quả scan images workload bên trong namespace đó. **"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong report, sẽ có các trường tương ứng sau: **"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "namespace"
          }), " : namespace đang được sử dụng để scan các container images trong K8s workload."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "summary"
          }), " : Tóm tắt kết quả của scan report"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "criticalCount: số lượng lỗ hổng nguy hiểm mức độ nghiêm trọng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "highCount: số lượng lỗ hổng nguy hiểm mức độ cao"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lowCount: số lượng lỗ hổng nguy hiểm mức độ thấp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "unkownCount: số lượng lỗ hổng nguy hiểm không đánh giá được mức độ"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "vulnerabilities"
        }), " : chi tiết của từng lỗ hổng"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ID"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Severity: độ khẩn thiết của lỗ hổng (Critical, High, Low, Unkown)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Title: tên của lỗ hổng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PrimaryLink : Link liên kết tới mô tả chi tiết của lỗ hổng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Score: là điểm số CVE (Common Vulnerabilities and Exposure), từ đó để xác định Severity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "+) 0 -> Unkown"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "+) 0.1 - 3.9 -> Low -> Unkown"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "+) 4.0 - 6.9 -> Medium"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "+) 7.0 - 8.9 -> High"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "+) 9.0 - 10.0 -> Critical"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Namespace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.3. RBAC Assessment Report"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RbacAssessmentReport đại diện cho các kiểm tra được thực hiện bởi các công cụ kiểm toán cấu hình, chẳng hạn như Trivy, đối với một đánh giá RBAC của Kubernetes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ, kiểm tra rằng một Role nhất định không cấp quyền truy cập vào secrets cho tất cả các nhóm."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mỗi báo cáo được sở hữu bởi đối tượng Kubernetes cơ sở và được lưu trữ trong cùng namespace."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong report, sẽ có các trường tương ứng sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "namespace"
          }), " : namespace đang được sử dụng để scan các role trong K8s workload"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "summary"
          }), " : Tóm tắt kết quả của scan report"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "criticalCount: số lượng lỗ hổng nguy hiểm mức độ nghiêm trọng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "highCount: số lượng lỗ hổng nguy hiểm mức độ cao"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "mediumCount: số lượng lỗ hổng nguy hiểm mức độ vừa"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lowCount: số lượng lỗ hổng nguy hiểm mức độ thấp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.4. Cluster RBAC Assessment Report"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu với RBAC Assessment Report là kiểm tra quyền của các Role nằm trong cùng một namespace, thì Cluster RBAC Assessment Report là tổng hợp của mọi Role nằm trong các namespace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.5. Config Audit Report"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ConfigAuditReport đại diện cho các kiểm tra được thực hiện bởi Trivy, đối với cấu hình của từng đối tượng Kubernetes. Ví dụ, kiểm tra xem liệu một container image đã được chạy dưới quyền non-root user hay chưa, hoặc là liệu container đó đã được cấu hình resource request hay limits hay chưa. Các việc checks có thể liên quán tới K8s workloads và các resource khác trong namespace, như là services, configmaps, roles và rolebindings."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong report, sẽ có các trường tương ứng sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Namespace"
          }), " : namespace được quét"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Summary"
          }), " :"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CriticalCount: số lượng lỗ hổng nguy hiểm mức độ nghiêm trọng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HighCount: số lượng lỗ hổng nguy hiểm mức độ cao"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LowCount: số lượng lỗ hổng nguy hiểm mức độ thấp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MediumCount: số lượng lỗ hổng nguy hiểm mức độ vừa"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.6. Cluster Config Audit Report"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu với Config Audit Report là kiểm tra các cấu hình nằm trong cùng một namespace, thì Cluster Config Audit Report là tổng hợp của cấu hình nằm trong các namespace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.7. Cluster Infra Assessment Report"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cluster Infra Assessment Report là kiểm tra các cấu hình quan trọng ở phần quản trị của cụm K8s, ví dụ như: etcd, apiserver, scheduler, controller-manager, v.v..."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Hướng dẫn sử dụng tính năng trên Unify Portal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Lưu ý: Bộ tính năng tăng cường khả năng bảo mật cho Managed Kubernetes Cluster được tích hợp sau khi cluster được khởi tạo thành công (Trạng thái Succeeded (Running))"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2.1. Kích hoạt tính năng Workload Security:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Truy cập portal FPT Cloud console.fptcloud.com, chọn mục Kubernetes, bấm vào cluster cần benchmark sau đó vào tab Security, chọn tab Workload Security rồi thực hiện enable:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(743455)/* ["default"] */ .A) + "",
        width: "693",
        height: "330"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hình 1. Kích hoạt dịch vụ Workload Scan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi bấm nút kích hoạt, màn hình sẽ hiển thị một biểu mẫu cho người dùng lựa chọn: các namespace để quét, TTL (Time-to-live) của các báo cáo, và các loại quét để xuất thành báo cáo hiển thị trên portal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(486625)/* ["default"] */ .A) + "",
        width: "691",
        height: "331"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hình 2. Biểu mẫu để lựa chọn cấu hình sau khi kích hoạt tính năng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(688382)/* ["default"] */ .A) + "",
        width: "691",
        height: "330"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hình 3. Lựa chọn các namespaces"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(483582)/* ["default"] */ .A) + "",
        width: "694",
        height: "335"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hình 4. Lựa chọn các loại báo cáo để thực hiện quét và hiển thị trên Portal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(597649)/* ["default"] */ .A) + "",
        width: "699",
        height: "337"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hình 5. Lựa chọn thời gian TTL (mặc định 30 phút)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi job Workload được chạy thành công, kết quả chi tiết sẽ được hiển thị, người dùng có thể chạy lại workload để cập nhật kết quả mới nhất."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thông tin hiển thị của các Reports được hiển thị và biểu diễn như dưới, với các trường hiển thị đã được diễn tả ở mục trên."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(942700)/* ["default"] */ .A) + "",
        width: "693",
        height: "333"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hình 6. Màn hiển thị của Cluster RBAC Assessment Report"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(851194)/* ["default"] */ .A) + "",
        width: "689",
        height: "333"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hình 7. Màn hiển thị của Config Audit Report"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(413858)/* ["default"] */ .A) + "",
        width: "688",
        height: "333"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hình 8. Màn hiển thị của Rbac Assessment Report"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(615264)/* ["default"] */ .A) + "",
        width: "690",
        height: "407"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hình 9. Màn hiển thị của Vulnerability Report"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(887282)/* ["default"] */ .A) + "",
        width: "695",
        height: "336"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hình 10. Màn hiển thị của Cluster Infra Assessment Report"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2.2. Tắt tính năng Workload Security"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Truy cập portal FPT Cloud console.fptcloud.com, chọn mục Kubernetes, bấm vào cluster cần benchmark sau đó vào tab Security, chọn tab Workload Security rồi thực hiện xác nhận để tắt dịch vụ."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(672261)/* ["default"] */ .A) + "",
        width: "689",
        height: "328"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tinh-nang-runtime-security-cluster",
        children: " Previous Tính năng Runtime Security cho Managed Kubernetes Cluster  "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./audit-log-vn",
        children: " Next Audit Logs - Managed Kubernetes Cluster  "
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

/***/ 688382
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/19c4f9df9bf8-Picture3-7-8a9c84a0edaef3000aa66625c72b95e6.png");

/***/ },

/***/ 942700
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/299846cc4b5b-Picture6-6-7c7c9500040b08f15b01f61e1d33af8b.png");

/***/ },

/***/ 672261
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/44b70f69aeb7-Picture11-3-ba8d982bdc11f9d93bc0e3df4d42b3d1.png");

/***/ },

/***/ 743455
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6a8d38374c67-Picture1-9-75ce99dc21a3444c6a3533fd96b53065.png");

/***/ },

/***/ 615264
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/97d3126abd2e-Picture9-4-3b84fd57cb792ffd052c9ef2c135171e.png");

/***/ },

/***/ 413858
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c87e61568f21-Picture8-5-4aba9b2090927b8576d79169080ca30b.png");

/***/ },

/***/ 887282
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d37033865021-Picture10-4-d9fcc5c9bfe2e58db54e3693e6b12ddf.png");

/***/ },

/***/ 486625
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/daa01862bd7a-Picture2-7-3243ce86acb39d22c233b7da927047c4.png");

/***/ },

/***/ 483582
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e8ea8ab0fdba-Picture4-6-05b341a1884082136f254ae28477bf53.png");

/***/ },

/***/ 597649
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f73e06e239b9-Picture5-6-ac1cfeb0a3348d7b191b26b8d37c5217.png");

/***/ },

/***/ 851194
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fb4792ac29f9-Picture7-6-2754486b025a6f873a274a8ae3e9ca72.png");

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