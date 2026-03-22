"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[68140],{

/***/ 366846
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_model_hub_upload_file_md_64a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-model-hub-upload-file-md-64a.json
const site_docs_model_hub_upload_file_md_64a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"model-hub/upload-file","title":"2. Model Hub","description":"Upload file","source":"@site/docs/model-hub/upload-file.md","sourceDirName":"model-hub","slug":"/model-hub/upload-file","permalink":"/model-hub/upload-file","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Upload file","title":"2. Model Hub","source":"https://fptcloud.com/documents/model-hub/?doc=upload-file","parent":"https://fptcloud.com/documents/model-hub","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Update version","permalink":"/model-hub/update-version"},"next":{"title":"View update organization","permalink":"/model-hub/view-update-organization"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/model-hub/upload-file.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Upload file',
	title: '2. Model Hub',
	source: 'https://fptcloud.com/documents/model-hub/?doc=upload-file',
	parent: 'https://fptcloud.com/documents/model-hub',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Model Hub';

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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-model-hub",
        children: "2. Model Hub"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Upload file"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mục đích: Tải lên bổ sung tệp ở tất cả các định dạng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các bước thực hiện:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 1: Click vào 1 model để xem chi tiết > Chọn tab Version"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 2: Click vào dấu 3 chấm cột Action > Chọn Upload"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(158823)/* ["default"] */ .A) + "",
        width: "624",
        height: "165"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 3: Sinh ra thông tin để upload file qua CLI."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(470698)/* ["default"] */ .A) + "",
        width: "483",
        height: "136"
      }), " Bước 4: Người dùng cần vào menu Configuration để lấy các thông tin Access/Secret key để upload file ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(658382)/* ["default"] */ .A) + "",
        width: "624",
        height: "308"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(212179)/* ["default"] */ .A) + "",
        width: "598",
        height: "220"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ dùng tool S3 Client là WinSCP để upload file, bạn thao tác như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 1: Cài WinSCP và mở WinSCP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 2: Nhập các thông tin để login vào WinSCP như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(570484)/* ["default"] */ .A) + "",
        width: "624",
        height: "422"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "File protocol: chọn là Amazon S3"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Encryption: chọn TLS/SSL Implicit encryption"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Các trường Host name, Access key ID, Secret access key bạn thao tác như hướng dẫn bên dưới"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Port: 443"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(655371)/* ["default"] */ .A) + "",
        width: "746",
        height: "409"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi login vào WinSCP thành công, bạn có thể thực hiện upload file, quản lí tệp lưu trữ trong model ngay trên đây."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trên portal, sau khi tải lên từ S3 Client, các file sẽ hiển thị tương ứng với từng version trong tab File Browser"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng chuyển sang tab File Browser và chọn version tương ứng để view, download file, delete file."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(884875)/* ["default"] */ .A) + "",
        width: "624",
        height: "184"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com",
        children: " Previous Upload file / Download file "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./download-file",
        children: " Next Download file "
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

/***/ 470698
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeMAAACICAYAAADUM4MVAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABtoSURBVHhe7Z2JlxXFvcf5J17eOfFleXmJRo0a1IgKuARQUEGQfRkwwyarCChLRDAaRBRkVRSRxYUoCIiggAqCgkAwoMCAC7IJsi/DPoD15vObW5e+Td+ZYbt9Yb6fc0rnVld3V1f3rU9tfSnXu3dvFxV69epVqtCzZ08LPXr0OG/hscceU1BQUFBQuKAhyj9nE7wHoxyZLoSdGynjqB2D4XzIN6pgFBQUFBQUsiFEeetMQpQ7wyHo3RQZjxgxwq1evdoVFBQ4IYQQQpx/cCyuHTlyZFLKSRkjYklYCCGEyAw41wu5nO8uY2khhBBCZA7caz1jL2P1ioUQQojMgntNxn4VmBBCCCEyjw1TS8ZCCCFEfEjGQgghRMxIxkIIIUTM4GCTMS8oCyGEECLzmIz9r4UIIYQQIvMkZcxPfwkhhBAi8+Dhcoj40UcfTUQJIYQQIpPg4XKIWDIWQggh4kEyFkIIIWIGB5uMu3fvnogSQgghRCaRjIUQQoiYMRkj4m7duiWihBBCCJFJ8HA5RNy1a9dElBBCCCEyCR6WjIUQQogYMRkjYslYCCGEiAfJWAghhIgZHGwy7tKlSyJKCCGEEJkEB5d75JFH3MMPP5yIEkIIIUQmkYyFEEKImDEZ8x/JWAghhIgHkzEiloyFEEKIeEjKuHPnzokoIYQQQmQSPFwOEUvGQgghRDxIxkIIIUTMJGXcqVOnRNTFxc8//+xWrVrlJkyY4FasWOFOnjyZ2HLh2Lx5sxs7dqybPXu2KygoSMQKIYTIJnbs2OFefvlld+DAgURMeg4ePOheeuklt2vXrkRMZsHDGZPxnj173NNPP+14lWr9+vWJ2CJOnDhhcsvNzXVTp061z6WBdIjxyiuvdKNGjSr1fufCwoUL3Y033mhlxg0UQgiRfeAE/mnC5557zuXn5ydiT4dtzz//vKVlHzp5mQafmIw7duyYiLpwbN++3TVs2NBVrlzZrVy5MhFbBBIdP368SXXYsGEXjYxL0+ISQgiRefbt2+eeeeYZkyz/jxIydfiAAQMsTf/+/d3evXsTWzKLZHwWSMZCCHFxgJC9bBFyULbFbcs0JmP+k40yZi6YvA0ZMsT169fP3Xrrre6aa65xLVu2tG0MJaSTMcPgDInfdddd7tprr3VNmjRxb731ljt06JBtJ93y5cvdE0884apWrWr7V6tWzY0cOdKG0z2HDx+2fFWpUsXSkP9evXrZMWnEaJhaCCGym6jeb2l6zZkkq2Xse6CXX365hdtuu83dcMMN9jdyRMhRMt6wYYOrU6eOpUOaXqRXXHGFzQscPXrU0o0ePdpdffXVrmbNmq5WrVruqquusn2Q/7FjxywMHz48uS/nJ73Pj2QshBAXB8iWuWMvX6TM3yXNJ2eKi0LG9IiXLFliPWEKrW/fviZDCpOeblDGCJTVc8iTf41q9+7ddvxvv/3W3Xvvva5SpUq26hpYNbd169bkZP2yZcvcLbfc4po3b277rVmzxnrNxC1YsMBWarM676GHHpKMhRDiIoP62guZMHDgwKyZarwoZNyiRYukVAEx33TTTa5Zs2Zu27ZtKTImXZs2bawHjUC9aHkFafDgwdb7Zbia47MNGX/yySd27qeeespdf/31rn79+hY/c+ZM61nzM2W+5YSQ33vvPRsul4yFEOLiISxjRkol4zOQcYcOHVIKjF4uQ88MLW/cuDFFxj/++KPJ9Pbbb3erV69O7JF6fIahmQt+44033HXXXZccdvahXr169i7xm2++aekZ0qDH7fnss89M9pSbZCyEENkPDvGvLzGqmpXD1Ig4EzJmWDgnJ8dVqFDBLV26NBFbBLLkhWvkx1xuUMatW7e2yXYPw8d33nmnq1u3bvIHOLyMf/rpJ9eoUSMT/tdff53Yo+j4HJfh6xEjRrhZs2ZZL5hFW0OHDrVe8OTJk21IHBkj9UmTJtkcMcPiR44cSRzJWY+bfSVjIYTIfi6aBVyZkjG90T59+pg4x4wZY4L0sIKZuVh6qvz4B0PIXsY1atRw69ats3TswzAzkqTHzH5BGVOgrHZmGHnKlCnJcxDfrVs3G3aeNm2atZDY57XXXrM0nG/+/PnW40XGDFP7HjC9eYbDgbTsw74aphZCiOzmonq1KVMyRniLFi1yN998s8kUac6YMcPkVrt2bRsi5he4du7caem9jIlHfPRI33//fevNIlVky/BxUMbHjx938+bNM4kylP3uu++6xYsX20Q950SsmzZtSgq1VatWJuEPP/wwuQLby5h8MF9NHOKfPn26GzRokPWKfZ4kYyGEyE5K0/uN6jXHQVLGyCYTIEsE6SUbDAjZvz8MXsZIk+HlYFqGjilYeqpBGfOZV5eYHw7PB1evXt1WTHN8Xn9q0KBByvaKFSvaymm/gIt0X375pe0XTFe+fHn1jIUQIsvBCUi2pHlhhOwXdjFd6h2USfBwRmXs2bJli3v77bftRzZefPFF65kGF2mBlzH5Q9IsuKKg6PkiXKDQ6OnSa0awvhBZ9bx27Vo3btw4Owe/dx3+AXB6vswLc8w5c+bYzeIY7Bf8ByBIR/5effVVW3lNyykvL8+Gzv0wuBBCiOyCV1Gp/8NuiYKOFS6K6x+KiE3GpcHLmO57aQpTCCGEuBgxGSNiyVgIIYSIB8lYCCGEiJmslvH+/fvtpys1NyuEEOJSJqtlLIQQQpQFJGMhhBAiZiRjIYQQImYkYyGEECJmJGMhhBAiZiRjIYQQImaSMm7fvn0iSgghhBCZBA9LxkIIIUSMSMZCCCFEzEjGQgghRMxIxkIIIUTM4GDJWAghhIgRyVgIIYSIGclYCCGEiBnJWAghhIgZkzH/kYyFEEKIeJCMhRBCiJiRjIUQQoiYkYyFEEKImJGMhRBCiJiRjIUQQoiYkYyFEEKImJGMhRBCiJiRjIUQQoiYkYyFEEKImJGMs4wDBw64vLw8t2jRIvf5558rKCgoKMQQqIOpi6mTM4FknEVw03kAtm7d6k6cOJGIFUIIkWmog6mLqZMzIWTJOIugFcbNF0IIkR1QJ1M3X2gk4yyCFph6xEIIkT1QJ1M3//zzz4mYC4NknEUwTyGEECK7WLhwoWRclpCMhRAi+5CMyxiSsRBCZB+ScRlDMhZCiOxDMi5jSMZCCJF9SMZlDMlYCCGyD8m4jCEZCyFE9iEZlzEkYyGEiKagoMBNnDjRjR07tlRh8+bNiT3PnUtSxlzQsmXLXNeuXV2TJk1c8+bN3eDBg93OnTsTKZwbPny469Spk9u9e3ci5hTEsY00lxqSsRBCRLNjxw735JNPun79+pUqzJ0797wJ9JKUMb9kgoB79+7t5s+f79555x3XunVrk/OuXbssjWQssp1t23e5O6q2cCu+WpuIyTxHjhx1j3Qf4P7rlxXdZb+9wy1Z+nViSzQHDx5299ft4GbNSf+csY00pBWnw32/s9qDbvmKNYmYS5+C48fdoi+Wuz179ydi4sHLeN68eYmYaHw6ybgY9u/f77p3724izs/PT8Q6t2DBAuslz5492z5Lxhc3332/0f2t9d/df/9PZRPFNeXvd29OnHHBH+YgO3bsdjXrtHdr1qxLxJwb/xzwcorEzkTGwbxs2LDFtWnX96xl9+prk12P3oOsLD+c/Zm7+97Wbs+efe7EiZMllm+2yZjGBM8FzwfPCc9LzoM93I9btidSpMeXw8mTp645Ku58c6Yy3rJ1u2v90BPJ78Jd97Ryq1Z/Z9u4X1/+Z7Wr9UAH20a4pXJjN3feYtt+vuDZmDL1I3ft9bXtHL/63V/dwEFj3LGCAtuen3/QDR463v3hyuq2/Ze/vt117/Gc27e/qI7m+a18ZzP32cIv7TP5HjdhajJ99fva2Hfec+jQEden3zB32W/usO2163Z0GzduSWw9Mw4ePGh+QMAzZ860Hi9D0HyOCocOHbJRVsm4BL777juXm5vrJk+enIgpgn8RY/Hixe7777+3z5LxxQsP7NjxU9ykybPc0aPH7PPiJV+5P99Yx/172cpEqgvPlGkfuabNH7U8nCsco3Gz7mct42Be5i/4t6vXqMtZyW5//gGTOseAYSPecB06P2V/l4Zsk/HmzT+5J/oNdz+s32zPCZX4w137W2OloCD9b7RTDgjMlwNExV0IzkTGXNPwkW+4tyd9aPceKQ4dPsH23717r/U4Bw0Za/Llb7a/WyjNm25taI228wXl+2jP5926HzZZnvhc8fam7vU3pxd+dnYt/Qe84rYXXhvs3LnHPVC/sxv4/BhLH+bT+Uvt2f/2uw1Foi98vmlkIG3SP953qGvZ5vHCztcB206Di+1RxyoJ6sQzGZrevn27esalYenSpa5x48ZuypQpiZhoJOMzZ8Hny1ylwtYrLVHCQx36WQW1d1++fRE+/uSLRMqiHsTVf66Z/MJ72Ux6d7b1Vp7q/5K1jjnO7/94txs9ZpKlC8KXjOOwnXSkZz/f2g5SkgR4yN+fMc/95ZYGyWNRKbFfzt96ug8+XGAS8vlB9sV9MY4fP+Hatu9rlQQgrUFDxln+6KEQ2nX6h5WP51/vfODK31TXzsF20lJB7iusUHwvn54AjQp6BV7GY8a+6269rYnt98dr7nVT3/s4JW/BvMyY+an7059r2bHopdxXu51VfKRnP99DjDoO0Jip2/Bht3P3Htf3yeHuij/dY2Xl8wQLFy1PPgf0gEaOmmjXAeH7wPFnf7TQzkd69hv1ytuuUbNuSRkjyL8/McTyTBoq2e3bi76X/v7M+3SJxbP9xZcn2rYg/1mel/Js0lPanKb36xsDBw4csh4/ZYywgyXhy8H33CAY55/NP1yZ+mwePVb0bHKvr6+Qeq+PFRSVEVCGlf+aY9spwxEvnSrDsIz5/GCr3snvC8/C1yu/sW1R0FO+vUqLtDIvSfZsr12vo5s85SMTqj/nsi9X2b3+9f9Vsbi27fullE+YIcMmWEMu3fdo+Mg3k9uDeeJz50f6W/n6fXkO6tTr5D6YtcDqm/sL7+8Xi1fYNuA70Kptn7TnKo5PP/3UJLt8+XK3fv36tGHq1KmWDhGrZ1wKJOPiORcZU0H64T2EikCQEPR6/AUbZgXEm9v6cXf5VTVsmBO2/rTDhju/+Xa9SYPK0IuK/1MphqHyo6LctKnon3zkuD9tO7UIz0MlNuGN96xBQEUUBS1tGgf0oHngOSdDZ14eVOR+GGzpv7+2tOyTDq6javVct3FjUd4oBypLro2KmrkvKg8k479gNEz8de7atdfy68snLDGggir/lwfsOAgVmLO97a/Nk+eFcF6iep5cCxXr6ryikSF6LlwzQg7CfaS34gn3jNeu/cGOQ0+L6/LXScXL5/B10Ku/8Zb6VqbAvaxWo6XJkrTsQxl16faMPVOUHY0aeq5UsKShl1/pjqZu5gfzLY40QbiXtR5on7wWtvOceLkFoYw4Nw0C4Jw9ej3vxr/+nn329O6TWg4QjOPZRB4bE0Oj4WczfK959v29pgwr3dHMfTL3i2QZ0kukDBn+DsuSPK79Zr1dF+knvj3TroHGRBRMVSDj9et/TMScgobPgIGvuCY5j6bdn/NfX9ho5L7uTkxPPP3MKGtUvDB0vDWGyTON17ETplmewhDX8++DrU4Ib+fzylXf2nfbl0nwmskX5RH+/rF2geeReqjK3bk2/B6k31MjI/NSEl7G9HiLI5hOPeNSoGHq4jmfw9TBipovlR8mpSLii0rFReUODO3VqNnWWrX0jumxlbRYA3EinnU/RL8+QIVPC51Ahb1+w+mVD1CBBxsOQbw8wtuoRBBEOvzcof/ysH9YgD7/DK1FQdn584YlBibjwkrRV1hARUUlGRwqDeclLON01899YLSCewZRc+DsE5Qx5dKpyz9TKg2uk4bF7t37TruOqPTjXp+WzB+NNJ6F4JApjQsqauL88Z58+sW0FRXP1D212tpIR1QajlG7XtGcKYvQaLhFidpDOTAcnZd3qhzCcVwzwvt+3Sb7XBIdH346Wf79ny0qk5MnTzUqOB7CRtxhGYehgcP2qIYp95rhYho4weMzlP2LyypZGfBc+8ZdFCbjCvXcRx8vSsQU5Y/e8Y9btiViUnu2Yei50+AIPkte8uThymvvc3M+XphsWAWvOd31+/MVFBy3XjnXcfjwETs/+eOYZzOX7yWLYHm1Kdwj3rKl6NkMpruoe8Y5OTmOcKHxC7j69u1rE+2eJUuWaAFXIeciY1rntKgZsiT85vdVkhW1753RM6WSp2fDsBbDelSWVERezLTO+SL97+XVbHgw3WIaKszBQ8fZMB7n4fxRDyvp+GIzLBs1nxcWRJB02xjufaBBZ8trGHpiSOuTuacWwYSlBZQFUmExDflmtSji8eVHT9pX0FH5oFJi/+CccThdVF7YRhrSQrpr5Lgcn/MAvXqGj+mJecLXxd8+z55gPsPnikofzB/78Bz5RpUPDIUuX3H68dLBFMp1hfefRgFp08kWqTK9wrDv4cOnrjOILwcqek84rrhn09/rmnVS7/XQ4UXl4MUcfJSLk1F+/kH3j3++aCMMHIshfxppYRlzXobw6zd+JO3wMQ0vGkM33Fy/MM8/JGJTCZ8fuE80eIMN6HQyZp6e+zD9/bmJmFRIz8gMQ818/2k0FHf9nuD56B0zLP2Ly4qmARi1YBojnJfSEJSs7/Hy2YeRI4t63JdCz5i3jDLWMwZeZ2ratKkVVnGvNhE3Z84cexXKh2+++UYyjoChNSqC4DxjsKKm0uTLytASrX6EjISRMUOr9JqDPTxAwn36DnO/u+Ium6NNB8N9tOyZy6WHROs/inS92eIq9HTbwr3GIAxRsg/X5wlLC+jZISkaKn6Y3A/XAum9qKLyQaVUkoyj8sI24kgL6a4xKGPKlAYU1x0kfF3BPHuC+QyfKyp9MH/BPESRLu9RIEjSUZHffU/rQllFH5P7wsrdlauKVhwHoRyYfw+WQ1ScJ/xssiiMe/2n8rUKn/uvEqlSe8ZnImMaRs1aPJbsBQJlxvagjPlOjhk72Rp7wd5rFFxPbqG4EDfH+s3vqyYbQXxHg+f3kK55bq+Uoe0oGdMApXE4+rXJKT3zKPzoAou6gufkntOgiBqmZpg8Slh8T+konI3MgjKmAxdePc3UZzCdhqnPAC4IsXbp0sXmj9P96AfbwoF4yfh0ghWoh55usKJGhsQxn4WAfBwLgarf1yYZF4ZeXWlW/zLkRe87XcWdTsZUPiUNU/MlD8J1+J58GOLD84kcm4owWFnRS6eCYfiW7cGyovJA9j5PUdLhOkuScVRewveK7wMNpPD1BxscfmQjOBcN4Xzz+UyHqYND6MB5ff44H8OfNCqiiCqXkkBgDZt2TbtPcTKmHKrVyD1t2DwcF4Znk7lwBOnLzF+zF4Uvf1+GpRmmjhIjz1WFio2SMuY8iJjv0LY0DZAgQRkH74sn6pylkbEX8Vv/mlmq4eJ0MuZ44QVc3NPGOd1tAVcU5I9jRV1PSQRlXBySsTivnK2M+eLwOgSvGvDA8Jlh4WBFTaua4TN6Eb5HScXB/BM9Yy8HKjU/j8qcEQt2muf2TO7jYSiKBT+cj8CcIBXetm07rIfpF8hwDFZyF7foiryRD/bjWAzvUnn4yr5CxYYpC7gYBQiu1vREzasCFSzDZeSR/PiFTc88+4qdDwGRdypbtjPsyfCsr6C9nP1CKChJxunyQpkjOL/wDSgXrtG/fxpewBWed/Z4sXgYIeE4NKBI668z3QIuJEtZ+hEByvze+x86bQEX18E2oCzy1nxv0ggfLwpb4FSYLz80zRqDync2dZ8v+o89a1yz38YzwzA1zyM9TfYNLuDy5VDSu8Xpnk1eJ/L3mnlZf69/+4eqbmjiXpPXmys1smfWl2G6BVyMeCBpFm2RlmMyXM6QNTImrjgRU348x/wfKAfmzFkYGH5uPGcj45JEzIIt1nRQHkAjjDl4P7cdPifPK88+r0r5MqTB5+sND+dmUSILunhW+XymBGXsJctnHy6lYeoOHTpIxtnC2cqYL7F/bYfhLCq06TPmpvREqfgQohcMsEAHQdND8vAakX/FhkDFHBSHhwqAHyjw6ZAHr7BQWbNyMjjXyDbmDdM9zMQjHn9e5vDemTQrWdmTZ3rvbEv32g8g9fC8KrA/DQoqF8qIwN9+zhn5U2Ycn22UJa9zBcuKStPn75VX3ylRxunywmf/q1mI07/aROXvX+0KXiPHpDIPzjt7yF9QxsDiHCpGjlOaV5s4j3+1iTKmYqWsvCDILz8QwbFIw33l/nKfw8eLglfDmC/0zyZDxgiUSpyyoxdMPIH7zn3Jzz9o+3JfmLtkiJlzMTwaLIeoOOC4NHj8cXn+/Opejtmu45MWn+5eU4ZIljQlvdrEfWNxEmk5JyvZmxT2EpExaf2iqHAYOvx1t7ewbJh+4Lp9vDXgChsE6TgbGfO3XyAWDEiffPKdpzHs47lHDO/7offwOTnmtOkfJ6+b8g2+zkUDi+kttlFH8IwdP178sHg6vGQZOd23b58bN25cyu9PT5tWtGLcpwsG4th2PpCMyxjnsoDrUqQ0lX1piJKWECL78ZL164nS4dPxK11+PpkFw+cLybiMIRmnIhkLUbYJ9oyLw6djmPpCIBmXMSTjVCRjIco2XrKjR49OGZ4OhxdeeMHSlbTQ62yRjMsYkrEQQpxi1apVbsCAASbaksKoUaPc8cTc/vlGMi5jSMZCCJF9SMZlDMlYCCGyD8m4jCEZCyFE9iEZlzEkYyGEyD4k4zKGZCyEENmHZFzG4De7T5yI/ocWhBBCZB7qZOpmybgMkZeX57ZuPf2nJ4UQQsQDdTJ184VGMs4iDhw4YC0wbr56yEIIER/UwdTF1MnUzRcayTjL4KbTCuMBYA5ZQUFBQSHzgTqYujgTIgbJWAghhIgZyVgIIYSIGclYCCGEiBnJWAghhIgZyVgIIYSIGZMx/5GMhRBCiHiQjIUQQoiYkYyFEEKImJGMhRBCiJhJypgghBBCiMxjMu7YsaNkLIQQQsSEZCyEEELEjGQshBBCxAweloyFEEKIGJGMhRBCiJiRjIUQQoiYkYyFEEKImJGMhRBCiJgxGXfq1EkyFkIIIWIiKWP+EEIIIUTmwcMmY0JBQUEiWgghhBCZAPeajDt37mx/fPXVV4lNQgghhMgEuDdFxs8++6x6x0IIIUSGwLkDBw5MlTHzxgMGDDBLS8pCCCHEhQHH4lo6wbg3RcZeyPzbxu3atXNt27a10KZNG9eqVSvXsmVLl5ub6x588EELLVq0cM2bN7eQk5PjmjZtelpo3LixhUaNGhUbGjZseE6hQYMGCgoKCgplOES54UxClJuCwfssynU4kIAPcaP3JM7EnQRc6r2KY3EtbzIV+beT+38Qxdnl9U8BbgAAAABJRU5ErkJggg==");

/***/ },

/***/ 212179
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1295fdc83b11-anh-4-d14098d39fbea57a6ba16b4b73bdfd80.png");

/***/ },

/***/ 158823
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1fbfb3219913-Picture20-e91f936878bd7c2a1eadd85de87733cd.png");

/***/ },

/***/ 884875
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/50266ec81e82-Picture24-af393dcc228155381a7cb14c381f9176.png");

/***/ },

/***/ 655371
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/91b976baed1a-Screenshot_19-f4ea1d58b706aa11a5cd0f197c04e268.png");

/***/ },

/***/ 570484
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c505575f36fe-Picture22-51cbb4d28614723257a5144cdcdddbe9.png");

/***/ },

/***/ 658382
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dc5c31ee8dc7-anh-3-290d8a9cc397b5c7d473f9bb85cea129.png");

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