"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[98812],{

/***/ 469422
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_backup_quan_ly_backup_job_md_d1d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-backup-quan-ly-backup-job-md-d1d.json
const site_docs_backup_quan_ly_backup_job_md_d1d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"backup/quan-ly-backup-job","title":"Quản lý Backup job","description":"*","source":"@site/docs/backup/quan-ly-backup-job.md","sourceDirName":"backup","slug":"/backup/quan-ly-backup-job","permalink":"/backup/quan-ly-backup-job","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Quản lý Backup job","title":"Quản lý Backup job","source":"https://fptcloud.com/documents/backup/?doc=quan-ly-backup-job","parent":"https://fptcloud.com/documents/backup","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Kiểm tra thông tin backup và restore của VM.","permalink":"/backup/kiem-tra-thong-tin-backup-va-restore-cua-vm"},"next":{"title":"Restore lại VM từ các Restore Point","permalink":"/backup/restore-lai-vm-tu-cac-restore-point"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/backup/quan-ly-backup-job.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Quản lý Backup job',
	title: 'Quản lý Backup job',
	source: 'https://fptcloud.com/documents/backup/?doc=quan-ly-backup-job',
	parent: 'https://fptcloud.com/documents/backup',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Quản lý Backup job';

const assets = {

};



const toc = [{
  "value": "<strong>1. Khởi tạo một Backup Job mới</strong>",
  "id": "1-khởi-tạo-một-backup-job-mới",
  "level": 2
}, {
  "value": "<strong>Bước 1: Mở màn hình tạo Backup Job</strong>",
  "id": "bước-1-mở-màn-hình-tạo-backup-job",
  "level": 3
}, {
  "value": "<strong>Bước 2: Cấu hình thông tin Backup Job</strong>",
  "id": "bước-2-cấu-hình-thông-tin-backup-job",
  "level": 3
}, {
  "value": "<strong>Bước 3: Tạo Backup Job</strong>",
  "id": "bước-3-tạo-backup-job",
  "level": 3
}, {
  "value": "<strong>2. Theo dõi tiến độ Backup Job</strong>",
  "id": "2-theo-dõi-tiến-độ-backup-job",
  "level": 2
}, {
  "value": "<strong>3. Xem danh sách Backup Job hiện tại</strong>",
  "id": "3-xem-danh-sách-backup-job-hiện-tại",
  "level": 2
}, {
  "value": "<strong>4. Start Backup Job thủ công</strong>",
  "id": "4-start-backup-job-thủ-công",
  "level": 2
}, {
  "value": "<strong>5. Enable / Disable Backup Job</strong>",
  "id": "5-enable--disable-backup-job",
  "level": 2
}, {
  "value": "<strong>Disable Backup Job</strong>",
  "id": "disable-backup-job",
  "level": 3
}, {
  "value": "<strong>Enable Backup Job</strong>",
  "id": "enable-backup-job",
  "level": 3
}, {
  "value": "<strong>6. Xóa Backup Job</strong>",
  "id": "6-xóa-backup-job",
  "level": 2
}, {
  "value": "Cách xóa Backup Job",
  "id": "cách-xóa-backup-job",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "quản-lý-backup-job",
        children: "Quản lý Backup job"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FPT Backup sử dụng khái niệm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup Job"
      }), " để quản lý, theo dõi và điều phối các tác vụ sao lưu đối với tài nguyên cần bảo vệ (ví dụ: VM, volume)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi bạn khởi tạo một Backup Job, bạn sẽ cấu hình:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kịch bản sao lưu"
        }), " (daily / weekly / monthly)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phương thức sao lưu"
        }), " (Full / Incremental)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Đối tượng sao lưu"
        }), " (danh sách VM / Vol)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Người nhận thông báo"
        }), " (email)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi được tạo thành công, Backup Job sẽ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "chạy hoàn toàn tự động"
      }), " theo lịch đã thiết lập. Mỗi lần chạy, job sẽ tạo ra một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "restore point (điểm phục hồi)"
      }), " mới và lưu trữ tại một phân vùng lưu trữ riêng biệt, cùng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "region"
      }), " với VPC của bạn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Điều này giúp tăng độ an toàn cho dữ liệu trong trường hợp tài nguyên sản xuất bị tấn công hoặc gặp sự cố."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-khởi-tạo-một-backup-job-mới",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Khởi tạo một Backup Job mới"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-1-mở-màn-hình-tạo-backup-job",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1: Mở màn hình tạo Backup Job"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trên FPT Cloud Portal, truy cập Backup & Recovery ⇒ Create Backup Job"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-2-cấu-hình-thông-tin-backup-job",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2: Cấu hình thông tin Backup Job"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn cấu hình Backup Job theo nhu cầu với các trường sau:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tên trường"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mô tả"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Name"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Tên của Backup Job. Nên đặt dễ hiểu, gắn với hệ thống hoặc môi trường (ví dụ: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "prod-web-01-daily"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Description"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mô tả ngắn gọn mục đích hoặc phạm vi bảo vệ."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Notification to"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Chọn người nhận thông báo qua Email. Bạn có thể tạo mới contact bằng cách bấm vào link ", (0,jsx_runtime.jsx)(_components.em, {
              children: "“Create your email contact here”"
            }), " trên FPT Portal."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Target selection"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Chọn các VM hoặc volume trong VPC sẽ áp dụng Backup Job. Một Backup Job có thể gắn với ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "nhiều target"
            }), " , nhưng ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "một target chỉ được gắn với một Backup Job"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Latest backup to keep"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Số lượng ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "restore point tối đa"
            }), " sẽ giữ lại, mặc định là ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "7"
            }), ". Khi vượt quá số này, hệ thống sẽ tự động xóa các bản cũ nhất."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Retention information"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chọn kịch bản backup nhanh. Hệ thống sẽ gợi ý một số option thông dụng:"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Daily full backup:"
        }), " Backup full hằng ngày."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Daily incremental, Weekly active full:"
        }), " Lần đầu backup full, các lần tiếp theo trong tuần là incremental, cuối tuần tạo 1 bản full."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Daily incremental, Monthly active full:"
        }), " Lần đầu backup full, các lần tiếp theo trong tháng là incremental, cuối tháng tạo 1 bản full. |"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-3-tạo-backup-job",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3: Tạo Backup Job"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " để khởi tạo Backup Job mới."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hệ thống sẽ:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kiểm tra tài nguyên"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Xác nhận cấu hình hợp lệ"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tiến hành tạo job theo thông tin bạn đã khai báo"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi tạo thành công, bạn sẽ thấy Backup Job ở trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Initiated"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Đến thời gian đã cấu hình, job sẽ tự động chạy và tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "restore point"
      }), " đầu tiên."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu bạn muốn chạy ngay không chờ đến lịch, có thể dùng chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Start"
      }), " (mục 3.4 bên dưới)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ngoài ra, trong phần cấu hình chi tiết của từng VM được gắn vào Backup Job, sẽ xuất hiện thêm tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backups"
      }), " , tại đây:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hiển thị danh sách ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "restore point"
        }), " khả dụng"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cho biết ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "lịch backup"
        }), " tiếp theo"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-theo-dõi-tiến-độ-backup-job",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Theo dõi tiến độ Backup Job"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tiến độ và trạng thái của Backup Job được hiển thị trực tiếp trong màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup Management"
      }), " , chủ yếu thông qua:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status (Trạng thái job)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next Run (Lần chạy tiếp theo)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các trạng thái phổ biến:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initiated:"
        }), " Job đã được tạo xong, đang chờ chạy lần đầu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Success:"
        }), " Lần chạy backup gần nhất ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "thành công"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fail:"
        }), " Lần chạy backup gần nhất ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "bị lỗi"
        }), " (có thể do resource, mạng, cấu hình…)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pending:"
        }), " Job đang bị tạm dừng do lỗi resource, lỗi hạ tầng hoặc điều kiện tạm thời khác."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi job đang chạy, bạn có thể thấy trạng thái chuyển qua các bước trung gian; tiến độ và kết quả cuối cùng sẽ được cập nhật lại sau khi hoàn tất."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-xem-danh-sách-backup-job-hiện-tại",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Xem danh sách Backup Job hiện tại"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để xem danh sách tất cả Backup Job trên hệ thống:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Trên Portal, vào ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup → Backup Management"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup Job"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tại đây, bạn sẽ thấy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name:"
        }), " Tên job"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " Trạng thái hiện tại (Initiated / Success / Fail / Pending / Disabled…)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instances:"
        }), " Danh sách máy ảo đang gắn với job\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Các VM đã bị xóa khỏi hệ thống sẽ được hiển thị dạng ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "gạch tên"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next Run:"
        }), " Thời gian job sẽ chạy tiếp theo theo lịch đã cấu hình"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Các nút thao tác: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Start"
        }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable/Disable"
        }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete"
        }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "View Detail"
        }), " …"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể dùng ô tìm kiếm hoặc bộ lọc để nhanh chóng tìm job theo tên, trạng thái hoặc theo tài nguyên gắn kèm."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-start-backup-job-thủ-công",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Start Backup Job thủ công"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mặc định mỗi Backup Job sẽ tự động chạy khi đến giờ đã cấu hình."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tuy nhiên trong nhiều trường hợp (ví dụ: trước khi nâng cấp hệ thống), bạn có thể muốn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "chạy một bản backup ngay lập tức"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cách thực hiện:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup → Backup Management"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tại dòng Backup Job cần chạy, trong cột ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Start"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Một hộp thoại xác nhận sẽ hiển thị. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Start"
      }), " để tiến hành chạy job."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi bạn gửi yêu cầu, hệ thống sẽ:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kiểm tra điều kiện tài nguyên"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Xác nhận lại trạng thái"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bắt đầu thực hiện backup trên các VM đã được gắn vào job"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tiến độ sẽ được cập nhật trực tiếp trên màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup Management"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-enable--disable-backup-job",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Enable / Disable Backup Job"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "disable-backup-job",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disable Backup Job"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu bạn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tạm thời không muốn tiếp tục backup"
      }), " tự động, bạn có thể ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disable"
      }), " Backup Job. Khi đó:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hệ thống ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "dừng việc tạo restore point mới"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Các restore point cũ vẫn được giữ nguyên"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Target tương ứng tạm thời không được bảo vệ thêm trong tương lai"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cách thao tác:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vào ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup → Backup Management"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tại job cần tạm dừng, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Disable"
        }), " trong cột ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Action"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Xác nhận lại trong hộp thoại cảnh báo bằng cách chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Disable"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enable-backup-job",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable Backup Job"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi muốn bật lại job đã tạm dừng:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vào ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup → Backup Management"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tại job cần bật lại, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable"
        }), " trong cột ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Action"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Từ thời điểm Enable, job sẽ tiếp tục chạy theo lịch đã cấu hình, tạo các restore point mới."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-xóa-backup-job",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Xóa Backup Job"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong FPT Backup, việc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "xóa Backup Job"
      }), " có ý nghĩa là bạn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "không còn nhu cầu bảo vệ"
      }), " các máy ảo đang nằm trong job đó."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Cảnh báo quan trọng:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Thao tác ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Delete Backup Job"
          }), " sẽ:\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Dừng hoàn toàn các lần backup tự động trong tương lai"
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Xóa toàn bộ các restore point"
              }), " đã được tạo trước đó"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Các restore point đã xóa ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "không thể khôi phục lại"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Từ thời điểm đó, các VM trong job sẽ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "không còn được bảo vệ"
          }), " bởi FPT Backup."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu có một VM quan trọng mà bạn vẫn muốn giữ lại các restore point hãy ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "detach VM đó khỏi Backup Job"
      }), " trước"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cách-xóa-backup-job",
      children: "Cách xóa Backup Job"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup → Backup Management"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tại job cần xóa, trong cột ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Một hộp thoại cảnh báo sẽ xuất hiện, yêu cầu xác nhận. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " để xóa hoàn toàn Backup Job."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./restore-lai-vm-tu-cac-restore-point",
        children: " Next Restore lại VM từ các Restore Point  "
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