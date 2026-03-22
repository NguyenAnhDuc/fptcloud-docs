"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[5947],{

/***/ 558318
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_object_storage_sdk_api_reference_md_c9a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-object-storage-sdk-api-reference-md-c9a.json
const site_docs_object_storage_sdk_api_reference_md_c9a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"object-storage/sdk-api-reference","title":"2. FPT Object Storage","description":"SDK API Reference","source":"@site/docs/object-storage/sdk-api-reference.md","sourceDirName":"object-storage","slug":"/object-storage/sdk-api-reference","permalink":"/object-storage/sdk-api-reference","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Sdk Api Reference","title":"2. FPT Object Storage","source":"https://fptcloud.com/documents/object-storage/?doc=SDK-API-Reference","parent":"https://fptcloud.com/documents/object-storage","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Phan Quyen Su Dung Bucket Cho Cac Subuser","permalink":"/object-storage/phan-quyen-su-dung-bucket-cho-cac-subuser"},"next":{"title":"Su Dung Fpt Object Storage Lam Media Server Luu Tru Va Phan Phoi Media File Cho Websiteweb Application","permalink":"/object-storage/su-dung-fpt-object-storage-lam-media-server-luu-tru-va-phan-phoi-media-file-cho-websiteweb-application"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/object-storage/sdk-api-reference.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Sdk Api Reference',
	title: '2. FPT Object Storage',
	source: 'https://fptcloud.com/documents/object-storage/?doc=SDK-API-Reference',
	parent: 'https://fptcloud.com/documents/object-storage',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Object Storage';

const assets = {

};



const toc = [{
  "value": "Python",
  "id": "python",
  "level": 2
}, {
  "value": "Java",
  "id": "java",
  "level": 2
}, {
  "value": "C-Sharp",
  "id": "c-sharp",
  "level": 2
}, {
  "value": "PHP",
  "id": "php",
  "level": 2
}, {
  "value": "Javascript",
  "id": "javascript",
  "level": 2
}, {
  "value": "NodeJS",
  "id": "nodejs",
  "level": 2
}, {
  "value": "Go",
  "id": "go",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-fpt-object-storage",
        children: "2. FPT Object Storage"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SDK API Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Object Storage là một sản phẩm được phát triển dựa trên tiêu chuẩn AWS S3. Vì vậy bạn có thể sử dụng tất cả các công cụ và thư viện đã được phát triển cho AWS S3 để tương tác với FPT Object Storage. Dưới đây là hướng dẫn cài đặt và config kết nối mẫu của một số ngôn ngữ thông dụng."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "python",
      children: "Python"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Với Python, bạn có thể sử dụng thư viện boto3. Đây là thư viện chính thức của Amazon cho Python."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cài đặt"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "pip install boto3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Khởi tạo kết nối"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import boto3\n# Set up connection information\ns3_endpoint = \"ENDPOINT\"\ns3_access_key_id = \"ACCESS_KEY_ID\"\ns3_secret_access_key = \"SECRET_KEY_ID\"\ns3 = boto3.resource(\n    \"s3\",\n    endpoint_url=s3_endpoint,\n    aws_access_key_id=s3_access_key_id,\n    aws_secret_access_key=s3_secret_access_key,\n)\n\ns3client = boto3.client(\n    \"s3\",\n    endpoint_url=s3_endpoint,\n    aws_access_key_id=s3_access_key_id,\n    aws_secret_access_key=s3_secret_access_key,\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong đó \"ACCESS_KEY_ID\", \"SECRET_KEY_ID\" và \"ENDPOINT\" được lấy từ FPT Unify Portal theo hướng dẫn tại ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/object-storage/?doc=tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal",
        children: "link này"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Một số ví dụ cơ bản"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Create a new bucket\ns3client.create_bucket(Bucket=bucket_name)\n-------------------------------------------\n# Delete the bucket\ns3client.delete_bucket(Bucket=bucket_name)\n-------------------------------------------\n# Create a new object\ns3client.put_object(Bucket=bucket_name, Key=object_key, Body=content)\n-------------------------------------------\n# Read the content of the object\nresponse = s3client.get_object(Bucket=bucket_name, Key=object_key)\nobject_content = response['Body'].read().decode('utf-8')\nprint(object_content)\n-------------------------------------------\n# Delete the object\ns3client.delete_object(Bucket=bucket_name, Key=object_key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tài liệu đầy đủ"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Refer: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://boto3.amazonaws.com/v1/documentation/api/latest/index.html",
        children: "https://boto3.amazonaws.com/v1/documentation/api/latest/index.html"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "java",
      children: "Java"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để sử dụng FPT Object Storage trong Java, bạn có thể sử dụng các thư viện hỗ trợ như AWS SDK for Java, MinIO hoặc s3proxy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dưới đây là một hướng dẫn sử dụng AWS SDK for Java, một trong những thư viện phổ biến nhất để kết nối và thao tác với FPT Object Storage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cài đặt"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "//Tạo 1 project maven\n//Thêm vào file pom.xml dependency sau :\n\n<dependency>\n    <groupId>software.amazon.awssdk</groupId>\n    <artifactId>s3</artifactId>\n    <version>2.17.42</version> <!-- Đảm bảo sử dụng phiên bản mới nhất -->\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Khởi tạo kết nối"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Thay đổi các giá trị này theo thông tin tài khoản S3-compatible của bạn\nString accessKey = \"ACCESS_KEY_ID\";\nString secretKey = \"SECRET_KEY_ID\";\nString endpoint = \"ENDPOINT\";\nString bucketName = \"YOUR_BUCKET_NAME\";\n// Tạo client S3\nS3Client s3Client = S3Client.builder()\n    .endpointOverride(URI.create(endpoint))\n    .credentialsProvider(StaticCredentialsProvider.create(AwsBasicCredentials.create(accessKey, secretKey)))\n    .build();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong đó \"ACCESS_KEY_ID\", \"SECRET_KEY_ID\" và \"ENDPOINT\" được lấy từ FPT Unify Portal theo hướng dẫn tại ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/object-storage/?doc=tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal",
        children: "link này"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Một số ví dụ cơ bản"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import java.net.URI;\nimport software.amazon.awssdk.auth.credentials.AwsBasicCredentials;\nimport software.amazon.awssdk.regions.Region;\nimport software.amazon.awssdk.services.s3.S3Client;\nimport software.amazon.awssdk.services.s3.model.ListObjectsRequest;\nimport software.amazon.awssdk.services.s3.model.ListObjectsResponse;\nimport software.amazon.awssdk.services.s3.model.S3Object;\npublic class S3Example {\n    public static void main(String[] args) {\n        // Thay đổi các giá trị này theo thông tin tài khoản S3-compatible của bạn\n        String accessKey = \"ACCESS_KEY_ID\";\n        String secretKey = \"SECRET_KEY_ID\";\n        String endpoint = \"ENDPOINT\";\n        String bucketName = \"<YOUR_BUCKET_NAME>\";\n        // Tạo client S3\n        S3Client s3Client = S3Client.builder()\n            .endpointOverride(URI.create(endpoint))\n            .credentialsProvider(StaticCredentialsProvider.create(AwsBasicCredentials.create(accessKey, secretKey)))\n            .build();\n        // Thực hiện các thao tác S3 tại đây, ví dụ: list objects\n        ListObjectsRequest listObjectsRequest = ListObjectsRequest.builder()\n            .bucket(bucketName)\n            .build();\n        ListObjectsResponse listObjectsResponse = s3Client.listObjects(listObjectsRequest);\n        for (S3Object content: listObjectsResponse.contents()) {\n            System.out.println(\"Object Key: \" + content.key());\n        }\n        // Đóng client khi đã sử dụng xong\n        s3Client.close();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tài liệu đầy đủ"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Refer: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://docs.aws.amazon.com/sdk-for-java/",
        children: "https://docs.aws.amazon.com/sdk-for-java/"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c-sharp",
      children: "C-Sharp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Object Storage được thiết kế tương thích với Amazon S3, vì vậy bạn có thể sử dụng S3 SDK for C# được cung cấp bới AWS để tương tác với FPT Object Storage. Dưới đây là một số hướng dẫn cơ bản:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cài đặt"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Cài đặt bằng NuGet Package Manager\nInstall-Package AWSSDK -Version 2.3.55.2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Khởi tạo kết nối"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "string accessKey = \"ACCESS_KEY_ID\";\nstring secretKey = \"SECRET_KEY_ID\";\nAmazonS3Config config = new AmazonS3Config();\nconfig.ServiceURL = \"<ENDPOINT>\";\nconfig.ForcePathStyle = true;\nAmazonS3Client client = new AmazonS3Client(\n  accessKey,\n  secretKey,\n  config\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong đó \"ACCESS_KEY_ID\", \"SECRET_KEY_ID\" và \"ENDPOINT\" được lấy từ FPT Unify Portal theo hướng dẫn tại ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/object-storage/?doc=tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal",
        children: "link này"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Một số ví dụ cơ bản"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Cài đặt bằng NuGet Package Manager\n// Install-Package AWSSDK -Version 3.7.0\nusing Amazon.S3;\nusing Amazon.S3.Model;\nclass Program {\n  static void Main() {\n    // Khởi tạo kết nối\n    string accessKey = \"ACCESS_KEY_ID\";\n    string secretKey = \"SECRET_KEY_ID\";\n    AmazonS3Config config = new AmazonS3Config {\n      ServiceURL = \"ENDPOINT\",\n        ForcePathStyle = true\n    };\n    using(AmazonS3Client client = new AmazonS3Client(accessKey, secretKey, config)) {\n      // Một số ví dụ cơ bản\n      // Tạo một bucket mới\n      string bucketName = \"my-unique-bucket-name\";\n      client.PutBucket(new PutBucketRequest {\n        BucketName = bucketName\n      });\n      // Xóa bucket\n      client.DeleteBucket(new DeleteBucketRequest {\n        BucketName = bucketName\n      });\n      // Tạo một object mới\n      string objectKey = \"my-object-key\";\n      string content = \"Hello, world!\";\n      client.PutObject(new PutObjectRequest {\n        BucketName = bucketName,\n          Key = objectKey,\n          ContentBody = content\n      });\n      // Đọc nội dung của object\n      GetObjectResponse response = client.GetObject(new GetObjectRequest {\n        BucketName = bucketName,\n          Key = objectKey\n      });\n      using(var reader = new System.IO.StreamReader(response.ResponseStream)) {\n        string objectContent = reader.ReadToEnd();\n        Console.WriteLine(objectContent);\n      }\n      // Xóa object\n      client.DeleteObject(new DeleteObjectRequest {\n        BucketName = bucketName,\n          Key = objectKey\n      });\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tài liệu đầy đủ"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Refer: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://aws.amazon.com/sdk-for-net/",
        children: "https://aws.amazon.com/sdk-for-net/"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "php",
      children: "PHP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cài đặt"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Có nhiều cách để cài đặt PHP SDK\n// 1. Sử dụng Composer\nphp -d memory_limit=-1 composer.phar require aws/aws-sdk-php\n\n// require composer autoload\n<?php\nrequire '/path/to/vendor/autoload.php';\n?>\n\n// 2. Sử dụng Packaged Phar\n// Download tại http://docs.aws.amazon.com/aws-sdk-php/v3/download/aws.phar và require vào script\n<?php\nrequire '/path/to/aws.phar';\n?>\n\n// 3. Sử dụng gói zip\n// Download tại http://docs.aws.amazon.com/aws-sdk-php/v3/download/aws.zip và require vào script\n<?php\nrequire '/path/to/aws-autoloader.php';\n?>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Khởi tạo kết nối"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<?php\n$accessKey = \"ACCESS_KEY_ID\";\n$secretKey = \"SECRET_KEY_ID\";\n$credentials = new Aws\\Credentials\\Credentials($accessKey, $secretKey);\n\n$options = [\n    \"version\" => \"latest\",\n    \"region\" => \"<REGION>\",\n    \"signature_version\" => \"v4\",\n    \"credentials\" => $credentials,\n    \"endpoint\" => \"<ENDPOINT>\",\n];\n\n$s3Client = new Aws\\S3\\S3Client($options);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong đó \"ACCESS_KEY_ID\", \"SECRET_KEY_ID\" và \"ENDPOINT\" được lấy từ FPT Unify Portal theo hướng dẫn tại ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/object-storage/?doc=tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal",
        children: "link này"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Một số ví dụ cơ bản"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Cài đặt bằng Composer\n// php -d memory_limit=-1 composer.phar require aws/aws-sdk-php\n// Require composer autoload*\n<?php require \"/path/to/vendor/autoload.php\"; ?>\n<?php // Khởi tạo kết nối\n\n$accessKey = \"ACCESS_KEY_ID\";\n$secretKey = \"SECRET_KEY_ID\";\n$credentials = new Aws\\Credentials\\Credentials($accessKey, $secretKey);\n$options = [\n    \"version\" => \"latest\",\n    \"region\" => \"<REGION>\",\n    \"signature_version\" => \"v4\",\n    \"credentials\" => $credentials,\n    \"endpoint\" => '\"ENDPOINT\"',\n];\n$s3Client = new Aws\\S3\\S3Client($options); // Một số ví dụ cơ bản // Tạo một bucket mới\n$bucketName = \"my-unique-bucket-name\";\n$s3Client->createBucket([\"Bucket\" => $bucketName]); // Xóa bucket\n$s3Client->deleteBucket([\"Bucket\" => $bucketName]); // Tạo một object mới\n$objectKey = \"my-object-key\";\n$content = \"Hello, world!\";\n$s3Client->putObject([\n    \"Bucket\" => $bucketName,\n    \"Key\" => $objectKey,\n    \"Body\" => $content,\n]);\n// Đọc nội dung của object\n$result = $s3Client->getObject([\"Bucket\" => $bucketName, \"Key\" => $objectKey]);\n$objectContent = $result[\"Body\"]->getContents();\necho $objectContent; // Xóa object\n$s3Client->deleteObject([\"Bucket\" => $bucketName, \"Key\" => $objectKey]);\n ?>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tài liệu đầy đủ"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Refer: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://docs.aws.amazon.com/sdk-for-php/",
        children: "https://docs.aws.amazon.com/sdk-for-php/"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "javascript",
      children: "Javascript"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cài đặt"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Để cài đặt Javascript SDK\n// 1. Tải bản sdk cho releases tại địa chỉ: https://github.com/aws/aws-sdk-js/releases\n// 2. Giải nén thư mục dist/ của bản sdk\n// 3. Sử dụng file sdk cho trình duyệt băng cách nhúng vào file html sử dụng\n\n// 4. Cấu hình CORS cho bucket theo hướng dẫn : https://fptcloud.com/documents/object-storage/?doc=tutorials-bucket-config\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Khởi tạo kết nối"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "accessKey = \"ACCESS_KEY_ID\";\nsecretKey = \"SECRET_KEY_ID\";\nAWS.config.update({\n    accessKeyId: accessKey,\n    secretAccessKey: secretKey,\n    region: '<REGION>',\n    endpoint: '<ENDPOINT>',\n    apiVersions: {\n        s3: '2006-03-01'\n    }\n})\nconst s3 = new AWS.S3()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong đó \"ACCESS_KEY_ID\", \"SECRET_KEY_ID\" và \"ENDPOINT\" được lấy từ FPT Unify Portal theo hướng dẫn tại ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/object-storage/?doc=tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal",
        children: "link này"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Một số ví dụ cơ bản"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- Cài đặt Javascript SDK -->\n<!-- 1. Tải bản sdk cho releases tại địa chỉ: https://github.com/aws/aws-sdk-js/releases -->\n<!-- 2. Giải nén thư mục dist/ của bản sdk -->\n<!-- 3. Sử dụng file sdk cho trình duyệt bằng cách nhúng vào file HTML sử dụng -->\n<\nscript >\n    // Khởi tạo kết nối\n    var accessKey = \"<ACCESS_KEY_ID>\";\nvar secretKey = \"<SECRET_KEY_ID>\";\n\nAWS.config.update({\n    accessKeyId: accessKey,\n    secretAccessKey: secretKey,\n    region: '<REGION>',\n    endpoint: '<ENDPOINT>',\n    apiVersions: {\n        s3: '2006-03-01'\n    }\n});\n\nvar s3 = new AWS.S3();\n\n// Một số ví dụ cơ bản\n\n// Tạo một bucket mới\nvar bucketName = \"my-unique-bucket-name\";\ns3.createBucket({\n    Bucket: bucketName\n}, function(err, data) {\n    if (err) console.log(err, err.stack);\n    else console.log(\"Bucket created:\", data);\n});\n\n// Xóa bucket\ns3.deleteBucket({\n    Bucket: bucketName\n}, function(err, data) {\n    if (err) console.log(err, err.stack);\n    else console.log(\"Bucket deleted:\", data);\n});\n\n// Tạo một object mới\nvar objectKey = \"my-object-key\";\nvar content = \"Hello, world!\";\ns3.putObject({\n    Bucket: bucketName,\n    Key: objectKey,\n    Body: content\n}, function(err, data) {\n    if (err) console.log(err, err.stack);\n    else console.log(\"Object created:\", data);\n});\n\n// Đọc nội dung của object\ns3.getObject({\n    Bucket: bucketName,\n    Key: objectKey\n}, function(err, data) {\n    if (err) console.log(err, err.stack);\n    else console.log(\"Object content:\", data.Body.toString('utf-8'));\n});\n\n// Xóa object\ns3.deleteObject({\n    Bucket: bucketName,\n    Key: objectKey\n}, function(err, data) {\n    if (err) console.log(err, err.stack);\n    else console.log(\"Object deleted:\", data);\n}); <\n/script>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tài liệu đầy đủ"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Refer: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://docs.aws.amazon.com/sdk-for-javascript/",
        children: "https://docs.aws.amazon.com/sdk-for-javascript/"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nodejs",
      children: "NodeJS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cài đặt"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install aws-sdk@2.x\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Khởi tạo kết nối"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const AWS = require('aws-sdk')\nAWS.config.update({\n    accessKeyId: `\"ACCESS_KEY_ID\" `,\n    secretAccessKey: `\"SECRET_KEY_ID\"`,\n    region: '<REGION>', \n    endpoint: '\"ENDPOINT\"',\n    apiVersions: {\n      s3: '2006-03-01'\n    },\n    logger: process.stdout\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong đó \"ACCESS_KEY_ID\", \"SECRET_KEY_ID\" và \"ENDPOINT\" được lấy từ FPT Unify Portal theo hướng dẫn tại ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/object-storage/?doc=tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal",
        children: "link này"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Một số ví dụ cơ bản"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Cài đặt\n// npm install aws-sdk@2.x\n\nconst AWS = require('aws-sdk');\n\n// Khởi tạo kết nối\nAWS.config.update({\n    accessKeyId: '\"ACCESS_KEY_ID\"',\n    secretAccessKey: '\"SECRET_KEY_ID\"',\n    region: '<REGION>',\n    endpoint: '\"ENDPOINT\"',\n    apiVersions: {\n        s3: '2006-03-01',\n    },\n    logger: process.stdout,\n});\n\nconst s3 = new AWS.S3();\n\n// Một số ví dụ cơ bản\n\n// Tạo một bucket mới\nconst bucketName = 'my-unique-bucket-name';\ns3.createBucket({ Bucket: bucketName }, (err, data) => {\n    if (err) console.error(err, err.stack);\n    else console.log('Bucket created:', data);\n});\n\n// Xóa bucket\ns3.deleteBucket({ Bucket: bucketName }, (err, data) => {\n    if (err) console.error(err, err.stack);\n    else console.log('Bucket deleted:', data);\n});\n\n// Tạo một object mới\nconst objectKey = 'my-object-key';\nconst content = 'Hello, world!';\ns3.putObject({ Bucket: bucketName, Key: objectKey, Body: content }, (err, data) => {\n    if (err) console.error(err, err.stack);\n    else console.log('Object created:', data);\n});\n\n// Đọc nội dung của object\ns3.getObject({ Bucket: bucketName, Key: objectKey }, (err, data) => {\n    if (err) console.error(err, err.stack);\n    else console.log('Object content:', data.Body.toString('utf-8'));\n});\n\n// Xóa object\ns3.deleteObject({ Bucket: bucketName, Key: objectKey }, (err, data) => {\n    if (err) console.error(err, err.stack);\n    else console.log('Object deleted:', data);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tài liệu đầy đủ"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Refer: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/aws/aws-sdk-js/",
        children: "https://github.com/aws/aws-sdk-js/"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "go",
      children: "Go"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cài đặt"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "go get \"github.com/aws/aws-sdk-go/aws\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Khởi tạo kết nối"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "s3Config := &aws.Config{\n    Credentials: credentials.NewStaticCredentials(\"ACCESS_KEY_ID\", \"SECRET_KEY_ID\", \"\"),\n    Endpoint:    aws.String(\"ENDPOINT\"),\n    Region:      aws.String(\"REGION\"),\n}\nnewSession := session.New(s3Config)\nClient = s3.New(newSession)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong đó \"ACCESS_KEY_ID\", \"SECRET_KEY_ID\" và \"ENDPOINT\" được lấy từ FPT Unify Portal theo hướng dẫn tại ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/object-storage/?doc=tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal",
        children: "link này"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Một số ví dụ cơ bản"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "package main\n\nimport (\n    \"github.com/aws/aws-sdk-go/aws\"\n    \"github.com/aws/aws-sdk-go/aws/credentials\"\n    \"github.com/aws/aws-sdk-go/aws/session\"\n    \"github.com/aws/aws-sdk-go/service/s3\"\n    \"log\"\n)\n\nvar Client *s3.S3\n\nfunc main() {\n    // Khởi tạo kết nối\n    s3Config := &aws.Config{\n        Credentials: credentials.NewStaticCredentials(\"ACCESS_KEY_ID\", \"SECRET_KEY_ID\", \"\"),\n        Endpoint:    aws.String(\"ENDPOINT\"),\n        Region:      aws.String(\"REGION\"),\n    }\n    newSession := session.New(s3Config)\n    Client = s3.New(newSession)\n\n    // Một số ví dụ cơ bản\n\n    // Tạo một bucket mới\n    bucketName := \"my-unique-bucket-name\"\n    _, err := Client.CreateBucket(&s3.CreateBucketInput{\n        Bucket: aws.String(bucketName),\n    })\n    if err != nil {\n        log.Fatal(err)\n    }\n    log.Println(\"Bucket created:\", bucketName)\n\n    // Xóa bucket\n    _, err = Client.DeleteBucket(&s3.DeleteBucketInput{\n        Bucket: aws.String(bucketName),\n    })\n    if err != nil {\n        log.Fatal(err)\n    }\n    log.Println(\"Bucket deleted:\", bucketName)\n\n    // Tạo một object mới\n    objectKey := \"my-object-key\"\n    content := \"Hello, world!\"\n    _, err = Client.PutObject(&s3.PutObjectInput{\n        Bucket: aws.String(bucketName),\n        Key:    aws.String(objectKey),\n        Body:   aws.String(content),\n    })\n    if err != nil {\n        log.Fatal(err)\n    }\n    log.Println(\"Object created:\", objectKey)\n\n    // Đọc nội dung của object\n    result, err := Client.GetObject(&s3.GetObjectInput{\n        Bucket: aws.String(bucketName),\n        Key:    aws.String(objectKey),\n    })\n    if err != nil {\n        log.Fatal(err)\n    }\n    log.Println(\"Object content:\", result.Body)\n\n    // Xóa object\n    _, err = Client.DeleteObject(&s3.DeleteObjectInput{\n        Bucket: aws.String(bucketName),\n        Key:    aws.String(objectKey),\n    })\n    if err != nil {\n        log.Fatal(err)\n    }\n    log.Println(\"Object deleted:\", objectKey)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tài liệu đầy đủ"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Refer: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://docs.aws.amazon.com/sdk-for-go/",
        children: "https://docs.aws.amazon.com/sdk-for-go/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-tich-hop-fpt-object-storage-voi-cac-s3-client",
        children: " Previous Tích hợp FPT Object Storage với các S3-Client "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./migrate-bucket-data",
        children: " Next Migrate bucket data "
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