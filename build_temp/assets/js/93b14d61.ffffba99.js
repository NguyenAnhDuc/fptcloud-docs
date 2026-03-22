"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[10783],{

/***/ 953292
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_virtual_machine_create_a_security_group_md_93b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-virtual-machine-create-a-security-group-md-93b.json
const site_docs_gpu_virtual_machine_create_a_security_group_md_93b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-virtual-machine/create-a-security-group","title":"Create a Security Group","description":"*","source":"@site/docs/gpu-virtual-machine/create-a-security-group.md","sourceDirName":"gpu-virtual-machine","slug":"/gpu-virtual-machine/create-a-security-group","permalink":"/gpu-virtual-machine/create-a-security-group","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Create a Security Group","title":"Create a Security Group","source":"https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=create-a-security-group","parent":"https://fptcloud.com/en/documents/gpu-virtual-machine-en","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Create a GPU VM","permalink":"/gpu-virtual-machine/create-a-gpu-vm"},"next":{"title":"Create a Snapshot","permalink":"/gpu-virtual-machine/create-a-snapshot"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-virtual-machine/create-a-security-group.md


const frontMatter = {
	sidebar_label: 'Create a Security Group',
	title: 'Create a Security Group',
	source: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=create-a-security-group',
	parent: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Create a Security Group';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 3
}, {
  "value": "The Default Security Group",
  "id": "the-default-security-group",
  "level": 3
}, {
  "value": "Create a Security Group",
  "id": "create-a-security-group-1",
  "level": 3
}, {
  "value": "Manage Rules",
  "id": "manage-rules",
  "level": 3
}, {
  "value": "Adding or Editing Rules",
  "id": "adding-or-editing-rules",
  "level": 3
}, {
  "value": "Attach a GPU VM",
  "id": "attach-a-gpu-vm",
  "level": 3
}, {
  "value": "Detach a GPU VM",
  "id": "detach-a-gpu-vm",
  "level": 3
}, {
  "value": "Delete a Security Group",
  "id": "delete-a-security-group",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h1: "h1",
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
        id: "create-a-security-group",
        children: "Create a Security Group"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group"
      }), " is a network-based, stateful firewall service for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU Virtual Machines"
      }), ". It is provided at no additional cost."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Security Groups control both ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inbound"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "outbound"
      }), " traffic — any traffic not explicitly allowed by a rule is automatically blocked."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Note"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The total number of rules across all Security Groups is limited to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "100"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To request an increase in this limit, please contact ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FPT Smart Cloud support"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-default-security-group",
      children: "The Default Security Group"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A default security group is automatically created when you create a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPC"
      }), " , and it allows all ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "outbound"
      }), " network traffic. The rules for this security group cannot be modified."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following outbound rules are added by default:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Protocol"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Port"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Action"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IP Version"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Destination"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "547"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALLOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPv6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ff02::1:2/128"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALLOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPv4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "169.254.169.254"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALLOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPv4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALLOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPv6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fe80::a9fe:a9fe/128"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "create-a-security-group-1",
      children: "Create a Security Group"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " In the left-side menu, go to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Networking → Security Group"
      }), " , then click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Security Group"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Floating-IP-8.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Enter the required information in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Security Group"
      }), " form:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Floating-IP-9.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name:"
          }), " Enter a name for the Security Group. The system automatically generates a default name for quick setup."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Applied Instances:"
          }), " Select the GPU VM name to associate it with the Security Group."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Tags:"
          }), " Optional, for better resource organization."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure Security Rules:"
          }), " Update ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Inbound"
          }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Outbound"
          }), " rules."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Confirm by clicking ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Security Group"
      }), ". The newly created Security Group will appear in the list."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "manage-rules",
      children: "Manage Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A single Security Group can contain multiple ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inbound"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Outbound"
      }), " rules."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Floating-IP-10.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Control incoming traffic to the instance."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Define which ports on the instance are open and which IP addresses from the internet can access them (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Source"
          }), ")."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Floating-IP-11.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Control outgoing traffic from the instance."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Define which ports on the instance can send traffic out and to which destination addresses."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adding-or-editing-rules",
      children: "Adding or Editing Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " In the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group Management"
      }), " page, select the Security Group you want to manage to open its details page."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " In the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inbound Rules"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Outbound Rules"
      }), " section, click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add New"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Floating-IP-12.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fill in the rule information:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Port:"
          }), " Select the port(s) to open."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Choose ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "All Ports"
              }), " to open all ports."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Choose ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Customize Ports"
              }), " to specify one or a range of ports."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["The system provides quick options for common services like ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "SSH (22)"
              }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "RDP (3389)"
              }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "MySQL (3306)"
              }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "HTTP (80)"
              }), " , and ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "HTTPS (443)"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sources / Destinations:"
          }), " Enter the IP addresses allowed to connect to the specified ports."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "All IPv4:"
              }), " Allow connections from all IPs."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "My IP:"
              }), " Allow only your current public IP."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Custom:"
              }), " Enter one or more specific IP addresses."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.em, {
        children: "For sensitive ports like 22 (SSH) or 3389 (RDP), the system will display a warning if you allow All IPv4:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "“We recommend allowing SSH from trusted IPs only.”"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " Optional notes for the rule."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Rule"
      }), " to continue adding more, or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit Security Group"
      }), " to save your changes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The system will process the configuration and display a result notification."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "⚠️ Recommendation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Add a new inbound rule for SSH access: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Type:"
          }), " SSH; ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Port Range:"
          }), " 22; ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Source:"
          }), " All IPv4"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "To enhance security when enabling SSH access, please allow only trusted IP addresses and avoid using “All IPv4” (0.0.0.0/0)."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "attach-a-gpu-vm",
      children: "Attach a GPU VM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group Management"
      }), " page, select the Security Group you want to attach to a virtual machine."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Floating-IP-13.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply To"
      }), " section, select the virtual machines to attach."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can also specify a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CIDR range"
      }), " to apply the Security Group to a network segment."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply Instances"
      }), " to confirm."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The system will process and display the result."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Floating-IP-14.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detach-a-gpu-vm",
      children: "Detach a GPU VM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group Management"
      }), " page, select the Security Group currently attached to the virtual machine."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Floating-IP-15.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply To"
      }), " section, locate the instance you want to remove."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "X"
      }), " icon next to it, then click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply Instances"
      }), " to confirm."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The system will process and display the result."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Floating-IP-16.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete-a-security-group",
      children: "Delete a Security Group"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you no longer need a Security Group, you can delete it from the VPC."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "⚠️ Note: All rules must be deleted first before the Security Group can be removed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group Management"
      }), " page, select the Security Group you want to delete to open its details page."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Floating-IP-17.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Delete all rules by clicking the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "trash icon"
      }), " next to each rule and confirming deletion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Floating-IP-18.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After all rules have been deleted, return to the Security Group list."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Under the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " column, select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " for the Security Group you want to remove."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A confirmation pop-up will appear."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete Security Group"
      }), " to confirm."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The system will process and display the result."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Floating-IP-19.png",
        alt: "Alt text"
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