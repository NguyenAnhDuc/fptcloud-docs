"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[25408],{

/***/ 314678
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_huong_dan_airflow_my_workspace_md_928_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-huong-dan-airflow-my-workspace-md-928.json
const site_docs_fpt_data_platform_huong_dan_airflow_my_workspace_md_928_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/huong-dan-airflow-my-workspace","title":"2. FPT Data Platform","description":"Hướng dẫn Airflow & My Workspace","source":"@site/docs/fpt-data-platform/huong-dan-airflow-my-workspace.md","sourceDirName":"fpt-data-platform","slug":"/fpt-data-platform/huong-dan-airflow-my-workspace","permalink":"/fpt-data-platform/huong-dan-airflow-my-workspace","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Huong dan airflow my workspace","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=huong-dan-airflow-my-workspace","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Huong dan airflow job submit","permalink":"/fpt-data-platform/huong-dan-airflow-job-submit"},"next":{"title":"Huong dan airflow workflow","permalink":"/fpt-data-platform/huong-dan-airflow-workflow"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/huong-dan-airflow-my-workspace.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Huong dan airflow my workspace',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=huong-dan-airflow-my-workspace',
	parent: 'https://fptcloud.com/documents/fpt-data-platform',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Data Platform';

const assets = {

};



const toc = [{
  "value": "1. Truy cập My Workspace",
  "id": "1-truy-cập-my-workspace",
  "level": 3
}, {
  "value": "2. Bố cục trong My Workspace",
  "id": "2-bố-cục-trong-my-workspace",
  "level": 3
}, {
  "value": "3. Quản lý tài nguyên trong My Workspace",
  "id": "3-quản-lý-tài-nguyên-trong-my-workspace",
  "level": 3
}, {
  "value": "a. Tạo mới File/Thư mục/ Upload file",
  "id": "a-tạo-mới-filethư-mục-upload-file",
  "level": 4
}, {
  "value": "b. Đổi tên file/ Thư mục",
  "id": "b-đổi-tên-file-thư-mục",
  "level": 4
}, {
  "value": "c. Sao chép (copy) file/thư mục sang vị trí khác",
  "id": "c-sao-chép-copy-filethư-mục-sang-vị-trí-khác",
  "level": 4
}, {
  "value": "d. Di chuyển (Move) file/thư mục sang vị trí khác:",
  "id": "d-di-chuyển-move-filethư-mục-sang-vị-trí-khác",
  "level": 4
}, {
  "value": "e. Xóa (Delete) file/thư mục:",
  "id": "e-xóa-delete-filethư-mục",
  "level": 4
}, {
  "value": "f. Xóa (Delete) file/thư mục",
  "id": "f-xóa-delete-filethư-mục",
  "level": 4
}, {
  "value": "g. Khởi tạo Git Repository (Initialize Git Repository)",
  "id": "g-khởi-tạo-git-repository-initialize-git-repository",
  "level": 4
}, {
  "value": "h. Git Pull",
  "id": "h-git-pull",
  "level": 4
}, {
  "value": "i. Git Repository Settings",
  "id": "i-git-repository-settings",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
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
        id: "2-fpt-data-platform",
        children: "2. FPT Data Platform"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hướng dẫn Airflow & My Workspace"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "My Workspace"
      }), " là khu vực làm việc cá nhân được cung cấp sẵn trong hệ thống Orchestration Service (Airflow UI), cho phép người dùng dễ dàng quản lý mã nguồn DAG, script, file cấu hình, dữ liệu mẫu,... tại cùng một nơi."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Toàn bộ file và thư mục trong My Workspace được tổ chức theo dạng cây thư mục tại Root và có thể tích hợp với Git để tiện quản lý phiên bản và đồng bộ mã nguồn."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Giao diện Workspace hỗ trợ đầy đủ các chức năng cơ bản như:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tạo mới file, thư mục, upload file"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sửa nội dung file trực tiếp"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tìm kiếm nhanh"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Xoá file hoặc thư mục"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Kết nối Git repository và đồng bộ mã nguồn"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-truy-cập-my-workspace",
      children: "1. Truy cập My Workspace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 1: Truy cập Airflow UI từ màn hình service Orchestration đã tạo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bước 2: Chọn mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Browse > My Workspace"
      }), " trên thanh menu"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý: Workspace"
      }), " của từng người dùng sẽ được hiển thị riêng biệt trong thư mục Root. Mỗi thư mục tương ứng với một workspace, ví dụ giang-git, cdcs3, dbt-demo,..."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(856528)/* ["default"] */ .A) + "",
        width: "2880",
        height: "1622"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-bố-cục-trong-my-workspace",
      children: "2. Bố cục trong My Workspace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bố cục màn hình My Workspace gồm 3 khu vực chính:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Breadcrumb navigation"
          }), " : hiển thị đường dẫn thư mục hiện tại"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sidebar trái (Directories)"
          }), " : hiển thị cấu trúc cây thư mục gốc Root"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bảng chính (Files)"
          }), " : hiển thị nội dung file và thư mục của workspace hiện tại"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-quản-lý-tài-nguyên-trong-my-workspace",
      children: "3. Quản lý tài nguyên trong My Workspace"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "a-tạo-mới-filethư-mục-upload-file",
      children: "a. Tạo mới File/Thư mục/ Upload file"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tạo file mới:"
          }), " Để tạo một file mới:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Bước 1:"
              }), " Chọn thư mục đích cần tạo file bằng cách nhấn vào tên thư mục trong danh sách Directories hoặc bảng Files"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Bước 2:"
              }), " Nhấn biểu tượng + ở góc trên cùng > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "New File"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(760389)/* ["default"] */ .A) + "",
        width: "1762",
        height: "752"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "* **Bước 3:** Nhập tên file và nhấn **Create** để lưu \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(987208)/* ["default"] */ .A) + "",
        width: "928",
        height: "486"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Nên tạo file có đuôi .py trong thư mục dags/ nếu bạn muốn khai báo DAG cho Orchestration service."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tạo thư mục mới:"
          }), " Để tạo một thư mục mới:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Bước 1:"
              }), " Chọn thư mục đích cần tạo Thư mục bằngbằng cách nhấn vào tên thư mục trong danh sách Directories hoặc bảng Files"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Bước 2:"
              }), " Nhấn biểu tượng + > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "New Directory"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Bước 3:"
              }), " Nhập tên thư mục và nhấn Create để lưu"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(984814)/* ["default"] */ .A) + "",
        width: "816",
        height: "544"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Upload file từ máy tính"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Bước 1:"
              }), " Chọn thư mục đích để upload file vào bằng cách nhấn vào tên thư mục trong danh sách Directories hoặc bảng Files"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Bước 2:"
              }), " Nhấn biểu tượng + > chọn Upload File"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Bước 3:"
              }), " Chọn file từ máy tính để tải lên"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "File sẽ được lưu vào thư mục hiện tại. Kiểm tra kỹ thư mục đích trước khi thực hiện."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "b-đổi-tên-file-thư-mục",
      children: "b. Đổi tên file/ Thư mục"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 1: Nhấp chuột phải vào file hoặc thư mục muốn đổi tên"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(345622)/* ["default"] */ .A) + "",
        width: "770",
        height: "502"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Bước 2: Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Rename"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Bước 3: Nhập tên mới và nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enter"
          }), " để xác nhận", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
            alt: "Hình ảnh",
            src: (__webpack_require__(793649)/* ["default"] */ .A) + "",
            width: "1362",
            height: "652"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-sao-chép-copy-filethư-mục-sang-vị-trí-khác",
      children: "c. Sao chép (copy) file/thư mục sang vị trí khác"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 1:"
          }), " Nhấp chuột phải vào file hoặc thư mục cần sao chép"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 2:"
          }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Copy"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 3:"
          }), " Nhập đường dẫn thư mục đích tại ô ", (0,jsx_runtime.jsx)(_components.em, {
            children: "Enter target directory path"
          }), " (để trống nếu muốn sao chép vào thư mục gốc)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 4:"
          }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " để thực hiện sao chép"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(471082)/* ["default"] */ .A) + "",
        width: "1720",
        height: "768"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "d-di-chuyển-move-filethư-mục-sang-vị-trí-khác",
      children: "d. Di chuyển (Move) file/thư mục sang vị trí khác:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 1:"
          }), " Nhấp chuột phải vào file hoặc thư mục cần di chuyển"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 2:"
          }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Move"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 3:"
          }), " Nhập đường dẫn thư mục đích tại ô Enter target directory path (để trống nếu muốn di chuyển vào thư mục gốc)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 4:"
          }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " để thực hiện di chuyển"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(203954)/* ["default"] */ .A) + "",
        width: "2050",
        height: "884"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "e-xóa-delete-filethư-mục",
      children: "e. Xóa (Delete) file/thư mục:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 1:"
          }), " Nhấp chuột phải vào file hoặc thư mục cần xóa"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 2:"
          }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Delete"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 3:"
          }), " Xác nhận hành động nếu hệ thống hiển thị popup xác nhận với nội dung như: Delete directory \"\" recursively?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 4:"
          }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " để xác nhận hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cancel"
          }), " để hủy bỏ"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " File/thư mục sau khi xóa sẽ không thể khôi phục."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(37426)/* ["default"] */ .A) + "",
        width: "1734",
        height: "780"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "f-xóa-delete-filethư-mục",
      children: "f. Xóa (Delete) file/thư mục"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 1:"
          }), " Nhấp chuột phải vào file/ thư muc muốn tải về"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 2"
          }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Download"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 3:"
          }), " File/Thư muc sẽ được tải xuống thiết bị với định dạng gốc"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "g-khởi-tạo-git-repository-initialize-git-repository",
      children: "g. Khởi tạo Git Repository (Initialize Git Repository)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chỉ áp dụng với thư mục"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 1:"
          }), " Nhấp chuột phải vào thư mục muốn khởi tạo Git Repository"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 2:"
          }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Initialize Git Repository"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 3:"
          }), " Cửa sổ cấu hình sẽ hiển thị, bao gồm:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Repository URL"
              }), " (bắt buộc): Nhập đường dẫn đến Git repository"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Authentication Type"
              }), " : Chọn phương thức xác thực cho repository"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "None"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Không yêu cầu xác thực"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Áp dụng với các Git repository công khai (public)"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Không cần nhập thêm bất kỳ thông tin đăng nhập nào"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "SSH Key"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Sử dụng cặp SSH key để xác thực với repository"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Cần đảm bảo SSH key đã được cấu hình sẵn trên hệ thống"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Khi chọn loại này:"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "Không yêu cầu nhập thêm username hoặc password"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "Hệ thống sẽ tự sử dụng SSH key mặc định (nếu có)"
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Username & Password"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Sử dụng tên người dùng và mật khẩu để xác thực"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Áp dụng cho các repository riêng tư (private) hoặc khi Git yêu cầu xác thực"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Có thể dùng ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Personal Access Token"
                  }), " thay vì mật khẩu (đối với GitHub, GitLab…)"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Khi chọn loại này:"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["Nhập ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: "Username"
                      })]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["Nhập ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: "Password"
                      }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: "Access Token"
                      })]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 4:"
          }), " Chọn brand pull git"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 5:"
          }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test connection"
          }), " để kiểm tra kết nối với repository"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 6:"
          }), " Nếu kết nối thành công, nút Initialize sẽ được bật"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 7:"
          }), " Nhấn Initialize để khởi tạo Git repository cho thư mục đã chọn"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "h-git-pull",
      children: "h. Git Pull"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chỉ áp dụng thư mục đã khởi tạo Git"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 1:"
          }), " Nhấp chuột phải vào thư mục muốn Git Pull"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 2:"
          }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Initialize Git Repository"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hệ thống sẽ thực hiện pull các thay đổi về thư muc"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(292288)/* ["default"] */ .A) + "",
        width: "1100",
        height: "536"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "i-git-repository-settings",
      children: "i. Git Repository Settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng Git Repository Settings chỉ hiển thị và áp dụng cho các thư mục đã được khởi tạo Git (.git). Người dùng có thể xem và cấu hình các thiết lập đồng bộ (sync) giữa thư mục local và Git repository từ giao diện."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chỉ áp dụng cho thư mục đã khởi tạo Git"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "➤ A. Pull thủ công (Pull Now – giống Git Pull)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 1:"
          }), " Nhấp chuột phải vào thư mục đã khởi tạo Git"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 2:"
          }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Git Repository Settings"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 3:"
          }), " Tại tab ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Sync Settings"
          }), " , có 2 cách để thực hiện đồng bộ:"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 4:"
          }), " Nhấn nút ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pull Now"
          }), " ở góc dưới bên phải cửa sổ"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 5:"
          }), " Hệ thống sẽ pull các thay đổi mới nhất từ repository về thư mục local"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(46328)/* ["default"] */ .A) + "",
        width: "2026",
        height: "1182"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "➤ B. Bật tự động đồng bộ (Auto Sync)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 1:"
          }), " Nhấp chuột phải vào thư mục đã khởi tạo Git"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 2:"
          }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Git Repository Settings"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 3:"
          }), " Tại tab ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Sync Settings"
          }), " , có 2 cách để thực hiện đồng bộ:"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 4:"
          }), " Gạt công tắc ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enable automatic synchronization"
          }), " sang ON"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 5:"
          }), " Nhập giá trị thời gian đồng bộ vào ô ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Sync Interval (minutes)"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.em, {
            children: "– Giá trị tối thiểu: 5 phút; tối đa: 1440 phút (24 giờ)"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 6:"
          }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Save Sync Settings"
          }), " để lưu cấu hình"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 7:"
          }), " Hệ thống sẽ tự động đồng bộ theo thời gian đã thiết lập"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(863543)/* ["default"] */ .A) + "",
        width: "2150",
        height: "1550"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-airflow-dbt",
        children: " Previous Hướng dẫn Airflow & dbt "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-airflow-job-submit",
        children: " Next Hướng dẫn Airflow & Job Submit  "
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

/***/ 760389
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1214a302ee67-image46-2-43373a1a709ec45ceae7e94da8d23eb7.png");

/***/ },

/***/ 987208
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/17e264a247db-image47-2-011215f838e5f0ff94af86627031c59a.png");

/***/ },

/***/ 856528
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/41f1215d7b62-image45-2-1a07e09764eee1d3e495f596eac5fe1d.png");

/***/ },

/***/ 345622
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/48deeff27c1b-image49-2-91f82deb9934384f5879aababe847014.png");

/***/ },

/***/ 203954
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/80122a92e05b-image4c-2-ddce1939f1ef7aa634c254429d9460bf.png");

/***/ },

/***/ 292288
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9490c6f9d66e-image4e-2-4b591a36642df3276f99d93319e11499.png");

/***/ },

/***/ 46328
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9d71144708ab-image4f-2-0d9fb3511923f186c838c95ba542b443.png");

/***/ },

/***/ 863543
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a03d13a09c81-image50-2-40f99ef8ab0434dd966a23f309e1a874.png");

/***/ },

/***/ 471082
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ba501359eace-image4b-2-fed4eedcaf04faca146e4a662754aa74.png");

/***/ },

/***/ 37426
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c0c93710c177-image4d-2-20180c6a3c2811f5d8221e8d0d558864.png");

/***/ },

/***/ 793649
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d7d6ea6469ef-image4a-1-1f2291da695678e90991b0336ddda17f.png");

/***/ },

/***/ 984814
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f0060d9514cf-image48-2-2bcd745caa1290b0b4d1c8a72bd067eb.png");

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