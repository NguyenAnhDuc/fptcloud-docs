"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[44945],{

/***/ 404185
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_postgresql_source_connector_md_8b7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-postgresql-source-connector-md-8b7.json
const site_docs_fpt_data_platform_postgresql_source_connector_md_8b7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/postgresql-source-connector","title":"2. FPT Data Platform","description":"2.1 PostgreSQL source connector","source":"@site/docs/fpt-data-platform/postgresql-source-connector.md","sourceDirName":"fpt-data-platform","slug":"/fpt-data-platform/postgresql-source-connector","permalink":"/fpt-data-platform/postgresql-source-connector","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Cấu hình PostgreSQL","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=postgresql-source-connector","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cấu hình PostgreSQL - Cấp quyền trên schema","permalink":"/fpt-data-platform/postgresql-sink-connector"},"next":{"title":"Processing service","permalink":"/fpt-data-platform/processing-service"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/postgresql-source-connector.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Cấu hình PostgreSQL',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=postgresql-source-connector',
	parent: 'https://fptcloud.com/documents/fpt-data-platform',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Data Platform';

const assets = {

};



const toc = [{
  "value": "Cấu hình PostgreSQL",
  "id": "cấu-hình-postgresql",
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
    ol: "ol",
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
      children: "2.1 PostgreSQL source connector"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tạo connector: Type là source, Database là PostgreSQL"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-condition:"
      }), " Status CDC service Healthy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cấu-hình-postgresql",
      children: "Cấu hình PostgreSQL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1"
      }), ". ", (0,jsx_runtime.jsx)(_components.em, {
        children: "pgoutput"
      }), " cần thay đổi cấu hình ", (0,jsx_runtime.jsx)(_components.em, {
        children: "wal_level"
      }), " của Postgres cluster thành logical ", (0,jsx_runtime.jsx)(_components.em, {
        children: "đồng thời cần thực hiện CDC trên primary, thay vì"
      }), " hot ", (0,jsx_runtime.jsx)(_components.em, {
        children: "hoặc"
      }), " warm* replicas."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Để kiểm tra cấu hình:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "SHOW wal_level;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Để thực hiện thay đổi cấu hình, vui lòng chạy câu lệnh sau trên Postgres và restart service sau khi thay đổi cấu hình:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ALTER SYSTEM SET wal_level = 'logical';\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2"
      }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PostgreSQL source connector yêu cầu tối thiểu REPLICATION role."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trong trường hợp sử dụng một user là SuperUser, vui lòng chuyển tới bước 5."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Để kiểm tra một user có phải là SuperUser:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "SELECT rolsuper FROM pg_roles WHERE rolname = '<USER_NAME>';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ngược lại, có thể khởi tạo một user với role REPLICATION:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "CREATE USER <USER_NAME> WITH REPLICATION LOGIN PASSWORD '<PASSWORD>';\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Tạo Publication:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Note:"
              }), " Vui lòng thực hiện các thao tác dưới đây với quyền superuser. Với giá trị ``, FPTCloud chỉ chấp nhận chuỗi kí tự chỉ chứa chữ cái in thường."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Tạo Publication cho toàn bộ các bảng:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "CREATE PUBLICATION <PUBLICATION_NAME> FOR ALL TABLES;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Kiểm tra các Publication hiện có:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SELECT * FROM pg_publication;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Tạo Publication cho một số bảng nhất định:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "CREATE PUBLICATION <PUBLICATION_NAME> FOR TABLE <SCHEMA1>.<TABLE1>, <SCHEMA2>.<TABLE2>, ...;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Thêm bảng vào publication:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "ALTER PUBLICATION <PUBLICATION_NAME> ADD TABLE <SCHEMA1>.<TABLE1>, <SCHEMA2>.<TABLE2>, ...;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Xóa bảng khỏi publication:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "ALTER PUBLICATION <PUBLICATION_NAME> DROP TABLE <SCHEMA1>.<TABLE1>, <SCHEMA2>.<TABLE2>, ...;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Xóa một Publication:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "DROP PUBLICATION <PUBLICATION_NAME>;\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Thêm quyền SELECT trên các bảng cho user đang được sử dụng:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Cấp quyền SELECT cho một bảng:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "GRANT SELECT ON TABLE '<SCHEMA_NAME>.<TABLE_NAME>' TO <USER_NAME>;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Hoặc thêm quyền cho toàn bộ bảng trong schema:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "DO $$\nDECLARE\n table_record RECORD;\nBEGIN\n FOR table_record IN \n     SELECT table_name \n     FROM information_schema.tables \n     WHERE table_schema = '<SCHEMA_NAME>' AND table_type = 'BASE TABLE'\n LOOP\n     EXECUTE 'GRANT SELECT ON TABLE <SCHEMA_NAME>.\"' || table_record.table_name || '\" TO <USER_NAME>;';\n END LOOP;\nEND $$;\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Thay đổi REPLICA IDENTITY level của các bảng cần Capture Data Change."
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Việc thay đổi cấu hình này sẽ giúp các sự kiện thay đổi dữ liệu có đủ thông tin trước và sau khi thay đổi:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "ALTER TABLE your_schema_name.your_table_name REPLICA IDENTITY FULL;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Hoặc thay đổi cho toàn bộ các bảng trong schema:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "DO $$\nDECLARE\n table_record RECORD;\nBEGIN\n FOR table_record IN \n     SELECT table_name \n     FROM information_schema.tables \n     WHERE table_schema = '<SCHEMA_NAME>' AND table_type = 'BASE TABLE'\n LOOP\n     EXECUTE 'ALTER TABLE <SCHEMA_NAME>.\"' || table_record.table_name || '\" REPLICA IDENTITY FULL;';\n END LOOP;\nEND $$;\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Connector sẽ tự tạo ra hoặc dùng lại một replication_slot đã có sẵn với giá trị slot.name nhập từ giao diện"
          }), " , để lắng nghe thay đổi từ wal_log (write-ahead log)."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Kiểm tra số lượng replication_slot tối đa:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "show max_replication_slots;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Kiểm tra các replication_slot hiện tại:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SELECT slot_name, plugin, slot_type, database, active FROM pg_replication_slots;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Để loại bỏ một replication_slot không active:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SELECT pg_drop_replication_slot('<REPLICATION_SLOT_NAME>');\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Khi xóa bỏ một connector, cần loại bỏ replication_slot và publication của nó:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Xóa bỏ replication_slot:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SELECT pg_drop_replication_slot('<REPLICATION_SLOT_NAME>');\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Xóa bỏ publication:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "DROP PUBLICATION <PUBLICATION_NAME>;\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Trong trường hợp muốn thay đổi cấu hình max_replication_slots"
          }), " , vui lòng thay đổi cấu hình này trong file ", (0,jsx_runtime.jsx)(_components.em, {
            children: "postgres.conf"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "các-bước-tạo-connector",
      children: "Các bước tạo connector:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để tạo connector, người dùng thực hiện các bước sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại thanh menu, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Platform > Workspace Management > Workspace name."
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
        children: "Bước 3"
      }), ". Tại màn detail ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CDC service"
      }), " , chọn tab ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Connectors"
      }), " và nhấn ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Create a connector"
      }), ". ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "create-connector",
        src: (__webpack_require__(171253)/* ["default"] */ .A) + "",
        width: "628",
        height: "258"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " Nhập thông tin màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Connector Information"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name (required):"
          }), " Tên connector. Chú ý: Tên connector có thể chứa các kí tự chữ cái thường a-z hoặc các kí tự số 0-9. Đặc biệt không dùng dấu cách có thể thay dấu cách bằng dấu “-”."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type (required):"
          }), " Chọn ", (0,jsx_runtime.jsx)(_components.em, {
            children: "source"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Database (required):"
          }), " Chọn ", (0,jsx_runtime.jsx)(_components.em, {
            children: "PostgreSQL"
          }), ". ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "connector-info",
            src: (__webpack_require__(583993)/* ["default"] */ .A) + "",
            width: "624",
            height: "248"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nhấn Next để chuyển qua màn Properties"
      }), " và nhập các thông tin sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Trường hợp chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "From FPT Database Engine:"
          }), " - điền các thông tin sau:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Database (required):"
              }), " Chọn Database."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Host Name (required):"
              }), " Hostname hoặc IP của Postgres server."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Port (required):"
              }), " Postgres server port, mặc định là 5432."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Database name (required):"
              }), " Database mà Connector sẽ lắng nghe thay đổi dữ liệu."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Username (required):"
              }), " Postgres user sử dụng bởi Connector."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Password (required):"
              }), " Mật khẩu."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Topic prefix (required):"
              }), " Khi dữ liệu thay đổi, các sự kiện thay đổi sẽ được produce vào các Kafka topics, tên của các topics sẽ có dạng [topic.prefix].[tên_schema].[tên_bảng]"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ: tiền tố topic: syncdata, schema inventory, các bảng: customer, order, item. Connector sẽ thực hiện ghi lại các thay đổi của dữ liệu vào các topic của Kafka: syncdata.inventory.customer, syncdata.inventory.order, syncdata.inventory.item)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "* **Slot (required):** Replication slot sử dụng bởi connector, giá trị chỉ nhận chữ cái và in thường.\n\n* **Publication (required):** Publication sử dụng bởi connector, giá trị chỉ nhận chữ cái và in thường.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Trường hợp chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Manual configuration"
          }), " - điền các thông tin sau:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Host Name (required):"
              }), " Hostname hoặc IP của Postgres server"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Port (required):"
              }), " Postgres server port, mặc định là 5432"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Database name (required):"
              }), " Database mà Connector sẽ lắng nghe thay đổi dữ liệu"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Username (required):"
              }), " Postgres user sử dụng bởi Connector"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Password (required):"
              }), " mật khẩu"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Topic prefix (required):"
              }), " Khi dữ liệu thay đổi, các sự kiện thay đổi sẽ được produce vào các Kafka topics, tên của các topics sẽ có dạng [topic.prefix].[tên_schema].[tên_bảng] Ví dụ: tiền tố topic: syncdata, schema inventory, các bảng: customer, order, item. Connector sẽ thực hiện ghi lại các thay đổi của dữ liệu vào các topic của Kafka: syncdata.inventory.customer, syncdata.inventory.order, syncdata.inventory.item)"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Slot (required):"
              }), " Replication slot sử dụng bởi connector, giá trị chỉ nhận chữ cái và in thường"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Publication (required):"
              }), " Publication sử dụng bởi connector, giá trị chỉ nhận chữ cái và in thường ", (0,jsx_runtime.jsx)(_components.img, {
                alt: "manual-config",
                src: (__webpack_require__(439326)/* ["default"] */ .A) + "",
                width: "628",
                height: "488"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Enable incremental snapshot"
              }), " (optional): Checkbox để bật tính năng incremental snapshot cho Connector"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Chỉ hiển thị với các source connector: ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "MySQL, MariaDB, PostgreSQL"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Khi check vào checkbox này và click \"Test connection\", hệ thống sẽ kiểm tra:"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Database có đủ quyền để thực hiện snapshot (cần quyền INSERT, CREATE TABLE cho PostgreSQL/MySQL)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Nếu database thiếu quyền, sẽ hiển thị thông báo lỗi chi tiết"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Nếu database có đủ quyền, hiển thị \"Test connection successfully\""
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Sau khi tạo Connector thành công với checkbox này được check:"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Connector sẽ có tính năng quản lý incremental snapshot"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Trong màn hình List Connector sẽ hiển thị cột \"Snapshot Status\""
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Có thể thực hiện các thao tác: Execute, Pause, Resume, Stop snapshot thông qua menu Actions"
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test connection"
      }), " để kiểm tra kết nối từ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workspace"
      }), " tới Database đã nhập"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Nhấn Next để chuyển qua màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Additional Properties"
      }), " và nhập các thông tin:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Mode (required):"
          }), " Hành vi của Connector. Chọn các loại mode sau"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Initial (default):"
              }), " Connector sẽ snapshot toàn bộ dữ liệu đã tồn tại trong các bảng, sau đó tiếp tục capture data changes trên các bảng này"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Initial_only:"
              }), " Connector sẽ chỉ snapshot toàn bộ dữ liệu đã tồn tại trong các bảng, sau đó không lắng nghe các sự kiện thay đổi dữ liệu trên bảng"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "No_data:"
              }), " Connector sẽ không snapshot dữ liệu đã tồn tại trong bảng mà chỉ lắng nghe các sự kiện thay đổi dữ liệu trên bảng ", (0,jsx_runtime.jsx)(_components.img, {
                alt: "additional-properties",
                src: (__webpack_require__(451476)/* ["default"] */ .A) + "",
                width: "628",
                height: "330"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn vào dấu ‘+’ để lấy thông tin schema, table ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "schema",
        src: (__webpack_require__(973293)/* ["default"] */ .A) + "",
        width: "310",
        height: "388"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chú ý"
      }), " : Giới hạn tối đa lựa chọn là 100 table"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nhấn Next để chuyển qua màn Review"
      }), " và kiểm tra thông tin. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "connector-details",
        src: (__webpack_require__(139614)/* ["default"] */ .A) + "",
        width: "932",
        height: "798"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 8:"
      }), " Kiểm tra thông tin và nhấn nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " để hoàn thành việc tạo connector."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-thong-tin-cdc-service",
        children: " Previous 2. Xem thông tin CDC Service "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./mongodb-source-connector",
        children: " Next 2.2 MongoDB source connector "
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

/***/ 139614
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1df16aa5318e-Picture6-1-4e1ccd245c0a37c44e4f2c64d2d2a62b.png");

/***/ },

/***/ 451476
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6053bd0a5f31-Picture4-1-371aa238d3be5d15bf1df046dd1ea63e.png");

/***/ },

/***/ 973293
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9cd121c6f447-Picture5-1-715360c2d97067f25abc4dbebe5b901a.png");

/***/ },

/***/ 171253
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ab27c895f66e-Picture1-1-6653bad56793048875277691944fcde3.png");

/***/ },

/***/ 439326
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/baac95392493-Picture3-1-f78621289acc66c84bfcfb85266807e2.png");

/***/ },

/***/ 583993
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fe0e717a8f96-Picture2-1-81a61b84b6496e6b140f7ad891f0a89d.png");

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