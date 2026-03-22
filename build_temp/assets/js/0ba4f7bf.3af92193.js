"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[68423],{

/***/ 711309
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_mariadb_source_connector_md_0ba_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-mariadb-source-connector-md-0ba.json
const site_docs_fpt_data_platform_mariadb_source_connector_md_0ba_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/mariadb-source-connector","title":"2. FPT Data Platform","description":"2.5 MariaDB source connector","source":"@site/docs/fpt-data-platform/mariadb-source-connector.md","sourceDirName":"fpt-data-platform","slug":"/fpt-data-platform/mariadb-source-connector","permalink":"/fpt-data-platform/mariadb-source-connector","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Cấu hình MariaDB","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=mariadb-source-connector","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Các bước tạo connector:","permalink":"/fpt-data-platform/mariadb-sink-connector"},"next":{"title":"Các bước tạo connector:","permalink":"/fpt-data-platform/mongodb-sink-connector"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/mariadb-source-connector.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Cấu hình MariaDB',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=mariadb-source-connector',
	parent: 'https://fptcloud.com/documents/fpt-data-platform',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Data Platform';

const assets = {

};



const toc = [{
  "value": "Cấu hình MariaDB",
  "id": "cấu-hình-mariadb",
  "level": 2
}, {
  "value": "Các bước tạo connector:",
  "id": "các-bước-tạo-connector",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
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
      children: "2.5 MariaDB source connector"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tạo connector, Type là source, Database là MariaDB"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-condition:"
      }), " Status CDC service: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "healthy"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MariaDB Source connector sử dụng binary log của MariaDB để thực hiện CDC. Tuy nhiên MariaDB được cấu hình để loại bỏ binlogs trong một khoảng thời gian. Vì vậy khi MariaDB connector được khởi tạo, connector sẽ sẽ thực hiện một initial consistent snapshot trước khi bắt đầu đọc từ binlogs để đảm bảo dữ liệu được consistent. Supported MariaDB topologies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1."
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Standalone:"
          }), " phải enable binlogs trước đó."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "2."
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Primary and replica:"
          }), " Hỗ trợ đọc binlogs từ một trong các server (nếu binlog enabled), nhưng connector chỉ detect được các thay đổi trên server đó."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "3."
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "High available"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cấu-hình-mariadb",
      children: "Cấu hình MariaDB"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " Tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MariaDB user"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      CREATE USER '<USERNAME>'@'%' IDENTIFIED BY '<PASSWORD>';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " MariaDB source connector yêu cầu các permission sau"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      SHOW DATABASES: GLOBAL PRIVILEGES\n\n\n    SELECT: DATABASES PRIVILEGES\n\n\n      RELOAD: GLOBAL PRIVILEGES\n\n\n      REPLICATION SLAVE: GLOBAL PRIVILEGES\n\n\n      REPLICATION CLIENT: GLOBAL PRIVILEGES\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thêm quyền trên toàn bộ Database:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "GRANT SELECT, RELOAD, SHOW DATABASES, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO '<USERNAME>'@'%';\n  FLUSH PRIVILEGES;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hoặc trên database cụ thể:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "GRANT SHOW DATABSASES, RELOAD, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO '<USERNAME>'@'%';\n  GRANT SELECT ON <DATABASE-NAME>.* TO '<USERNAME>'@'%';\n  FLUSH PRIVILEGES;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3."
      }), " Enable binlog: Note: Với dịch vụ của FPTCloud, không cần phải thực hiện các tác vụ này."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Kiểm tra binlog đã được enabled chưa:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "SELECT variable_value as \"BINARY LOGGING STATUS (log-bin) ::\"\n  FROM performance_schema.global_variables WHERE                        \n  variable_name='log_bin';    \n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hoặc"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "SHOW GLOBAL VARIABLES LIKE \"log_bin\";\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nếu log_bin nhận giá trị OFF, vui lòng thay đổi giá trị này từ configuration file:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "server-id = <CHANGE_ME> #result of query SHOW VARIABLES LIKE \"server_id\";\n  log_bin = MariaDB-bin\n  binlog_format               = ROW\n  binlog_row_image            = FULL\n  binlog_expire_logs_seconds  = 864000\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hoặc:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "SET @@global.binlog_format=\"ROW\";\n  SET @@global.binlog_row_image=\"FULL\";\n  SET @@global.binlog_expire_logs_seconds=864000;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4."
      }), " Enable GTIDs:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: Với dịch vụ của FPTCloud, không cần phải thực hiện các tác vụ này."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Kiểm tra gtid_mode đã enabled chưa"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "SHOW GLOBAL VARIABLES LIKE \"gtid_mode\";\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Kiểm tra enforce_gtid_consistency đã enabled chưa"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "SHOW GLOBAL VARIABLES LIKE \"enforce_gtid_consistency\"; \n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trong trường hợp các cấu hình gtid_mode và enforce_gtid_consistency đều nhận giá trị OFF, vui lòng thay đổi giá trị này từ configuration file:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "gtid_mode                   = ON\nenforce_gtid_consistency    = ON\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Hoặc"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SET @@global.gtid_mode=\"ON\";\nSET @@global.enforce_gtid_consistency=\"ON\";\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "5."
      }), " Cấu hình ", (0,jsx_runtime.jsx)(_components.code, {
        children: "binlog_row_value_options"
      }), " cho phép connector lắng nghe UPDATE events:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: Với dịch vụ của FPTCloud, không cần phải thực hiện các tác vụ này."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Kiểm tra giá trị binlog_row_value_options"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "SHOW GLOBAL VARIABLES LIKE \"binlog_row_value_options\";\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thay đổi giá trị binlog_row_value_options thành \"\""
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "SET @@global.binlog_row_value_options=\"\" ;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "các-bước-tạo-connector",
      children: "Các bước tạo connector:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để tạo connector, người dùng thực hiện các bước sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại thanh menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Platform"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workspace Management"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workspace name"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tại phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "My services"
      }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CDC service"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Tại màn detail ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CDC service"
      }), " > Chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Connectors"
      }), " > nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " a connector ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "image-1",
        src: (__webpack_require__(549920)/* ["default"] */ .A) + "",
        width: "628",
        height: "258"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Nhập các thông tin màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Connector Information"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name (required):"
        }), " tên connector"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chú ý: Tên connector có thể chứa các kí tự chữ cái thường a-z hoặc các kí tự số 0-9. Đặc biệt không dùng dấu cách có thể thay dấu cách bằng dấu “-”."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type (required):"
          }), " chọn source"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Database (required):"
          }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SQLserver"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "image-2",
            src: (__webpack_require__(447594)/* ["default"] */ .A) + "",
            width: "624",
            height: "252"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Nhấn Next để chuyển qua màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhập thông tin màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Trường hợp chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Manual configuration"
          }), " - Điền các thông tin:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Host name (required):"
              }), " Hostname hoặc IP của MariaDB"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Port (required):"
              }), " MariaDB server port, mặc định là: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "3306"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Database name (required):"
              }), " Database đích mà Connector sẽ sink dữ liệu vào"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Username (required):"
              }), " Username sử dụng bởi Connector"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Password (required):"
              }), " Password sử dụng bởi Connector"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Topics (required):"
              }), " Danh sách các topics Connector sẽ consume và sink dữ liệu vào database đích, và được ngăn cách bởi dấu \",\" ", (0,jsx_runtime.jsx)(_components.img, {
                alt: "image-3",
                src: (__webpack_require__(140892)/* ["default"] */ .A) + "",
                width: "628",
                height: "406"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Trường hợp chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "From Database Engine"
          }), " - Điền các thông tin:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Database name (required):"
              }), " Tên Database"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Host name (required):"
              }), " Hostname hoặc IP của MariaDB"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Port (required):"
              }), " MariaDB server port, mặc định là: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "3306"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Database name (required):"
              }), " Database đích mà Connector sẽ sink dữ liệu vào"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Username (required):"
              }), " Username sử dụng bởi Connector"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Password (required):"
              }), " Password sử dụng bởi Connector"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Database server ID (required):"
              }), " ID của Database server"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chú ý: Database server ID phải là số và phải lớn hơn 1000 và nhỏ hơn 9999."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "* **Topics (required):** Danh sách các topics Connector sẽ consume và sink dữ liệu vào database đích, và được ngăn cách bởi dấu \",\" ![image-4](/img/docs/c6958f765be3-source-MariaDB-4.png)\n\n* **Enable incremental snapshot** (optional): Checkbox để bật tính năng incremental snapshot cho Connector \n\n  * Chỉ hiển thị với các source connector: **MySQL, MariaDB, PostgreSQL**\n  * Khi check vào checkbox này và click \"Test connection\", hệ thống sẽ kiểm tra: \n  * Database có đủ quyền để thực hiện snapshot (cần quyền INSERT, CREATE TABLE cho PostgreSQL/MySQL) \n  * Nếu database thiếu quyền, sẽ hiển thị thông báo lỗi chi tiết \n  * Nếu database có đủ quyền, hiển thị \"Test connection successfully\" \n  * Sau khi tạo Connector thành công với checkbox này được check: \n  * Connector sẽ có tính năng quản lý incremental snapshot \n  * Trong màn hình List Connector sẽ hiển thị cột \"Snapshot Status\" \n  * Có thể thực hiện các thao tác: Execute, Pause, Resume, Stop snapshot thông qua menu Actions \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhấn Test connection để kiểm tra kết nối từ Workspace tới Database đã nhập"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Nhấn Next để chuyển qua màn Additional Properties"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mode (required):"
        }), " Hành vi của Connector"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chọn các loại mode sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "* **Initial (default):** Connector sẽ snapshot toàn bộ dữ liệu đã tồn tại trong các bảng, sau đó tiếp tục capture data changes trên các bảng này\n\n* **Initial_only:** Connector sẽ chỉ snapshot toàn bộ dữ liệu đã tồn tại trong các bảng, sau đó không lắng nghe các sự kiện thay đổi dữ liệu trên bảng\n\n* **Nerver:** Connector sẽ không snapshot dữ liệu đã tồn tại trong bảng mà chỉ lắng nghe các sự kiện thay đổi dữ liệu trên bảng\n\n* **Table (optional):** tên một table trong database đã kết nối ở màn trước\n\n* **Column (optional):** tên một cột dữ liệu muốn lấy ra trong table ![image-5](/img/docs/bb626cf14792-source-MariaDB-5.png)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " để chuyển sang màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "image-6",
        src: (__webpack_require__(309108)/* ["default"] */ .A) + "",
        width: "628",
        height: "446"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 8:"
      }), " Kiểm tra thông tin sau đó nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " để hoàn thành việc tạo connector"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./mysql-source-connector",
        children: " Previous 2.4 MySQL source connector "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./oracle-source-connector",
        children: " Next 2.6 Oracle source connector "
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

/***/ 140892
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1ef5ddb4d007-source-MariaDB-3-60a9f29b59e71fe4d2b5d0dacfbc19ca.png");

/***/ },

/***/ 447594
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9441dc119373-source-MariaDB-2-5f8493a7d36eadecaed24973ae649f5e.png");

/***/ },

/***/ 549920
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/969503907479-source-MariaDB-1-dfaa5143fbafc9b36cef9d63f62122e0.png");

/***/ },

/***/ 309108
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aebb20071e28-source-MariaDB-6-0f09230142a5de2c069b1d8659e26a97.png");

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