"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[65263],{

/***/ 554333
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_mysql_troubleshooting_md_ae6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-mysql-troubleshooting-md-ae6.json
const site_docs_managed_fpt_database_engines_new_mysql_troubleshooting_md_ae6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/mysql-troubleshooting","title":"2. Managed – FPT Database Engines","description":"MySQL","source":"@site/docs/managed-fpt-database-engines-new/mysql-troubleshooting.md","sourceDirName":"managed-fpt-database-engines-new","slug":"/managed-fpt-database-engines-new/mysql-troubleshooting","permalink":"/managed-fpt-database-engines-new/mysql-troubleshooting","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Managed – FPT Database Engines","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=mysql-troubleshooting","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Monitoring","permalink":"/managed-fpt-database-engines-new/monitoring"},"next":{"title":"Network connectivity","permalink":"/managed-fpt-database-engines-new/network-connectivity"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/mysql-troubleshooting.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Managed – FPT Database Engines',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=mysql-troubleshooting',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Giới thiệu",
  "id": "giới-thiệu",
  "level": 2
}, {
  "value": "Danh mục lỗi",
  "id": "danh-mục-lỗi",
  "level": 2
}, {
  "value": "1. Backup Error: “Please run OPTIMIZE TABLE on all listed tables…”",
  "id": "1-backup-error-please-run-optimize-table-on-all-listed-tables",
  "level": 3
}, {
  "value": "1.1. Dấu hiệu nhận biết",
  "id": "11-dấu-hiệu-nhận-biết",
  "level": 4
}, {
  "value": "1.2. Nguyên nhân",
  "id": "12-nguyên-nhân",
  "level": 4
}, {
  "value": "1.3. Ảnh hưởng",
  "id": "13-ảnh-hưởng",
  "level": 4
}, {
  "value": "1.4. Giải pháp khắc phục và khuyến nghị",
  "id": "14-giải-pháp-khắc-phục-và-khuyến-nghị",
  "level": 4
}, {
  "value": "2. Server Crash: Lỗi crash MySQL khi sử dụng combo index trên cột JSON",
  "id": "2-server-crash-lỗi-crash-mysql-khi-sử-dụng-combo-index-trên-cột-json",
  "level": 3
}, {
  "value": "2.1. Dấu hiệu nhận biết",
  "id": "21-dấu-hiệu-nhận-biết",
  "level": 4
}, {
  "value": "2.2. Nguyên nhân",
  "id": "22-nguyên-nhân",
  "level": 4
}, {
  "value": "2.3. Ảnh hưởng",
  "id": "23-ảnh-hưởng",
  "level": 4
}, {
  "value": "2.4. Giải pháp khắc phục và khuyến nghị",
  "id": "24-giải-pháp-khắc-phục-và-khuyến-nghị",
  "level": 4
}, {
  "value": "3. Lỗi Metadata Lock Storm",
  "id": "3-lỗi-metadata-lock-storm",
  "level": 3
}, {
  "value": "3.1. Dấu hiệu nhận biết",
  "id": "31-dấu-hiệu-nhận-biết",
  "level": 4
}, {
  "value": "75 admin 10.225.65.36:25694 fpt Query 178 Waiting for table metadata lock SELECT COUNT(1) AS <code>cnt</code> FROM <code>user_notifications</code> <code>UserNotificationEntity</code> WHERE ( ((`UserNotificat",
  "id": "75-admin-10225653625694-fpt-query-178-waiting-for-table-metadata-lock-select-count1-as-cnt-from-user_notifications-usernotificationentity-where--usernotificat",
  "level": 2
}, {
  "value": "77 admin 10.225.65.36:34558 fpt Query 176 Waiting for table metadata lock SELECT COUNT(1) AS <code>cnt</code> FROM <code>user_notifications</code> <code>UserNotificationEntity</code> WHERE ( ((`UserNotificat",
  "id": "77-admin-10225653634558-fpt-query-176-waiting-for-table-metadata-lock-select-count1-as-cnt-from-user_notifications-usernotificationentity-where--usernotificat",
  "level": 2
}, {
  "value": "78 admin 10.225.65.36:34570 fpt Query 174 Waiting for table metadata lock SELECT COUNT(1) AS <code>cnt</code> FROM <code>user_notifications</code> <code>UserNotificationEntity</code> WHERE ( ((`UserNotificat",
  "id": "78-admin-10225653634570-fpt-query-174-waiting-for-table-metadata-lock-select-count1-as-cnt-from-user_notifications-usernotificationentity-where--usernotificat",
  "level": 2
}, {
  "value": "83 agent 10.225.65.46:36868 NULL Query 167 Waiting for table metadata lock SELECT table_schema, table_name, column_name, auto_increment,\\n CAST(pow(2, case data_type\\n",
  "id": "83-agent-10225654636868-null-query-167-waiting-for-table-metadata-lock-select-table_schema-table_name-column_name-auto_incrementn-castpow2-case-data_typen",
  "level": 2
}, {
  "value": "16 admin 10.225.65.36:49646 fpt Query 125 Waiting for table metadata lock SELECT COUNT(1) AS <code>cnt</code> FROM <code>user_notifications</code> <code>UserNotificationEntity</code> WHERE ( ((`UserNotificat",
  "id": "16-admin-10225653649646-fpt-query-125-waiting-for-table-metadata-lock-select-count1-as-cnt-from-user_notifications-usernotificationentity-where--usernotificat",
  "level": 2
}, {
  "value": "18 admin 10.225.65.36:49652 fpt Query 124 Waiting for table metadata lock SELECT COUNT(1) AS <code>cnt</code> FROM <code>user_notifications</code> <code>UserNotificationEntity</code> WHERE ( ((`UserNotificat",
  "id": "18-admin-10225653649652-fpt-query-124-waiting-for-table-metadata-lock-select-count1-as-cnt-from-user_notifications-usernotificationentity-where--usernotificat",
  "level": 2
}, {
  "value": "3.2. Nguyên nhân",
  "id": "32-nguyên-nhân",
  "level": 4
}, {
  "value": "3.3. Ảnh hưởng",
  "id": "33-ảnh-hưởng",
  "level": 4
}, {
  "value": "3.4. Giải pháp khắc phục và khuyến nghị",
  "id": "34-giải-pháp-khắc-phục-và-khuyến-nghị",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
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
        id: "2-managed--fpt-database-engines",
        children: "2. Managed – FPT Database Engines"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MySQL"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "giới-thiệu",
      children: "Giới thiệu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MySQL Troubleshooting"
      }), " cung cấp hướng dẫn nhanh giúp bạn xác định và xử lý các lỗi thường gặp khi sử dụng dịch vụ MySQL trên FPT Cloud. Nội dung tập trung vào những vấn đề phổ biến như lỗi kết nối, lỗi cấu hình, sự cố hiệu năng, lỗi backup/restore và các tình huống đặc thù của MySQL."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mỗi mục đều trình bày dấu hiệu nhận biết, nguyên nhân và cách khắc phục rõ ràng, giúp bạn dễ dàng tự kiểm tra hoặc phối hợp với đội ngũ hỗ trợ kỹ thuật."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mục tiêu của tài liệu là giúp bạn vận hành MySQL ổn định, an toàn và hiệu quả hơn, đồng thời giảm thời gian gián đoạn khi xảy ra sự cố."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "danh-mục-lỗi",
      children: "Danh mục lỗi"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=mysql-troubleshooting#contentify_2",
        children: "1. Backup Error: “Please run OPTIMIZE TABLE on all listed tables…"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=mysql-troubleshooting#contentify_3",
        children: "2. Server Crash: Lỗi crash MySQL khi sử dụng combo index trên cột JSON"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#",
        children: "3. Lỗi Metadata Lock Storm"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-backup-error-please-run-optimize-table-on-all-listed-tables",
      children: "1. Backup Error: “Please run OPTIMIZE TABLE on all listed tables…”"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "11-dấu-hiệu-nhận-biết",
      children: "1.1. Dấu hiệu nhận biết"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong quá trình thực hiện sao lưu MySQL trên dịch vụ FPT Database Engine của FCI, tác vụ backup có thể thất bại và gửi thông báo lỗi qua email như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cluster_id : abcxyz11   cluster_name : clustername   vdc_name : ABCXYZ_VCD   org_name : ABCXYZ-ORG   start_time : 10/23/2055 00:30:02   backup_type : diff   backup_size : NoneG   backup_log : ERROR: Please run OPTIMIZE TABLE on all listed tables to fix this issue. Tables found: db/transactions...   backup_state : failed   created_at : 10/23/2055 00:31:01  "
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lỗi này xảy ra do một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bug trong Percona XtraBackup (phần mềm được FCI sử dụng để thực hiện backup trên dịch vụ FDE)."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "12-nguyên-nhân",
      children: "1.2. Nguyên nhân"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kể từ MySQL 8.0.29 trở đi, InnoDB hỗ trợ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "INSTANT ADD/DROP COLUMN"
      }), " để thêm hoặc xoá cột."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đặc điểm của lệnh INSTANT:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "InnoDB không sao chép lại toàn bộ bảng"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Không rebuild table"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chỉ ghi thêm metadata đặc biệt trong InnoDB dictionary. Metadata này xuất hiện dưới dạng ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "TOTAL_ROW_VERSIONS > 0"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tuy nhiên: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "XtraBackup không tương thích hoàn toàn với bảng có metadata TOTAL_ROW_VERSIONS > 0"
      }), " dẫn đến XtraBackup không thể xử lý bảng đã từng sử dụng INSTANT ADD/DROP COLUMN. Kết quả là tác vụ backup sẽ dừng lại và trả về lỗi yêu cầu OPTIMIZE TABLE."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "13-ảnh-hưởng",
      children: "1.3. Ảnh hưởng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lỗi này dẫn đến các ảnh hưởng sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hiệu suất truy vấn giảm: Thao tác chậm hơn do dữ liệu không được sắp xếp tối ưu."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tăng tải hệ thống: Tiêu tốn tài nguyên hệ thống và bộ nhớ."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chậm khi chèn hoặc cập nhật dữ liệu: Các thao tác INSERT, UPDATE có thể mất thời gian."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Khó khăn trong bảo trì và sao lưu: Các bảng phân mảnh có thể làm chậm quá trình sao lưu hoặc phục hồi."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "14-giải-pháp-khắc-phục-và-khuyến-nghị",
      children: "1.4. Giải pháp khắc phục và khuyến nghị"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rebuild lại bảng"
      }), " để loại bỏ metadata INSTANT bằng lệnh:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OPTIMIZE TABLE db.transactions;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi thực hiện:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bảng sẽ được rebuild hoàn toàn"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metadata “INSTANT COLUMN VERSION” được loại bỏ hoàn toàn"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TOTAL_ROW_VERSIONS trở về 0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backup sẽ chạy bình thường trở lại"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chú ý:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OPTIMIZE TABLE sẽ rebuild toàn bộ bảng"
        }), " → có thể gây WRITE lock (khoá ghi)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Với ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "bảng lớn"
        }), " , thời gian rebuild có thể dài → nên thực hiện ngoài giờ cao điểm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cần đảm bảo ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "đủ không gian lưu trữ tạm thời"
        }), " để thực hiện rebuild."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-server-crash-lỗi-crash-mysql-khi-sử-dụng-combo-index-trên-cột-json",
      children: "2. Server Crash: Lỗi crash MySQL khi sử dụng combo index trên cột JSON"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "21-dấu-hiệu-nhận-biết",
      children: "2.1. Dấu hiệu nhận biết"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi bạn sử dụng combo index trên cột JSON, có thể dẫn đến việc node MySQL bị crash như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["` 22:20:45 UTC - mysqld got signal 11 ;", (0,jsx_runtime.jsx)(_components.br, {}), "\nMost likely, you have hit a bug, but this error can also be caused by malfunc-tioning hardware.", (0,jsx_runtime.jsx)(_components.br, {}), "\nThread pointer: 0x407b5f0a3000", (0,jsx_runtime.jsx)(_components.br, {}), "\nAttempting backtrace. You can use the following information to find out", (0,jsx_runtime.jsx)(_components.br, {}), "\nwhere mysqld died. If you see no messages after this, something went", (0,jsx_runtime.jsx)(_components.br, {}), "\nterribly wrong...", (0,jsx_runtime.jsx)(_components.br, {}), "\nstack_bottom = 407b6c43de60 thread_stack 0x40000", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(my_print_stacktrace(unsigned char const*, unsigned long)+0x30) [0x1f7bb30]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(print_fatal_signal(int)+0x27c) [0xfaa93c]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(handle_fatal_signal+0xc4) [0xfaaa64]", (0,jsx_runtime.jsx)(_components.br, {}), "\nlinux-vdso.so.1(__kernel_rt_sigreturn+0) [0x400018f2a668]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(row_sel_field_store_in_mysql_format_func(unsigned char*, mysql_row_templ_t const*, dict_index_t const*, unsigned char const*, un-signed long)+0x164) [0x2225a64]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(row_sel_store_mysql_rec(unsigned char*, row_prebuilt_t*, unsigned char const*, dtuple_t const*, bool, dict_index_t const*, dict_index_t const*, unsigned long const*, bool, lob::undo_vers_t*, mem_block_info_t*&)+0x19c) [0x2228e3c]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(row_search_mvcc(unsigned char*, page_cur_mode_t, row_prebuilt_t*, unsigned long, unsigned long)+0x1a90) [0x222e410]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(ha_innobase::index_read(unsigned char*, unsigned char const*, unsigned int, ha_rkey_function)+0x378) [0x20de778]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(handler::ha_index_read_map(unsigned char*, unsigned char const*, unsigned long, ha_rkey_function)+0x3f8) [0x10aef98]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(handler::read_range_first(key_range const*, key_range const*, bool, bool)+0x60) [0x10afa20]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(ha_innobase::read_range_first(key_range const*, key_range const*, bool, bool)+0x1c) [0x20a955c]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(handler::multi_range_read_next(char**)+0x118) [0x10b02d8]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(handler::ha_multi_range_read_next(char**)+0x34) [0x10ac174]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(IndexRangeScanIterator::Read()+0x3c) [0x12b951c]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(IndexMergeIterator::Init()+0x130) [0x12b88f0]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(filesort(THD*, Filesort*, RowIterator*, unsigned long, unsigned long long, Filesort_info*, Sort_result*, unsigned long long*)+0x178) [0x1093e18]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(SortingIterator::DoSort()+0x54) [0x1200794]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(SortingIterator::Init()+0x1c) [0x120081c]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(LimitOffsetIterator::Init()+0x20) [0x135dd40]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(Query_expression::ExecuteIteratorQuery(THD*)+0x200) [0xf18160]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(Query_expression::execute(THD*)+0x30) [0xf185b0]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(Sql_cmd_dml::execute(THD*)+0x158) [0xea7458]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(mysql_execute_command(THD*, bool)+0xf2c) [0xe5504c]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(dispatch_sql_command(THD*, Parser_state*)+0x340) [0xe580c0]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(dispatch_command(THD*, COM_DATA const*, enum_server_command)+0x1560) [0xe59b40]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld(do_command(THD*)+0x1e0) [0xe5ae40]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld() [0xf9cc88]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/rdsdbbin/mysql/bin/mysqld() [0x2518490]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/lib64/libpthread.so.0(+0x722c) [0x400018fe622c]", (0,jsx_runtime.jsx)(_components.br, {}), "\n/lib64/libc.so.6(+0xd46dc) [0x4000191da6dc]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trying to get some variables.", (0,jsx_runtime.jsx)(_components.br, {}), "\nSome pointers may be invalid and cause the dump to abort.", (0,jsx_runtime.jsx)(_components.br, {}), "\nQuery (407ad76b1830): SELECT ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fort_knox_funds_flows"
      }), ".* FROM ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fort_knox_funds_flows"
      }), " WHERE (25830440 MEMBER OF(", (0,jsx_runtime.jsx)(_components.code, {
        children: "fort_knox_funds_flows"
      }), ".", (0,jsx_runtime.jsx)(_components.code, {
        children: "money_movements"
      }), " ->> \"$[", (0,jsx_runtime.jsxs)(_components.em, {
        children: ["].to_user_id\") OR 25830440 MEMBER OF(", (0,jsx_runtime.jsx)(_components.code, {
          children: "fort_knox_funds_flows"
        }), ".", (0,jsx_runtime.jsx)(_components.code, {
          children: "money_movements"
        }), " ->> \"$["]
      }), "].from_user_id\")) ORDER BY ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fort_knox_funds_flows"
      }), ".", (0,jsx_runtime.jsx)(_components.code, {
        children: "created_at"
      }), " DESC LIMIT 20", (0,jsx_runtime.jsx)(_components.br, {}), "\nConnection ID (thread ID): 624306", (0,jsx_runtime.jsx)(_components.br, {}), "\nStatus: NOT_KILLED", (0,jsx_runtime.jsx)(_components.br, {}), "\ncluster_name : clustername", (0,jsx_runtime.jsx)(_components.br, {}), "\n`"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Đây là một lỗi của MySQL liên quan đến việc sử dụng chỉ mục kết hợp trên cột JSON, gây ra sự cố crash node MySQL. Bạn có thể tham khảo thêm chi tiết về lỗi này ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://bugs.mysql.com/bug.php?id=109542",
        children: "tại đây"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "22-nguyên-nhân",
      children: "2.2. Nguyên nhân"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Từ MySQL 8.0.2x trở đi, các bảng có định nghĩa INDEX sử dụng các trường trong cột JSON có thể gặp phải lỗi crash như đã mô tả ở trên. Nguyên nhân chính của lỗi này là do MySQL gặp sự cố khi cố gắng tạo và duy trì chỉ mục trên cột JSON trong các combo index. Cụ thể:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Index không tương thích với cột JSON: MySQL không thể xử lý đúng cách các đối tượng JSON trong combo index, dẫn đến lỗi bộ nhớ hoặc xử lý bất đồng bộ."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Vấn đề với lưu trữ và truy xuất dữ liệu JSON: MySQL không tối ưu được việc lưu trữ và truy xuất dữ liệu JSON trong các combo index dẫn đến crash."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tương tác với các tính năng lưu trữ đặc biệt (như Full Disk Encryption) có thể làm tăng mức độ nghiêm trọng của lỗi."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "23-ảnh-hưởng",
      children: "2.3. Ảnh hưởng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi lỗi này xảy ra, MySQL có thể bị crash hoặc khởi động lại không mong muốn và trong một số trường hợp, cơ sở dữ liệu có thể không thể phục hồi được dữ liệu sau khi crash. Điều này sẽ ảnh hưởng nghiêm trọng đến tính sẵn sàng và độ tin cậy của dịch vụ, đặc biệt là trong môi trường sản xuất."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "24-giải-pháp-khắc-phục-và-khuyến-nghị",
      children: "2.4. Giải pháp khắc phục và khuyến nghị"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sử dụng các index đơn thay vì combo index khi làm việc với cột JSON."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tránh tạo index trực tiếp trên cột JSON hoặc nếu cần, hãy sử dụng generated columns (các cột sinh ra từ dữ liệu JSON) để index những giá trị cụ thể trong JSON."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cập nhật MySQL lên các version mới hơn (ví dụ 8.0.42), vì lỗi này đã được xác nhận và sửa trong một số phiên bản MySQL sau khi báo cáo."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-lỗi-metadata-lock-storm",
      children: "3. Lỗi Metadata Lock Storm"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "31-dấu-hiệu-nhận-biết",
      children: "3.1. Dấu hiệu nhận biết"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi sử dụng MySQL trong mô hình HA, có thể gặp phải tình trạng sau: database cluster MySQL vẫn hoạt động bình thường (node Master có thể đọc/ghi mà không gặp vấn đề), nhưng trên 2 node slave, lag dữ liệu có thể tăng cao (lên tới khoảng 2 giờ). Đồng thời, trên các node slave xuất hiện hiện tượng nhiều thread trong trạng thái \"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Waiting for table metadata lock"
      }), " \", như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "1073 admin 10.225.65.36:25680 fpt Query 178 Waiting for table metadata lock SELECT COUNT(1) AS"
      }), "cnt", (0,jsx_runtime.jsx)(_components.code, {
        children: "FROM"
      }), "user_notifications", (0,jsx_runtime.jsx)(_components.code, {
        children: " "
      }), "UserNotificationEntity", (0,jsx_runtime.jsx)(_components.code, {
        children: " WHERE ( (("
      }), "UserNotificat"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "75-admin-10225653625694-fpt-query-178-waiting-for-table-metadata-lock-select-count1-as-cnt-from-user_notifications-usernotificationentity-where--usernotificat",
      children: ["75 admin 10.225.65.36:25694 fpt Query 178 Waiting for table metadata lock SELECT COUNT(1) AS ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cnt"
      }), " FROM ", (0,jsx_runtime.jsx)(_components.code, {
        children: "user_notifications"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserNotificationEntity"
      }), " WHERE ( ((`UserNotificat"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "77-admin-10225653634558-fpt-query-176-waiting-for-table-metadata-lock-select-count1-as-cnt-from-user_notifications-usernotificationentity-where--usernotificat",
      children: ["77 admin 10.225.65.36:34558 fpt Query 176 Waiting for table metadata lock SELECT COUNT(1) AS ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cnt"
      }), " FROM ", (0,jsx_runtime.jsx)(_components.code, {
        children: "user_notifications"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserNotificationEntity"
      }), " WHERE ( ((`UserNotificat"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "78-admin-10225653634570-fpt-query-174-waiting-for-table-metadata-lock-select-count1-as-cnt-from-user_notifications-usernotificationentity-where--usernotificat",
      children: ["78 admin 10.225.65.36:34570 fpt Query 174 Waiting for table metadata lock SELECT COUNT(1) AS ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cnt"
      }), " FROM ", (0,jsx_runtime.jsx)(_components.code, {
        children: "user_notifications"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserNotificationEntity"
      }), " WHERE ( ((`UserNotificat"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-agent-10225654636868-null-query-167-waiting-for-table-metadata-lock-select-table_schema-table_name-column_name-auto_incrementn-castpow2-case-data_typen",
      children: "83 agent 10.225.65.46:36868 NULL Query 167 Waiting for table metadata lock SELECT table_schema, table_name, column_name, auto_increment,\\n CAST(pow(2, case data_type\\n"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "16-admin-10225653649646-fpt-query-125-waiting-for-table-metadata-lock-select-count1-as-cnt-from-user_notifications-usernotificationentity-where--usernotificat",
      children: ["16 admin 10.225.65.36:49646 fpt Query 125 Waiting for table metadata lock SELECT COUNT(1) AS ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cnt"
      }), " FROM ", (0,jsx_runtime.jsx)(_components.code, {
        children: "user_notifications"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserNotificationEntity"
      }), " WHERE ( ((`UserNotificat"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "18-admin-10225653649652-fpt-query-124-waiting-for-table-metadata-lock-select-count1-as-cnt-from-user_notifications-usernotificationentity-where--usernotificat",
      children: ["18 admin 10.225.65.36:49652 fpt Query 124 Waiting for table metadata lock SELECT COUNT(1) AS ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cnt"
      }), " FROM ", (0,jsx_runtime.jsx)(_components.code, {
        children: "user_notifications"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserNotificationEntity"
      }), " WHERE ( ((`UserNotificat"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lỗi này xảy ra sau khi bạn thực hiện lệnh DDL trên bảng user_notifications, khiến database (2 node slave) rơi vào trạng thái Metadata Lock Storm."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "32-nguyên-nhân",
      children: "3.2. Nguyên nhân"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MySQL sử dụng cơ chế Metadata Lock (MDL) để bảo vệ các thông tin cấu trúc của bảng (bao gồm schema-level và table-level) khi thực thi các lệnh DDL (Data Definition Language) và DML (Data Manipulation Language)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong môi trường MySQL InnoDB Cluster, các giao dịch replicated DDL (như ALTER TABLE, CREATE INDEX, DROP TABLE, ...) được thực hiện tuần tự trên các node slave bởi applier thread. Trong khi đó, vì một lý do nào đó như một truy vấn dài hoặc DML chưa commit mà session người dùng có thể đang giữ MDL lock. Khi đó sẽ dẫn đến tình trạng applier thread phải chờ lock quá lâu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi applier thread không thể lấy được lock kịp thời, các transaction khác trong GR queue (Global Replication Queue) bị nghẽn theo dây chuyền (điều này có thể thấy trên bảng user_notifications của ví dụ nói trên). Kết quả là, applier thread trên node slave bị treo, dẫn đến các thread truy nhập vào bảng cũng bị treo và việc truy cập vào node slave khó có thể thực hiện được và gây lỗi trên ứng dụng."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "33-ảnh-hưởng",
      children: "3.3. Ảnh hưởng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi lỗi này xảy ra, các truy vấn người dùng và giao dịch sẽ bị block, dẫn đến gián đoạn truy cập dữ liệu và tăng độ trễ hệ thống. Trong môi trường MySQL Cluster, việc này có thể làm nghẽn các giao dịch replication, gây ra lag dữ liệu và giảm hiệu suất chung của hệ thống."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "34-giải-pháp-khắc-phục-và-khuyến-nghị",
      children: "3.4. Giải pháp khắc phục và khuyến nghị"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để thoát khỏi tình trạng Metadata Lock Storm trong trường hợp này, cần thực hiện các thao tác sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Bước 1: Tạm dừng các ứng dụng hoặc dịch vụ đang truy cập vào bảng liên quan đến tác vụ DDL → Mục đích: ngăn phát sinh thêm các truy vấn mới giữ metadata lock hoặc chờ lock."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Bước 2: Restart các node slave nhằm giải phóng các thread đang giữ khóa → Việc khởi động lại giúp kết thúc các session hoặc thread “mắc kẹt”, từ đó cho phép quá trình DDL được apply thành công."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Khuyến nghị"
      }), " : Khi thực hiện nâng cấp các cụm cơ sở dữ liệu với các lệnh DDL trên các bảng có QPS (Queries Per Second) cao, nên ngắt kết nối các ứng dụng khỏi đối tượng (bảng, chỉ mục, v.v.) mà câu lệnh DDL tác động. Điều này giúp tránh tình trạng Metadata Lock Storm, bảo đảm quá trình nâng cấp diễn ra suôn sẻ và không gây gián đoạn hệ thống."]
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