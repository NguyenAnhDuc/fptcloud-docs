---
sidebar_class_name: hidden
sidebar_label: "Hướng dẫn nhanh (Quick Starts)"
title: "2. FPT API Management"
source: "https://fptcloud.com/documents/fpt-api-management/?doc=huong-dan-nhanh-quick-starts"
parent: "https://fptcloud.com/documents/fpt-api-management"
lang: vi
converted: "2026-03-19"
---

# 2. FPT API Management


Hướng dẫn nhanh (Quick Starts)


* * *

### 1\. Đăng ký dịch vụ API MANAGEMENT

**Đối tượng sử dụng:** API Provider.

Để đăng ký mới tài khoản **API Provider** , bạn cần được cấp quota dịch vụ. Hãy liên hệ với chúng tôi nếu có nhu cầu sử dụng.

**Bước 1:** Trên menu của **FPT Portal** chọn **Api Management** > **Create.**

![Userguide FPT API Management 1](/img/docs/e900f9a0e95a-Userguide-FPT-API-Management-1-1024x538.png)

**Bước 2:** Nhập thông tin **Username** và chọn **Plan** và **Pricing**.

![Alt text](/img/docs/af7277d5097c-Thiet-ke-chua-co-ten-1.png)

Bạn có thể tham khảo cấu hình cụ thể của từng plan theo bảng dưới đây:

|  |  |  |   
---|---|---|---|---  
**Plan** | **Mô tả** | **Số lượng site** | **Số lượng API** | **Số lượng Product**  
**Pilot** | User dùng site và product mặc định và không có chức năng tạo thêm site và product. | 1 | 2 | 1  
**Normal** | User dùng site và product mặc định và không có chức năng tạo thêm site. | 1 | Không giới hạn | 1  
**Enterprise** | User có thể tự tạo site và product. | Không giới hạn | Không giới hạn | Không giới hạn  
|  |  |   
---|---|---|---  
**Chức năng** | **Standard** | **Advanced** | **Premium**  
**Transactions** | Max: 250/s | Max: 1000/s | Max: 5000/s  
**Developer Portal** | No | Yes | Yes  
**Custom Domain** | Yes | Yes | Yes  
**Self - hosted Gateway** | No | Yes | Yes  
**Message size** | 15KB | 25KB | 50KB  
**Loging retention** | 1 tháng | 2 tháng | 3 tháng  
**SLA** | 99.95% | 99.99% | 99.99%  
  
**Bước 3:** Chọn **Create**. Hệ thống sẽ tiến hành khởi tạo dịch vụ và thông báo tình trạng xử lý.

![Userguide FPT API Management 3](/img/docs/824a28842863-Userguide-FPT-API-Management-3-1024x258.png)

Sau khi hệ thống khởi tạo tài khoản thành công, người dùng sẽ được tự động chuyển hướng sang trang quản trị **ApiManager Application** : .

![Userguide FPT API Management 4](/img/docs/56046d8931e5-Userguide-FPT-API-Management-4-1024x538.png)

Hoặc để chủ động truy cập vào trang quản trị **ApiManager Application** , người dùng có thể vào **FPT Portal** và chọn **Start** trên **API Management.**

![Userguide FPT API Management 5](/img/docs/06e7b1305bde-Userguide-FPT-API-Management-5-1024x258.png)

### 2\. Khai báo Rest API

Sau khi đăng ký dịch vụ thành công, các thao tác cấu hình của **API Management** sẽ được thực hiện toàn bộ trên **ApiManager Application**. Đầu tiên bạn cần khai báo các API đang cần quản lý lên hệ thống để quản trị tập trung trên **API Management**.

**Bước 1:** Ở menu **Application** > **API Manager** > **Rest Apis**. Chọn **Create**.

![Userguide FPT API Management 6](/img/docs/b760ac407150-Userguide-FPT-API-Management-6-1024x538.png)

**Bước 2:** Nhập các thông tin cần thiết:

  * **Name:** Tên API.
  * **Title:** Tiêu đề cho API.
  * **Base path:** Phần đường dẫn để phía client call vào sau khi public API.
  * **Use host group:** Kích hoạt mode HA hoặc không.
  * **Target endpoint:** Endpoint của API đã có sẵn, cần đưa ra cho consumer dùng.
  * **Target Security:** Thông tin xác thực của API.
  * **Security method:** Phương thức xác thực khi client sử dụng API. Hiện tại đang có ba phương thức được sử dụng là **Basic Authentication** , **OAuth** và **Api Key.**
  * **Enable doc:** Tạo doc cho đầu API.
  * **Enable validation schema:** Add validation cho body request.

Security method sẽ không thay đổi được sau khi tạo, hãy cẩn thận khi khai báo thông tin này.

![Userguide FPT API Management 7](/img/docs/3c62edec2108-472080589_951032306478361_1327346709131415396_n.pn.png)

**Bước 3:** Chọn **OK** để tiến hành khởi tạo **REST APIs**.

![Userguide FPT API Management 8](/img/docs/c2bb67f99afa-Userguide-FPT-API-Management-8-1024x538.png)

### 3\. Khai báo Product

**Product** là một thực thể dùng để gom nhóm các API với nhau (do có chung mục đích sử dụng, chung client,…). Thay vì bạn phải cấu hình cho từng API thì chỉ cần cấu hình cho một Product duy nhất.

**Bước 1:** Ở menu **Application** > **API Manager** > **Products** , chọn **Create.**

![Userguide FPT API Management 9](/img/docs/a464f0e44116-Userguide-FPT-API-Management-9-1024x538.png)

**Bước 2:** Nhập các thông tin theo yêu cầu:

  * **Name:** Tên product.
  * **Title:** Tiêu đề.
  * **Visibility type:** Chế độ hiển thị của Product, **Public** hoặc **Closed**.

![Userguide FPT API Management 10](/img/docs/5c96395a0fdd-Userguide-FPT-API-Management-10-1024x538.png)

**Bước 3** : Chọn **OK** để tiến hành tạo **Product**.

![Userguide FPT API Management 11](/img/docs/93a6a17cdd81-Userguide-FPT-API-Management-11-1024x538.png)

### 4\. Gắn APIs vào Product

Để gán API vào một **Product** , bạn thao tác như sau:

**Bước 1:** Ở **Product Management** , chọn **Product** cần gán API. Chọn **Register API.**

![Userguide FPT API Management 12](/img/docs/a6a0d5d95805-Userguide-FPT-API-Management-12-1024x538.png)

**Bước 2** : Chọn **Register**.

![Userguide FPT API Management 13](/img/docs/40e6fd9caa59-Userguide-FPT-API-Management-13-1024x538.png)

**Bước 3** : Chọn API cần gán vào **Product** và chọn **Select**.

![Userguide FPT API Management 14](/img/docs/86d8a0d01da5-Userguide-FPT-API-Management-14-1024x538.png)

**Bước 4:** Chọn **OK** để lưu.

![Userguide FPT API Management 15](/img/docs/26910f977c9f-Userguide-FPT-API-Management-15-1024x538.png)

  * Product và API liên kết với nhau theo mối quan hệ Nhiều – Nhiều, vì vậy một Product có thể gán nhiều APIs và một API cũng có thể xuất hiện cùng lúc trong nhiều product.
  * Product sẽ ảnh hưởng tới việc group API trong product đó được publish ra tới loại consumer nào.

### 5\. Tạo Site mới

Site là một thực thể dùng để mapping các product với portal.

Nếu bạn dùng gói **Pilot** và **Normal** sẽ được cung cấp một site mặc định và không thể tạo thêm site. Nếu có nhu cầu sử dụng nhiều site hãy nâng cấp lên gói cao hơn.

**Bước 1:** Ở menu **Application** > **API Manager** > **Sites** , chọn **Create.**

![Userguide FPT API Management 16](/img/docs/be9735dad9fc-Userguide-FPT-API-Management-16-1024x538.png)

**Bước 2:** Nhập các thông tin theo yêu cầu:

  * **Name:** Tên site.
  * **Title:** Tiêu đề.
  * **Production mode:** Chọn chế độ product.
  * **Virtual area:** Chọn khu vực trong danh sách đã được admin khai báo trước đó.
  * **Gateway:** Chọn gateway trong danh sách đã được admin khai báo trước đó.
  * **Portal:** Chọn Portal trong danh sách đã được admin khai báo trước đó.

![Userguide FPT API Management 17](/img/docs/c8843ff58c68-Userguide-FPT-API-Management-17-1024x538.png)

**Bước 3** : Chọn **OK** để tiến hành tạo **Site**.

![Userguide FPT API Management 18](/img/docs/c20fb585b9b6-Userguide-FPT-API-Management-18-1024x538.png)

### 6\. Staging product

Sau khi đã có Product và Site, để bắt đầu sử dụng bạn cần stage (đặt) product vào site tương ứng.

Để gán product vào site, bạn thao tác như sau:

**Bước 1:** Ở **Product Management** , chọn **Product** cần pubic lên **Site** > **Staging**.

![Userguide FPT API Management 19](/img/docs/32e49e03f745-Userguide-FPT-API-Management-19-1024x538.png)

**Bước 2:** Chọn **Staging to New site**.

![Userguide FPT API Management 20](/img/docs/c19e306e753e-Userguide-FPT-API-Management-20-1024x538.png)

**Bước 3:** Nhập các thông tin theo yêu cầu:

  * **Product** : Product cần gán vào Site.
  * **Site to publish** : Chọn site đã tạo trước đó.

![Userguide FPT API Management 21](/img/docs/9ac596d92b69-Userguide-FPT-API-Management-21-1024x538.png)

**Bước 4:** Chọn **OK**.

![Userguide FPT API Management 22](/img/docs/7e8c715e316f-Userguide-FPT-API-Management-22-1024x538.png)

  * Product và Site liên kết với nhau theo mối quan hệ Nhiều – Nhiều, vì vậy một Site có thể gán nhiều Product và một Product cũng có thể xuất hiện cùng lúc trong nhiều Site.
  * Site sẽ quyết định xem product nào được show ra trên site đó (và các API trong product con)

### 7\. Publish product

Sau khi product được stage lên một site, thì bản chất product vẫn đang ở trạng thái private. Lúc này consumer chưa dùng được các API trong product đó. Bạn cần thực hiện publish product thì consumer mới sử dụng được.

Để thực hiện publish Product, bạn thao tác như sau:

**Bước 1:** Ở menu **API Manger** , chọn **Sites.**

![Userguide FPT API Management 23](/img/docs/aff731c78625-Userguide-FPT-API-Management-23-1024x590.png)

**Bước 2:** Chọn **Site** chứa **Product** cần Publish > Chọn **Product**.

![Userguide FPT API Management 24](/img/docs/b953da5f07c2-Userguide-FPT-API-Management-24-1024x558.png)

**Bước 3:** Chọn Product cần Publish > Chọn **Publish.**

![Userguide FPT API Management 25](/img/docs/cd93e7e6ef53-Userguide-FPT-API-Management-25-1024x556.png)

### 8\. Tạo Consumers mới

**Consumer** là người dùng cuối sử dụng API, những người này có toàn quyền sử dụng các API đã được khai báo trong các Product được cấp quyền.

Để tạo **Consumer** , bạn thao tác như sau:

**Bước 1:** Ở menu **API Manger** , chọn **Consumers** > **Create.**

![Userguide FPT API Management 26](/img/docs/38542a552524-Userguide-FPT-API-Management-26-1024x538.png)

**Bước 2:** Nhập các thông tin theo yêu cầu:

![Userguide FPT API Management 27](/img/docs/8505cbdc1103-Userguide-FPT-API-Management-27-1024x538.png)

  * **Name:** Tên Consumers.
  * **Site:** Chọn site Consumers có hiệu lực.
  * **API Key:** Tích chọn xác thực bằng API key hay không.
  * **Title:** Tiêu đề.
  * **Password:** Mật khẩu nếu dùng **Basic Authenticate**.
  * **Confirm password:** Xác nhận lại mật khẩu.
  * **Max per second:** Điền số lần client có thể gọi API trên giây.
  * **Max per minute:** Điền số lần client có thể gọi API trên phút.
  * **Max per hour:** Điền số lần client có thể gọi API trên giờ.

  * Có thể khai báo và sử dụng song song cả API Key và Password**.**
  * Phương thức xác thực của Consumer phải tương tự với API cần sử dụng. 
    * Ví dụ: API của bạn dùng phương thức xác thực (PTXT) là Basic thì PTXT của Consumer cũng phải là Basic. Nếu 1 consumer có nhu cầu sử dụng nhiều API với nhiều PTXT khác nhau thì bạn cần khai báo đủ các phương thức xác thực cho Consumer đó. Sau đó tùy vào sử dụng API nào mà sử dụng PTXT cho hợp lý.

**Bước 3:** Chọn **OK** để tiến hành tạo.

![Userguide FPT API Management 28](/img/docs/29ff8f20b26c-Userguide-FPT-API-Management-28-1024x538.png)

### 9\. Subscribe product

Sau khi tạo **Consumer** xong, để sử dụng được các API có trong **Product** thì nhà cung cấp phải chỉ định Consumer subcribe một **Product**.

**Bước 1:** Ở **Consumer Management** , chọn consumer và click chọn **Product subscription.**

![Userguide FPT API Management 29](/img/docs/821efca8b899-Userguide-FPT-API-Management-29-1024x538.png)

**Bước 2:** Chọn **Subscribe product.**

![Userguide FPT API Management 30](/img/docs/a7aedaa105d2-Userguide-FPT-API-Management-30-1024x538.png)

**Bước 3:** Chọn **Product**.

![Userguide FPT API Management 31](/img/docs/85d308c16f26-Userguide-FPT-API-Management-31-1024x538.png)

Product bắt buộc phải ở trạng thái publish thì consumer mới có thể chọn trong giao diện subcribe.

**Bước 4:** Chọn **OK** để lưu.

![Userguide FPT API Management 32](/img/docs/401df3890679-Userguide-FPT-API-Management-32-1024x538.png)

Sau khi hoàn tất các bước bên trên, client đã có thể sử dụng các API mà nhà cung cấp đưa ra.

### 10\. Nhận thông tin từ API Provider

Để có thể bắt đầu sử dụng, client sẽ cần có các thông tin sau:

  * **Endpoint của API** : Được cung cấp theo hướng dẫn [**Lấy thông tin Endpoint của Product.**](<https://fptcloud.com/documents/fpt-api-management/?doc=quan-ly-api-site#contentify_4>)
  * **Authorization:** Phương thức xác thực của **Consumer**. Hiện tại đang hỗ trợ **Basic** hoặc **API Key**.
  * Nếu **Authorization** là **Basic:**
    * **Username:** Tên user với cấu trúc:

Username = UsernameProvider + tên site + usernameConsumer.

**_Ví dụ:_** _demo123.sitedemo.demoacc_

Hoặc có thể lấy theo hướng dẫn **[Lấy thông tin xác thực của Consumer](<https://fptcloud.com/documents/fpt-api-management/?doc=quan-ly-consumers#contentify_4>).**

  * **Password** : Mật khẩu của user đã khai báo ở bước tạo consumer.

  * **Nếu Authorization** là API Key:

    * **Key:** api-key.
    * **Value :** Lấy theo hướng dẫn ở phần
    * **Add to:** Header.
  * **Site được ủy quyền.**

### 11\. Sử dụng Postman

Khi đã có đủ thông tin, client có thể sử dụng Postman để bắt đầu dùng API được cung cấp từ API Management.

**Bước 1:** Nhập endpoint và chọn method gọi API.

![Userguide FPT API Management 33](/img/docs/6851d77f9940-Userguide-FPT-API-Management-33-1024x640.png)

**Bước 2:** Nhập thông tin **Authorization** :

  * Chọn **Basic Auth** và nhập **Username** /**Password** nếu **Authorization** là **Basic**.
  * Chọn **API Key** và nhập key nếu **Authorization** là **API** **Key**.

![Userguide FPT API Management 34](/img/docs/c6cc12919cdc-Userguide-FPT-API-Management-34-1024x640.png)

**Bước 3:** Nhập các request body, param khác để gọi API và chọn **Send.**

![Userguide FPT API Management 35](/img/docs/fc9f24a15e58-Userguide-FPT-API-Management-35-1024x640.png)

**Bước 4:** Nhận kết quả trả về.

  * **Status message 2xx:** Gọi API thành công
  * **Status message 4xx – 5xx:** Lỗi – báo cho FCI để được hỗ trợ

![Userguide FPT API Management 36](/img/docs/9e71949323c1-Userguide-FPT-API-Management-36-1024x640.png)

**Lưu ý:** Checklist check lỗi sẽ tuần tự như sau:

  * Kiểm tra username, password.
  * Báo API Provider kiểm tra quyền của client với API trước.
  * Kiểm tra API đã khai báo đúng hay chưa, param bị thiếu header gì hay không?
  * Kiểm tra API có bị lỗi hay không ?
  * Báo FCI kiểm tra gateway.

