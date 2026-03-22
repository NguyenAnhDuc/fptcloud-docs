"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[15083],{

/***/ 8139
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_data_services_quan_ly_users_md_348_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-data-services-quan-ly-users-md-348.json
const site_docs_fpt_data_platform_data_services_quan_ly_users_md_348_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/data-services/quan-ly-users","title":"2. FPT Data Platform","description":"Quản lý Users","source":"@site/docs/fpt-data-platform/data-services/quan-ly-users.md","sourceDirName":"fpt-data-platform/data-services","slug":"/fpt-data-platform/data-services/quan-ly-users","permalink":"/fpt-data-platform/data-services/quan-ly-users","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Quan ly users","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=quan-ly-users","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quan ly policies","permalink":"/fpt-data-platform/data-services/quan-ly-policies"},"next":{"title":"Query engine","permalink":"/fpt-data-platform/data-services/query-engine"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/data-services/quan-ly-users.md


const frontMatter = {
	sidebar_label: 'Quan ly users',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=quan-ly-users',
	parent: 'https://fptcloud.com/documents/fpt-data-platform',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Data Platform';

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
        id: "2-fpt-data-platform",
        children: "2. FPT Data Platform"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quản lý Users"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hiển thị thông tin danh sách các ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "User"
      }), " của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Query engine"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(718191)/* ["default"] */ .A) + "",
        width: "1600",
        height: "463"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thêm User:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Bước 1"
              }), " : Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Users"
              }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Create a user"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Bước 2"
              }), " : Nhập thông tin cho ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "User"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Username"
              }), " : tên tài khoản"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Bước 3"
              }), " : Ấn ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Create"
              }), " để tạo ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Connector"
              }), " , ấn ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Cancel"
              }), " để huỷ bỏ (sau khi Create Connector, Query Engine chuyển trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Processing"
              }), " và thực hiện tạo cấu hình ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "~3 phút"
              }), ")"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(706226)/* ["default"] */ .A) + "",
        width: "1226",
        height: "381"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chi tiết ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "User"
        }), " : tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Users"
        }), " , ấn vào tên ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "user"
        }), " cần xem chi tiết thông tin để xem thông tin Username, Password"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(696185)/* ["default"] */ .A) + "",
        width: "1296",
        height: "696"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Xoá ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "User"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Bước 1: Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Users"
              }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "User"
              }), " cần xoá, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Action"
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Delete"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Bước 2: Xác nhận xoá hoặc huỷ bỏ thao tác xoá tại hộp thoại xác nhận"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(578728)/* ["default"] */ .A) + "",
        width: "475",
        height: "177"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-connectors",
        children: " Previous Quản lý Connectors "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-policies",
        children: " Next Quản lý Policies "
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

/***/ 706226
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0011febabf57-image4e-37096fa954f72640fadcfd993efc8929.png");

/***/ },

/***/ 578728
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdsAAACxCAIAAAADAIDrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAACJPSURBVHhe7Z0JWFXV3ocP8ywIMiOC4IADqHEzMTNnyzTTzyeveB2y0SFyeCqtT62kUvHmTJYUesu65pBapGjkjKIoCooTiqCCAnJkHgS+n2dtz0eAiHLMBf3ex4f2Xmvttddae+93/dc+B9KrqKhQEUIIkQB95b+EEEIeNzQyIYTIAo1MCCGyQCMTQogs0MiEECILNDIhhMgCjUwIIbJAIxNCiCzQyIQQIgs0MiGEyAKNTAghskAjE0KILNDIhBAiCzQyIYTIAo1MCCGyQCMTQogs0MiEECILNDIhhMgCjUwIIbJAIxNCiCzQyIQQIgs0MiGEyAKNTAghskAjE0KILNDIhBAiCzQyIYT8iYyMjFWrVuXn5yv71UBWaGjozZs3lX3doVdRUaFsPhSFhYVfffVVTExMeXm5gYGBra1t69ate/To0b59e0NDQ1Hm+PHjaH1ubq7YBSj51FNPTZgw4cyZM19++WXnzp3Hjh1rZmamZKtUaWlpixcvTklJUfYxdejru7u7d+nSJSIioqioSEm9CyoMCAhA7jfffFPjibSVo5379+9fu3Zt7969R4wYYWRkJNIzMzOXLVuGmoOCglxcXMrKyqKjozdt2nTw4MGSkhJ0p2/fvoMGDbKwsND2VxwIrK2tJ06c2KpVK5GFFGNjY29vbz8/P5y9WbNmohghpEEAKV28eNHBweHNN9+0tLRUUu8Cw8DXN27c8PLyeuONN5RUHWEwd+5cZfOhKC4u/vHHHw8cOACHXrt2LSkpCUr66aefjh075uPjY2dnp6end/bs2bCwsNTUVJQRoGTTpk3hxEuXLiELRuvVq5dWjiArK+vrr7+Gr5UDNIfgXI6Ojlu2bMG2knoXpOBcbm5ua9asqfFEUKSoGTPQ0aNHv/vuOxTu1q2bdtpQq9Xffvst5oCBAwdCu6tXr549ezZaDkeXlpZevXo1ISFB6FXbXy2YUdF+tE1k4aRow4kTJyIjI7du3erq6urp6YkZRZyIECI5iK7wvMNC8fHxnTp10toD5OXlrVixAgEcxDJ+/HhTU1MlQ0foRhNNmjSBzk6fPr1jx47PP//c39//0KFDwcHB6enpSgmV6oUXXkCwDMcJli5dWn3yqQLC7V27dikHnD3722+/IYDFWbCN0LVr167CjyL3iy++EKPzECeqApS6bds2jHh4eDhmBQC3zp8/v0OHDqKAlZUVgnHlBGfPYvrBskBkiaGIi4tDw0aOHJmdnY1dXD+RSwiRH7HqxYr/5s2by5cvv3XrlkjHBnaRiCwUQDGRrkN0GbgZGBh4eHi89NJLaHS/fv3gqd27d2P5r2Q3HAoKCgoLCxHztmjRAjE+wEbPnj3Nzc2VEvdGvAUyMzPr3Lnza6+95u3tjdUNJluRSwhpEMC2kydPFlJeuXIlXAywIXSMrEehY6AbI1d5GW1jYzNo0CAjI6Po6GjYTUltOCD0dnFxuXDhQkREROW30g8KLiEOx0RV+YUMIaRBgLX1pEmT7O3tsdINDQ2FjrHh4OAAHT/osrvu6CxGrixlBJUIMBFRIjxEsCkSES+PHz/+nxrGjRu3Y8eO+4bPFy9eDAoKEoeMHj161apV1T/Tq85DnKgKdnZ2w4YNQ48WLlw4dOjQbdu2VTkvPDtv3jxxisDAwNmzZ2vfS9y+ffus5qXK2rVr58yZc+3aNX9/f2dnZ5FLCGlAWFlZTZw4EVJGaAwdY+Ott956dDoGOjMyLKxsaUBUaGhoWFpaCkOJlLy8vLi4uGMaYmJi0tLSRHot4NhTp06JQ44cOXL+/PnK33C4Fw9xoiogqkWMHxwc3LFjxytXrsyYMWPgwIHwsrYvALOFOMXRo0dPnDihVTZmoM8//xxTAg5PTEwcOXLktGnTHuklJIT8NfwFn88/qhMgioSbrK2ttV87q/yB2+nTpxG9Qnwi615U+WQvJCSkLm9yH+JE1TE1NR08ePD69esjIyNHjBiBYH/u3Ln79u0TS4Eqn+xt2bLFzc1NHIh5aMiQIa+88gpWN2htnz59MK+KLEJIwwLhXWhoaEZGRlMN169fxy4SlexHwCMxcllZGWLb/Pz8Nm3a1MWhfzEmJiaY69C8yhF3SUkJ4lxjY2Pt9+EAirVo0WLOnDlYqqB8QkLCfYN0zEBDhw5FWI3FDuYkftGCkAYKzLt8+XJEY3AxHmeADewi8dFJWTdGrvzKAjpGLLl27VobG5tevXpBf0qGHECyrq6ulpaWiYmJGFyRiMj33LlzmACR1aRJE5GoBYeILyTWPdZGyQEDBnTv3v3w4cNVXncQQuTnVrUvugFsVP9KnG6p72+IILTcuXPnhQsXIOLz58/v3r17yZIlYWFhxcXFkydPHjhwIHSWnJy8ffv2goIC9OGY5o3w0aNH0SuEn6mpqdWzsEZA5yMiIhBdop74+HiRnpSU1Lx5c/GlY4SfO3bsyM7Ofv7557Wfm9VyosoytbKySklJ2bt3b3R0NFx59erV8PDwlStXwsuIhTt06IAZZerUqUhHbnp6OpSKAjD1hAkTHBwcKvcXpwBooZ2dHVYDyMJRzz33nLu7O9qJxD179pw5c+Yf//gHDlROTwiRGwhEfLNCfNFNG6Xhoe7UqROed1gFK2ZfX1+hIx1S39+iRvT+7rvv/v7778q+Bnt7+2nTpg0ePFh86wuafuedd7RfuhAghPz0009hzOpZzz777JQpU1DD5cuXlSQNXl5eoaGh0Cu2s7KyIE04GpNV586dRYFaTlTlszV4c968eVFRUcq+5qNITIDjx483MzODkVFP5YWJo6PjzJkz+/fvj8qr99fCwgLzEJqBrJiYmKVLlwYEBCC9qKho2bJlq1evxlDMnj27evRNCJGQ2n+LGmYQL5dbtmyJAkqqjqivkREqIjJVq9WiHj09PUSgHh4elX/vEBMOuoeSyr6mWNOmTeFW9K16FgJkhL2otrJbkY7pCFIWkxKi10uXLkF5GBQIUZSp5UTVXzgg+o6NjT116lRpaSlq6Natm7e3NyJ6ZCEF8W9iYqKI1tu1a9e6dWvxEWWV/goMDQ09PT1x5ZCFHmFbK9+cnBy0E2dHOyV8pU4IqQ4e/PXr148bN07rlirk5+evWbNm5MiRCKKVJB1RXyMTQgjRFY/863WEEELqCI1MCCGyQCMTQogs0MiEECILNDIhhMgCjUwIIbJAIxNCiCzQyIQQIgs0MiGEyAKNTAghskAjE0KILNDIhBAiCzQyIYTIAo1MCCGyQCMTQogs0MiEECILNDIhhMgCjUwIIbJAIxNCiCzQyIQQIgs0MiGEyAKNTAghskAjE0KILNDIhBAiCzQyIYTIAo1MCCGyQCMTQogs0MiEECILNDIhhMgCjUwIIbJAIxNCiCzQyIQQIgs0MiGEyAKNTOrLzZs333vvvaSkJGW/JjZv3rx8+XJlp5GSnJw8ZcqUL7/8sri4WEmqlYqKitTU1CNHjhQUFChJ5G+Pzox8/PjxiRMnXr58WdknkrF3715oUdn5M+vWrYMXlJ3HRF5e3qJFiyB3Zf9vQElJyS+//AKDnz9/XkmqRmlp6Q8//IAna9SoUePHj8eVun37tpJHGiO6MXJZWRkeeGtr60OHDilJRDIuXLigbP0ZeCElJUXZeXxkZ2f/rXQMjI2NBwwYMHbsWG9vbyWpGoaGhsj9+OOP4eL58+fHx8dHR0creaQxYjB37lxlsx5kZGTs3r27X79+MLK/v7+JiQkS8YAtWLDAyclp6dKlq1ev9vDwcHFxSUhIwI21Zs2aXbt2NW3atHnz5np6eqISqAFZhYWFXl5eImXfvn0o2bVrV8QF33333ZIlS3766ae4uLg2bdo0adIEBRDZoeannnoKN271XQGq/fHHH7/44ov169fv2LHDwMCgVatW9zoQJ/r3v/9tYWGBBwCrbDwzOBdkERoaumLFii1btqjVah8fn8r1R0REbNy48cknn0TN2L1+/Tqen5YtW6J3Bw8exAig5ZU7i2HBmKOAra0tylfZBYgWP/roIxsbGwwXdlE/Go9RtbS0RF8WLlxYXl7eokWLP/74Y/Hixah869atWPa2a9dOX18fHUFjsrKyUAy9FmNlZma2du3a/fv3Q8poCVrYqVMnca78/PyVK1eeOnXq5MmTO3fuRA14/tFfBG4AVWEl3rZtW9Qgymu5ceMGTvH1119jSHHUrVu3fH190QWsxNHrzz77DAOIDVdXVwcHB5Q/c+ZMbm4uRgnb1ccTZ1m2bFlaWhoO2bNnT+vWrdH9Wm4VUFRUFBwcjCuFU1TZrfGK36thWDecPn360qVLyILvOnTogMG/du2adogAjkULUWdYWBjuQIS0jo6OaJK4mt9++y3G8Pfff8ewX7lyBTWjkqioKJwaS0bcV7iCuEBWVlbYQMeRjgjG3d0dh+N64aS4+rjo4eHhV69exYEYedSGXqAM7kBUaG5ujmagdxhG3HsYMdEw0vjQTYwcGxvbrFkzWMPU1LTy+0TcZ1DG6NGj//Of/3Tu3BmxGG671157DU/F7NmzoZJz584pRTUhQ48ePVAV7kXs4q6NiYkRfsfCLScnB88wahs4cCBMBCOIo+7L4cOHYSIci5PiQJxCybgHOPv333/fvXt3WGzQoEHYhXcwnWAXG3i04BGlqIYnnngCWoFNxO7Zs2dhE+jjxIkTeNpnzJghOvvzzz9DBKJM7cC8mJNQD7Zx9sTERChYvA7CeMKhnp6e2IaC582bh6ZiwoNTjh07dudgzewCPcERGHPIdMOGDTAmFrxdunRBd1B43LhxoiTAQz5p0iQY4dVXX0UWQjbRX2dnZ/xEl9FxpFd50Yn6YQ0oGKfAvIVWwUQiC73GZUV/0WvUiRowAYgsQY3jiWkAzcAM9Mknn2AOw3xT+61SOzVe8VoahmACYoUrZ82aBW9C3+i+yBJg/DFpYWDRbMwWmL2g5szMTMxDEO6BAwcwgLDn0aNHxUChfHp6OtIjIyNxsRA9YG577733MIniymIEsHv8+HHc4SgGySIKAbjQuFjY9fPzKy0tRRncMKhKtAEg7oGycd2VfdIY0YGRcRciNO7WrRtUgsd+7969uNVEVnFxce/evXETQwoAtkUBaAJZuOkRviFFlBS0b98ed3lqaiq2EadAu/AdfuJ5gE0QKSCsQCSLuBvRnzjkviDAwW0t7mzUgEdOpN8LNB6PhIh50WY0Bo9Q//79sY054+mnn0Zj4CCltEqFUAv+FUJESTxFKINjEeZA63iGkY7ODh48GCE/CmgOug8IssR5EU4itOzVqxcCRqQjESOA6AzbCNNEX6ytrVE/ntU7R6pUCFSfffZZRFJoMJYXEAckLrLqAlyGJx/9RWdRAzYwIFVedF68eBGtwlnEmPTp0wdmRzqGGhrClRJGg33QGDG1aLnveArue6vUQvUrXnvDcN+++OKLCCZw1dAk+BrNE1kCpPft2xdLtPfffx9TbM+ePTEHA0wS0Ogzzzzz7rvvTps2LTAwECWVYzRHvfzyy1M0uLm5oSUTJ05EsTfffBNZiMq1j4kWzEk4RVBQ0PTp09EqXAuoWWShPBYlw4cPx1CIFNIo0YGRsaDDfQPtYhtKRXQDmYosrHYR74htAGv88ssvo+6C1ShiEyVPA1yDcAmxBraxmsMNitAbjyvuYKEhgG2EJHWPmOBWGHzq1KlY/0JPSmqt4KbXLpDRQkSgr7/+umgz1tF4FCuLFSUDAgIQgmFmQqSMXByOAUGz8RwqhVQqrD2h1+rqqRGIA/XAerAGOo7lBYYUx0KFUDyeVSgGIpszZ87bGirbCq4Ri1yAtqGpD/RZEPSN+rU1YBtTDs4rdgVVykDHEBk2MAFjhBE+i7FCMI5wEmt5UUxw3/EU3PdWqYXqV7z2huHSiJdgtQC/IwhYtWoVGoz7E0OKhYKIsn18fNB9cVuKSyMOgeLRDFwCLPIwVphBxYsXnAspOFzMGZVBQI0bHhtieDHOogyGCMsRrBiwZNQUJI2W+hoZ9x+iQqypxcfBM2fOhJUgUyW7GiNGjMCyUcvkyZOVDA24X7HGxOEI0+A4xN240ZW8hwUPxltvvfXZZ5+hqViWbt++XcmoMzDsN998o7R43Tqs4mE9JU+DCFsQSMKSeOrEC8r6YG9vD80hnMRQQMfihTJ2MQ8hfMY2Bger8n/+859oDMBKQnOcFECFykhpeOmll5SMu9x3PAW13yq1cK8rft+G3QvcjYsWLQoNDcX6D9OqcC5+im+54XSaUnc+hQNiG+DWFR+oCLCLZYGyozlc2aoEyuMRwIb4qQWTBybpWj4AJI2G+hr5xo0bWLghWFNu83Xr8DAcOnSoyptHAUSDCLr6Yq0yCBOwzIyOjsbtLuJu8REKngRRAIcjZBNZVSgsLFS2qoHQA5ER2oYAB+GJknqXWg5ERJOTk3Pr1i1lvyYQziAuw8wEgSJeRmvxaOGM2rerAEEfOoLYR9m/C6Lp6gOChxwB17Fjx/AoYkBwFHaPHDmCMFmsu7GGbdeunVjUI8CsY+hdFyBHjIb28qFmXGKcXewKMFtgDLXDqO2CkZGRjY1NlYC6CnUZT1CXW6UyCFqrBNqVrzjquW/D7gXUiaAe0+2QIUPCw8MRI4vPJ3GV0RfkIoAVekWnMHRVZKoTvLy8ECA/ipqJbNTXyFhW29nZic+aBB07doRMa/yKJWLepKSkP/74A2sx3MR41LWe1YIFIIpt3boVzsVThBSIDFHVli1boAkcBd2np6eLj8LxSKAS6AnbiM23bdtW/a7F0hLPDDZw0gsXLsCVCFXqcqAAXUPM+9///ldICj8Rq4qsyiBKRQCLZWarVq2wi9q6d+++b9++yqdA+I/ewbb4CduiPZDI5s2bYShNHX8CARECYWtra6x2sdu+ffvY2FioGarCLsYcdUIBqCQmJgb90hxUG5g2rl27Vv0NBkYDY4JOCa0gxseAI65E21B5ZGQkgjvRKS0eHh6Qb1RUlOgCNkQXULJnz5579uw5fvw4akMuGllltrjXeGJMUJX2tdJ9bxVhf/RdtHPnzp0wuMiqfsVR+L4NE6C21atXo9fKvgYMEcCBOOTAgQOYGpGIS4yJCpMTTn3mzJnk5ORff/1VdErnYFJZsGBBbm6usk8aL/UyMm5f3KBCNEqSSoXnpEuXLrhrxRNeGXd393feeQeP2b80LFy4sMaXg3j+ESZrV+K49QMDA11dXadMmTJ69GjIApWINwOw9uDBg0NCQlBg5cqViGKqf08Lj8qHH344atSoMWPGIJwfO3YsWluXAwUoPGnSJDzViLZQyYwZM2r8UBGKdHFxgTe1UbCfnx8qx5IcR3388cdDhw5F+Ix0mPGVV17BvIK+BAUFwbxVfCdo0aIFYk/x/SfsQpTip1gj+/v7w9Ro2Pjx4y9fvjxs2LA7x9TKwIEDURKD8NVXXylJGlA/ug+roj1wiugvHn4EZSiM0Xv77bfRZqW0Buy+8cYbsBsuIrqASULbBfR6woQJa9euRd/RNvFtCpEluNd4YvSeeeaZ4OBg1Ixp7L63CuyPBmdkZOAsaCp2RegKarzi922YADMWVjaYAJR9ze2Hy4rLhDkVLYevUZuYvzEzoQ3Q9Lx582bNmoUoBOoXR1VBlBdU3q4jmGCwxqq+tiOND73q3nzsIPCBdt99913tGzr5gS8QxUANWGAqSaQRASeKD/Tatm1ra2uLWN7JyUlMVJi94uPjoUtfX19YHlLGZImpAukIIzDT4yjxTRjsGhoaoiR2EVwjqtAWg6ZFIo7FNmId7EL9zs7OCM81TSB/C6QzMiIOhK69evXCMlNJkh6sgjdu3IjVN8LJyp/tEELIAyGRkRE7zJ8//+LFi/3793/55Zcbito2b968YcMGLNunTJliZ2enpBJCyIMj41sLQgj5e8JXVIQQIgs0MiGEyAKNTAghskAjE0KILNDIhBAiCzQyIYTIAo1MCCGyQCMTQogs0MiEECILNDIhhMgCjUwIIbJAIxNCiCzQyIQQIgs0MiGEyAKNTAghskAjE0KILNDIhBAiCzQyIYTIAo1MCCGyQCMTQogs0MiEECILNDIhhMgCjUwIIbJAIxNCiCzQyIQQIgs0MiGEyIJeRUWFskkIqR95eXmpqalqtbq8vFxJaizo6+vb2Ng0b97c0tJSSXoQYpMKPtmQFhmXU1jS2EbGzFi/f6cm//s/zk94mStJ9YBGJkQ3QMfx8fEeHh4ODg4GBgZKamOhrKzsxo0bycnJHTt2fFApQ8c9Pjzb+FxcGXh537w29Zcy31oQohsQHUPHzs7OjU/HAJ1C19BBdFNJqjOIjhu3jgE6iG4qO/WARiZEN6jVakTHyk4jBR1EN5WdOhMZl6NsNWp00k0amRDdUF5e3iij48qggw/xirzRB8gCnXSTRiaEEFmgkQkhRBZoZEIIkQUamRBCZIFGJoQQWaCRCSFEFmhkQgiRBRqZEEJkgUYm5PFTUVGRkZERHR0dGRl56tSp4uJiJePRkJOTExISMn/+/If4Bby/AM8OzT4Y4xYy7s6/ecPsh7U2UjJqw2TCJJ/sHzudftveR0lpkNDIhDxmUlNTFyxYEBQUtGzZsvDw8ODg4FmzZj3En4+oO+Xl5XkapPwbdfqefrYzXnScPvjOvw8C3Td+5luxtsPBSY697ZQSNaGnMtA3NTIwNVKZKinVMeg9uMWvM1tM7yDvr1bSyIQ8TmDeJUuWxMfH+/v7v/766zNnznz11Vd79+5tb2+vlPi7UpR+KywiI+xw7vH0siILk269XZaPse98b93enybmvbs2fb6DpY+doZIiH/xrnITohgMHDnTv3l3ZqRtlZWU///zzpk2bnnvuuREjRpiYmCgZmvcYycnJ27dvP3HiRGFhYfv27YcNG+bl5ZWWlrZx40ZXV1dsxMbGWlpa9unTp1+/fubm5qgNZo+KikpMTMTu008/PWDAANSJlN27d2dlZfn4+OBEbdu2zcnJWbx4McpPnTrV1tZWOWXdeIhu6g2PVbbqhH7vQO+Nw6xUSdcD51+JyEKKybAxLVa8YOVUVLBoxYUZh0s9A1xChtr2djexUZVdupIXsTPtwx1lw9/2Wt7TNO1gyvBFGYmetiGjHIe3MXUyVakziqIOX5/3R9nzQxwndLXytFAV5ZSpi4qjIlI+ybIOrlpPfn3e41RsfELZelgYIxPy2IBqz58/b2dn16NHj8o6BuXl5adOnTpy5IiHh0fr1q1PnjwZFhaWmZmJQyDcDRs2nDlzxs/Pr7S0FII+ePAg9BoXF7ds2bKjR49Cx0ZGRikpKbdv3/7tt9/WrVuH2nx9fc+dO7dixYoLFy4o52gwFG/6PfPX9HKVhUlAG/MWHRxDAh2HeZmY5hQlZpU7e1pPGtn8w67GSllgZ/3hv9wmdTF3UpUmppeq7M2HveD26aAmnTxNnS2UIsDYyfbzGur501X466GRCXlsFBcX5+bmWmlQku5iYGDQt2/fJUuWvP/++zNmzOjZs6darb5165bIdXFxQXpQUND06dMRJkOyqGf//v0Q8axZsxD/hoSEIKuoqGjfvn2tWrX64IMPpkyZMmbMmIKCgoSEBOhb1NNgyC1Nz8ZqXs/G3Pi5rra9nfTVSRmBs0+1m315xbkyVROz3h1MrZWiKk8/m2HtjFQ5+cGLz7Z7+/yMPUVFBkZPOZeFrr0ehYi7tOj78ETnty78UG7Zs4Z6zJyUah4PNDIhjw09DQhggZJUCSQi7F21atX8+fMR+SLghWFFlqenZ7NmzbABHSMizs/Ph5GvXbvm6urq7u6OOkUxxNSQOIJlCHr27NmbNm0qKSlBYsMzconyX5WBobeTkY1KZeNqGxbsm7bAc4KnATxmY2dorXxcp+/qZuZspFJZmE2a4pMW1iakq7GpSmXaxMipUoCsMjX2qbkeI+f6vKquNzQyIY8NY2NjKBXS1Aa/WjIyMhYtWhQaGrp3797s7Owqn/eYmJgI7WrlC18DxMiV/0YzzAut6+vri2Jwt7e3t6Ojo/aoBoOdkVNTtLks7ebtXIPK1iovyi9NVxen51SUamcZfT2NVCtUmmmuqLQsXV2allNWVGUaukc9d2e9xwONTMhjw8zMzMfHJycnJyYmprS0VEnVfKx3+vTp8+fPDxkyJDw8HDHyk08+qeTdAzjawsJCrVYXFBQoSSqVlZUV0jt27Dhr1qxPNHz00UcvvvgixK2UaBiYjhrkMNxVX5VVEBVfkJl7G0npp68/P/Wk8wTxLyHgy+y7/0ulipycUnWZqigj98NPE+4WONlyzpVNWZUWIkVl6prryUwUBR4TNDIhjw3EswEBAS1bttyxY8eGDRtOnjwJEZ84ceLw4cMIbxHbQs15eXkHDhw4cuSIcsw9gHx9fX2vXr2KeuLi4hISEg4dOoREBMWxsbHbt2+/efNmamoqEi9dutQgvmFlamE6bLBbyOuevy7wDhtgYVNaHLHz+oqE/IMJ+YlFKic/+0X/ch7V1Xb6SPfV0z1Demo/kas4k5h7LEtl6tRkeqDb9KdtJrzosvxtr+9HWHsWlaUVlauMjDydTbsFWFrfLKypnsf6zgK3xNy5c5VNQkg9gO/c3d2VnTqDwBZGRjgMC+/fv3/v3r3wb25ubq9evVAhtiMiIo4fP25paQlHd+3aFeFtdHS0s7Ozn58fhJ6fn3/w4EGYF1menp6ZmZk4BOzbty89Pb179+6Iwc+dOyfq2bVr17Fjx1q3bm1vb4/TwcvdunVDnK40pW48RDc/Wv9A/0tQPU9f25d9TCwtTbu0sQzwNmtla2iYX7Tp5ytv/JSTiaj2YlF2U4vu3qY+XlbDuzft396ii4t++tm8802tnvcwzEu99cPWzIO3jbq0tfBpbtG/m+0QP6snPYwNb+Ss+z3/totln1YmPu1tJwRYmZ/JXJli+GTVetTrz/3/YuVBmfuyi7L1sPD7yIToBljvQb+oq+X27dvJyckXL16EZB0dHZs3b25tba1Wq8UHem3btrW1tYVtnZycEDgjEIbHxevgkpIS7BobG8PRyEJhGDMpKQkGh6AdHBxQpri4GHFxSkoKxI0a3NzckIhiePZxogd9g/EQ3XzA7yPf+S3qUV1Mm95dwBflFP26JzP6zheTtej7+NsF+jfpbKdSZxVfSsn7PirH1N8x0Nsg+1L2ij13vlNs42Uzobt1gKuRKr/kUlphxL6sqPRylan5qOGOgV4G6qv5UQczwxLLqtWjRuD80NT/+8g0MiG6oT5GbkD8BUZuuPA3RAghpPFAIxNCiCzQyIQQIgs0MiGEyAKNTAghskAjE0KILNDIhBAiCzQyIYTIAo1MCCGyQCMTQogs0MiE6AZ9ff2G95fgHxDxF+mUnTpjZvy38IxOukkjE6IbbGxsbty4oew0UtBBdFPZqTP9OzVRtho1OukmjUyIbmjevHlycnJaWlqjjJTRKXQNHUQ3laQ687//49zow2R0EN1UduoB//YbITojLy8vNTVVrVbX+P/Na9Do6+sjOoaOLS0tlaQHITap4JMNaZFxOYUljW1k4GJEx9DxE17mSlI9oJEJIUQW+NaCEEJkgUYmhBBZoJEJIUQWaGRCCJEFGpkQQmSBRiaEEFmgkQkhRBZoZEIIkQUamRBCZIFGJoQQWaCRCSFEFmhkQgiRBRqZEEJkgUYmhBBZoJEJIUQWaGRCCJEFGpkQQmSBRiaEEFmgkQkhRBZoZEIIkQUamRBC5ECl+j/fBxTBAe2MLwAAAABJRU5ErkJggg==");

/***/ },

/***/ 696185
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8ddbaa0787f8-image4f-b20773311ea31789f174a61533cf4378.png");

/***/ },

/***/ 718191
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a2d8109dc3a2-image4d-0459db9f64fa44886f2835464fc6205c.png");

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