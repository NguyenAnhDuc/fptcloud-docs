"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[84355],{

/***/ 692572
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_iac_old_overview_md_a0a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-iac-old-overview-md-a0a.json
const site_docs_iac_old_overview_md_a0a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"iac-old/overview","title":"2. IaC old","description":"Giới thiệu","source":"@site/docs/iac-old/overview.md","sourceDirName":"iac-old","slug":"/iac-old/overview","permalink":"/iac-old/overview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"I. Initial setup & service authentication","title":"2. IaC old","source":"https://fptcloud.com/documents/iac-old/?doc=overview","parent":"https://fptcloud.com/documents/iac-old","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Overviews","permalink":"/iac-old/"},"next":{"title":"Analytics","permalink":"/fpt-api-management/analytics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/iac-old/overview.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'I. Initial setup & service authentication',
	title: '2. IaC old',
	source: 'https://fptcloud.com/documents/iac-old/?doc=overview',
	parent: 'https://fptcloud.com/documents/iac-old',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. IaC old';

const assets = {

};



const toc = [{
  "value": "I. Initial setup &amp; service authentication",
  "id": "i-initial-setup--service-authentication",
  "level": 2
}, {
  "value": "II. Core components",
  "id": "ii-core-components",
  "level": 2
}, {
  "value": "A. Networking",
  "id": "a-networking",
  "level": 3
}, {
  "value": "1. Router",
  "id": "1-router",
  "level": 4
}, {
  "value": "2. Network",
  "id": "2-network",
  "level": 4
}, {
  "value": "3. Subnet",
  "id": "3-subnet",
  "level": 4
}, {
  "value": "4. Port",
  "id": "4-port",
  "level": 4
}, {
  "value": "5. FloatingIP",
  "id": "5-floatingip",
  "level": 4
}, {
  "value": "6. Security Group",
  "id": "6-security-group",
  "level": 4
}, {
  "value": "7. Security Group Rule",
  "id": "7-security-group-rule",
  "level": 4
}, {
  "value": "B. Storage",
  "id": "b-storage",
  "level": 3
}, {
  "value": "1. Volume",
  "id": "1-volume",
  "level": 4
}, {
  "value": "C. Compute",
  "id": "c-compute",
  "level": 3
}, {
  "value": "1. Instance",
  "id": "1-instance",
  "level": 4
}, {
  "value": "III. Example",
  "id": "iii-example",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    "domain-name": "domain-name",
    em: "em",
    fptcloud: "fptcloud",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    password: "password",
    "password-vm": "password-vm",
    pre: "pre",
    "project-uuid": "project-uuid",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    "user-name": "user-name",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, _component2 = _components["domain-name"], _component3 = _components["password-vm"], _component1 = _components["project-uuid"], _component0 = _components["user-name"];
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-iac-old",
        children: "2. IaC old"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Giới thiệu"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "i-initial-setup--service-authentication",
      children: "I. Initial setup & service authentication"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "terraform {\nrequired_version = \">= 0.14.0\"\n  required_providers {\n    openstack = {\n      source  = \"terraform-provider-openstack/openstack\"\n      version = \"~> 1.53.0\"\n    }\n  }\n}\n\n# Configure the OpenStack Provider\nprovider \"openstack\" {\n  user_name   = \"usera\"\n  tenant_name   = \"project_name\"\n  password    = \"pwd\"\n  auth_url    = <fptcloud identity endpoint>\n  region      = \"RegionOne\"\n}\n\n# Create infratructures\nresource \"openstack_compute_instance_v2\" \"test-server\" {\n  # ...\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Environment Variable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "auth_url"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL of Identity Service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OS_AUTH_URL"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "region"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Region of FPT cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OS_REGION_NAME"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "user_name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Username provided by FPT Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OS_USERNAME"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "user_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OS_USER_ID"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "user_domain_name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OS_USER_DOMAIN_NAME"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "user_domain_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OS_USER_DOMAIN_ID"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tenant_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OS_PROJECT_ID"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tenant_name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPC name provided by FPTCloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OS_PROJECT_NAME"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "project_domain_name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OS_PROJECT_DOMAIN_NAME"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "project_domain_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OS_PROJECT_DOMAIN_ID"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "domain_name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OS_DOMAIN_NAME"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "domain_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OS_DOMAIN_ID"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "insecure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OS_INSECURE"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "interface"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OS_INTERFACE"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Other optional configurations can be found at ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs#configuration-reference",
          children: "Configuration Reference"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ii-core-components",
      children: "II. Core components"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "a-networking",
      children: "A. Networking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "1-router",
      children: ["1. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/networking_router_v2",
        children: "Router"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   resource \"openstack_networking_router_v2\" \"router_1\" {\n        name                = \"my_router\"\n        admin_state_up      = true\n        external_network_id = \"f67f0d72-0ddf-11e4-9d95-e1f29f417e2f\"\n    }\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "region"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Region of vRouter"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Name of vRouter"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "external_network_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID of external gateway, a router with an external gateway is required if any compute instances or load balancers will be using floating IPs."
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "2-network",
      children: ["2. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/networking_network_v2",
        children: "Network"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    resource \"openstack_networking_network_v2\" \"network_1\" {\n      name           = \"network_1\"\n      admin_state_up = \"true\"\n    }\n\n    resource \"openstack_networking_subnet_v2\" \"subnet_1\" {\n      name       = \"subnet_1\"\n      network_id = openstack_networking_network_v2.network_1.id\n      cidr       = \"192.168.199.0/24\"\n      ip_version = 4\n    }\n\n    resource \"openstack_compute_secgroup_v2\" \"secgroup_1\" {\n      name        = \"secgroup_1\"\n      description = \"a security group\"\n\n      rule {\n        from_port   = 22\n        to_port     = 22\n        ip_protocol = \"tcp\"\n        cidr        = \"0.0.0.0/0\"\n      }\n    }\n\n    resource \"openstack_networking_port_v2\" \"port_1\" {\n      name               = \"port_1\"\n      network_id         = openstack_networking_network_v2.network_1.id\n      admin_state_up     = \"true\"\n      security_group_ids = [openstack_compute_secgroup_v2.secgroup_1.id]\n\n      fixed_ip {\n        subnet_id  = openstack_networking_subnet_v2.subnet_1.id\n        ip_address = \"192.168.199.10\"\n      }\n    }\n\n    resource \"openstack_compute_instance_v2\" \"instance_1\" {\n      name            = \"instance_1\"\n      security_groups = [openstack_compute_secgroup_v2.secgroup_1.name]\n\n      network {\n        port = openstack_networking_port_v2.port_1.id\n      }\n    }\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Name of network."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "shared"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specifies whether the network resource can be accessed by any tenant or not."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "3-subnet",
      children: ["3. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/networking_subnet_v2",
        children: "Subnet"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   resource \"openstack_networking_network_v2\" \"network_1\" {\n      name           = \"tf_test_network\"\n      admin_state_up = \"true\"\n    }\n\n    resource \"openstack_networking_subnet_v2\" \"subnet_1\" {\n      network_id = openstack_networking_network_v2.network_1.id\n      cidr       = \"192.168.199.0/24\"\n    }\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "network_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID of network from previous step."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cidr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CIDR representing IP range for this subnet, based on IP version."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ip_version"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP version of subnet."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "enable_dhcp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable DHCP for subnet."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "allocation_pools"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP pools of DHCP ."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "list"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gateway_ip"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default IP Gateway."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "host_routes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List of default static host routes."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "list"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dns_nameservers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List of DNS server of subnet."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "list"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "prefixlen"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix length of subnet."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "4-port",
      children: ["4. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/networking_port_v2",
        children: "Port"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    resource \"openstack_networking_network_v2\" \"network_1\" {\n      name           = \"network_1\"\n      admin_state_up = \"true\"\n    }\n\n    resource \"openstack_networking_port_v2\" \"port_1\" {\n      name           = \"port_1\"\n      network_id     = openstack_networking_network_v2.network_1.id\n      admin_state_up = \"true\"\n    }\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "network_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID of network from previous step."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mac_address"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fix MAC address for port."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port name."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fixed_ips"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed IP for port."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "list"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "allowed_address_pairs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An IP/MAC Address pair of additional IP addresses that can be active on this port."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "list"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "security_group_ids"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A list of security group IDs to apply to the port."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "list"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "5-floatingip",
      children: ["5. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/networking_floatingip_v2",
        children: "FloatingIP"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    resource \"openstack_networking_floatingip_v2\" \"floatip_1\" {\n      pool = \"provider-net4\"\n    }\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The name of the pool from which to obtain the floating IP. Changing this creates a new floating IP. E.g. provider-net4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "port_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID of an existing port with at least one IP address to associate with this floating IP."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fixed_ip"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed IP of the port to associate with this floating IP."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "description"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-readable description for the floating IP."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "6-security-group",
      children: ["6. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/networking_secgroup_v2",
        children: "Security Group"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    resource \"openstack_networking_secgroup_v2\" \"secgroup_1\" {\n      name        = \"secgroup_1\"\n      description = \"My neutron security group\"\n    }\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A unique name for the security group."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "description"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-readable description for the security group."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tenant_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The owner of the security group. Required if admin wants to create a port for another tenant."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "7-security-group-rule",
      children: ["7. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/networking_secgroup_rule_v2",
        children: "Security Group Rule"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    resource \"openstack_networking_secgroup_v2\" \"secgroup_1\" {\n      name        = \"secgroup_1\"\n      description = \"My neutron security group\"\n    }\n\n    resource \"openstack_networking_secgroup_rule_v2\" \"secgroup_rule_1\" {\n      direction         = \"ingress\"\n      ethertype         = \"IPv4\"\n      protocol          = \"tcp\"\n      port_range_min    = 22\n      port_range_max    = 22\n      remote_ip_prefix  = \"0.0.0.0/0\"\n      security_group_id = openstack_networking_secgroup_v2.secgroup_1.id\n    }\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "security_group_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The security group id the rule should belong to, the value needs to be an Openstack ID of a security group in the same tenant."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "direction"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ingress"
            }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "egress"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ethertype"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Layer 3 protocol type (", (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPv4"
            }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPv6"
            }), ")."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "protocol"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layer 4 protocol type (tcp, udp, icmp, ...)."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "remote_ip_prefix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "remote CIDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "remote_group_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The remote group id, the value needs to be an Openstack ID of a security group in the same tenant."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "port_range_min"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "port_range_max"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "description"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A description of the rule."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-storage",
      children: "B. Storage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "1-volume",
      children: ["1. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/blockstorage_volume_v3",
        children: "Volume"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    resource \"openstack_blockstorage_volume_v3\" \"volume_1\" {\n      region      = \"RegionOne\"\n      name        = \"volume_1\"\n      description = \"first test volume\"\n      volume_type = \"PremiumSSD-2000_floor5\"\n      availability_zone = \"floor5\"\n      size        = 40\n    }\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The size of the volume to create (in gigabytes)."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A unique name for the volume."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "description"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A description of the volume."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "availability_zone"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The availability zone for the volume."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "image_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The image ID from which to create the volume."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "volume_type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The type of volume to create."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-compute",
      children: "C. Compute"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "1-instance",
      children: ["1. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/compute_instance_v2",
        children: "Instance"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "resource \"openstack_blockstorage_volume_v3\" \"myvol\" {\n  name = \"myvol\"\n  size = 40\n  volume_type = \"PremiumSSD-2000_floor5\"\n  availability_zone = \"floor5\"\n}\n\nresource \"openstack_compute_instance_v2\" \"myinstance\" {\n  name            = \"myinstance\"\n  image_name        = \"UBUNTU-20.04-10072023\"\n  flavor_name       = \"Small.2\"\n  key_pair        = \"my_key_pair_name\"\n  security_groups = [\"default\"]\n  availability_zone = \"floor5\"\n\n  network {\n    name = \"my_network\"\n  }\n}\n\nresource \"openstack_compute_volume_attach_v2\" \"attached\" {\n  instance_id = openstack_compute_instance_v2.myinstance.id\n  volume_id   = openstack_blockstorage_volume_v3.myvol.id\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Parameters | Description | Type | Default | Required |", (0,jsx_runtime.jsx)(_components.br, {}), "\n---|---|---|---|---|---", (0,jsx_runtime.jsx)(_components.br, {}), "\nname | A unique name for the resource. | string |  | Yes |", (0,jsx_runtime.jsx)(_components.br, {}), "\nflavor_name | The name of the desired flavor for the server. | string |  | Yes |", (0,jsx_runtime.jsx)(_components.br, {}), "\nimage_name | The name of the desired image for the server. | string |  | Yes |", (0,jsx_runtime.jsx)(_components.br, {}), "\nkey_pair | The name of a key pair to put on the server. | string |  | No |", (0,jsx_runtime.jsx)(_components.br, {}), "\nuser_data | cloud-init script, the user data to provide when launching the instance. | string |  | No |", (0,jsx_runtime.jsx)(_components.br, {}), "\nmetadata |  | map |  | No |", (0,jsx_runtime.jsx)(_components.br, {}), "\nsecurity_groups | An array of one or more security group names to associate with the server. | list |  | No |", (0,jsx_runtime.jsx)(_components.br, {}), "\nnetwork | An array of one or more networks to attach to the instance. | string |  | No |", (0,jsx_runtime.jsx)(_components.br, {}), "\nblock_device | Configuration of block devices. | list |  | No |", (0,jsx_runtime.jsx)(_components.br, {}), "\navailability_zone |  The availability zone in which to create the server. | string |  | No |", (0,jsx_runtime.jsx)(_components.br, {}), "\n... |  |  |  |  |"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "iii-example",
      children: "III. Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This section focus on show up the actual use case of FPT Cloud Iac by using terraform to deploy new Web Application on FPT Cloud, the step described as the following:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Setting up terraform"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Create new project directory include ", (0,jsx_runtime.jsx)(_components.code, {
            children: "main.tf"
          }), " file with the following content:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "terraform {\nrequired_version = \">= 0.14.0\"\nrequired_providers {\nopenstack = {\nsource  = \"terraform-provider-openstack/openstack\"\nversion = \"~> 1.53.0\"\n}\n}\n}"
        }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
          id: "configure-the-openstack-provider",
          children: "Configure the OpenStack Provider"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["provider \"openstack\" {\nuser_name   = ", (0,jsx_runtime.jsxs)(_component0, {
            children: ["\ntenant_id = ", (0,jsx_runtime.jsxs)(_component1, {
              children: ["\nuser_domain_name = ", (0,jsx_runtime.jsxs)(_component2, {
                children: ["\npassword    = ", (0,jsx_runtime.jsxs)(_components.password, {
                  children: ["\nauth_url    = ", (0,jsx_runtime.jsx)(_components.fptcloud, {
                    identity: "",
                    endpoint: "",
                    children: "\nregion      = \"RegionOne\"\n}"
                  })]
                })]
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
          id: "network",
          children: "Network"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["data \"openstack_networking_network_v2\" \"provider_net\" {", (0,jsx_runtime.jsx)(_components.br, {}), "\nname = \"provider-net5\"", (0,jsx_runtime.jsx)(_components.br, {}), "\n}"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["resource \"openstack_networking_router_v2\" \"webapp_router\" {", (0,jsx_runtime.jsx)(_components.br, {}), "\nname                = \"webapp_router\"", (0,jsx_runtime.jsx)(_components.br, {}), "\nadmin_state_up      = true", (0,jsx_runtime.jsx)(_components.br, {}), "\nexternal_network_id = data.openstack_networking_network_v2.provider_net.id", (0,jsx_runtime.jsx)(_components.br, {}), "\n}"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["resource \"openstack_networking_network_v2\" \"webapp_network\" {", (0,jsx_runtime.jsx)(_components.br, {}), "\nname           = \"webapp_network\"", (0,jsx_runtime.jsx)(_components.br, {}), "\nadmin_state_up = true", (0,jsx_runtime.jsx)(_components.br, {}), "\n}"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["resource \"openstack_networking_subnet_v2\" \"webapp_subnet\" {", (0,jsx_runtime.jsx)(_components.br, {}), "\nname            = \"webapp_subnet\"", (0,jsx_runtime.jsx)(_components.br, {}), "\nnetwork_id      = openstack_networking_network_v2.webapp_network.id", (0,jsx_runtime.jsx)(_components.br, {}), "\ncidr            = \"10.0.0.0/24\"", (0,jsx_runtime.jsx)(_components.br, {}), "\nip_version      = 4", (0,jsx_runtime.jsx)(_components.br, {}), "\ndns_nameservers = [\"1.1.1.1\"]", (0,jsx_runtime.jsx)(_components.br, {}), "\n}"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["resource \"openstack_networking_router_interface_v2\" \"webapp_router_interface\" {", (0,jsx_runtime.jsx)(_components.br, {}), "\nrouter_id = openstack_networking_router_v2.webapp_router.id", (0,jsx_runtime.jsx)(_components.br, {}), "\nsubnet_id = openstack_networking_subnet_v2.webapp_subnet.id", (0,jsx_runtime.jsx)(_components.br, {}), "\n}"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["resource \"openstack_compute_secgroup_v2\" \"webapp_secgroup\" {", (0,jsx_runtime.jsx)(_components.br, {}), "\nname        = \"webapp_secgroup\"", (0,jsx_runtime.jsx)(_components.br, {}), "\ndescription = \"Allow web traffic\"", (0,jsx_runtime.jsx)(_components.br, {}), "\nrule {", (0,jsx_runtime.jsx)(_components.br, {}), "\nfrom_port   = 80", (0,jsx_runtime.jsx)(_components.br, {}), "\nto_port     = 80", (0,jsx_runtime.jsx)(_components.br, {}), "\nip_protocol = \"tcp\"", (0,jsx_runtime.jsx)(_components.br, {}), "\ncidr        = \"0.0.0.0/0\"", (0,jsx_runtime.jsx)(_components.br, {}), "\n}", (0,jsx_runtime.jsx)(_components.br, {}), "\nrule {", (0,jsx_runtime.jsx)(_components.br, {}), "\nfrom_port   = 22", (0,jsx_runtime.jsx)(_components.br, {}), "\nto_port     = 22", (0,jsx_runtime.jsx)(_components.br, {}), "\nip_protocol = \"tcp\"", (0,jsx_runtime.jsx)(_components.br, {}), "\ncidr        = \"0.0.0.0/0\"", (0,jsx_runtime.jsx)(_components.br, {}), "\n}", (0,jsx_runtime.jsx)(_components.br, {}), "\n}"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["resource \"openstack_compute_floatingip_v2\" \"webapp_floatingip\" {", (0,jsx_runtime.jsx)(_components.br, {}), "\npool = \"provider-net5\"", (0,jsx_runtime.jsx)(_components.br, {}), "\n}"]
        }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
          id: "volume",
          children: "Volume"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["data \"openstack_images_image_v2\" \"ubuntu_image\" {", (0,jsx_runtime.jsx)(_components.br, {}), "\nname = \"UBUNTU-22.04-10072023\"", (0,jsx_runtime.jsx)(_components.br, {}), "\n}"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["resource \"openstack_blockstorage_volume_v3\" \"webapp_volume\" {", (0,jsx_runtime.jsx)(_components.br, {}), "\nname        = \"webapp_volume\"", (0,jsx_runtime.jsx)(_components.br, {}), "\ndescription = \"Volume for webapp\"", (0,jsx_runtime.jsx)(_components.br, {}), "\nsize        = 40", (0,jsx_runtime.jsx)(_components.br, {}), "\nvolume_type        = \"Premium-SSD_floor5\"", (0,jsx_runtime.jsx)(_components.br, {}), "\nimage_id    = data.openstack_images_image_v2.ubuntu_image.id", (0,jsx_runtime.jsx)(_components.br, {}), "\n}"]
        }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
          id: "instance",
          children: "Instance"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["data \"openstack_compute_keypair_v2\" \"webapp_key\" {", (0,jsx_runtime.jsx)(_components.br, {}), "\nname = \"webapp_key\"", (0,jsx_runtime.jsx)(_components.br, {}), "\n}"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["data \"openstack_compute_flavor_v2\" \"s2_medium_1\" {", (0,jsx_runtime.jsx)(_components.br, {}), "\nname = \"2C2G\"", (0,jsx_runtime.jsx)(_components.br, {}), "\n}"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["/* Userdata", (0,jsx_runtime.jsx)(_components.br, {}), "\n#cloud-config", (0,jsx_runtime.jsx)(_components.br, {}), "\npackage_update: true", (0,jsx_runtime.jsx)(_components.br, {}), "\nchpasswd:", (0,jsx_runtime.jsx)(_components.br, {}), "\nlist: |    root:", (0,jsx_runtime.jsx)(_component3, {
            children: "\npackages:"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "nginx  - gitruncmd:"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "systemctl enable nginx"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "systemctl start nginx"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["git clone ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/cloudacademy/static-website-example.git",
              children: "https://github.com/cloudacademy/static-website-example.git"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "cp -r ./static-website-example/* /var/www/html/"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "rm -r ./static-website-example*/"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["resource \"openstack_compute_instance_v2\" \"webapp_instance\" {", (0,jsx_runtime.jsx)(_components.br, {}), "\nname            = \"webapp_instance\"", (0,jsx_runtime.jsx)(_components.br, {}), "\nimage_id        = data.openstack_images_image_v2.ubuntu_image.id", (0,jsx_runtime.jsx)(_components.br, {}), "\nflavor_id       = data.openstack_compute_flavor_v2.s2_medium_1.id", (0,jsx_runtime.jsx)(_components.br, {}), "\nkey_pair        = data.openstack_compute_keypair_v2.webapp_key.name", (0,jsx_runtime.jsx)(_components.br, {}), "\nsecurity_groups = [openstack_compute_secgroup_v2.webapp_secgroup.name]", (0,jsx_runtime.jsx)(_components.br, {}), "\navailability_zone = \"floor5\""]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["user_data = \"#cloud-config\\npackage_update: true\\nchpasswd:\\n  list: |\\n    root:Welcome**", (0,jsx_runtime.jsxs)(_components.em, {
            children: ["123\\npackages:\\n  - nginx\\n  - git\\nruncmd:\\n  - systemctl enable nginx\\n  - systemctl start nginx\\n  - git clone ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/cloudacademy/static-website-example.git%5Cn",
              children: "https://github.com/cloudacademy/static-website-example.git\\n"
            }), "  - cp -r ./static-website-example/"]
          }), " /var/www/html/\\n  - rm -r ./static-website-example\"", (0,jsx_runtime.jsx)(_components.br, {}), "\nnetwork {", (0,jsx_runtime.jsx)(_components.br, {}), "\nname = openstack_networking_network_v2.webapp_network.name", (0,jsx_runtime.jsx)(_components.br, {}), "\n}", (0,jsx_runtime.jsx)(_components.br, {}), "\nblock_device {", (0,jsx_runtime.jsx)(_components.br, {}), "\nuuid                  = openstack_blockstorage_volume_v3.webapp_volume.id", (0,jsx_runtime.jsx)(_components.br, {}), "\nsource_type           = \"volume\"", (0,jsx_runtime.jsx)(_components.br, {}), "\ndestination_type      = \"volume\"", (0,jsx_runtime.jsx)(_components.br, {}), "\nboot_index            = 0", (0,jsx_runtime.jsx)(_components.br, {}), "\ndelete_on_termination = true", (0,jsx_runtime.jsx)(_components.br, {}), "\n}", (0,jsx_runtime.jsx)(_components.br, {}), "\n}"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["resource \"openstack_compute_floatingip_associate_v2\" \"webapp_floatingip_associate\" {", (0,jsx_runtime.jsx)(_components.br, {}), "\nfloating_ip = openstack_compute_floatingip_v2.webapp_floatingip.address", (0,jsx_runtime.jsx)(_components.br, {}), "\ninstance_id = openstack_compute_instance_v2.webapp_instance.id", (0,jsx_runtime.jsx)(_components.br, {}), "\n}"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["output \"webapp_public_ip\" {", (0,jsx_runtime.jsx)(_components.br, {}), "\nvalue       = openstack_compute_floatingip_v2.webapp_floatingip.address", (0,jsx_runtime.jsx)(_components.br, {}), "\ndescription = \"Web Application URL\"", (0,jsx_runtime.jsx)(_components.br, {}), "\n}"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["output \"webapp_private_ip\" {", (0,jsx_runtime.jsx)(_components.br, {}), "\nvalue       = openstack_compute_instance_v2.webapp_instance.access_ip_v4", (0,jsx_runtime.jsx)(_components.br, {}), "\ndescription = \"Web Application Private IP\"", (0,jsx_runtime.jsx)(_components.br, {}), "\n}"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Deploying application"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "terraform init\nterraform apply --auto-approve\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The result of terraform CLI: ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "file",
            src: (__webpack_require__(699004)/* ["default"] */ .A) + "",
            width: "561",
            height: "113"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Acces the floating IP and enjoy the result of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "webapp"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "file",
            src: (__webpack_require__(765546)/* ["default"] */ .A) + "",
            width: "631",
            height: "300"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cleaning-up the whole resources created by IaC stack:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "terraform destroy --auto-approve\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs",
          children: "Terraform OpenStack Provider"
        })
      }), "\n"]
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

/***/ 699004
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3c9f7ced88ee-image-1702440353764-970aa48c96effd7f659b8c3859a6092c.png");

/***/ },

/***/ 765546
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4b51f2bf9b70-image-1702440375843-05dfa7fda484144b1d4b3d007c7af5b3.png");

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