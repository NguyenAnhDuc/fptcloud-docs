"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[94211],{

/***/ 373792
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_create_db_md_030_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-create-db-md-030.json
const site_docs_managed_fpt_database_engines_new_create_db_md_030_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/create-db","title":"2. Managed – FPT Database Engines","description":"Khởi tạo cơ sở dữ liệu","source":"@site/docs/managed-fpt-database-engines-new/create-db.md","sourceDirName":"managed-fpt-database-engines-new","slug":"/managed-fpt-database-engines-new/create-db","permalink":"/managed-fpt-database-engines-new/create-db","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Create db","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=create-db","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Clickhouse use ha","permalink":"/managed-fpt-database-engines-new/clickhouse-use-ha"},"next":{"title":"Database engine version","permalink":"/managed-fpt-database-engines-new/database-engine-version"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/create-db.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Create db',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=create-db',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Bước 1: Mở màn hình tạo cơ sở dữ liệu",
  "id": "bước-1-mở-màn-hình-tạo-cơ-sở-dữ-liệu",
  "level": 3
}, {
  "value": "Bước 2: Định nghĩa cấu hình cơ sở dữ liệu",
  "id": "bước-2-định-nghĩa-cấu-hình-cơ-sở-dữ-liệu",
  "level": 3
}, {
  "value": "1. Section General Information (Thông tin chung)",
  "id": "1-section-general-information-thông-tin-chung",
  "level": 2
}, {
  "value": "Bước 3: Cấu hình dịch vụ add-on",
  "id": "bước-3-cấu-hình-dịch-vụ-add-on",
  "level": 3
}, {
  "value": "1. Section Compute Scaling (Cấu hình tự động mở rộng compute)",
  "id": "1-section-compute-scaling-cấu-hình-tự-động-mở-rộng-compute",
  "level": 2
}, {
  "value": "Bước 4: Kiểm tra thông tin &amp; xác nhận khởi tạo",
  "id": "bước-4-kiểm-tra-thông-tin--xác-nhận-khởi-tạo",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
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
        id: "2-managed--fpt-database-engines",
        children: "2. Managed – FPT Database Engines"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khởi tạo cơ sở dữ liệu"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Khởi tạo cơ sở dữ liệu"
      }), " cho phép triển khai nhanh các cơ sở dữ liệu khác nhau trên nền tảng FPT Database Engine mà không cần cấu hình chi tiết hạ tầng vật lý. Việc khởi tạo một cụm cơ sở dữ liệu mới yêu cầu bạn nhập các cấu hình liên quan đến loại engine, network, định danh cluster, và các dịch vụ bổ sung như backup và auto-scaling. Hướng dẫn chi tiết mô tả ngay dưới đây."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-1-mở-màn-hình-tạo-cơ-sở-dữ-liệu",
      children: "Bước 1: Mở màn hình tạo cơ sở dữ liệu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Truy cập trang danh sách cơ sở dữ liệu tương ứng với loại cơ sở dữ liệu cần tạo (chi tiết xem mục ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=view-db-list",
        children: "Xem danh sách cơ sở dữ liệu"
      }), ", chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create a Database Engine"
      }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " để bắt đầu quá trình khởi tạo một cơ sở dữ liệu mới. Màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create New Database"
      }), " sẽ được mở, cho phép bạn cấu hình các thông số cần thiết để định nghĩa và triển khai cơ sở dữ liệu trong môi trường FPT Database Engine. Tiến trình triển khai gồm 3 bước:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step 1 – Database Configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step 2 – Additional Service Configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step 3 – Review & Create"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-2-định-nghĩa-cấu-hình-cơ-sở-dữ-liệu",
      children: "Bước 2: Định nghĩa cấu hình cơ sở dữ liệu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(353838)/* ["default"] */ .A) + "",
        width: "1891",
        height: "1815"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Màn hình này là bước đầu tiên trong quy trình khởi tạo cơ sở dữ liệu, dùng để cấu hình các tham số nền tảng như engine, mạng, thông tin xác thực và tài nguyên. Tùy theo loại engine được chọn, một số trường thông tin có thể khác nhau."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mô tả các trường trên màn hình:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-section-general-information-thông-tin-chung",
      children: "1. Section General Information (Thông tin chung)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trường | Mô tả", (0,jsx_runtime.jsx)(_components.br, {}), "\nEngine Type | Chọn loại cơ sở dữ liệu. Tùy thuộc vào menu đã chọn, hệ thống sẽ hiển thị các tùy chọn tương ứng:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Với Relational Databases sẽ hiển thị các giá trị: “PostgreSQL”, “MySQL”, “MariaDB”, “SQL Server”"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Với NoSQL sẽ hiển thị các giá trị: “MongoDB”, “Cassandra”, “Redis”"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Với Search Engine sẽ hiển thị các giá trị: “OpenSearch”"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Với Data Streaming sẽ hiển thị các giá trị: “Kafka”"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Với Time Series Database sẽ hiển thị các giá trị: “TimescaleDB”"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Với OLAP sẽ hiển thị các giá trị: “Clickhouse”", (0,jsx_runtime.jsx)(_components.br, {}), "\nEdition | Chọn loại edition, bao gồm các giá trị: “Enterprise”, “Standard”, “Web”.", (0,jsx_runtime.jsx)(_components.br, {}), "\nTrường này chỉ hiển thị đối với Engine Type là \"SQL Server\".", (0,jsx_runtime.jsx)(_components.br, {}), "\nEngine Version | Chọn phiên bản engine được hệ thống hỗ trợ theo Chính sách phiên bản Database Engine.", (0,jsx_runtime.jsx)(_components.br, {}), "\n2. Section Network Information (Thông tin mạng)", (0,jsx_runtime.jsx)(_components.br, {}), "\nTrường | Mô tả", (0,jsx_runtime.jsx)(_components.br, {}), "\nEdge Gateway | Chọn Edge Gateway để định tuyến lưu lượng mạng giữa database và các hệ thống khác.", (0,jsx_runtime.jsx)(_components.br, {}), "\nNetwork | Chọn Network/Subnet nơi database instance sẽ được triển khai. Network này quyết định phạm vi truy cập và mức độ cô lập.", (0,jsx_runtime.jsx)(_components.br, {}), "\n3. Section Engine Information (Thông tin cơ sở dữ liệu)", (0,jsx_runtime.jsx)(_components.br, {}), "\nTrường | Mô tả", (0,jsx_runtime.jsx)(_components.br, {}), "\nCluster Name | Tên định danh cho cơ sở dữ liệu, độ dài từ 8–25 ký tự, chỉ bao gồm chữ cái, số và dấu gạch ngang (-). Bắt đầu bằng chữ cái.", (0,jsx_runtime.jsx)(_components.br, {}), "\nDatabase Name | Tên database mặc định được tạo trong cụm, độ dài từ 8–25 ký tự, chỉ bao gồm chữ cái in thường, chữ số và dấu gạch dưới (", (0,jsx_runtime.jsxs)(_components.em, {
            children: ["). Bắt đầu bằng chữ thường.", (0,jsx_runtime.jsx)(_components.br, {}), "\nTrường này không được hiển thị đối với Engine Type là Redis hoặc Kafka.", (0,jsx_runtime.jsx)(_components.br, {}), "\nVHost Name | Tên VHost mặc định được tạo trong cụm, độ dài từ 8–25 ký tự, chỉ bao gồm chữ cái in thường, chữ số và dấu gạch dưới ("]
          }), "). Bắt đầu bằng chữ thường.", (0,jsx_runtime.jsx)(_components.br, {}), "\nChỉ hiển thị đối với Engine Type là RabbitMQ.", (0,jsx_runtime.jsx)(_components.br, {}), "\nPassword/ Confirm Password | Mật khẩu cho tài khoản quản trị database, độ dài từ 12–20 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt, đồng thời ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "không được chứa khoảng trắng hoặc các ký tự đặc biệt sau:"
          }), " / \\ \" ' < > ? % ; : $ ! [ ] { } ( ) , & +", (0,jsx_runtime.jsx)(_components.br, {}), "\n4. Section Node Configuration (Cấu hình node)", (0,jsx_runtime.jsx)(_components.br, {}), "\nTrường | Mô tả", (0,jsx_runtime.jsx)(_components.br, {}), "\nStorage Policy | Chọn Storage Policy xác định hiệu năng lưu trữ (IOPS). Khuyến nghị chọn IOPS ≥ 4,000 cho môi trường production để đảm bảo hiệu suất và ổn định.", (0,jsx_runtime.jsx)(_components.br, {}), "\nHigh Availability | Bật High Availability (HA) để triển khai cụm database nhiều node với khả năng automatic failover.", (0,jsx_runtime.jsx)(_components.br, {}), "\nVới Engine Type là Cassandra thì không hiển thị trường này.  ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Lưu ý quan trọng khi sử dụng HA cho engine ClickHouse:"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Khi tạo một cụm cơ sở dữ liệu ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ClickHouse với tính năng HA"
            }), " được bật, dịch vụ sẽ tự động tạo thêm replica cho mỗi shard. Tuy nhiên, để sử dụng tính năng replication, người dùng cần tạo các bảng hỗ trợ replication. Để biết thêm chi tiết, tham khảo tài liệu chính thức của ClickHouse tại ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://clickhouse.com/docs/engines/table-engines/mergetree-family/replication",
              children: "Replicated* table engines | ClickHouse Doc"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Replication"
            }), " (nhân bản dữ liệu) chỉ được hỗ trợ cho các bảng thuộc họ ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "MergeTree"
            }), " , bao gồm các loại bảng sau:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "ReplicatedMergeTree"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "ReplicatedSummingMergeTree"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "ReplicatedReplacingMergeTree"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "ReplicatedAggregatingMergeTree"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "ReplicatedCollapsingMergeTree"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "ReplicatedVersionedCollapsingMergeTree"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "ReplicatedGraphiteMergeTree"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Replication"
            }), " hoạt động ở ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "mức độ bảng"
            }), " không phải toàn bộ server. Điều này có nghĩa là trên cùng một server có thể tồn tại cả bảng có replication và không có replication."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Replication không phụ thuộc vào sharding. Mỗi shard có cơ chế replication độc lập với các shard khác. Ví dụ, nếu người dùng tạo bảng ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "MergeTree"
            }), " (không phải ReplicatedMergeTree), bảng đó sẽ không được nhân bản và dữ liệu chỉ có trên node được ghi vào."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Number Of Nodes | Chọn số node cần tạo cho cụm database.", (0,jsx_runtime.jsx)(_components.br, {}), "\nChỉ hiển thị đối với Engine Type là Cassandra.", (0,jsx_runtime.jsx)(_components.br, {}), "\nFlavor | Chọn Flavor để xác định tài nguyên compute cho mỗi node (vCPU, RAM).", (0,jsx_runtime.jsx)(_components.br, {}), "\nData Disk Size (GB) | Dung lượng ổ đĩa dữ liệu cho database, tính theo đơn vị GB với giá trị tối thiểu là 20 GB."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi nhập đầy đủ thông tin, nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Step"
      }), " để chuyển sang cấu hình các dịch vụ đi kèm."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-3-cấu-hình-dịch-vụ-add-on",
      children: "Bước 3: Cấu hình dịch vụ add-on"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(930325)/* ["default"] */ .A) + "",
        width: "1405",
        height: "1789"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Màn hình này cho phép cấu hình các dịch vụ bổ sung (optional) cho database cluster như backup, tự động mở rộng tài nguyên, và thông báo, nhằm tăng độ sẵn sàng, khả năng mở rộng và khả năng vận hành."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Khuyến nghị bật dịch vụ Backup và Auto Scaling ngay khi khởi tạo để đảm bảo an toàn dữ liệu, ổn định và liên tục vận hành của hệ thống."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mô tả các trường trên màn hình:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Enable Additional Service"
          }), " : Bật/tắt các dịch vụ add-on cho cụm cơ sở dữ liệu, gồm backup và auto scaling. Khi tắt, cụm cơ sở dữ liệu sẽ được tạo mà không được kích hoạt các dịch vụ này. Bạn có thể bật các dịch vụ add-on sau khi cụm được tạo thành công."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Backup Service Configuration"
          }), " : Kích hoạt dịch vụ này để hệ thống thực hiện backup toàn bộ cơ sở dữ liệu hàng ngày, giúp bảo vệ dữ liệu trước các sự cố. Các trường thông tin cần nhập bao gồm:"]
        }), "\n"]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Trường"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backup Capacity (GB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dung lượng lưu trữ dành cho backup, tính theo đơn vị GB với giá trị tối thiểu là 10 GB."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage Policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chính sách lưu trữ backup, xác định hiệu năng và độ bền của storage."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backup Job Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tên định danh cho backup job, độ dài từ 6–25 ký tự và chỉ được chứa chữ cái, chữ số, khoảng trắng, dấu gạch ngang (-) và dấu gạch dưới (_)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backup Retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Số lượng bản backup toàn bộ cơ sở dữ liệu được giữ lại. Khi số lượng bản backup vượt quá giới hạn này, các bản backup cũ nhất sẽ được tự động xóa."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hour / Minute / Day of Week"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cấu hình lịch chạy backup định kỳ:"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hour: Giờ chạy backup."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Minute: Phút chạy backup."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Day of Week: Ngày chạy backup trong tuần.\n", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cảnh báo"
          }), " : Đối với Engine Type là Kafka, thao tác backup có thể gây gián đoạn tạm thời. Bạn nên lên lịch chạy backup vào khung thời gian ít tải để hạn chế ảnh hưởng đến dịch vụ."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Vertical Scaling Service Configuration:"
            }), " Kích hoạt dịch vụ này cho phép hệ thống tự động mở rộng tài nguyên compute hoặc storage khi vượt ngưỡng sử dụng. Các trường thông tin cần nhập bao gồm:"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-section-compute-scaling-cấu-hình-tự-động-mở-rộng-compute",
      children: "1. Section Compute Scaling (Cấu hình tự động mở rộng compute)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trường | Mô tả", (0,jsx_runtime.jsx)(_components.br, {}), "\nCPU Threshold (%) | Ngưỡng sử dụng CPU để kích hoạt auto scaling cho cơ sở dữ liệu.", (0,jsx_runtime.jsx)(_components.br, {}), "\nRAM Threshold (%) | Ngưỡng sử dụng RAM để kích hoạt auto scaling cho cơ sở dữ liệu.", (0,jsx_runtime.jsx)(_components.br, {}), "\nTracing Interval | Chu kỳ giám sát mức sử dụng tài nguyên CPU và RAM để đưa ra quyết định scale.", (0,jsx_runtime.jsx)(_components.br, {}), "\nCurrent Flavor | Flavor hiện tại của database node (vCPU / RAM).", (0,jsx_runtime.jsx)(_components.br, {}), "\nList Flavor Scaling | Danh sách các flavor được phép scale lên khi auto scaling được kích hoạt. Danh sách sẽ được sắp xếp tăng dần và được scale theo đúng thứ tự từ bé đến lớn.", (0,jsx_runtime.jsx)(_components.br, {}), "\n2. Section Storage Scaling (cấu hình tự động mở rộng storage)", (0,jsx_runtime.jsx)(_components.br, {}), "\nTrường | Mô tả", (0,jsx_runtime.jsx)(_components.br, {}), "\nCurrent Storage (GB) | Dung lượng storage hiện tại của database.", (0,jsx_runtime.jsx)(_components.br, {}), "\nStorage Threshold (%) | Ngưỡng sử dụng storage để kích hoạt auto scaling.", (0,jsx_runtime.jsx)(_components.br, {}), "\nStorage Scale (%) | Tỷ lệ mở rộng dung lượng storage mỗi lần scale."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Maintenance Window"
          }), " : Khai báo khung thời gian mà hệ thống được phép thực hiện bảo trì:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Day of Week"
            }), " : Ngày trong tuần thực hiện bảo trì, cho phép lựa chọn từ “Monday” đến “Sunday”."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Start Time"
            }), " : Thời điểm bắt đầu được phép thực hiện bảo trì trong ngày đã chọn. Thời lượng bảo trì: 1 giờ, tính từ thời điểm Start Time đã cấu hình."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Notification Recipients List"
          }), " : Nhập danh sách email để nhận thông báo khi có sự kiện backup hoặc scaling được thực hiện. Bạn có thể thêm nhiều email bằng cách nhấn icon \"+\" để nhập email mới vào danh sách."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi nhập đầy đủ thông tin, nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Step"
      }), " để chuyển sang bước kiểm tra các thông tin đã nhập và xác nhận việc khởi tạo cơ sở dữ liệu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-4-kiểm-tra-thông-tin--xác-nhận-khởi-tạo",
      children: "Bước 4: Kiểm tra thông tin & xác nhận khởi tạo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng cần kiểm tra toàn bộ thông tin đã cấu hình cho cơ sở dữ liệu trước khi xác nhận khởi tạo:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu cần chỉnh sửa, nhấn “Back” để quay lại bước trước và cập nhật thông tin."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu thông tin đã chính xác, nhấn “Create” để xác nhận khởi tạo cơ sở dữ liệu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi xác nhận:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hệ thống sẽ kiểm tra tài nguyên, hiển thị thông báo khởi tạo và bắt đầu quá trình triển khai cơ sở dữ liệu mới dựa trên cấu hình đã nhập."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Người dùng sẽ được chuyển về màn hình danh sách, trong đó cơ sở dữ liệu vừa tạo sẽ hiển thị ở trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "“Processing”"
        }), " ở đầu danh sách."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Quá trình khởi tạo thường kéo dài 5–7 phút. Khi hoàn tất, cơ sở dữ liệu sẽ chuyển sang trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“Running”"
      }), " và sẵn sàng để sử dụng. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Nếu quá trình khởi tạo thất bại, vui lòng xóa database bị lỗi và thực hiện khởi tạo lại."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để kết nối tới cơ sở dữ liệu vừa tạo, xem hướng dẫn tại mục ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=db-connect",
        children: "Kết nối cơ sở dữ liệu"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để vận hành cơ sở dữ liệu, xem hướng dẫn tại mục “7.2.4. Vận hành cơ sở dữ liệu”."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./view-db-list",
        children: " Previous Xem danh sách cơ sở dữ liệu "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./db-view-detail",
        children: " Next Xem thông tin cơ sở dữ liệu "
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

/***/ 353838
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/02908cceb566-DBaaS_ProvisionDB_step1-1-e63a0bbe36b3254fd4511b8bc8f4fc41.png");

/***/ },

/***/ 930325
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d636b5e2948a-create-db-step-2-2-864562b99497bec28835a5e32d8b1602.png");

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