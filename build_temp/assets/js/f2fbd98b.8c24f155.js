"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[90832],{

/***/ 531283
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_chinh_sua_label_taint_cho_worker_group_md_f2f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-chinh-sua-label-taint-cho-worker-group-md-f2f.json
const site_docs_managed_fpt_kubernetes_engine_chinh_sua_label_taint_cho_worker_group_md_f2f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/chinh-sua-label-taint-cho-worker-group","title":"2. Managed – FPT Kubernetes Engine","description":"Chỉnh sửa label/taint cho worker group","source":"@site/docs/managed-fpt-kubernetes-engine/chinh-sua-label-taint-cho-worker-group.md","sourceDirName":"managed-fpt-kubernetes-engine","slug":"/managed-fpt-kubernetes-engine/chinh-sua-label-taint-cho-worker-group","permalink":"/managed-fpt-kubernetes-engine/chinh-sua-label-taint-cho-worker-group","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Chinh sua label taint cho worker group","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=chinh-sua-label-taint-cho-worker-group","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cau hinh proxy protocol","permalink":"/managed-fpt-kubernetes-engine/cau-hinh-proxy-protocol"},"next":{"title":"Chuyen worker group base","permalink":"/managed-fpt-kubernetes-engine/chuyen-worker-group-base"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/chinh-sua-label-taint-cho-worker-group.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Chinh sua label taint cho worker group',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=chinh-sua-label-taint-cho-worker-group',
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
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    strong: "strong",
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
      children: "Chỉnh sửa label/taint cho worker group"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "chỉnh-sửa-labeltaint-cho-worker-group",
      children: "Chỉnh sửa label/taint cho worker group"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes"
      }), " , hệ thống sẽ hiển thị trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes Management"
      }), ". Chọn Cluster muốn chỉnh sửa Label/Taint."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(293)/* ["default"] */ .A) + "",
        width: "689",
        height: "327"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Node Pools"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit Workers"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(100177)/* ["default"] */ .A) + "",
        width: "602",
        height: "285"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Labels"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Taints"
      }), " muốn thêm vào worker group và click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(605943)/* ["default"] */ .A) + "",
        width: "677",
        height: "96"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(816418)/* ["default"] */ .A) + "",
        width: "677",
        height: "90"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(45788)/* ["default"] */ .A) + "",
        width: "602",
        height: "287"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Quá trình chỉnh sửa Labels và Taints sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Processing"
      }), " , trong khi thực hiện người sử dụng không thể thao tác chỉnh sửa Cluster cho đến khi quá trình hoàn tất."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "cô-lập-workload-hệ-thống-và-workload-ứng-dụng",
      children: "Cô lập workload hệ thống và workload ứng dụng"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để workload ứng dụng không làm ảnh hưởng đến sự hoạt động của cluster, tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reserve this worker group for system workloads only"
      }), " cho phép người dùng dành riêng Worker Group Base để chạy System Pods, đồng thời ngăn Application Pods được schedule vào worker group này."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "⚠️ Lưu ý: Tính năng chỉ áp dụng cho các cluster có từ 2 worker group trở lên."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi tạo mới cluster, tại bước cấu hình Worker Group Base, bật tùy chọn “Reserve this worker group for system workloads only”. Khi tính năng này được bật, các node trong Worker Group Base sẽ được gán taint ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CriticalAddonsOnly=true:NoSchedule"
      }), " , đồng nghĩa với việc Application Pods sẽ không được schedule vào Worker Group Base, trừ khi chúng được cấu hình toleration phù hợp."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong trường hợp cluster đang hoạt động và Worker Group Base tồn tại các Application pods, việc bật tính năng này lên sẽ không làm ảnh hưởng đến các application pods trên. Những pods mới được tạo mà không có toleration sẽ không được schedule vào Worker Group Base."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong trường hợp người dùng xóa các Worker Group và cluster chỉ còn lại 1 Worker Group duy nhất, hệ thống sẽ tự động disable tùy chọn này cho đến khi có thêm Worker Group mới."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./thay-doi-cau-hinh-internal-subnet-load-balancer",
        children: " Previous Thay đổi cấu hình Internal subnet Load Balancer (CIDR) "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./bat-tat-node-auto-repair",
        children: " Next Bật/Tắt Node Auto-repair "
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

/***/ 605943
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqUAAABgCAYAAAAkYgscAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABeWSURBVHhe7d1pcBTnnQZwV+2HZHdr82Frq7JbW+VNZTcbl7Oxna21N64klbXL8RE7dryJHTvB2AnrI8bEV2J8SDbGCIExCIMEOjiMEBIYdIEQEkI3OkCWkISELiQkYXQfo/sCPTtPa9oMQoBAo+kWPL+qt2amp6+BafUz/+5++yZMMjw8jMHBQdcrEREREZHZ1d/fD4VSEREREbGUQqmIiIiIWE6hVEREREQsp1AqIiIiIpZTKBURERERyymUioiIiIjlFEpFRERExHIKpSIiIiJiOYVSEREREbGcQqmIiIiIWE6hVEREREQsp1AqIiIiIpZTKBURERERyymUioiIiIjlFEpFRERExHIKpSIiIiJiOYVSEREREbGcQqmIiIiIWE6hVEREREQsp1AqIiIiIpZTKBURERERyymUioiIiIjlFEpFRERExHIKpSIiIiJiOYVSEREREbGcQqmIiIiIWM6jofTcuXMoLS1FfHw84uLipmyxsbHIyckxlnFZg43wefl5/OKjJIy4Bl3WUC1emfcSnno1EUOuQVdSHr8Otz/mg+S6ftcQEREREbGCR0Npb28voqKikJWVhWPHjk3ZioqKsHv3biOYjo+Pu6acQn815t3/P/j2C1G4QnydMFCOB//rPvznYzsx5hp0JUe3LMZN35mHnSd6XENERERExAoeDaU9PT2IiIhAR0eHa8jU6urqEBkZiZqaGteQKfSfxIJHH8T3Xtl9USgddZzG1mW++NnD8zH/7TBUdDtj6FgNnrjvcXz/x2/jzb8swj2Pv4kd+Q2YiL1jKE4KxzOPP4X7frUYn+ecNoYWhb+Pr9+2ANE1zs864kBi0DL8+uHn8KsF/thb1IazxlgiIiIiMts8Hkp37NiB5uZm15BLy8vLQ0xMDBwOh2vIJJcKpWc7EfT8I/iXuxdi4+at+OXdP8WPno/G0HA9nnnoEfzDLfPhuyIA/3f/Q7j5zsUo6hpBW3YUfvhvP8NTb32C9xY8i5vvfgXJTcOo3vUhvn77C0iqdyB/6wf4p9vnIXBXHD564Tnc+cCfkdemWCoiIiLiDZaF0pGRESQkJCA1NRWjo6OuoW4uFUrPDaAiNxM5JXXo6e5C8MIF+Pa/f4zm3hr85p5HcPcTnxujjXyxB//9tfvwaVIpwt6aj7+/0wfHOkfQW30Ad3zzfvwptBzlCf74G2coTT7VjcMhb+MbtzyNNXFHcLK6CoXFpWjrO2fMS0RERERml/1D6aLoSeeIjqEmKxqvv7QIT85/DT/9wQP4/g8DnQGSofQx/OjJPRNjlabikW/chSWRqfB/+VF87ZbH8dBjf8BDv3gGd902D8s/K0FBnD/+9rYFiDnJ2NuHuLUr8Uvn+7fd9Ru8+Wk6+lQoFREREfEKSw/fR0dHo7u72zVkkq8qpZ9fcPX92bYC/PKf78A9r+zEmY42hPzxD7j19rVodY7/9L0/x20PbET32Dmc3heE7379MYTn1mGP3yv4u+8+i+1Z5aiqKEdWagYq23tRuOND/PUdLyK+ohnpESuxancxxkbaEb/iZXzzW/cj8sQUYVlEREREPM7GFzpV49mf/Rg3ffMePPDoM3jgwSfwk6eXIrmkFGueewrf+Y9H8cTv38R9t/8E//ivvqhtrcSv7rkXf/WtX+DxJ3+HW2++E3fN34DGkXEM1x7GH37+KL5395O4/5Gncc/vliCrcQhl297CTTc/jdiabhRG+OHWb9+H3774DuY9+iTufWYVyrp1+F5ERETEGzwaSj3aJdRoNw7G7ILfilAsXxGC5X5BeH9dLMo7zzrXug5RG0IQujsVhw8cwtaQJDR3dSAuOg7hyblI2BUO/40xKG8932PpcEsFIkJCsWT1NqQU1RvDWo5nYkVoAiq6JsJnVe4BrF4WiLWfJaHOoUAqIiIi4i0eDaXT7Tw/NzfXWIaIiIiICHk0lIqIiIiIXAuFUhERERGxnEKpiIiIiFhOoVRERERELKdQKiIiIiKWUygVEREREcsplIqIiIiI5RRKRURERMRyCqUiIiIiYjmFUhERERGxnEKpiIiIzXA/3NTU5HolcmNQKBUREbEZ7pyrqqpcr0RuDAqlIiIiNjMwMICamhrXK5Ebw4xDKcft7OxER0eH8aimpnZ1jdtOd3c3zp4969qqpnbu3Dk4HA5ta2pqM2jcfrq6ujA2NubasuxJoVRuRDMKpdyR8vBCfX29mpraDFpdXZ2xAxoaGnJtXRcaHR1FbW2t0aaaXk1Nbfrt1KlTqK6uNoKfXSmUyo3omkMpd5LcYFi5EZGZ40UNDQ0NrlcX+vLLL9HY2Oh6JSIz1draavwYtCuFUrkRXXMo5fvaYEQ8hz/0LnVhA7c1O1d1ROYang5TWVlpPNqRQqnciBRKRWxCoVTEe3gOt0KpiL0olIrYhEKpiPcolIrYj0KpiE0olIp4z40QSvnZzCYyFyiUitiEQqmI91yvoXR8fNy4iOv48ePIyclBRkYG8vLyUF5ebnSFJWJnCqUiNqFQKuI912Mo5b67tLQUKSkpRhDl3xN2f3XixAlkZ2fj0KFDxjBVTsWubBVKh/q60djR73p1BeNj6GptQt/IuGuAyNxmp1A62NuJxu7L/w0QmctmM5SyOrlu3TqjanmtrjaU8mYAX3zxhRE+29vbjb8n7kZGRoyu5dLS0oyQOpN1E5ktXgilgziecgw1X145bJZl7MILW/Jdr65gpAWRq95FeuPEhtVUnI5PVm7AtpQy5xLPG24qw77kLDRP3Se5iG3YKZQWp3yGl6KLXa+uXnvFUcTFFmOaPzFFvG42Q2l8fDwWL17s1VBaUVFhhOHe3l7XkKm1tLQYFdPTp0+7hojYhxdCaQc2vRCImMxm1+sJZ4d70FBdicLiKrS69lxl2dFY+NlhNNfVoLisHkPufyvGB3CyrBylJ1tg3BxutBVRq32Q0wL0Vufj06VhiEvKwPbAMETEFYF/CvrqShCy5F3Mf+sd5LdxIhH78kQo7e/vQdvwxO1Kzw32otvRZ2wLODuCrk7X84EulJeU4UR9B18ZBpzb/MDYCJpqT6LuTC9KMrbj5ZiJUDo26EBr58Syx4c6cLy4DNVnXDfNGB+FY3gUw85xKsvq0N4zhNMlKVj59ht47tc74Nw8RWxpNkNpQkICfH19vRZKGURZAZ3uzQCKi4uRm5t7UTVVxGpeCKWdiHhjExJyW12vJ/Q1fuEMkEFY/K4/VgZHo825uFM5UXj4T6uwKTgY7769HGti89E+4hx5zIHM3Tvht/QTfOAfgs+TGzDsnO/uNb7IbxpH8b61CEo/MzHj+jS8s2Er6p3TNZaXo+xIFjZuXoE87R3F5mYeSsdxJH43PgorNV4VRq/Bb1/bjG7n8+HaNHwQlg1Hdz0+3xKE93z88M7SIOzJnLiDVFZGJBasDUfYyo3Ytr8GJblReDWhGhhqxuaAjdhbcBqjnU3YHxqMD5aswkf+W5BT7vylN94Ov/BgLA38DCuXbUNeZSvqakpQmJuBNQtj0GTMXcR+ZjOUJiUlGaF0Jq4mlPK80czMzGn9cCVeCJWeno6OjvM/TEXswLJQyh3o8PAgBnqbsPXj1xFfM4wz6eF4eNE29BjvdyPs7dXYf6wf3Sei4btiM040OdBSmob3X/sAR5s7sS9wCXJODyA19D0kVvQZU6G/Cq99ug0Zp5lmnXorsTHYD7kKpWJznqiUdhVlIHT1HjgGBpGw0w8v/DEYNY4x1B7YiM1ZhcgL2Yq1nxVMjNxZjjUrVqLC4QyzO9fjkdc/x4CrsFPiDKmv7klFxuYwbNp3wqiwliaGwWd9Cpo7e1CxbxMWrojAwIgDH/7ZFz5RJyYmdBmpO4IVL+1RKBXb8mQoTUxMREBAADZs2GC0ZcuWGYfvzdeBgYEIDg6+4qF1d1cTSvk5Dh8+bDzn35GioiLj/NLCwsKvWkFBgXFFPnEfz8oqzzEVsRNrQun4ICrSkhEcFIqATzfi1dcXIrZiEA1HY7Foe6FrJKBgkz+iDtejOjkYz857CS+/6oeFC33x6kdhON7Ujr1mKA1zhtJKt1AasBWZZih17ng3KJTKHOCJUApHJYIiNyMprxDRYXuRkrgNkUXHsT8gCvmVVYj22Ya4FPNUmgFs3hGE0OIOFB7YgcV7KlzDnTu5zO14+LnnsOhP61HrOr0mKXShc5gPFjm3w1defhcvhh7C4FATljm3t73VF65bf02eQqnY2vUUSvl342pCKS96YijVeaViN/zeeyGUbkVqiSs0UscXeN4nEMeM7XMcu4PeQvSJfjRm7cI8/+SJ895wDonL1mHv0U7UZYbg44gUY+hXRluw0zx8nxCAoHTXL77T2XgveBtqzMUplMoc4ZFQin7Er98Fv2XrsTHtNAbbyrDOdz18t0WjdngI2as3ITzu5MSo59oQusEfB08NIj/ZGUpjzlc7y5K34Pfr4pAUvgVLt+c4t0YgbedyfJLmOk3GNNoA33VbEV914c5WoVTs7no6fN/Y2IisrCz09bntZy+DV+fzoig+ytzjiZ4T+IOEp3FY5VLbHb/DsxxKu7DlRT/4LI9BQmIG9h/MR0N9GXw+CUTQngzkpO7H4tfeQFTZMFpytuLeF/2RnJWHpN3heOfjCFR2OVfeUY61SwKwaU8K9iYfRkFpPQaH2xDh9wYynHu93uojWO+/BfuS07FtbYhzp1uMr07f7ijF6oD3kKm9o9icZ0IpcCo2Ek/97/PY2+Lc6Mf7Ebbgt1iwPgbsgKL7+CGsWr/JuR2mIToiHAGhSWCvasl7wrAwcuJcVCpMCsOC+GrnszaErHgfkVmNcFQexsc+67F7fwYOHMzEsVPOjXP0DP6ycgN2lU+cdGPqq8zC+7/bAR0cFLu6ni504o6c54jW1ta6hlwe+zJlx/qsmMrc0tbWhiNHjqC7m1cLTA+/h8xs7t/16upq48fMTDEvct91Nbg+7JZs8oV57NaMn22WQ+koyg8dwMqlQfho+UYsW70dhS3DziB5FOtXBGLL3iOoqq1GTecYBjpPIb+iGhm7wrFy7S4cbzm/Ex5tr0HkpjB88PEWJOSfdO5IR1B5JBMNrn1h24lsBKwKxOZ9Rehz/zsw2I7CosOYRo9UIpbyVCgd66jEnrgctBkX4Z9FSXoGko+cP1TQXpWH4NWBWBeZhXbX35K6quNIrTxfNWk9VYqkyolf0Y7qYqSmVxhHMHpOHkHI6g3wd27HuTUcfxDZBcWo6rhw5zba9SVyEyswvbqNiPfNZii1oksofhYG0yudIsDqGLuE8kQgEe8ywxyD26X2FVPhjxb2uDAbP0J4p7Brqbg2NDQYn4NB1ORwOIzv8CyHUhGZDk+FUhG5stkMpXbtPP/MmTNfdZ4vcw/DJUMge004duzYlDmN3zn+MGHAGxoaMr4H/AHCO3wxPJrT8PvA97gdTDUf5kAzxHKeXDbnaX6vuN2wWpufn29U6LlM922JFyy5jz8Z58dp3X9EsXLK858VSkVsgBuvQqmId8xmKPWEqw2lxH03D80fPHjwkrcZ5WFbu35muTz+X548edIIiWVlZRdVuxnw+P/PC90Y7swqJn+ssMswPprT8D3Oj98ZViw7OzuN4cTvB6dvamoyfuzw+8PX5sVzzH/mcM6X4ZLPGWI5LUMqL6zjuAzPU1Xv+RlYva2vrzdec34cl68VSkVsQKFUxHuux1BK3NkziPBKe543yqotAypDQ1dXl2ssmWv4fWWIM/uWbW5uNgKo+f1lIGRo5D7ErIDyO8RHTsP3+JrfD2KoNc9B5nbAO4KZGFAZbDkfVlvZdZhZ8eR05n6Ky+R4DK/mfBkquV7m+Ay+JSUlU25nDNhmjxCsnHJeXLZCqYgNKJSKeM/1Gkrd8bOZTeY2npLBcGfi95dB06xw8n1WJt3P0TTxxwjHZbYzsVJqhlIztJqH6xlQJ180x8Px5jqY68HvFYMkb11rvuZ8+D5DM8Mqgyd/FDHcTsb14jpzuQy+XCd+7xVKRWxAoVTEe26EUCrXDwY2noLBijefm4fOGfqIXTyxQjkVBleGRfdg6B5KuS2YFU8GRB56Z+WSenp6jPmymYflzeWY0zGAknleM4dxX8bti43VU7Ny6o7jHz161JieFViOx3VUKBWxAYVSEe9RKJW5gkGNFUVesc5TM1iZ5CNDonkFO6uYrEia1U53ZiXUPRi6h1LiuaZmMGTgNXEYtxNuL8SLkXgaAXEY14vrQjyEz/NCuZ7TxWVxGjZWY5ktFUpFbEChVMR7GEYVSmUu4HmZZhB0x31Gbm6uUeFkQORhc1YpGUJ55TvDIocz7DG8sprKCijDI8/ldP9+MfdxHN6Ewf3cY1ZFuWxWTDk/jsMASZwP32fA5fIYjln1NNeJy2K/qu4XUU3GdU1OTjbCLed3zbcZ5T8GPxBXRERmjhvxpX5h8nwb9Sso4jncwU7uvNtOFEqFGNR4iJ77h6lwn8EeFYihkIUNBjzzSnZOT+wOjIfKzf0Iv/vcr7jj940B1JyGGBIZPDlPzo/N/XvJK+u5LFZUmR2J8zXXgeH3cjmRlV1zXemaQymxjyr+A5grqqamdm2NfyC4oU91MjjxRyAPtbBNNb2amtr0GytP3JHb+eiDQqnMhHuw9IRrmd+1TDOjUEocl6VZlmD5qKamdnWN2w5/4Jnn7FwKDzPyF6e2NTW1a2/cfnh4klUlO1MolRvRjEOpiIiIeJZCqdyIFEpFRERshjvnS134KHK9UigVERGxGe6HL3Vxi8j1SqFURERERCynUCoiIiJic+w+iV2Zse9PXvTq6SvsJ2N3T1weLw681gsD2aPM1ayrQqmIiIiIjTGIspN6XvzGfkv5nAFuOhgI2fPElXp4cccwyrstcXnsPs29Q/3J2GUh529ibzJm94YMtuxQf7qhlBf4KZSKiIiI2BDvjMQO7N07oWcXgWbINLsLZBhkQJyM75n3qDcrngyNDJoMjZNxvuzQ3v0990DL4ZyWwxg2ee4zx+ddnxgq2WE++95mluT7ZiDlsrl+XB/3Prn5Podxej4qlIqIiIjYkHnTlKkw6LGayapmRUWF8eie3xj4eBcn3hef7zE0MvwxOHJ8PvJ9MzgSn7PnB1Zk3cMohzPY8va8bAyeDJespHL+XEe+X1BQYNwZiiGZr3l7U+I8uQ58ZIjlunCenA/vCMXPwXv0K5SKiIiI2BADIMMd8ZA9gx0rp8xpHO7en6151zJ3rKRyHFYpGQI5PQMjMdQymE4+FYDnrzJsssJq9gLBMMv767NyyzDK56yYMjMywJq4fPNwv/stsrlcM6Catzll1ZXDTfxcCqUiIiIiNsRA6d49GMMlgyrP4+R7PN/UxLDpHlKJ1U4GTAZNhkmGUPfKKAPlpc4ZZRBlVZPL4HmmvH8+58Xls+LJrDj5Rg+8jS8vjiKutxlEuRwGWmIgZXhtaWm5IEQzwF4USrniXAjDKT+Ampqampqampqa9xuDGiuIzGSsbDJkMhQy8PEQPKuODKpsDIAc5j49q5E8PM5HhkweIudzzot5j/Nm4HSfhsP5PqusDJAMsgyPrGoy0LLxPa5Te3u7MdwMvWZll68ZUHn6AYdzHIZbPucwhltznlx3fi4G3YtCKRfG1MzzAjIzM5GVlaWmpqampqampmZBO3ToEBISEhAbG2u0vXv3IiMjw2hJSUmIi4szhh84cMAYNnl6c9rU1FSj8XVMTIwxn5SUlIvG379//1fL2rdvH9LS0ow8yGXFx8cbwxMTE41xOZzDzHU6ePCgMe/k5GRjfK4Tx+My+Tmys7ONYVwGp+Vzjs9lsBI7ZShlYmVZlucZqKmpqampqampeb/xyDUbq6CsLrKdOXPGGMaqIw+V8/A5h7MSOTm7cTxWQnn4nIf8+T7nxaokK5msmnIc92ncl8VKKd/ndDw9gPPhtOY6sHEcVmw5L3McHprnunGdOA5f8z3OxzwdgOvPYeY5ppzuolAqIiIiIjKbeAoATylg4xF6nmagUCoiIiIiXsXzVhsaGoyKLKu9rKIqlIqIiIiI5RRKRURERMRyCqUiIiIiYjHg/wEOckLgHq2GRgAAAABJRU5ErkJggg==");

/***/ },

/***/ 45788
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ae58b9dbeb1e-Picture3-3-15a81594ae9ba79d873ff0afa4a25b61.png");

/***/ },

/***/ 100177
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c348126c2511-Picture2-3-478e603fae0a08317507dcd774bc9e2f.png");

/***/ },

/***/ 816418
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 293
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e8646f3cb004-Picture26-e97c2677add55d100a6ff2815ad18b10.png");

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