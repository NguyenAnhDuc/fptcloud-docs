"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[85734],{

/***/ 981335
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_user_access_iam_md_97e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-user-access-iam-md-97e.json
const site_docs_managed_fpt_database_engines_new_user_access_iam_md_97e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/user-access/iam","title":"2. Managed – FPT Database Engines","description":"Quyền truy cập dịch vụ FPT Database Engine","source":"@site/docs/managed-fpt-database-engines-new/user-access/iam.md","sourceDirName":"managed-fpt-database-engines-new/user-access","slug":"/managed-fpt-database-engines-new/user-access/iam","permalink":"/managed-fpt-database-engines-new/user-access/iam","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Iam","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=iam","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Clickhouse use ha","permalink":"/managed-fpt-database-engines-new/user-access/clickhouse-use-ha"},"next":{"title":"Kafka user","permalink":"/managed-fpt-database-engines-new/user-access/kafka-user"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/user-access/iam.md


const frontMatter = {
	sidebar_label: 'Iam',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=iam',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Tổng quan về Identity and Access Management (IAM)",
  "id": "tổng-quan-về-identity-and-access-management-iam",
  "level": 3
}, {
  "value": "Các thành phần chính của IAM",
  "id": "các-thành-phần-chính-của-iam",
  "level": 3
}, {
  "value": "Mô hình phân quyền cho dịch vụ FPT Database Engine",
  "id": "mô-hình-phân-quyền-cho-dịch-vụ-fpt-database-engine",
  "level": 3
}, {
  "value": "Cấu hình quyền truy cập dịch vụ FPT Database Engine",
  "id": "cấu-hình-quyền-truy-cập-dịch-vụ-fpt-database-engine",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-managed--fpt-database-engines",
        children: "2. Managed – FPT Database Engines"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quyền truy cập dịch vụ FPT Database Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tổng-quan-về-identity-and-access-management-iam",
      children: "Tổng quan về Identity and Access Management (IAM)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để đảm bảo bảo mật, phân tách trách nhiệm và tuân thủ trong môi trường cloud, FPT Cloud sử dụng mô-đun IAM để kiểm soát ai có thể thực hiện hành động gì, trên tài nguyên nào."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IAM cho phép quản lý quyền truy cập trên nhiều người dùng, nhóm và các thành phần DBaaS trong FPT Cloud Portal, đồng thời thực thi nguyên tắc phân quyền tối thiểu bằng cách gán Role cho người dùng thông qua User Group, trong phạm vi Tenant và VPC."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Nguyên tắc phân quyền tối thiểu"
        })
      }), " : chỉ cấp quyền tối thiểu cần thiết để hoàn thành nhiệm vụ. Ví dụ: Nếu chỉ cần xem logs, không cấp quyền thao tác cấu hình hoặc delete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "các-thành-phần-chính-của-iam",
      children: "Các thành phần chính của IAM"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Thành phần"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tập hợp các quyền (permissions) xác định những thao tác người dùng có thể thực hiện trên tài nguyên DBaaS."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Một quyền cụ thể cho phép thực hiện một hành động như xem, tạo, sửa hoặc xóa tài nguyên."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User Group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nhóm người dùng chia sẻ cùng vai trò và phạm vi truy cập (Tenant/VPC)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IAM User"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Định danh cá nhân được thêm vào Tenant và được cấp quyền thông qua Group/Role."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mô-hình-phân-quyền-cho-dịch-vụ-fpt-database-engine",
      children: "Mô hình phân quyền cho dịch vụ FPT Database Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để thực hiện các thao tác khởi tạo, vận hành và quản lý database và các dịch vụ liên quan, người dùng cần được cấp các quyền IAM phù hợp. Mỗi thao tác trên dịch vụ FPT Database Engine đều được kiểm soát bởi các quyền tương ứng. Nếu người dùng không được gán quyền cần thiết, thao tác đó sẽ không khả dụng."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các quyền của dịch vụ FPT Database Engine được phân loại theo từng nhóm nghiệp vụ/chức năng, như được trình bày trong bảng dưới đây:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Nhóm quyền Quản lý dịch vụ FDE Database Engine"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên quyền"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại thao tác"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:ProvisionBackend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền kích hoạt (activate) dịch vụ FPT Database Engine trong VPC."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:DeactiveBackend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền ngừng (deactivate) dịch vụ FPT Database Engine trong VPC."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Nhóm quyền Quản lý Database"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên quyền"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại thao tác"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền xem danh sách các cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền tạo mới cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:View"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền xem thông tin chi tiết của cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền vận hành database: start, stop, restart."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:UpdateResource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền cập nhật tài nguyên cơ sở dữ liệu (CPU, RAM, storage…)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền thay đổi cấu hình cơ sở dữ liệu (parameter, cấu hình scaling,...)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FDE:hide_admin_pw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền chặn xem mật khẩu quản trị của cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền xóa cơ sở dữ liệu."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Nhóm quyền Backup & Restore"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên quyền"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại thao tác"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:ListBackup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền xem thông tin Backup cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:EnableBackup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền kích hoạt chức năng Backup & Restore cho cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:DeleteBackup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền vô hiệu hóa chức năng Backup & Restore cho cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:CreateJobBackup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền tạo job backup cho cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:ViewJobBackup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền xem chi tiết job backup."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:RunNowJobBackup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền tạo snapshot backup thủ công cho cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:EditJobBackup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền chỉnh sửa job backup."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:DeleteJobBackup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền xoá job backup."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:ListRestore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền xem danh sách bản backup có thể restore."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:Restore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền khôi phục database từ bản backup hoặc khôi phục theo thời điểm cụ thể."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Nhóm quyền Quản lý DB Proxy"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên quyền"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại thao tác"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:ListProxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền xem danh sách DB Proxy cảu cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:CreateProxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền tạo DB Proxy cho cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:DeleteProxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền xoá DB Proxy cho cơ sở dữ liệu."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Nhóm quyền Notification"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên quyền"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại thao tác"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:ListNotification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền xem cấu hình nhận thông báo từ hệ thống cho cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:CreateNotification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền kích hoạt chức năng nhận thông báo từ hệ thống cho cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:DeleteNotification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền huỷ chức năng nhận thông báo từ hệ thống cho cơ sở dữ liệu."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Nhóm quyền Monitor"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên quyền"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại thao tác"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:Monitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền giám sát hiệu năng và trạng thái cơ sở dữ liệu."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7. Nhóm quyền Reporting"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên quyền"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại thao tác"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:ReportConfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền cấu hình lịch nhận báo cáo về hoạt động của cơ sở dữ liệu."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cấu-hình-quyền-truy-cập-dịch-vụ-fpt-database-engine",
      children: "Cấu hình quyền truy cập dịch vụ FPT Database Engine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để cấu hình quyền truy cập và khai báo nhóm người dùng, vui lòng tham khảo chi tiết tại mục ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=role-management",
        children: "Quản lý Role"
      }), " và ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=user-group-management",
        children: "Quản lý User Group"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./register-account",
        children: " Previous Đăng ký tài khoản FPT Console Portal "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./role-management",
        children: " Next Quản lý Role "
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