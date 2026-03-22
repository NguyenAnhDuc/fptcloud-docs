"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[93240],{

/***/ 99510
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_security_version_tinh_nang_runtime_security_cluster_md_a91_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-security-version-tinh-nang-runtime-security-cluster-md-a91.json
const site_docs_managed_fpt_kubernetes_engine_security_version_tinh_nang_runtime_security_cluster_md_a91_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/security-version/tinh-nang-runtime-security-cluster","title":"2. Managed – FPT Kubernetes Engine","description":"Tính năng Runtime Security cho Managed Kubernetes Cluster","source":"@site/docs/managed-fpt-kubernetes-engine/security-version/tinh-nang-runtime-security-cluster.md","sourceDirName":"managed-fpt-kubernetes-engine/security-version","slug":"/managed-fpt-kubernetes-engine/security-version/tinh-nang-runtime-security-cluster","permalink":"/managed-fpt-kubernetes-engine/security-version/tinh-nang-runtime-security-cluster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Tinh nang runtime security cluster","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=tinh-nang-runtime-security-cluster","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Nang cap k8s version","permalink":"/managed-fpt-kubernetes-engine/security-version/nang-cap-k8s-version"},"next":{"title":"Tinh nang tang cuong bao mat mfke","permalink":"/managed-fpt-kubernetes-engine/security-version/tinh-nang-tang-cuong-bao-mat-mfke"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/security-version/tinh-nang-runtime-security-cluster.md


const frontMatter = {
	sidebar_label: 'Tinh nang runtime security cluster',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=tinh-nang-runtime-security-cluster',
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
      children: "Tính năng Runtime Security cho Managed Kubernetes Cluster"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Giới thiệu chung tính năng Runtime Security"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để đảm bảo bảo về an toàn bảo mật thông tin cho FPT Cloud Managed Kubernetes cluster, FPT Cloud phát triển tính năng cho phép tích hợp công cụ hỗ trợ Runtime Security cung cấp khả năng phát hiện các hành động bất thường trong K8S cluster có thể gây rủi ro cho lớp runtime và kernel của worker node."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Falco là một công cụ mã nguồn mở mạnh mẽ dùng để giám sát và phát hiện các hoạt động bất thường trong hệ thống container và Kubernetes. Falco được phát triển bởi Sysdig và hiện là một dự án được đảm bảo của CNCF (Cloud Native Computing Foundation). Tính năng chính của Falco là cung cấp \"runtime security\" - bảo mật thời gian thực - cho các hệ thống bằng cách theo dõi các hành vi của hệ điều hành và các container, sau đó dựa vào các rule đã được xác định trước để phát hiện các hoạt động bất thường hoặc tiềm ẩn rủi ro cho hệ thống."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Cloud cung cấp tích hợp tính năng Runtime Security cho phép người dùng cấu hình nhận cảnh báo chi tiết của các hành vi qua Telegram hoặc Gmail. Bằng cách sử dụng các kênh cảnh báo, Security Runtime giúp đảm bảo rằng các sự kiện bảo mật được phát hiện kịp thời và các quản trị viên có thể hành động nhanh chóng để bảo vệ hệ thống."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Hướng dẫn sử dụng tính năng trên Unify Portal:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Lưu ý: Bộ tính năng tăng cường khả năng bảo mật cho Managed Kubernetes Cluster được tích hợp sau khi cluster được khởi tạo thành công (Trạng thái Succeeded (Running))"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ". Tích hợp Falco Engine:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Enable Falco Engine"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bước 1: Truy cập portal FPT Cloud console.fptcloud.com, chọn mục ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Kubernetes"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(427085)/* ["default"] */ .A) + "",
        width: "681",
        height: "320"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 2: Chọn cluster cần tích hợp Runtime"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(380885)/* ["default"] */ .A) + "",
        width: "683",
        height: "323"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 3: Chọn tab Security > Chọn Runtime Security rồi thực hiện enable:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(997905)/* ["default"] */ .A) + "",
        width: "696",
        height: "330"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 4: Chọn Confirm để hoàn thành"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(621793)/* ["default"] */ .A) + "",
        width: "694",
        height: "328"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Runtime Security được enable thành công nhưng người dùng sẽ không nhận được cảnh báo do chưa cấu hình các kênh nhận cảnh báo."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(845678)/* ["default"] */ .A) + "",
        width: "696",
        height: "330"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "B"
      }), ". Disable Falco Engine"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi không có nhu cầu tích hợp Runtime Security, người dùng có thể Disable dịch vụ ngay trên portal."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 1: Bấm vào button đang ở trạng thái Enable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(433748)/* ["default"] */ .A) + "",
        width: "691",
        height: "329"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 2: Nhập tên cụm và bấm Disable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(354633)/* ["default"] */ .A) + "",
        width: "689",
        height: "327"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết quả sau khi Disable:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(591282)/* ["default"] */ .A) + "",
        width: "687",
        height: "326"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C"
      }), ". Tích hợp tính năng Falco UI"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Enable Falco UI"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 1: Chọn tab Security Chọn Runtime Security rồi thực hiện enable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(829199)/* ["default"] */ .A) + "",
        width: "702",
        height: "333"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 2: Thực hiện Enable UI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(260499)/* ["default"] */ .A) + "",
        width: "700",
        height: "331"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 3: Nhập User Name và Password để truy cập vào Falco UI, sau đó bấm Confirm để hoàn thành"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(67009)/* ["default"] */ .A) + "",
        width: "698",
        height: "331"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(686692)/* ["default"] */ .A) + "",
        width: "694",
        height: "327"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 4: Download file kubeconfig và thực hiện port-forward cho service “falco-falcosidekick-ui\". Người dùng có thể sử dụng công cụ Lens IDE để thực hiện port-forward trên giao diện dashboard bằng cách > chọn Network > chọn Services > Filter theo Namespace fptcloud-runtime-security"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(311846)/* ["default"] */ .A) + "",
        width: "698",
        height: "341"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chọn Service falco-falcosidekick-ui, chọn Forward"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(902485)/* ["default"] */ .A) + "",
        width: "699",
        height: "356"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập port forward và bấm Start để truy cập"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(278789)/* ["default"] */ .A) + "",
        width: "699",
        height: "354"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 5: Nhập Username và Password đã cấu hình khi enable dịch vụ"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(989516)/* ["default"] */ .A) + "",
        width: "697",
        height: "325"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết quả sau khi login:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(948938)/* ["default"] */ .A) + "",
        width: "705",
        height: "340"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Màn hình dashboard khi có cảnh báo:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(739206)/* ["default"] */ .A) + "",
        width: "697",
        height: "336"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Update Username và Password"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 1: Bấm Edit Rutime"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(915445)/* ["default"] */ .A) + "",
        width: "710",
        height: "339"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 2: Thực hiện edit Username và Password và bấm Confirm"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(883700)/* ["default"] */ .A) + "",
        width: "701",
        height: "335"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(486221)/* ["default"] */ .A) + "",
        width: "702",
        height: "333"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Disable Falco UI"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để thực hiện disable Falco UI, chọn Edit Runtime > Bấm button đang Enable > Bấm Confirm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(630322)/* ["default"] */ .A) + "",
        width: "706",
        height: "337"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(504793)/* ["default"] */ .A) + "",
        width: "706",
        height: "335"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(376910)/* ["default"] */ .A) + "",
        width: "702",
        height: "332"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết quả sau khi Disable Falco UI:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(332406)/* ["default"] */ .A) + "",
        width: "713",
        height: "338"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "D"
      }), ". Tích hợp Runtime Security Event Notification"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Telegram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.1. Enable Runtime Security Event Notification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 1: Đăng nhập Telegram, search BotFather"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(60351)/* ["default"] */ .A) + "",
        width: "702",
        height: "387"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 2: Nhập /newbot và tiến hành đặt tên cho bot"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(74785)/* ["default"] */ .A) + "",
        width: "705",
        height: "514"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 3: Tạo group chat để nhận thông báo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(24702)/* ["default"] */ .A) + "",
        width: "712",
        height: "430"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(561422)/* ["default"] */ .A) + "",
        width: "705",
        height: "383"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(435113)/* ["default"] */ .A) + "",
        width: "711",
        height: "382"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(846265)/* ["default"] */ .A) + "",
        width: "710",
        height: "386"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(53514)/* ["default"] */ .A) + "",
        width: "708",
        height: "236"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 4: Trên Unify portal, thực hiện enable Runtime Security Event Notification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(839598)/* ["default"] */ .A) + "",
        width: "700",
        height: "333"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 5: Chọn kênh nhận cảnh báo là Telegram, nhập ChatID và Token ID sau đó bấm Confirm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(454375)/* ["default"] */ .A) + "",
        width: "710",
        height: "338"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết quả sau khi cấu hình xong:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(375318)/* ["default"] */ .A) + "",
        width: "707",
        height: "340"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi phát hiện sự bất thường, telegram của người dùng sẽ nhận được cảnh báo như hình dưới đây:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(144711)/* ["default"] */ .A) + "",
        width: "707",
        height: "511"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.2 Thay đổi kênh nhận thông báo qua Gmail"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: Trước khi tạo Application Token cho Gmail, cần phải bật tính năng “Xác minh 2 bước” trên Tài khoản Google của mình."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bước 1: Truy cập ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://accounts.google.com/v3/signin/challenge/pwd?TL=AKeb6mwAuh3qaC1eKc7XewCMQU6V6lDuv3Om7ECAlm5R3MUftowOoR4MX-XbD84l&cid=3&continue=https%3A%2F%2Fmyaccount.google.com%2Fapppasswords%3Fpli%3D1%26rapt%3DAEjHL4OQmf3KJ7gkSxhbmm5DqwRFDxwc3wwtSlkg1jrKcUHx_TMi-BUsKmUREmg-JFjF-YQ6g1k7h68AIjbt4iHygIAU-91TEcQff78-lVDMW66UknnWR6s&flowName=GlifWebSignIn&followup=https%3A%2F%2Fmyaccount.google.com%2Fapppasswords%3Fpli%3D1%26rapt%3DAEjHL4OQmf3KJ7gkSxhbmm5DqwRFDxwc3wwtSlkg1jrKcUHx_TMi-BUsKmUREmg-JFjF-YQ6g1k7h68AIjbt4iHygIAU-91TEcQff78-lVDMW66UknnWR6s&ifkv=Ab5oB3ob8hiIojOpjbbdnRQCMUP-nN9e1JkarHYVPJC5rqHF2C0uV-5LfGO3o3CngznWNb750rsr&osid=1&rart=ANgoxcdw5cHl3-8KJUueNT-AOeg1uh0cFuqiMIYcsOFhdFZ3OLrYh76YA6MaQzOzIUzWMD0eRq9U2sOrd54eBwDGwp59FrpO-d9ALceCMK6WKkSUeohZqCs&rpbg=1&service=accountsettings",
        children: "Link"
      }), " để tạo Application Token"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(232691)/* ["default"] */ .A) + "",
        width: "704",
        height: "595"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(362269)/* ["default"] */ .A) + "",
        width: "704",
        height: "334"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 2: Chọn Edit Runtime"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(750844)/* ["default"] */ .A) + "",
        width: "693",
        height: "332"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 3: Nhập thông tin để nhận thông báo qua Gmail và bấm Confirm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(698609)/* ["default"] */ .A) + "",
        width: "713",
        height: "338"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết quả sau khi cấu hình xong:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(749421)/* ["default"] */ .A) + "",
        width: "705",
        height: "338"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi có bất thường, hệ thống sẽ gửi cảnh báo về Gmail như ví dụ bên dưới:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(938620)/* ["default"] */ .A) + "",
        width: "710",
        height: "381"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.3. Disable Runtime Security Event Notification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi không có nhu cầu nhận thông báo qua Telegram hoặc Gmail, người dùng vào tab Security > chọn Edit Runtime và thực hiện disable Runtime Security Event Notification > Bấm Confirm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(999381)/* ["default"] */ .A) + "",
        width: "711",
        height: "320"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(180104)/* ["default"] */ .A) + "",
        width: "701",
        height: "335"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(183311)/* ["default"] */ .A) + "",
        width: "700",
        height: "332"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(581604)/* ["default"] */ .A) + "",
        width: "704",
        height: "333"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi disable Runtime Security Event Notification, người dùng sẽ không còn nhận bất kỳ cảnh báo nào khi có bất thường xảy ra."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tinh-nang-benchmark-cluster",
        children: " Previous Tính năng Benchmark Managed Kubernetes Cluster "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tinh-nang-workload-scan",
        children: " Next Tính năng Workload Managed Kubernetes Cluster "
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

/***/ 183311
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/059e399cb71e-Picture45-1-e66868c6d4d3d03ce19b02f8e171eeb9.png");

/***/ },

/***/ 938620
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0d8044e6f49d-Picture42-1-d8f333d540eca55f406d840032528657.png");

/***/ },

/***/ 621793
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/10290f0dcc32-Picture4-5-37f02c2dd8f8a8e2f1531ae9c2c4b3e7.png");

/***/ },

/***/ 883700
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1434324af658-Picture20-2-66faf272b4be27e58ceca32fb2854c2b.png");

/***/ },

/***/ 376910
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1d7bb0790d9d-Picture24-2-39d22389e176f8ecc8f0f73bced920b8.png");

/***/ },

/***/ 948938
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1e73f1f57c6c-Picture17-2-aad33172ddd583d94644264608f1b4bf.png");

/***/ },

/***/ 686692
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2a273fdfc87b-Picture12-3-68ecea5be8bef9e1defd25c3d7857b35.png");

/***/ },

/***/ 630322
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/35ccf2824818-Picture22-2-4d8424c593e861780ed86d0dc40804e9.png");

/***/ },

/***/ 332406
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4684d6eb0e48-Picture25-2-0e1530748d75bc8fab8592150ee6a107.png");

/***/ },

/***/ 698609
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/517093c106aa-Picture40-1-6dd2b6f2bf92037cc99fe89231a393fa.png");

/***/ },

/***/ 380885
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/525544d91276-Picture2-6-3c095b2931bb40a974ee3bc72bdd2b75.png");

/***/ },

/***/ 354633
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5b1a139607b5-Picture7-5-24394db706e8114afcd935d1a62ff47c.png");

/***/ },

/***/ 504793
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5cd992439a9c-Picture23-2-9a37cee633e1cf59dec285f0cfddc2c9.png");

/***/ },

/***/ 67009
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5d7802036f30-Picture11-2-e39037b1fab8f3a764d69545128bd9e1.png");

/***/ },

/***/ 749421
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/65717d16d430-Picture41-1-884de359d0bf45f625ae0b2a8862a2b4.png");

/***/ },

/***/ 486221
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6d5e1e2f7d48-Picture21-2-e690d2e9d1b749bb1034854d549cb3af.png");

/***/ },

/***/ 74785
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6ee2ba650d29-Picture27-2-c7e7400ddc3e28ddb1ff91bea4a0f402.png");

/***/ },

/***/ 839598
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/710ec259c32e-Picture33-2-077cff8fff5826a0e4c5989fb22ddd9b.png");

/***/ },

/***/ 311846
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7145e35754fc-Picture13-2-c9f5f7b4373e7d55f36bc1b2a0ca74c2.png");

/***/ },

/***/ 591282
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8025d23871da-Picture8-4-e9a4d402e451ec7d72a484372c7fb39c.png");

/***/ },

/***/ 232691
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/80332a4ab749-Picture37-2-b66b124cc42929fd4f740ede8ee93c75.png");

/***/ },

/***/ 845678
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/87c9c8f9cd8e-Picture5-5-e747bb500c9c32156993e1bd34aa0759.png");

/***/ },

/***/ 427085
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/88d55a793dbc-Picture1-8-aab743b5a734e77aa8a58ac68b4c7640.png");

/***/ },

/***/ 561422
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/89f24d134795-Picture29-2-4f2c143bf24d6fdb390e4ce3784ab805.png");

/***/ },

/***/ 278789
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8f8f127c7189-Picture15-2-6d6567a1ff44d29ccf2b2d56f2ae53bb.png");

/***/ },

/***/ 433748
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/912fbb007791-Picture6-5-8acd2ae195cacfc6b5a2132115c50fbc.png");

/***/ },

/***/ 375318
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/94806381504c-Picture35-2-4688f2f56049b4fded0684a26a881726.png");

/***/ },

/***/ 260499
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/95f69088152e-Picture10-3-5f3692c024786ea36fc14160f001cd55.png");

/***/ },

/***/ 739206
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9e9a042d5728-Picture18-2-c7d2896203f56b3fc6555bc6e8bfb678.png");

/***/ },

/***/ 60351
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9f59ef7d7332-Picture26-2-a26a445639d0c1322e46ca795c3135c2.png");

/***/ },

/***/ 915445
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b353e77976c1-Picture19-2-32d28b37105cef2e1f96d96017309f54.png");

/***/ },

/***/ 53514
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b4cf9d92a075-Picture32-2-c1a5a414bb34356e5d371288e7a8cc2a.png");

/***/ },

/***/ 144711
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b799e46ed7fc-Picture36-2-75f6fa192c96b1756608020d4f4dd954.png");

/***/ },

/***/ 750844
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b7ff93b3ce6d-Picture39-1-3755426e7c99a32917e6e81d52f6351f.png");

/***/ },

/***/ 902485
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bb48a8d7419a-Picture14-2-eaa8a93aa24f403e0ff7bf7fc6829a16.png");

/***/ },

/***/ 454375
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bdf2572fd1ec-Picture34-2-2ed94dc6bff90e08ad41f336df0860eb.png");

/***/ },

/***/ 180104
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c148eb98097d-Picture44-1-0f9cc7471f718279ea613e2f62bac03e.png");

/***/ },

/***/ 362269
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c92796bc9007-Picture38-2-58d555dab7285497291651c179787653.png");

/***/ },

/***/ 846265
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c94025082b76-Picture31-2-d538b6e5a63c236aefd2478329f84c5d.png");

/***/ },

/***/ 581604
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cb38d13e0490-Picture46-1-32a3b9ac1eb1344135a8f17bb80cc377.png");

/***/ },

/***/ 997905
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ce7293838b27-Picture3-6-6ed9244aa72799a14ae604b7c3a47635.png");

/***/ },

/***/ 989516
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d46d7febffac-Picture16-2-88fc44c31b182813079cff6ce0a39d30.png");

/***/ },

/***/ 829199
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e4bf5847ebf0-Picture9-3-35e427f4a7fea3ebfaa2521b65fc0f88.png");

/***/ },

/***/ 435113
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e9df26bed65c-Picture30-2-fb4a3931d46722aecc04b6b170c5e40f.png");

/***/ },

/***/ 24702
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f21f0f24380e-Picture28-2-e320e86f17b0fded4e30ad3a5fcbe0a4.png");

/***/ },

/***/ 999381
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fdc9e740d3de-Picture43-1-c6e24e2edbf2e1d2ce8d696f5a1abc60.png");

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