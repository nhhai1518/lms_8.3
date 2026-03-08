// src/data/topicData.ts
// Auto-converted from topic_data.gs — CTGDPT 2018 (faithful copy)
// eslint-disable-next-line @typescript-eslint/no-explicit-any

export type DifficultyLevel = "Nhận biết" | "Thông hiểu" | "Vận dụng" | "Vận dụng cao";

// Record<string, any> để tránh TypeScript strict-check cấu trúc lồng nhau không đều
// (một số chỗ trong CTGDPT có thêm cấp subDomain trước chapter)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TOPIC_DATA: Record<string, any> = {
    "Lớp 6": {
    "SỐ VÀ ĐẠI SỐ": {
      "1. Số tự nhiên": {
        "Số tự nhiên và tập hợp các số tự nhiên. Thứ tự trong tập hợp các số tự nhiên": {
          "Nhận biết": [
            "Nhận biết được tập hợp các số tự nhiên."
          ],
          "Thông hiểu": [
            "Biểu diễn được số tự nhiên trong hệ thập phân.",
            "Biểu diễn được các số tự nhiên từ 1 đến 30 bằng cách sử dụng các chữ số La Mã."
          ],
          "Vận dụng": [
            "Sử dụng được thuật ngữ tập hợp, phần tử thuộc (không thuộc) một tập hợp; sử dụng được cách cho tập hợp."
          ]
        },
        "Các phép tính với số tự nhiên. Phép tính luỹ thừa với số mũ tự nhiên": {
          "Nhận biết": [
            "Nhận biết được thứ tự thực hiện các phép tính."
          ],
          "Vận dụng": [
            "Thực hiện được các phép tính: cộng, trừ, nhân, chia trong tập hợp số tự nhiên.",
            "Vận dụng được các tính chất giao hoán, kết hợp, phân phối của phép nhân đối với phép cộng trong tính toán.",
            "Thực hiện được phép tính luỹ thừa với số mũ tự nhiên; thực hiện được các phép nhân và phép chia hai luỹ thừa cùng cơ số với số mũ tự nhiên.",
            "Vận dụng được các tính chất của phép tính (kể cả phép tính luỹ thừa với số mũ tự nhiên) để tính nhẩm, tính nhanh một cách hợp lí.",
            "Giải quyết được những vấn đề thực tiễn (đơn giản, quen thuộc) gắn với thực hiện các phép tính (ví dụ: tính tiền mua sắm, tính lượng hàng mua được từ số tiền đã có, ...)."
          ],
          "Vận dụng cao": [
            "Giải quyết được những vấn đề thực tiễn (phức hợp, không quen thuộc) gắn với thực hiện các phép tính."
          ]
        },
        "Tính chia hết trong tập hợp các số tự nhiên. Số nguyên tố. Ước chung và bội chung": {
          "Nhận biết": [
            "Nhận biết được quan hệ chia hết, khái niệm ước và bội.",
            "Nhận biết được khái niệm số nguyên tố, hợp số.",
            "Nhận biết được phép chia có dư, định lí về phép chia có dư.",
            "Nhận biết được phân số tối giản."
          ],
          "Vận dụng": [
            "Vận dụng được dấu hiệu chia hết cho 2, 5, 9, 3 để xác định một số đã cho có chia hết cho 2, 5, 9, 3 hay không.",
            "Thực hiện được việc phân tích một số tự nhiên lớn hơn 1 thành tích của các thừa số nguyên tố trong những trường hợp đơn giản.",
            "Xác định được ước chung, ước chung lớn nhất; xác định được bội chung, bội chung nhỏ nhất của hai hoặc ba số tự nhiên; thực hiện được phép cộng, phép trừ phân số bằng cách sử dụng ước chung lớn nhất, bội chung nhỏ nhất.",
            "Vận dụng được kiến thức số học vào giải quyết những vấn đề thực tiễn (đơn giản, quen thuộc) (ví dụ: tính toán tiền hay lượng hàng hoá khi mua sắm, xác định số đồ vật cần thiết để sắp xếp chúng theo những quy tắc cho trước,...)."
          ],
          "Vận dụng cao": [
            "Vận dụng được kiến thức số học vào giải quyết những vấn đề thực tiễn (phức hợp, không quen thuộc)."
          ]
        }
      },
      "2. Số nguyên": {
        "Số nguyên âm và tập hợp các số nguyên. Thứ tự trong tập hợp các số nguyên": {
          "Nhận biết": [
            "Nhận biết được số nguyên âm, tập hợp các số nguyên.",
            "Nhận biết được số đối của một số nguyên.",
            "Nhận biết được thứ tự trong tập hợp các số nguyên.",
            "Nhận biết được ý nghĩa của số nguyên âm trong một số bài toán thực tiễn."
          ],
          "Thông hiểu": [
            "Biểu diễn được số nguyên trên trục số.",
            "So sánh được hai số nguyên cho trước."
          ]
        },
        "Các phép tính với số nguyên. Tính chia hết trong tập hợp các số nguyên": {
          "Nhận biết": [
            "Nhận biết được quan hệ chia hết, khái niệm ước và bội trong tập hợp các số nguyên."
          ],
          "Vận dụng": [
            "Thực hiện được các phép tính: cộng, trừ, nhân, chia (chia hết) trong tập hợp các số nguyên.",
            "Vận dụng được các tính chất giao hoán, kết hợp, phân phối của phép nhân đối với phép cộng, quy tắc dấu ngoặc trong tập hợp các số nguyên trong tính toán (tính viết và tính nhẩm, tính nhanh một cách hợp lí).",
            "Giải quyết được những vấn đề thực tiễn (đơn giản, quen thuộc) gắn với thực hiện các phép tính về số nguyên (ví dụ: tính lỗ lãi khi buôn bán,...)."
          ],
          "Vận dụng cao": [
            "Giải quyết được những vấn đề thực tiễn (phức hợp, không quen thuộc) gắn với thực hiện các phép tính về số nguyên."
          ]
        }
      },
      "3. Phân số": {
        "Phân số. Tính chất cơ bản của phân số. So sánh phân số": {
          "Nhận biết": [
            "Nhận biết được phân số với tử số hoặc mẫu số là số nguyên âm.",
            "Nhận biết được khái niệm hai phân số bằng nhau và nhận biết được quy tắc bằng nhau của hai phân số.",
            "Nêu được hai tính chất cơ bản của phân số.",
            "Nhận biết được số đối của một phân số.",
            "Nhận biết được hỗn số dương."
          ],
          "Thông hiểu": [
            "So sánh được hai phân số cho trước."
          ]
        },
        "Các phép tính với phân số": {
          "Vận dụng": [
            "Thực hiện được các phép tính cộng, trừ, nhân, chia với phân số.",
            "Vận dụng được các tính chất giao hoán, kết hợp, phân phối của phép nhân đối với phép cộng, quy tắc dấu ngoặc với phân số trong tính toán (tính viết và tính nhẩm, tính nhanh một cách hợp lí).",
            "Tính được giá trị phân số của một số cho trước và tính được một số biết giá trị phân số của số đó.",
            "Giải quyết được một số vấn đề thực tiễn (đơn giản, quen thuộc) gắn với các phép tính về phân số (ví dụ: các bài toán liên quan đến chuyển động trong Vật lí,...)."
          ],
          "Vận dụng cao": [
            "Giải quyết được một số vấn đề thực tiễn (phức hợp, không quen thuộc) gắn với các phép tính về phân số."
          ]
        }
      },
      "4. Số thập phân": {
        "Số thập phân và các phép tính với số thập phân. Tỉ số và tỉ số phần trăm": {
          "Nhận biết": [
            "Nhận biết được số thập phân âm, số đối của một số thập phân."
          ],
          "Thông hiểu": [
            "So sánh được hai số thập phân cho trước."
          ],
          "Vận dụng": [
            "Thực hiện được các phép tính cộng, trừ, nhân, chia với số thập phân.",
            "Vận dụng được các tính chất giao hoán, kết hợp, phân phối của phép nhân đối với phép cộng, quy tắc dấu ngoặc với số thập phân trong tính toán (tính viết và tính nhẩm, tính nhanh một cách hợp lí).",
            "Thực hiện được ước lượng và làm tròn số thập phân.",
            "Tính được tỉ số và tỉ số phần trăm của hai đại lượng.",
            "Tính được giá trị phần trăm của một số cho trước, tính được một số biết giá trị phần trăm của số đó.",
            "Giải quyết được một số vấn đề thực tiễn (đơn giản, quen thuộc) gắn với các phép tính về số thập phân, tỉ số và tỉ số phần trăm (ví dụ: các bài toán liên quan đến lãi suất tín dụng, liên quan đến thành phần các chất trong Hoá học,...)."
          ],
          "Vận dụng cao": [
            "Giải quyết được một số vấn đề thực tiễn (phức hợp, không quen thuộc) gắn với các phép tính về số thập phân, tỉ số và tỉ số phần trăm."
          ]
        }
      }
    },
      "HÌNH HỌC TRỰC QUAN": {
        "1. Các hình phẳng trong thực tiễn": {
          "Tam giác đều, hình vuông, lục giác đều": {
            "Nhận biết": [
              "Nhận dạng được tam giác đều, hình vuông, lục giác đều."
            ],
            "Thông hiểu": [
              "Mô tả được một số yếu tố cơ bản (cạnh, góc, đường chéo) của: tam giác đều (ví dụ: ba cạnh bằng nhau, ba góc bằng nhau); hình vuông (ví dụ: bốn cạnh bằng nhau, mỗi góc là góc vuông, hai đường chéo bằng nhau); lục giác đều (ví dụ: sáu cạnh bằng nhau, sáu góc bằng nhau, ba đường chéo chính bằng nhau)."
            ],
            "Vận dụng": [
              "Vẽ được tam giác đều, hình vuông bằng dụng cụ học tập.",
              "Tạo lập được lục giác đều thông qua việc lắp ghép các tam giác đều."
            ]
          },
          "Hình chữ nhật, hình thoi, hình bình hành, hình thang cân": {
            "Nhận biết": [
              "Mô tả được một số yếu tố cơ bản (cạnh, góc, đường chéo) của hình chữ nhật, hình thoi, hình bình hành, hình thang cân."
            ],
            "Thông hiểu": [
              "Vẽ được hình chữ nhật, hình thoi, hình bình hành bằng các dụng cụ học tập.",
              "Giải quyết được một số vấn đề thực tiễn (đơn giản, quen thuộc) gắn với việc tính chu vi và diện tích của các hình đặc biệt nói trên (ví dụ: tính chu vi hoặc diện tích của một số đối tượng có dạng đặc biệt nói trên,...)."
            ],
            "Vận dụng": [
              "Giải quyết được một số vấn đề thực tiễn gắn với việc tính chu vi và diện tích của các hình đặc biệt nói trên."
            ]
          }
        },
        "2. Tính đối xứng của hình phẳng trong thế giới tự nhiên": {
          "Hình có trục đối xứng": {
            "Nhận biết": [
              "Nhận biết được trục đối xứng của một hình phẳng.",
              "Nhận biết được những hình phẳng trong tự nhiên có trục đối xứng (khi quan sát trên hình ảnh 2 chiều)."
            ]
          },
          "Hình có tâm đối xứng": {
            "Nhận biết": [
              "Nhận biết được tâm đối xứng của một hình phẳng.",
              "Nhận biết được những hình phẳng trong thế giới tự nhiên có tâm đối xứng (khi quan sát trên hình ảnh 2 chiều)."
            ]
          },
          "Vai trò của đối xứng trong thế giới tự nhiên": {
            "Nhận biết": [
              "Nhận biết được tính đối xứng trong Toán học, tự nhiên, nghệ thuật, kiến trúc, công nghệ chế tạo,...",
              "Nhận biết được vẻ đẹp của thế giới tự nhiên biểu hiện qua tính đối xứng (ví dụ: nhận biết vẻ đẹp của một số loài thực vật, động vật trong tự nhiên có tâm đối xứng hoặc có trục đối xứng)."
            ]
          }
        }
      },
      "HÌNH HỌC PHẲNG": {
        "3. Các hình hình học cơ bản": {
          "Điểm, đường thẳng, tia": {
            "Nhận biết": [
              "Nhận biết được những quan hệ cơ bản giữa điểm, đường thẳng: điểm thuộc đường thẳng, điểm không thuộc đường thẳng; tiên đề về đường thẳng đi qua hai điểm phân biệt.",
              "Nhận biết được khái niệm hai đường thẳng cắt nhau, song song.",
              "Nhận biết được khái niệm ba điểm thẳng hàng, ba điểm không thẳng hàng.",
              "Nhận biết được khái niệm điểm nằm giữa hai điểm.",
              "Nhận biết được khái niệm tia."
            ]
          },
          "Đoạn thẳng. Độ dài đoạn thẳng": {
            "Nhận biết": [
              "Nhận biết được khái niệm đoạn thẳng, trung điểm của đoạn thẳng, độ dài đoạn thẳng."
            ]
          },
          "Góc. Các góc đặc biệt. Số đo góc": {
            "Nhận biết": [
              "Nhận biết được khái niệm góc, điểm trong của góc (không đề cập đến góc lõm).",
              "Nhận biết được các góc đặc biệt (góc vuông, góc nhọn, góc tù, góc bẹt).",
              "Nhận biết được khái niệm số đo góc."
            ]
          }
        }
      },
    "MỘT SỐ YẾU TỐ THỐNG KÊ VÀ XÁC SUẤT": {
      "1. Thu thập và tổ chức dữ liệu": {
        "Thu thập, phân loại, biểu diễn dữ liệu theo các tiêu chí cho trước": {
          "Nhận biết": [
            "Nhận biết được tính hợp lí của dữ liệu theo các tiêu chí đơn giản."
          ],
          "Vận dụng": [
            "Thực hiện được việc thu thập, phân loại dữ liệu theo các tiêu chí cho trước từ những nguồn: bảng biểu, kiến thức trong các môn học khác."
          ]
        },
        "Mô tả và biểu diễn dữ liệu trên các bảng, biểu đồ": {
          "Nhận biết": [
            "Đọc được các dữ liệu ở dạng: bảng thống kê; biểu đồ tranh; biểu đồ dạng cột/cột kép (column chart)."
          ],
          "Thông hiểu": [
            "Mô tả được các dữ liệu ở dạng: bảng thống kê; biểu đồ tranh; biểu đồ dạng cột/cột kép (column chart)."
          ],
          "Vận dụng": [
            "Lựa chọn và biểu diễn được dữ liệu vào bảng, biểu đồ thích hợp ở dạng: bảng thống kê; biểu đồ tranh; biểu đồ dạng cột/cột kép (column chart)."
          ]
        }
      },
      "2. Phân tích và xử lí dữ liệu": {
        "Hình thành và giải quyết vấn đề đơn giản xuất hiện từ các số liệu và biểu đồ thống kê đã có": {
          "Nhận biết": [
            "Nhận biết được mối liên quan giữa thống kê với những kiến thức trong các môn học trong Chương trình lớp 6 (ví dụ: Lịch sử và Địa lí lớp 6, Khoa học tự nhiên lớp 6,...) và trong thực tiễn (ví dụ: khí hậu, giá cả thị trường,...)."
          ],
          "Thông hiểu": [
            "Nhận ra được vấn đề hoặc quy luật đơn giản dựa trên phân tích các số liệu thu được ở dạng: bảng thống kê; biểu đồ tranh; biểu đồ dạng cột/cột kép (column chart)."
          ],
          "Vận dụng": [
            "Giải quyết được những vấn đề đơn giản liên quan đến các số liệu thu được ở dạng: bảng thống kê; biểu đồ tranh; biểu đồ dạng cột/cột kép (column chart)."
          ]
        }
      },
      "3. Một số yếu tố xác suất": {
        "Làm quen với một số mô hình xác suất đơn giản. Làm quen với việc mô tả xác suất (thực nghiệm) của khả năng xảy ra nhiều lần của một sự kiện trong một số mô hình xác suất đơn giản": {
          "Nhận biết": [
            "Làm quen với mô hình xác suất trong một số trò chơi, thí nghiệm đơn giản (ví dụ: ở trò chơi tung đồng xu thì mô hình xác suất gồm hai khả năng ứng với mặt xuất hiện của đồng xu, ...)."
          ],
          "Thông hiểu": [
            "Làm quen với việc mô tả xác suất (thực nghiệm) của khả năng xảy ra nhiều lần của một sự kiện trong một số mô hình xác suất đơn giản."
          ]
        },
        "Mô tả xác suất (thực nghiệm) của khả năng xảy ra nhiều lần của một sự kiện trong một số mô hình xác suất đơn giản": {
          "Vận dụng": [
            "Sử dụng được phân số để mô tả xác suất (thực nghiệm) của khả năng xảy ra nhiều lần thông qua kiểm đếm số lần lặp lại của khả năng đó trong một số mô hình xác suất đơn giản."
          ]
        }
      }
    }
    },
  "Lớp 7": {
    "SỐ VÀ ĐẠI SỐ": {
      "1. Số hữu tỉ": {
        "Số hữu tỉ và tập hợp các số hữu tỉ. Thứ tự trong tập hợp các số hữu tỉ": {
          "Nhận biết": [
            "Nhận biết được số hữu tỉ và lấy được ví dụ về số hữu tỉ.",
            "Nhận biết được tập hợp các số hữu tỉ.",
            "Nhận biết được số đối của một số hữu tỉ.",
            "Nhận biết được thứ tự trong tập hợp các số hữu tỉ."
          ],
          "Thông hiểu": [
            "Biểu diễn được số hữu tỉ trên trục số."
          ],
          "Vận dụng": [
            "So sánh được hai số hữu tỉ."
          ]
        },
        "Các phép tính với số hữu tỉ": {
          "Thông hiểu": [
            "Mô tả được phép tính luỹ thừa với số mũ tự nhiên của một số hữu tỉ và một số tính chất của phép tính đó (tích và thương của hai luỹ thừa cùng cơ số, luỹ thừa của luỹ thừa).",
            "Mô tả được thứ tự thực hiện các phép tính, quy tắc dấu ngoặc, quy tắc chuyển vế trong tập hợp số hữu tỉ."
          ],
          "Vận dụng": [
            "Thực hiện được các phép tính: cộng, trừ, nhân, chia trong tập hợp số hữu tỉ.",
            "Vận dụng được các tính chất giao hoán, kết hợp, phân phối của phép nhân đối với phép cộng, quy tắc dấu ngoặc với số hữu tỉ trong tính toán (tính viết và tính nhẩm, tính nhanh một cách hợp lí).",
            "Giải quyết được một số vấn đề thực tiễn (đơn giản, quen thuộc) gắn với các phép tính về số hữu tỉ. (ví dụ: các bài toán liên quan đến chuyển động trong Vật lí, trong đo đạc,...)."
          ],
          "Vận dụng cao": [
            "Giải quyết được một số vấn đề thực tiễn (phức hợp, không quen thuộc) gắn với các phép tính về số hữu tỉ."
          ]
        }
      },
      "2. Số thực": {
        "Căn bậc hai số học": {
          "Nhận biết": [
            "Nhận biết được khái niệm căn bậc hai số học của một số không âm."
          ],
          "Thông hiểu": [
            "Tính được giá trị (đúng hoặc gần đúng) căn bậc hai số học của một số nguyên dương bằng máy tính cầm tay."
          ]
        },
        "Số vô tỉ. Số thực": {
          "Nhận biết": [
            "Nhận biết được số thập phân hữu hạn và số thập phân vô hạn tuần hoàn.",
            "Nhận biết được số vô tỉ, số thực, tập hợp các số thực.",
            "Nhận biết được trục số thực và biểu diễn được số thực trên trục số trong trường hợp thuận lợi.",
            "Nhận biết được số đối của một số thực.",
            "Nhận biết được thứ tự trong tập hợp các số thực.",
            "Nhận biết được giá trị tuyệt đối của một số thực."
          ],
          "Vận dụng": [
            "Thực hiện được ước lượng và làm tròn số căn cứ vào độ chính xác cho trước."
          ]
        },
        "Tỉ lệ thức và dãy tỉ số bằng nhau": {
          "Nhận biết": [
            "Nhận biết được tỉ lệ thức và các tính chất của tỉ lệ thức.",
            "Nhận biết được dãy tỉ số bằng nhau."
          ],
          "Vận dụng": [
            "Vận dụng được tính chất của tỉ lệ thức trong giải toán.",
            "Vận dụng được tính chất của dãy tỉ số bằng nhau trong giải toán (ví dụ: chia một số thành các phần tỉ lệ với các số cho trước,...)."
          ]
        },
        "Giải toán về đại lượng tỉ lệ": {
          "Vận dụng": [
            "Giải được một số bài toán đơn giản về đại lượng tỉ lệ thuận (ví dụ: bài toán về tổng sản phẩm thu được và năng suất lao động,...).",
            "Giải được một số bài toán đơn giản về đại lượng tỉ lệ nghịch (ví dụ: bài toán về thời gian hoàn thành kế hoạch và năng suất lao động,...)."
          ]
        }
      },
      "3. Biểu thức đại số": {
        "Biểu thức đại số": {
          "Nhận biết": [
            "Nhận biết được biểu thức số.",
            "Nhận biết được biểu thức đại số."
          ],
          "Vận dụng": [
            "Tính được giá trị của một biểu thức đại số."
          ]
        },
        "Đa thức một biến": {
          "Nhận biết": [
            "Nhận biết được định nghĩa đa thức một biến.",
            "Nhận biết được cách biểu diễn đa thức một biến;",
            "Nhận biết được khái niệm nghiệm của đa thức một biến."
          ],
          "Thông hiểu": [
            "Xác định được bậc của đa thức một biến."
          ],
          "Vận dụng": [
            "Tính được giá trị của đa thức khi biết giá trị của biến.",
            "Thực hiện được các phép tính: phép cộng, phép trừ, phép nhân, phép chia trong tập hợp các đa thức một biến; vận dụng được những tính chất của các phép tính đó trong tính toán."
          ]
        }
      }
    },

      "HÌNH HỌC TRỰC QUAN": {
        "1. Các hình khối trong thực tiễn": {
          "Hình hộp chữ nhật và hình lập phương": {
            "Nhận biết": [
              "Mô tả được một số yếu tố cơ bản (đỉnh, cạnh, góc, đường chéo) của hình hộp chữ nhật và hình lập phương."
            ],
            "Thông hiểu": [
              "Giải quyết được một số vấn đề thực tiễn gắn với việc tính thể tích, diện tích xung quanh của hình hộp chữ nhật, hình lập phương (ví dụ: tính thể tích hoặc diện tích xung quanh của một số đồ vật quen thuộc có dạng hình hộp chữ nhật, hình lập phương,...)."
            ]
          },
          "Lăng trụ đứng tam giác, lăng trụ đứng tứ giác": {
            "Nhận biết": [
              "Mô tả được hình lăng trụ đứng tam giác, hình lăng trụ đứng tứ giác (ví dụ: hai mặt đáy là song song; các mặt bên đều là hình chữ nhật, ...)."
            ],
            "Thông hiểu": [
              "Tạo lập được hình lăng trụ đứng tam giác, hình lăng trụ đứng tứ giác.",
              "Tính được diện tích xung quanh, thể tích của hình lăng trụ đứng tam giác, hình lăng trụ đứng tứ giác.",
              "Giải quyết được một số vấn đề thực tiễn gắn với việc tính thể tích, diện tích xung quanh của một lăng trụ đứng tam giác, hình lăng trụ đứng tứ giác (ví dụ: tính thể tích hoặc diện tích xung quanh của một số đồ vật quen thuộc có dạng lăng trụ đứng tam giác, lăng trụ đứng tứ giác,...)."
            ],
            "Vận dụng": [
              "Giải quyết được một số vấn đề thực tiễn gắn với việc tính thể tích, diện tích xung quanh của một lăng trụ đứng tam giác, hình lăng trụ đứng tứ giác."
            ]
          }
        }
      },
      "HÌNH HỌC PHẲNG": {
        "2. Các hình hình học cơ bản": {
          "Góc ở vị trí đặc biệt. Tia phân giác của một góc": {
            "Nhận biết": [
              "Nhận biết được các góc ở vị trí đặc biệt (hai góc kề bù, hai góc đối đỉnh).",
              "Nhận biết được tia phân giác của một góc.",
              "Nhận biết được cách vẽ tia phân giác của một góc bằng dụng cụ học tập"
            ]
          },
          "Hai đường thẳng song song. Tiên đề Euclid về đường thẳng song song": {
            "Nhận biết": [
              "Nhận biết được tiên đề Euclid về đường thẳng song song."
            ],
            "Thông hiểu": [
              "Mô tả được một số tính chất của hai đường thẳng song song.",
              "Mô tả được dấu hiệu song song của hai đường thẳng thông qua cặp góc đồng vị, cặp góc so le trong."
            ]
          },
          "Khái niệm định lí, chứng minh một định lí": {
            "Nhận biết": [
              "Nhận biết được thế nào là một định lí."
            ],
            "Thông hiểu": [
              "Hiểu được phần chứng minh của một định lí;"
            ],
            "Vận dụng": [
              "Chứng minh được một định lí;"
            ]
          },
          "Tam giác. Tam giác bằng nhau. Tam giác cân. Quan hệ giữa đường vuông góc và đường xiên. Các đường đồng quy của tam giác": {
            "Nhận biết": [
              "Nhận biết được liên hệ về độ dài của ba cạnh trong một tam giác.",
              "Nhận biết được khái niệm hai tam giác bằng nhau.",
              "Nhận biết được khái niệm: đường vuông góc và đường xiên; khoảng cách từ một điểm đến một đường thẳng.",
              "Nhận biết được đường trung trực của một đoạn thẳng và tính chất cơ bản của đường trung trực.",
              "Nhận biết được: các đường đặc biệt trong tam giác (đường trung tuyến, đường cao, đường phân giác, đường trung trực); sự đồng quy của các đường đặc biệt đó."
            ],
            "Thông hiểu": [
              "Giải thích được định lí về tổng các góc trong một tam giác bằng 180°.",
              "Giải thích được quan hệ giữa đường vuông góc và đường xiên dựa trên mối quan hệ giữa cạnh và góc đối trong tam giác (đối diện với góc lớn hơn là cạnh lớn hơn và ngược lại).",
              "Giải thích được các trường hợp bằng nhau của hai tam giác, của hai tam giác vuông.",
              "Mô tả được tam giác cân và giải thích được tính chất của tam giác cân (ví dụ: hai cạnh bên bằng nhau; hai góc đáy bằng nhau)."
            ]
          },
          "Giải bài toán có nội dung hình học và vận dụng giải quyết vấn đề thực tiễn liên quan đến hình học": {
            "Vận dụng": [
              "Diễn đạt được lập luận và chứng minh hình học trong những trường hợp đơn giản (ví dụ: lập luận và chứng minh được các đoạn thẳng bằng nhau, các góc bằng nhau từ các điều kiện ban đầu liên quan đến tam giác,...).",
              "Giải quyết được một số vấn đề thực tiễn (đơn giản, quen thuộc) liên quan đến ứng dụng của hình học như: đo, vẽ, tạo dựng các hình đã học."
            ],
            "Vận dụng cao": [
              "Giải quyết được một số vấn đề thực tiễn (phức hợp, không quen thuộc) liên quan đến ứng dụng của hình học như: đo, vẽ, tạo dựng các hình đã học."
            ]
          }
        }
      },
    "MỘT SỐ YẾU TỐ THỐNG KÊ VÀ XÁC SUẤT": {
      "3. Thu thập và tổ chức dữ liệu": {
        "Thu thập, phân loại, biểu diễn dữ liệu theo các tiêu chí cho trước": {
          "Thông hiểu": [
            "Giải thích được tính hợp lí của dữ liệu theo các tiêu chí toán học đơn giản (ví dụ: tính hợp lí, tính đại diện của một kết luận trong phỏng vấn; tính hợp lí của các quảng cáo;...)."
          ],
          "Vận dụng": [
            "Thực hiện và lí giải được việc thu thập, phân loại dữ liệu theo các tiêu chí cho trước từ những nguồn: văn bản, bảng biểu, kiến thức trong các môn học khác và trong thực tiễn."
          ]
        },
        "Mô tả và biểu diễn dữ liệu trên các bảng, biểu đồ": {
          "Nhận biết": [
            "Nhận biết được những dạng biểu diễn khác nhau cho một tập dữ liệu."
          ],
          "Thông hiểu": [
            "Đọc và mô tả được các dữ liệu ở dạng biểu đồ thống kê: biểu đồ hình quạt tròn (pie chart); biểu đồ đoạn thẳng (line graph)."
          ],
          "Vận dụng": [
            "Lựa chọn và biểu diễn được dữ liệu vào bảng, biểu đồ thích hợp ở dạng: biểu đồ hình quạt tròn (cho sẵn) (pie chart); biểu đồ đoạn thẳng (line graph)."
          ]
        }
      },
      "4. Phân tích và xử lí dữ liệu": {
        "Hình thành và giải quyết vấn đề đơn giản xuất hiện từ các số liệu và biểu đồ thống kê đã có": {
          "Nhận biết": [
            "Nhận biết được mối liên quan giữa thống kê với những kiến thức trong các môn học khác trong Chương trình lớp 7 (ví dụ: Lịch sử và Địa lí lớp 7, Khoa học tự nhiên lớp 7,...) và trong thực tiễn (ví dụ: môi trường, y học, tài chính,...)."
          ],
          "Thông hiểu": [
            "Nhận ra được vấn đề hoặc quy luật đơn giản dựa trên phân tích các số liệu thu được ở dạng: biểu đồ hình quạt tròn (cho sẵn) (pie chart); biểu đồ đoạn thẳng (line graph)."
          ],
          "Vận dụng": [
            "Giải quyết được những vấn đề đơn giản liên quan đến các số liệu thu được ở dạng: biểu đồ hình quạt tròn (cho sẵn) (pie chart); biểu đồ đoạn thẳng (line graph)."
          ]
        }
      },
      "5. Một số yếu tố xác suất": {
        "Làm quen với biến cố ngẫu nhiên. Làm quen với xác suất của biến cố ngẫu nhiên trong một số ví dụ đơn giản": {
          "Nhận biết": [
            "Làm quen với các khái niệm mở đầu về biến cố ngẫu nhiên và xác suất của biến cố ngẫu nhiên trong các ví dụ đơn giản."
          ],
          "Thông hiểu": [
            "Nhận biết được xác suất của một biến cố ngẫu nhiên trong một số ví dụ đơn giản (ví dụ: lấy bóng trong túi, tung xúc xắc,...)."
          ]
        }
      }
    }
  },
  "Lớp 8": {
    "ĐẠI SỐ": {
      "1. Biểu thức đại số": {
        "Đa thức nhiều biến. Các phép toán cộng, trừ, nhân, chia các đa thức nhiều biến": {
          "Nhận biết": [
            "Nhận biết được các khái niệm về đơn thức, đa thức nhiều biến."
          ],
          "Thông hiểu": [
            "Tính được giá trị của đa thức khi biết giá trị của các biến."
          ],
          "Vận dụng": [
            "Thực hiện được việc thu gọn đơn thức, đa thức.",
            "Thực hiện được phép nhân đơn thức với đa thức và phép chia hết một đơn thức cho một đơn thức.",
            "Thực hiện được các phép tính: phép cộng, phép trừ, phép nhân các đa thức nhiều biến trong những trường hợp đơn giản.",
            "Thực hiện được phép chia hết một đa thức cho một đơn thức trong những trường hợp đơn giản."
          ]
        },
        "Hằng đẳng thức đáng nhớ": {
          "Nhận biết": [
            "Nhận biết được các khái niệm: đồng nhất thức, hằng đẳng thức."
          ],
          "Thông hiểu": [
            "Mô tả được các hằng đẳng thức: bình phương của tổng và hiệu; hiệu hai bình phương; lập phương của tổng và hiệu; tổng và hiệu hai lập phương."
          ],
          "Vận dụng": [
            "Vận dụng được các hằng đẳng thức để phân tích đa thức thành nhân tử ở dạng: vận dụng trực tiếp hằng đẳng thức;",
            "Vận dụng hằng đẳng thức thông qua nhóm hạng tử và đặt nhân tử chung."
          ]
        },
        "Phân thức đại số. Tính chất cơ bản của phân thức đại số. Các phép toán cộng, trừ, nhân, chia các phân thức đại số": {
          "Nhận biết": [
            "Nhận biết được các khái niệm cơ bản về phân thức đại số: định nghĩa; điều kiện xác định; giá trị của phân thức đại số; hai phân thức bằng nhau."
          ],
          "Thông hiểu": [
            "Mô tả được những tính chất cơ bản của phân thức đại số."
          ],
          "Vận dụng": [
            "Thực hiện được các phép tính: phép cộng, phép trừ, phép nhân, phép chia đối với hai phân thức đại số.",
            "Vận dụng được các tính chất giao hoán, kết hợp, phân phối của phép nhân đối với phép cộng, quy tắc dấu ngoặc với phân thức đại số đơn giản trong tính toán."
          ]
        }
      },
      "2. Hàm số và đồ thị": {
        "Hàm số và đồ thị": {
          "Nhận biết": [
            "Nhận biết được những mô hình thực tế dẫn đến khái niệm hàm số.",
            "Nhận biết được đồ thị hàm số."
          ],
          "Thông hiểu": [
            "Tính được giá trị của hàm số khi hàm số đó xác định bởi công thức.",
            "Xác định được toạ độ của một điểm trên mặt phẳng toạ độ;",
            "Xác định được một điểm trên mặt phẳng toạ độ khi biết toạ độ của nó."
          ]
        },
        "Hàm số bậc nhất y = ax + b (a ≠ 0) và đồ thị. Hệ số góc của đường thẳng y = ax + b (a ≠ 0).": {
          "Nhận biết": [
            "Nhận biết được khái niệm hệ số góc của đường thẳng y = ax + b (a ≠ 0)."
          ],
          "Thông hiểu": [
            "Thiết lập được bảng giá trị của hàm số bậc nhất y = ax + b (a ≠ 0).",
            "Sử dụng được hệ số góc của đường thẳng để nhận biết và giải thích được sự cắt nhau hoặc song song của hai đường thẳng cho trước."
          ],
          "Vận dụng": [
            "Vẽ được đồ thị của hàm số bậc nhất y = ax + b (a ≠ 0).",
            "Vận dụng được hàm số bậc nhất và đồ thị vào giải quyết một số bài toán thực tiễn (đơn giản, quen thuộc) (ví dụ: bài toán về chuyển động đều trong Vật lí,...)."
          ],
          "Vận dụng cao": [
            "Vận dụng được hàm số bậc nhất và đồ thị vào giải quyết một số bài toán (phức hợp, không quen thuộc) thuộc có nội dung thực tiễn."
          ]
        }
      },
      "3. Phương trình": {
        "Phương trình bậc nhất": {
          "Thông hiểu": [
            "Mô tả được phương trình bậc nhất một ẩn và cách giải."
          ],
          "Vận dụng": [
            "Giải được phương trình bậc nhất một ẩn.",
            "Giải quyết được một số vấn đề thực tiễn (đơn giản, quen thuộc) gắn với phương trình bậc nhất (ví dụ: các bài toán liên quan đến chuyển động trong Vật lí, các bài toán liên quan đến Hoá học,...)."
          ],
          "Vận dụng cao": [
            "Giải quyết được một số vấn đề thực tiễn (phức hợp, không quen thuộc) gắn với phương trình bậc nhất."
          ]
        }
      }
    },
      "HÌNH HỌC TRỰC QUAN": {
        "3. Các hình khối trong thực tiễn": {
          "Hình chóp tam giác đều, hình chóp tứ giác đều": {
            "Nhận biết": [
              "Mô tả (đỉnh, mặt đáy, mặt bên, cạnh bên) được hình chóp tam giác đều và hình chóp tứ giác đều."
            ],
            "Thông hiểu": [
              "Tạo lập được hình chóp tam giác đều và hình chóp tứ giác đều.",
              "Tính được diện tích xung quanh, thể tích của một hình chóp tam giác đều và hình chóp tứ giác đều."
            ],
            "Vận dụng": [
              "Giải quyết được một số vấn đề thực tiễn gắn với việc tính thể tích, diện tích xung quanh của hình chóp tam giác đều và hình chóp tứ giác đều."
            ]
          }
        }
      },
      "HÌNH HỌC PHẲNG": {
        "4. Định lí Pythagore": {
          "Định lí Pythagore": {
            "Thông hiểu": [
              "Giải thích được định lí Pythagore."
            ],
            "Vận dụng": [
              "Tính được độ dài cạnh trong tam giác vuông bằng cách sử dụng định lí Pythagore."
            ],
            "Vận dụng cao": [
              "Giải quyết được một số vấn đề thực tiễn gắn với việc vận dụng định lí Pythagore (ví dụ: tính khoảng cách giữa hai vị trí)."
            ]
          }
        },
        "5. Tứ giác": {
          "Tứ giác": {
            "Nhận biết": [
              "Mô tả được tứ giác, tứ giác lồi."
            ],
            "Thông hiểu": [
              "Giải thích được định lí về tổng các góc trong một tứ giác lồi bằng 360°."
            ]
          },
          "Tính chất và dấu hiệu nhận biết các tứ giác đặc biệt": {
            "Nhận biết": [
              "Nhận biết được dấu hiệu để một hình thang là hình thang cân (ví dụ: hình thang có hai đường chéo bằng nhau là hình thang cân).",
              "Nhận biết được dấu hiệu để một tứ giác là hình bình hành (ví dụ: tứ giác có hai đường chéo cắt nhau tại trung điểm của mỗi đường là hình bình hành).",
              "Nhận biết được dấu hiệu để một hình bình hành là hình chữ nhật (ví dụ: hình bình hành có hai đường chéo bằng nhau là hình chữ nhật).",
              "Nhận biết được dấu hiệu để một hình bình hành là hình thoi (ví dụ: hình bình hành có hai đường chéo vuông góc với nhau là hình thoi).",
              "Nhận biết được dấu hiệu để một hình chữ nhật là hình vuông (ví dụ: hình chữ nhật có hai đường chéo vuông góc với nhau là hình vuông)."
            ],
            "Thông hiểu": [
              "Giải thích được tính chất về góc kề một đáy, cạnh bên, đường chéo của hình thang cân.",
              "Giải thích được tính chất về cạnh đối, góc đối, đường chéo của hình bình hành.",
              "Giải thích được tính chất về hai đường chéo của hình chữ nhật.",
              "Giải thích được tính chất về đường chéo của hình thoi.",
              "Giải thích được tính chất về hai đường chéo của hình vuông."
            ]
          }
        },
        "6. Định lí Thalès trong tam giác": {
          "Định lí Thalès trong tam giác": {
            "Nhận biết": [
              "Nhận biết được định nghĩa đường trung bình của tam giác."
            ],
            "Thông hiểu": [
              "Giải thích được tính chất đường trung bình của tam giác (đường trung bình của tam giác thì song song với cạnh thứ ba và bằng nửa cạnh đó).",
              "Giải thích được định lí Thalès trong tam giác (định lí thuận và đảo).",
              "Giải thích được tính chất đường phân giác trong của tam giác."
            ],
            "Vận dụng": [
              "Tính được độ dài đoạn thẳng bằng cách sử dụng định lí Thalès.",
              "Giải quyết được một số vấn đề thực tiễn (đơn giản, quen thuộc) gắn với việc vận dụng định lí Thalès (ví dụ: tính khoảng cách giữa hai vị trí)."
            ],
            "Vận dụng cao": [
              "Giải quyết được một số vấn đề thực tiễn (phức hợp, không quen thuộc) gắn với việc vận dụng định lí Thalès"
            ]
          }
        },
        "7. Hình đồng dạng": {
          "Tam giác đồng dạng": {
            "Thông hiểu": [
              "Mô tả được định nghĩa của hai tam giác đồng dạng.",
              "Giải thích được các trường hợp đồng dạng của hai tam giác, của hai tam giác vuông."
            ],
            "Vận dụng": [
              "Giải quyết được một số vấn đề thực tiễn (đơn giản, quen thuộc) gắn với việc vận dụng kiến thức về hai tam giác đồng dạng (ví dụ: tính độ dài đường cao hạ xuống cạnh huyền trong tam giác vuông bằng cách sử dụng mối quan hệ giữa đường cao đó với tích của hai hình chiếu của hai cạnh góc vuông lên cạnh huyền; đo gián tiếp chiều cao của vật; tính khoảng cách giữa hai vị trí trong đó có một vị trí không thể tới được,...)."
            ],
            "Vận dụng cao": [
              "Giải quyết được một số vấn đề thực tiễn (phức hợp, không quen thuộc) gắn với việc vận dụng kiến thức về hai tam giác đồng dạng."
            ]
          },
          "Hình đồng dạng": {
            "Nhận biết": [
              "Nhận biết được hình đồng dạng phối cảnh (hình vị tự), hình đồng dạng qua các hình ảnh cụ thể.",
              "Nhận biết được vẻ đẹp trong tự nhiên, nghệ thuật, kiến trúc, công nghệ chế tạo,... biểu hiện qua hình đồng dạng."
            ]
          }
        }
      }
    ,
    "MỘT SỐ YẾU TỐ THỐNG KÊ VÀ XÁC SUẤT": {
      "8. Thu thập và tổ chức dữ liệu": {
        "Thu thập, phân loại, tổ chức dữ liệu": {
          "Vận dụng": [
            "Thực hiện và lí giải được việc thu thập, phân loại dữ liệu theo các tiêu chí cho trước từ nhiều nguồn khác nhau: văn bản; bảng biểu; kiến thức trong các lĩnh vực giáo dục khác (Địa lí, Lịch sử, Giáo dục môi trường, Giáo dục tài chính,...); phỏng vấn, truyền thông, Internet; thực tiễn (môi trường, tài chính, y tế, giá cả thị trường,...).",
            "Chứng tỏ được tính hợp lí của dữ liệu theo các tiêu chí toán học đơn giản (ví dụ: tính hợp lí trong các số liệu điều tra; tính hợp lí của các quảng cáo,...)."
          ]
        },
        "Mô tả và biểu diễn dữ liệu trên các bảng, biểu đồ": {
          "Nhận biết": [
            "Nhận biết được mối liên hệ toán học đơn giản giữa các số liệu đã được biểu diễn. Từ đó, nhận biết được số liệu không chính xác trong những ví dụ đơn giản."
          ],
          "Thông hiểu": [
            "Mô tả được cách chuyển dữ liệu từ dạng biểu diễn này sang dạng biểu diễn khác"
          ],
          "Vận dụng": [
            "Lựa chọn và biểu diễn được dữ liệu vào bảng, biểu đồ thích hợp ở dạng: bảng thống kê; biểu đồ tranh; biểu đồ dạng cột/cột kép (column chart), biểu đồ hình quạt tròn (cho sẵn) (pie chart); biểu đồ đoạn thẳng (line graph).",
            "So sánh được các dạng biểu diễn khác nhau cho một tập dữ liệu."
          ]
        }
      },
      "9. Phân tích và xử lí dữ liệu": {
        "Hình thành và giải quyết vấn đề đơn giản xuất hiện từ các số liệu và biểu đồ thống kê đã có": {
          "Nhận biết": [
            "Nhận biết được mối liên quan giữa thống kê với những kiến thức trong các môn học khác trong Chương trình lớp 8 (ví dụ: Lịch sử và Địa lí lớp 8, Khoa học tự nhiên lớp 8,...) và trong thực tiễn."
          ],
          "Thông hiểu": [
            "Phát hiện được vấn đề hoặc quy luật đơn giản dựa trên phân tích các số liệu thu được ở dạng: bảng thống kê; biểu đồ tranh; biểu đồ dạng cột/cột kép (column chart), biểu đồ hình quạt tròn (pie chart); biểu đồ đoạn thẳng (line graph)."
          ],
          "Vận dụng": [
            "Giải quyết được những vấn đề đơn giản liên quan đến các số liệu thu được ở dạng: bảng thống kê; biểu đồ tranh; biểu đồ dạng cột/cột kép (column chart), biểu đồ hình quạt tròn (pie chart); biểu đồ đoạn thẳng (line graph)."
          ]
        }
      },
      "10. Một số yếu tố xác suất": {
        "Mô tả xác suất của biến cố ngẫu nhiên trong một số ví dụ đơn giản. Mối liên hệ giữa xác suất thực nghiệm của một biến cố với xác suất của biến cố đó": {
          "Nhận biết": [
            "Nhận biết được mối liên hệ giữa xác suất thực nghiệm của một biến cố với xác suất của biến cố đó thông qua một số ví dụ đơn giản."
          ],
          "Vận dụng": [
            "Sử dụng được tỉ số để mô tả xác suất của một biến cố ngẫu nhiên trong một số ví dụ đơn giản."
          ]
        }
      }
    }
  },
  "Lớp 9": {
    "ĐẠI SỐ": {
      "1. Căn thức": {
        "Căn bậc hai và căn bậc ba của số thực": {
          "Nhận biết": [
            "Nhận biết được khái niệm về căn bậc hai của số thực không âm, căn bậc ba của một số thực."
          ],
          "Thông hiểu": [
            "Tính được giá trị (đúng hoặc gần đúng) căn bậc hai, căn bậc ba của một số hữu tỉ bằng máy tính cầm tay."
          ],
          "Vận dụng": [
            "Thực hiện được một số phép tính đơn giản về căn bậc hai của số thực không âm (căn bậc hai của một bình phương, căn bậc hai của một tích, căn bậc hai của một thương, đưa thừa số ra ngoài dấu căn bậc hai, đưa thừa số vào trong dấu căn bậc hai)."
          ]
        },
        "Căn thức bậc hai và căn thức bậc ba của biểu thức đại số": {
          "Nhận biết": [
            "Nhận biết được khái niệm về căn thức bậc hai và căn thức bậc ba của một biểu thức đại số."
          ],
          "Vận dụng": [
            "Thực hiện được một số phép biến đổi đơn giản về căn thức bậc hai của biểu thức đại số (căn thức bậc hai của một bình phương, căn thức bậc hai của một tích, căn thức bậc hai của một thương, trục căn thức ở mẫu)."
          ]
        }
      },
      "2. Hàm số và đồ thị": {
        "Hàm số y = ax^2 (a ≠ 0) và đồ thị": {
          "Nhận biết": [
            "Nhận biết được tính đối xứng (trục) và trục đối xứng của đồ thị hàm số y = ax^2 (a ≠ 0)."
          ],
          "Thông hiểu": [
            "Thiết lập được bảng giá trị của hàm số y = ax² (a ≠ 0)."
          ],
          "Vận dụng": [
            "Vẽ được đồ thị của hàm số y = ax² (a ≠ 0)."
          ],
          "Vận dụng cao": [
            "Giải quyết được một số vấn đề thực tiễn gắn với hàm số y = ax² (a ≠ 0) và đồ thị (ví dụ: các bài toán liên quan đến chuyển động trong Vật lí,...)."
          ]
        }
      },
      "3. Phương trình và hệ phương trình": {
        "Phương trình quy về phương trình bậc nhất một ẩn": {
          "Vận dụng": [
            "Giải được phương trình tích có dạng (a₁x + b₁).(a₂x + b₂) = 0.",
            "Giải được phương trình chứa ẩn ở mẫu quy về phương trình bậc nhất."
          ]
        },
        "Phương trình và hệ phương trình bậc nhất hai ẩn": {
          "Nhận biết": [
            "Nhận biết được khái niệm phương trình bậc nhất hai ẩn, hệ hai phương trình bậc nhất hai ẩn.",
            "Nhận biết được khái niệm nghiệm của hệ hai phương trình bậc nhất hai ẩn."
          ],
          "Thông hiểu": [
            "Tính được nghiệm của hệ hai phương trình bậc nhất hai ẩn bằng máy tính cầm tay."
          ],
          "Vận dụng": [
            "Giải được hệ hai phương trình bậc nhất hai ẩn.",
            "Giải quyết được một số vấn đề thực tiễn (đơn giản, quen thuộc) gắn với hệ hai phương trình bậc nhất hai ẩn (ví dụ: các bài toán liên quan đến cân bằng phản ứng trong Hoá học,...)."
          ],
          "Vận dụng cao": [
            "Giải quyết được một số vấn đề thực tiễn (phức hợp, không quen thuộc) gắn với hệ hai phương trình bậc nhất hai ẩn."
          ]
        },
        "Phương trình bậc hai một ẩn. Định lí Viète": {
          "Nhận biết": [
            "Nhận biết được khái niệm phương trình bậc hai một ẩn."
          ],
          "Thông hiểu": [
            "Tính được nghiệm phương trình bậc hai một ẩn bằng máy tính cầm tay.",
            "Giải thích được định lí Viète."
          ],
          "Vận dụng": [
            "Giải được phương trình bậc hai một ẩn.",
            "Ứng dụng được định lí Viète vào tính nhẩm nghiệm của phương trình bậc hai, tìm hai số biết tổng và tích của chúng, ...",
            "Vận dụng được phương trình bậc hai vào giải quyết bài toán thực tiễn (đơn giản, quen thuộc)."
          ],
          "Vận dụng cao": [
            "Vận dụng được phương trình bậc hai vào giải quyết bài toán thực tiễn (phức hợp, không quen thuộc)."
          ]
        }
      },
      "4. Bất phương trình bậc nhất một ẩn": {
        "Bất đẳng thức. Bất phương trình bậc nhất một ẩn": {
          "Nhận biết": [
            "Nhận biết được thứ tự trên tập hợp các số thực.",
            "Nhận biết được bất đẳng thức.",
            "Nhận biết được khái niệm bất phương trình bậc nhất một ẩn, nghiệm của bất phương trình bậc nhất một ẩn."
          ],
          "Thông hiểu": [
            "Mô tả được một số tính chất cơ bản của bất đẳng thức (tính chất bắc cầu; liên hệ giữa thứ tự và phép cộng, phép nhân)."
          ],
          "Vận dụng": [
            "Giải được bất phương trình bậc nhất một ẩn."
          ]
        }
      }
    },
    "HÌNH HỌC TRỰC QUAN": {

        "5. Các hình khối trong thực tiễn": {
          "Hình trụ. Hình nón. Hình cầu": {
            "Nhận biết": [
              "Nhận biết được phần chung của mặt phẳng và hình cầu.",
              "Mô tả (đường sinh, chiều cao, bán kính đáy) hình trụ.",
              "Mô tả (đỉnh, đường sinh, chiều cao, bán kính đáy) hình nón.",
              "Mô tả được (tâm, bán kính) hình cầu, mặt cầu."
            ],
            "Thông hiểu": [
              "Tạo lập được hình trụ, hình nón, hình cầu, mặt cầu.",
              "Tính được diện tích xung quanh của hình trụ, hình nón, diện tích mặt cầu.",
              "Tính được thể tích của hình trụ, hình nón, hình cầu."
            ],
            "Vận dụng": [
              "Giải quyết được một số vấn đề thực tiễn gắn với việc tính diện tích xung quanh, thể tích của hình trụ, hình nón, hình cầu (ví dụ: tính thể tích hoặc diện tích xung quanh của một số đồ vật quen thuộc có dạng hình trụ, hình nón, hình cầu,...)."
            ]
          }
        }
      },
      "HÌNH HỌC PHẲNG": {
        "6. Hệ thức lượng trong tam giác vuông": {
          "Tỉ số lượng giác của góc nhọn. Một số hệ thức về cạnh và góc trong tam giác vuông": {
            "Nhận biết": [
              "Nhận biết được các giá trị sin (sine), côsin (cosine), tang (tangent), côtang (cotangent) của góc nhọn."
            ],
            "Thông hiểu": [
              "Giải thích được tỉ số lượng giác của các góc nhọn đặc biệt (góc 30°, 45°, 60°) và của hai góc phụ nhau.",
              "Giải thích được một số hệ thức về cạnh và góc trong tam giác vuông (cạnh góc vuông bằng cạnh huyền nhân với sin góc đối hoặc nhân với côsin góc kề; cạnh góc vuông bằng cạnh góc vuông kia nhân với tang góc đối hoặc nhân với côtang góc kề).",
              "Tính được giá trị (đúng hoặc gần đúng) tỉ số lượng giác của góc nhọn bằng máy tính cầm tay."
            ],
            "Vận dụng": [
              "Giải quyết được một số vấn đề thực tiễn gắn với tỉ số lượng giác của góc nhọn (ví dụ: Tính độ dài đoạn thẳng, độ lớn góc và áp dụng giải tam giác vuông,...)."
            ]
          }
        },
        "7. Đường tròn": {
          "Đường tròn. Vị trí tương đối của hai đường tròn": {
            "Nhận biết": [
              "Nhận biết được tâm đối xứng, trục đối xứng của đường tròn."
            ],
            "Thông hiểu": [
              "Mô tả được ba vị trí tương đối của hai đường tròn (hai đường tròn cắt nhau, hai đường tròn tiếp xúc nhau, hai đường tròn không giao nhau)."
            ],
            "Vận dụng": [
              "So sánh được độ dài của đường kính và dây."
            ]
          },
          "Vị trí tương đối của đường thẳng và đường tròn. Tiếp tuyến của đường tròn": {
            "Thông hiểu": [
              "Mô tả được ba vị trí tương đối của đường thẳng và đường tròn (đường thẳng và đường tròn cắt nhau, đường thẳng và đường tròn tiếp xúc nhau, đường thẳng và đường tròn không giao nhau).",
              "Giải thích được dấu hiệu nhận biết tiếp tuyến của đường tròn và tính chất của hai tiếp tuyến cắt nhau."
            ]
          },
          "Góc ở tâm, góc nội tiếp": {
            "Nhận biết": [
              "Nhận biết được góc ở tâm, góc nội tiếp."
            ],
            "Thông hiểu": [
              "Giải thích được mối liên hệ giữa số đo của cung với số đo góc ở tâm, số đo góc nội tiếp.",
              "Giải thích được mối liên hệ giữa số đo góc nội tiếp và số đo góc ở tâm cùng chắn một cung."
            ]
          },
          "Đường tròn ngoại tiếp tam giác. Đường tròn nội tiếp tam giác": {
            "Nhận biết": [
              "Nhận biết được định nghĩa đường tròn ngoại tiếp tam giác.",
              "Nhận biết được định nghĩa đường tròn nội tiếp tam giác."
            ],
            "Vận dụng": [
              "Xác định được tâm và bán kính đường tròn ngoại tiếp tam giác, trong đó có tâm và bán kính đường tròn ngoại tiếp tam giác vuông, tam giác đều.",
              "Xác định được tâm và bán kính đường tròn nội tiếp tam giác, trong đó có tâm và bán kính đường tròn nội tiếp tam giác đều."
            ]
          },
          "Tứ giác nội tiếp": {
            "Nhận biết": [
              "Nhận biết được tứ giác nội tiếp đường tròn."
            ],
            "Thông hiểu": [
              "Giải thích được định lí về tổng hai góc đối của tứ giác nội tiếp bằng 180°.",
              "Xác định được tâm và bán kính đường tròn ngoại tiếp hình chữ nhật, hình vuông."
            ],
            "Vận dụng": [
              "Tính được độ dài cung tròn, diện tích hình quạt tròn, diện tích hình vành khuyên (hình giới hạn bởi hai đường tròn đồng tâm).",
              "Giải quyết được một số vấn đề thực tiễn (đơn giản, quen thuộc) gắn với đường tròn (ví dụ: một số bài toán liên quan đến chuyển động tròn trong Vật lí; tính được diện tích một số hình phẳng có thể đưa về những hình phẳng gắn với hình tròn, chẳng hạn hình viên phân,...)."
            ],
            "Vận dụng cao": [
              "Giải quyết được một số vấn đề thực tiễn (phức hợp, không quen thuộc) gắn với đường tròn."
            ]
          }
        },
        "8. Đa giác đều": {
          "Đa giác đều": {
            "Nhận biết": [
              "Nhận dạng được đa giác đều.",
              "Nhận biết được phép quay.",
              "Nhận biết được những hình phẳng đều trong tự nhiên, nghệ thuật, kiến trúc, công nghệ chế tạo,...",
              "Nhận biết được vẻ đẹp của thế giới tự nhiên biểu hiện qua tính đều."
            ],
            "Thông hiểu": [
              "Mô tả được các phép quay giữ nguyên hình đa giác đều."
            ]
          }
        }
      },

    "MỘT SỐ YẾU TỐ THỐNG KÊ VÀ XÁC SUẤT": {
      "Một số yếu tố thống kê": {
        "9. Thu thập và tổ chức dữ liệu": {
          "Mô tả và biểu diễn dữ liệu trên các bảng, biểu đồ": {
            "Thông hiểu": [
              "Lí giải và thiết lập được dữ liệu vào bảng, biểu đồ thích hợp ở dạng: bảng thống kê; biểu đồ tranh; biểu đồ dạng cột/cột kép (column chart), biểu đồ hình quạt tròn (pie chart); biểu đồ đoạn thẳng (line graph)."
            ],
            "Vận dụng": [
              "Phát hiện và lí giải được số liệu không chính xác dựa trên mối liên hệ toán học đơn giản giữa các số liệu đã được biểu diễn trong những ví dụ đơn giản.",
              "Lí giải và thực hiện được cách chuyển dữ liệu từ dạng biểu diễn này sang dạng biểu diễn khác."
            ]
          }
        },
        "Phân tích và xử lý dữ liệu": {
          "Bảng tần số, biểu đồ tần số. Bảng tần số tương đối, biểu đồ tần số tương đối": {
            "Nhận biết": [
              "Nhận biết được mối liên hệ giữa thống kê với những kiến thức của các môn học khác trong Chương trình lớp 9 và trong thực tiễn."
            ],
            "Thông hiểu": [
              "Giải thích được ý nghĩa và vai trò của tần số trong thực tiễn.",
              "Giải thích được ý nghĩa và vai trò của tần số tương đối trong thực tiễn."
            ],
            "Vận dụng": [
              "Xác định được tần số (frequency) của một giá trị.",
              "Xác định được tần số tương đối (relative frequency) của một giá trị.",
              "Thiết lập được bảng tần số, biểu đồ tần số (biểu diễn các giá trị và tần số của chúng ở dạng biểu đồ cột hoặc biểu đồ đoạn thẳng).",
              "Thiết lập được bảng tần số tương đối, biểu đồ tần số tương đối (biểu diễn các giá trị và tần số tương đối của chúng ở dạng biểu đồ cột hoặc biểu đồ hình quạt tròn).",
              "Thiết lập được bảng tần số ghép nhóm, bảng tần số tương đối ghép nhóm.",
              "Thiết lập được biểu đồ tần số tương đối ghép nhóm (histogram) (ở dạng biểu đồ cột hoặc biểu đồ đoạn thẳng)."
            ]
          }
        }
      },
      "Một số yếu tố xác suất": {
        "10. Một số yếu tố xác suất": {
          "Phép thử ngẫu nhiên và không gian mẫu. Xác suất của biến cố trong một số mô hình xác suất đơn giản": {
            "Nhận biết": [
              "Nhận biết được phép thử ngẫu nhiên và không gian mẫu."
            ],
            "Vận dụng": [
              "Tính được xác suất của biến cố bằng cách kiểm đếm số trường hợp có thể và số trường hợp thuận lợi trong một số mô hình xác suất đơn giản."
            ]
          }
        }
      }
    }
  },
    "Lớp 10": {
      "ĐẠI SỐ VÀ MỘT SỐ YẾU TỐ GIẢI TÍCH": {
        "1. Tập hợp. Mệnh đề": {
          "Mệnh đề toán học. Mệnh đề phủ định. Mệnh đề đảo. Mệnh đề tương đương. Điều kiện cần và đủ.": {
            "Nhận biết": [
              "Phát biểu được các mệnh đề toán học, bao gồm: mệnh đề phủ định; mệnh đề đảo; mệnh đề tương đương; mệnh đề có chứa kí hiệu V, 3; điều kiện cần, điều kiện đủ, điều kiện cần và đủ."
            ],
            "Thông hiểu": [
              "Thiết lập được các mệnh đề toán học, bao gồm: mệnh đề phủ định; mệnh đề đảo; mệnh đề tương đương; mệnh đề có chứa kí hiệu V, 3; điều kiện cần, điều kiện đủ, điều kiện cần và đủ.",
              "Xác định được tính đúng/sai của một mệnh đề toán học trong những trường hợp đơn giản."
            ],
            "Vận dụng": [],
            "Vận dụng cao": []
          },
          "Tập hợp. Các phép toán trên tập hợp": {
            "Nhận biết": [
              "Nhận biết được các khái niệm cơ bản về tập hợp (tập con, hai tập hợp bằng nhau, tập rỗng) và biết sử dụng các kí hiệu C, D, Ø."
            ],
            "Thông hiểu": [
              "Thực hiện được phép toán trên các tập hợp (hợp, giao, hiệu của hai tập hợp, phần bù của một tập con) và biết dùng biểu đồ Ven để biểu diễn chúng trong những trường hợp cụ thể."
            ],
            "Vận dụng": [
              "Giải quyết được một số vấn đề thực tiễn gắn với phép toán trên tập hợp (ví dụ: những bài toán liên quan đến đếm số phần tử của hợp các tập hợp,...)."
            ],
            "Vận dụng cao": []
          }
        },
        "2. Bất phương trình và hệ bất phương trình bậc nhất hai ẩn": {
          "Bất phương trình, hệ bất phương trình bậc nhất hai ẩn và ứng dụng": {
            "Nhận biết": [
              "Nhận biết được bất phương trình và hệ bất phương trình bậc nhất hai ẩn."
            ],
            "Thông hiểu": [
              "Biểu diễn được miền nghiệm của bất phương trình và hệ bất phương trình bậc nhất hai ẩn trên mặt phẳng toạ độ."
            ],
            "Vận dụng": [
              "Vận dụng được kiến thức về bất phương trình, hệ bất phương trình bậc nhất hai ẩn vào giải quyết một số bài toán thực tiễn (đơn giản, quen thuộc) (ví dụ: bài toán tìm cực trị của biểu thức $F = ax + by$ trên một miền đa giác,...)."
            ],
            "Vận dụng cao": [
              "Vận dụng được kiến thức về bất phương trình, hệ bất phương trình bậc nhất hai ẩn vào giải quyết một số bài toán thực tiễn (phức hợp, không quen thuộc)."
            ]
          }
        },
        "3. Hàm số và đồ thị": {
          "Khái niệm cơ bản về hàm số và đồ thị": {
            "Nhận biết": [
              "Nhận biết được những mô hình thực tế (dạng bảng, biểu đồ, công thức) dẫn đến khái niệm hàm số."
            ],
            "Thông hiểu": [
              "Mô tả được các khái niệm cơ bản về hàm số: định nghĩa hàm số, tập xác định, tập giá trị, hàm số đồng biến, hàm số nghịch biến, đồ thị của hàm số.",
              "Mô tả được các đặc trưng hình học của đồ thị hàm số đồng biến, hàm số nghịch biến."
            ],
            "Vận dụng": [
              "Vận dụng được kiến thức của hàm số vào giải quyết một số bài toán thực tiễn (đơn giản, quen thuộc) (ví dụ: xây dựng hàm số bậc nhất trên những khoảng khác nhau để tính số tiền $y$ (phải trả) theo số phút gọi $x$ đối với một gói cước điện thoại,...)."
            ],
            "Vận dụng cao": [
              "Vận dụng được kiến thức của hàm số vào giải quyết một số bài toán thực tiễn (phức hợp, không quen thuộc)."
            ]
          },
          "Hàm số bậc hai, đồ thị hàm số bậc hai và ứng dụng": {
            "Nhận biết": [
              "Nhận biết được các tính chất cơ bản của Parabola như đỉnh, trục đối xứng.",
              "Nhận biết và giải thích được các tính chất của hàm số bậc hai thông qua đồ thị."
            ],
            "Thông hiểu": [
              "Thiết lập được bảng giá trị của hàm số bậc hai.",
              "Giải thích được các tính chất của hàm số bậc hai thông qua đồ thị."
            ],
            "Vận dụng": [
              "Vẽ được Parabola (parabol) là đồ thị hàm số bậc hai.",
              "Vận dụng được kiến thức về hàm số bậc hai và đồ thị vào giải quyết một số bài toán thực tiễn (đơn giản, quen thuộc) (ví dụ: xác định độ cao của cầu, cổng có hình dạng Parabola,...)."
            ],
            "Vận dụng cao": [
              "Vận dụng được kiến thức về hàm số bậc hai và đồ thị vào giải quyết một số bài toán thực tiễn (phức hợp, không quen thuộc)."
            ]
          },
          "Dấu của tam thức bậc hai. Bất phương trình bậc hai một ẩn": {
            "Nhận biết": [],
            "Thông hiểu": [
              "Giải thích được định lí về dấu của tam thức bậc hai từ việc quan sát đồ thị của hàm bậc hai."
            ],
            "Vận dụng": [
              "Giải được bất phương trình bậc hai.",
              "Vận dụng được bất phương trình bậc hai một ẩn vào giải quyết một số bài toán thực tiễn (đơn giản, quen thuộc) (ví dụ: xác định chiều cao tối đa để xe có thể qua hầm có hình dạng Parabola,...)."
            ],
            "Vận dụng cao": [
              "Vận dụng được bất phương trình bậc hai một ẩn vào giải quyết một số bài toán thực tiễn (phức hợp, không quen thuộc)."
            ]
          },
          "Phương trình quy về phương trình bậc hai": {
            "Nhận biết": [],
            "Thông hiểu": [],
            "Vận dụng": [
              "Giải được phương trình chứa căn thức có dạng: $\\sqrt{ax^2 + bx + c} = \\sqrt{dx^2 + ex + f}$; $\\sqrt{ax^2 + bx + c} = dx + e$."
            ],
            "Vận dụng cao": []
          }
        },
        "4. Đại số tổ hợp": {
          "Các quy tắc đếm (quy tắc cộng, quy tắc nhân, chỉnh hợp, hoán vị, tổ hợp) và ứng dụng trong thực tiễn": {
            "Nhận biết": [],
            "Thông hiểu": [
              "Tính được số các hoán vị, chỉnh hợp, tổ hợp bằng máy tính cầm tay."
            ],
            "Vận dụng": [
              "Tính được số các hoán vị, chỉnh hợp, tổ hợp.",
              "Vận dụng được quy tắc cộng và quy tắc nhân trong một số tình huống đơn giản (ví dụ: đếm số khả năng xuất hiện mặt sấp/ngửa khi tung một số đồng xu,...).",
              "Vận dụng được sơ đồ hình cây trong các bài toán đếm đơn giản các đối tượng trong Toán học, trong các môn học khác cũng như trong thực tiễn (ví dụ: đếm số hợp tử tạo thành trong Sinh học, hoặc đếm số trận đấu trong một giải thể thao,...)."
            ],
            "Vận dụng cao": []
          },
          "Nhị thức Newton với số mũ không quá 5": {
            "Nhận biết": [],
            "Thông hiểu": [],
            "Vận dụng": [
              "Khai triển được nhị thức Newton $(a + b)^n$ với số mũ thấp $(n = 4$ hoặc $n = 5)$ bằng cách vận dụng tổ hợp."
            ],
            "Vận dụng cao": []
          }
        }
      },
      "HÌNH HỌC VÀ ĐO LƯỜNG": {
        "5. Hệ thức lượng trong tam giác. Vectơ": {
          "Hệ thức lượng trong tam giác. Định lí côsin. Định lí sin. Công thức tính diện tích tam giác. Giải tam giác": {
            "Nhận biết": [
              "Nhận biết được giá trị lượng giác của một góc từ $0^\\circ$ đến $180^\\circ$."
            ],
            "Thông hiểu": [
              "Tính được giá trị lượng giác (đúng hoặc gần đúng) của một góc từ $0^\\circ$ đến $180^\\circ$ bằng máy tính cầm tay.",
              "Giải thích được hệ thức liên hệ giữa giá trị lượng giác của các góc phụ nhau, bù nhau.",
              "Giải thích được các hệ thức lượng cơ bản trong tam giác: định lí côsin, định lí sin, công thức tính diện tích tam giác."
            ],
            "Vận dụng": [
              "Mô tả được cách giải tam giác và vận dụng được vào việc giải một số bài toán có nội dung thực tiễn (đơn giản, quen thuộc) (ví dụ: xác định khoảng cách giữa hai địa điểm khi gặp vật cản, xác định chiều cao của vật khi không thể đo trực tiếp,...)."
            ],
            "Vận dụng cao": [
              "Vận dụng được cách giải tam giác vào việc giải một số bài toán có nội dung thực tiễn (phức hợp, không quen thuộc)."
            ]
          },
          "Vectơ, các phép toán (tổng và hiệu hai vectơ, tích của một số với vectơ, tích vô hướng của hai vectơ) và một số ứng dụng trong Vật lí": {
            "Nhận biết": [
              "Nhận biết được khái niệm vectơ, vectơ bằng nhau, vectơ-không."
            ],
            "Thông hiểu": [
              "Thực hiện được các phép toán trên vectơ (tổng và hiệu hai vectơ, tích của một số với vectơ, tích vô hướng của hai vectơ)",
              "Mô tả được những tính chất hình học (ba điểm thẳng hàng, trung điểm của đoạn thẳng, trọng tâm của tam giác,...) bằng vectơ."
            ],
            "Vận dụng": [
              "Sử dụng được vectơ và các phép toán trên vectơ để giải thích một số hiện tượng có liên quan đến Vật lí và Hoá học (ví dụ: những vấn đề liên quan đến lực, đến chuyển động,...).",
              "Vận dụng được kiến thức về vectơ để giải một số bài toán hình học và một số bài toán liên quan đến thực tiễn (đơn giản, quen thuộc) (ví dụ: xác định lực tác dụng lên vật,...)."
            ],
            "Vận dụng cao": [
              "Vận dụng được kiến thức về vectơ để giải một số bài toán hình học và một số bài toán liên quan đến thực tiễn (phức hợp, không quen thuộc)."
            ]
          }
        },
        "6. Phương pháp toạ độ trong mặt phẳng": {
          "Toạ độ của vectơ đối với một hệ trục toạ độ. Biểu thức toạ độ của các phép toán vectơ. Ứng dụng vào bài toán giải tam giác": {
            "Nhận biết": [
              "Nhận biết được toạ độ của vectơ đối với một hệ trục toạ độ."
            ],
            "Thông hiểu": [
              "Tìm được toạ độ của một vectơ, độ dài của một vectơ khi biết toạ độ hai đầu mút của nó.",
              "Sử dụng được biểu thức toạ độ của các phép toán vectơ trong tính toán."
            ],
            "Vận dụng": [
              "Vận dụng được phương pháp toạ độ vào bài toán giải tam giác.",
              "Vận dụng được kiến thức về toạ độ của vectơ để giải một số bài toán liên quan đến thực tiễn (đơn giản, quen thuộc) (ví dụ: vị trí của vật trên mặt phẳng toạ độ,...)."
            ],
            "Vận dụng cao": [
              "Vận dụng được kiến thức về toạ độ của vectơ để giải một số bài toán liên quan đến thực tiễn (phức hợp, không quen thuộc)."
            ]
          },
          "Đường thẳng trong mặt phẳng toạ độ. Phương trình tổng quát và phương trình tham số của đường thẳng. Khoảng cách từ một điểm đến một đường thẳng": {
            "Nhận biết": [
              "Nhận biết được hai đường thẳng cắt nhau, song song, trùng nhau, vuông góc với nhau bằng phương pháp toạ độ."
            ],
            "Thông hiểu": [
              "Mô tả được phương trình tổng quát và phương trình tham số của đường thẳng trong mặt phẳng toạ độ.",
              "Thiết lập được phương trình của đường thẳng trong mặt phẳng khi biết: một điểm và một vectơ pháp tuyến; biết một điểm và một vectơ chỉ phương; biết hai điểm.",
              "Thiết lập được công thức tính góc giữa hai đường thẳng.",
              "Giải thích được mối liên hệ giữa đồ thị hàm số bậc nhất và đường thẳng trong mặt phẳng toạ độ."
            ],
            "Vận dụng": [
              "Tính được khoảng cách từ một điểm đến một đường thẳng bằng phương pháp toạ độ.",
              "Vận dụng được kiến thức về phương trình đường thẳng để giải một số bài toán có liên quan đến thực tiễn (đơn giản, quen thuộc)."
            ],
            "Vận dụng cao": [
              "Vận dụng được kiến thức về phương trình đường thẳng để giải một số bài toán có liên quan đến thực tiễn (phức hợp, không quen thuộc)."
            ]
          },
          "Đường tròn trong mặt phẳng toạ độ và ứng dụng": {
            "Nhận biết": [],
            "Thông hiểu": [
              "Thiết lập được phương trình đường tròn khi biết toạ độ tâm và bán kính; biết toạ độ ba điểm mà đường tròn đi qua;",
              "Xác định được tâm và bán kính đường tròn khi biết phương trình của đường tròn."
            ],
            "Vận dụng": [
              "Thiết lập được phương trình tiếp tuyến của đường tròn khi biết toạ độ của tiếp điểm.",
              "Vận dụng được kiến thức về phương trình đường tròn để giải một số bài toán liên quan đến thực tiễn (đơn giản, quen thuộc) (ví dụ: bài toán về chuyển động tròn trong Vật lí,...)."
            ],
            "Vận dụng cao": [
              "Vận dụng được kiến thức về phương trình đường tròn để giải một số bài toán liên quan đến thực tiễn (phức hợp, không quen thuộc)."
            ]
          },
          "Ba đường conic trong mặt phẳng toạ độ và ứng dụng": {
            "Nhận biết": [
              "Nhận biết được ba đường conic bằng hình học.",
              "Nhận biết được phương trình chính tắc của ba đường conic trong mặt phẳng toạ độ."
            ],
            "Thông hiểu": [],
            "Vận dụng": [
              "Giải quyết được một số vấn đề thực tiễn gắn (đơn giản, quen thuộc) với ba đường conic (ví dụ: giải thích một số hiện tượng trong Quang học,...)."
            ],
            "Vận dụng cao": [
              "Giải quyết được một số vấn đề thực tiễn (phức hợp, không quen thuộc) gắn với ba đường conic."
            ]
          }
        }
      },
      "THỐNG KÊ VÀ XÁC SUẤT": {
        "7. Thống kê": {
          "Số gần đúng. Sai số": {
            "Nhận biết": [
              "Hiểu được khái niệm số gần đúng, sai số tuyệt đối."
            ],
            "Thông hiểu": [
              "Xác định được số gần đúng của một số với độ chính xác cho trước.",
              "Xác định được sai số tương đối của số gần đúng."
            ],
            "Vận dụng": [
              "Xác định được số quy tròn của số gần đúng với độ chính xác cho trước.",
              "Biết sử dụng máy tính cầm tay để tính toán với các số gần đúng."
            ],
            "Vận dụng cao": []
          },
          "Mô tả và biểu diễn dữ liệu trên các bảng, biểu đồ": {
            "Nhận biết": [],
            "Thông hiểu": [
              "Phát hiện và lí giải được số liệu không chính xác dựa trên mối liên hệ toán học đơn giản giữa các số liệu đã được biểu diễn trong nhiều ví dụ."
            ],
            "Vận dụng": [],
            "Vận dụng cao": []
          },
          "Các số đặc trưng đo xu thế trung tâm cho mẫu số liệu không ghép nhóm": {
            "Nhận biết": [],
            "Thông hiểu": [],
            "Vận dụng": [
              "Tính được số đặc trưng đo xu thế trung tâm cho mẫu số liệu không ghép nhóm: số trung bình cộng (hay số trung bình), trung vị (median), tứ phân vị (quartiles), mốt (mode)."
            ],
            "Vận dụng cao": [
              "Giải thích được ý nghĩa và vai trò của các số đặc trưng nói trên của mẫu số liệu trong thực tiễn.",
              "Chỉ ra được những kết luận nhờ ý nghĩa của số đặc trưng nói trên của mẫu số liệu trong trường hợp đơn giản."
            ]
          },
          "Các số đặc trưng đo mức độ phân tán cho mẫu số liệu không ghép nhóm": {
            "Nhận biết": [
              "Nhận biết được mối liên hệ giữa thống kê với những kiến thức của các môn học trong Chương trình lớp 10 và trong thực tiễn."
            ],
            "Thông hiểu": [
              "Giải thích được ý nghĩa và vai trò của các số đặc trưng nói trên của mẫu số liệu trong thực tiễn."
            ],
            "Vận dụng": [
              "Tính được số đặc trưng đo mức độ phân tán cho mẫu số liệu không ghép nhóm: khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn."
            ],
            "Vận dụng cao": [
              "Chỉ ra được những kết luận nhờ ý nghĩa của số đặc trưng nói trên của mẫu số liệu trong trường hợp đơn giản."
            ]
          }
        },
        "8. Xác suất": {
          "Một số khái niệm về xác suất cổ điển": {
            "Nhận biết": [
              "Nhận biết được một số khái niệm về xác suất cổ điển: phép thử ngẫu nhiên; không gian mẫu; biến cố (biến cố là tập con của không gian mẫu); biến cố đối; định nghĩa cổ điển của xác suất; nguyên lí xác suất bé."
            ],
            "Thông hiểu": [
              "Mô tả được không gian mẫu, biến cố trong một số thí nghiệm đơn giản (ví dụ: tung đồng xu hai lần, tung đồng xu ba lần, tung xúc xắc hai lần)."
            ],
            "Vận dụng": [],
            "Vận dụng cao": []
          },
          "Thực hành tính toán xác suất trong những trường hợp đơn giản": {
            "Nhận biết": [],
            "Thông hiểu": [],
            "Vận dụng": [
              "Tính được xác suất của biến cố trong một số bài toán đơn giản bằng phương pháp tổ hợp (trường hợp xác suất phân bố đều).",
              "Tính được xác suất trong một số thí nghiệm lặp bằng cách sử dụng sơ đồ hình cây (ví dụ: tung xúc xắc hai lần, tính xác suất để tổng số chấm xuất hiện trong hai lần tung bằng 7)."
            ],
            "Vận dụng cao": []
          },
          "Các quy tắc tính xác suất": {
            "Nhận biết": [],
            "Thông hiểu": [
              "Mô tả được các tính chất cơ bản của xác suất."
            ],
            "Vận dụng": [
              "Tính được xác suất của biến cố đối."
            ],
            "Vận dụng cao": []
          }
        }
      }
    },
    "Lớp 11": {
      "ĐẠI SỐ VÀ MỘT SỐ YẾU TỐ GIẢI TÍCH": {
        "1. Hàm số lượng giác và phương trình lượng giác": {
          "Góc lượng giác. Số đo của góc lượng giác. Đường tròn lượng giác. Giá trị lượng giác của góc lượng giác, quan hệ giữa các giá trị lượng giác. Các phép biến đổi lượng giác (công thức cộng; công thức nhân đôi; công thức biến đổi tích thành tổng; công thức biến đổi tổng thành tích)": {
            "Nhận biết": [
              "Nhận biết được các khái niệm cơ bản về góc lượng giác: khái niệm góc lượng giác; số đo của góc lượng giác; hệ thức Chasles cho các góc lượng giác; đường tròn lượng giác.",
              "Nhận biết được khái niệm giá trị lượng giác của một góc lượng giác."
            ],
            "Thông hiểu": [
              "Mô tả được bảng giá trị lượng giác của một số góc lượng giác thường gặp; hệ thức cơ bản giữa các giá trị lượng giác của một góc lượng giác; quan hệ giữa các giá trị lượng giác của các góc lượng giác có liên quan đặc biệt: bù nhau, phụ nhau, đối nhau, hơn kém nhau $\\pi$.",
              "Mô tả được các phép biến đổi lượng giác cơ bản: công thức cộng; công thức góc nhân đôi; công thức biến đổi tích thành tổng và công thức biến đổi tổng thành tích."
            ],
            "Vận dụng": [
              "Sử dụng được máy tính cầm tay để tính giá trị lượng giác của một góc lượng giác khi biết số đo của góc đó."
            ],
            "Vận dụng cao": [
              "Giải quyết được một số vấn đề thực tiễn gắn với giá trị lượng giác của góc lượng giác và các phép biến đổi lượng giác."
            ]
          },
          "Hàm số lượng giác và đồ thị": {
            "Nhận biết": [
              "Nhận biết được các khái niệm về hàm số chẵn, hàm số lẻ, hàm số tuần hoàn.",
              "Nhận biết được các đặc trưng hình học của đồ thị hàm số chẵn, hàm số lẻ, hàm số tuần hoàn.",
              "Nhận biết được định nghĩa các hàm lượng giác $y = \\sin x, y = \\cos x, y = \\tan x, y = \\cot x$ thông qua đường tròn lượng giác."
            ],
            "Thông hiểu": [
              "Mô tả được bảng giá trị của các hàm lượng giác $y = \\sin x, y = \\cos x, y = \\tan x, y = \\cot x$ trên một chu kì.",
              "Giải thích được: tập xác định; tập giá trị; tính chất chẵn, lẻ; tính tuần hoàn; chu kì; khoảng đồng biến, nghịch biến của các hàm số $y = \\sin x, y = \\cos x, y = \\tan x, y = \\cot x$ dựa vào đồ thị."
            ],
            "Vận dụng": [
              "Vẽ được đồ thị của các hàm số $y = \\sin x, y = \\cos x, y = \\tan x, y = \\cot x$."
            ],
            "Vận dụng cao": [
              "Giải quyết được một số vấn đề thực tiễn gắn với hàm số lượng giác (ví dụ: một số bài toán có liên quan đến dao động điều hoà trong Vật lí,...)."
            ]
          },
          "Phương trình lượng giác cơ bản": {
            "Nhận biết": [
              "Nhận biết được công thức nghiệm của phương trình lượng giác cơ bản: $\\sin x = m; \\cos x = m; \\tan x = m; \\cot x = m$ bằng cách vận dụng đồ thị hàm số lượng giác tương ứng."
            ],
            "Thông hiểu": [],
            "Vận dụng": [
              "Tính được nghiệm gần đúng của phương trình lượng giác cơ bản bằng máy tính cầm tay.",
              "Giải được phương trình lượng giác ở dạng vận dụng trực tiếp phương trình lượng giác cơ bản (ví dụ: giải phương trình lượng giác dạng $\\sin 2x = \\sin 3x, \\sin x = \\cos 3x$)."
            ],
            "Vận dụng cao": [
              "Giải quyết được một số vấn đề thực tiễn gắn với phương trình lượng giác (ví dụ: một số bài toán liên quan đến dao động điều hòa trong Vật lí,...)."
            ]
          }
        },
        "2. Dãy số. Cấp số cộng. Cấp số nhân": {
          "Dãy số. Dãy số tăng, dãy số giảm": {
            "Nhận biết": [
              "Nhận biết được dãy số hữu hạn, dãy số vô hạn.",
              "Nhận biết được tính chất tăng, giảm, bị chặn của dãy số trong những trường hợp đơn giản."
            ],
            "Thông hiểu": [
              "Thể hiện được cách cho dãy số bằng liệt kê các số hạng; bằng công thức tổng quát; bằng hệ thức truy hồi; bằng cách mô tả."
            ],
            "Vận dụng": [],
            "Vận dụng cao": []
          },
          "Cấp số cộng. Số hạng tổng quát của cấp số cộng. Tổng của $n$ số hạng đầu tiên của cấp số cộng": {
            "Nhận biết": [
              "Nhận biết được một dãy số là cấp số cộng."
            ],
            "Thông hiểu": [
              "Giải thích được công thức xác định số hạng tổng quát của cấp số cộng."
            ],
            "Vận dụng": [
              "Tính được tổng của $n$ số hạng đầu tiên của cấp số cộng."
            ],
            "Vận dụng cao": [
              "Giải quyết được một số vấn đề thực tiễn gắn với cấp số cộng để giải một số bài toán liên quan đến thực tiễn (ví dụ: một số vấn đề trong Sinh học, trong Giáo dục dân số,...)."
            ]
          },
          "Cấp số nhân. Số hạng tổng quát của cấp số nhân. Tổng của $n$ số hạng đầu tiên của cấp số nhân": {
            "Nhận biết": [
              "Nhận biết được một dãy số là cấp số nhân."
            ],
            "Thông hiểu": [
              "Giải thích được công thức xác định số hạng tổng quát của cấp số nhân."
            ],
            "Vận dụng": [
              "Tính được tổng của $n$ số hạng đầu tiên của cấp số nhân."
            ],
            "Vận dụng cao": [
              "Giải quyết được một số vấn đề thực tiễn gắn với cấp số nhân để giải một số bài toán liên quan đến thực tiễn (ví dụ: một số vấn đề trong Sinh học, trong Giáo dục dân số,...)."
            ]
          }
        },
        "3. Giới hạn. Hàm số liên tục": {
          "Giới hạn của dãy số. Phép toán giới hạn dãy số. Tổng của một cấp số nhân lùi vô hạn": {
            "Nhận biết": [
              "Nhận biết được khái niệm giới hạn của dãy số."
            ],
            "Thông hiểu": [
              "Giải thích được một số giới hạn cơ bản như: $\\lim_{n\\to+\\infty} \\frac{1}{n^k} = 0 (k \\in \\mathbb{N}^*)$; $\\lim_{n\\to+\\infty} q^n = 0 (|q|<1)$; $\\lim_{n\\to+\\infty} c = c$ với $c$ là hằng số."
            ],
            "Vận dụng": [
              "Vận dụng được các phép toán giới hạn dãy số để tìm giới hạn của một số dãy số đơn giản (ví dụ: $\\lim_{n\\to+\\infty} \\frac{2n+1}{n}$; $\\lim_{n\\to+\\infty} \\frac{\\sqrt{4n^2 + 1}}{n}$)."
            ],
            "Vận dụng cao": [
              "Tính được tổng của một cấp số nhân lùi vô hạn và vận dụng được kết quả đó để giải quyết một số tình huống thực tiễn giả định hoặc liên quan đến thực tiễn."
            ]
          },
          "Giới hạn của hàm số. Phép toán giới hạn hàm số": {
            "Nhận biết": [
              "Nhận biết được khái niệm giới hạn hữu hạn của hàm số, giới hạn hữu hạn một phía của hàm số tại một điểm.",
              "Nhận biết được khái niệm giới hạn hữu hạn của hàm số tại vô cực.",
              "Nhận biết được khái niệm giới hạn vô cực (một phía) của hàm số tại một điểm."
            ],
            "Thông hiểu": [
              "Mô tả được một số giới hạn hữu hạn của hàm số tại vô cực cơ bản như: $\\lim_{x\\to+\\infty} \\frac{c}{x^k} = 0, \\lim_{x\\to-\\infty} \\frac{c}{x^k} = 0$ với $c$ là hằng số và $k$ là số nguyên dương.",
              "Hiểu được một số giới hạn vô cực (một phía) của hàm số tại một điểm cơ bản như: $\\lim_{x\\to a^+} \\frac{1}{x-a} = +\\infty; \\lim_{x\\to a^-} \\frac{1}{x-a} = -\\infty$."
            ],
            "Vận dụng": [
              "Tính được một số giới hạn hàm số bằng cách vận dụng các phép toán trên giới hạn hàm số."
            ],
            "Vận dụng cao": [
              "Giải quyết được một số vấn đề thực tiễn gắn với giới hạn hàm số."
            ]
          },
          "Hàm số liên tục": {
            "Nhận biết": [
              "Nhận dạng được hàm số liên tục tại một điểm, hoặc trên một khoảng, hoặc trên một đoạn.",
              "Nhận dạng được tính liên tục của tổng, hiệu, tích, thương của hai hàm số liên tục.",
              "Nhận biết được tính liên tục của một số hàm sơ cấp cơ bản (như hàm đa thức, hàm phân thức, hàm căn thức, hàm lượng giác) trên tập xác định của chúng."
            ],
            "Thông hiểu": [],
            "Vận dụng": [],
            "Vận dụng cao": []
          }
        },
        "4. Hàm số mũ và hàm số lôgarit": {
          "Phép tính luỹ thừa với số mũ nguyên, số mũ hữu tỉ, số mũ thực. Các tính chất": {
            "Nhận biết": [
              "Nhận biết được khái niệm luỹ thừa với số mũ nguyên của một số thực khác 0; luỹ thừa với số mũ hữu tỉ và luỹ thừa với số mũ thực của một số thực dương."
            ],
            "Thông hiểu": [
              "Giải thích được các tính chất của phép tính luỹ thừa với số mũ nguyên, luỹ thừa với số mũ hữu tỉ và luỹ thừa với số mũ thực."
            ],
            "Vận dụng": [
              "Tính được giá trị biểu thức số có chứa phép tính luỹ thừa bằng sử dụng máy tính cầm tay.",
              "Sử dụng được tính chất của phép tính luỹ thừa trong tính toán các biểu thức số và rút gọn các biểu thức chứa biến (tính viết và tính nhẩm, tính nhanh một cách hợp lí)."
            ],
            "Vận dụng cao": [
              "Giải quyết được một số vấn đề có liên quan đến môn học khác hoặc có liên quan đến thực tiễn gắn với phép tính luỹ thừa (ví dụ: bài toán về lãi suất, sự tăng trưởng,...)."
            ]
          },
          "Phép tính lôgarit (logarithm). Các tính chất": {
            "Nhận biết": [
              "Nhận biết được khái niệm lôgarit cơ số $a (a > 0, a \\neq 1)$ của một số thực dương."
            ],
            "Thông hiểu": [
              "Giải thích được các tính chất của phép tính lôgarit nhờ sử dụng định nghĩa hoặc các tính chất đã biết trước đó."
            ],
            "Vận dụng": [
              "Tính được giá trị (đúng hoặc gần đúng) của lôgarit bằng cách sử dụng máy tính cầm tay.",
              "Sử dụng được tính chất của phép tính lôgarit trong tính toán các biểu thức số và rút gọn các biểu thức chứa biến (tính viết và tính nhẩm, tính nhanh một cách hợp lí)."
            ],
            "Vận dụng cao": [
              "Giải quyết được một số vấn đề có liên quan đến môn học khác hoặc có liên quan đến thực tiễn gắn với phép tính lôgarit (ví dụ: bài toán liên quan đến độ pH trong Hoá học,...)."
            ]
          },
          "Hàm số mũ. Hàm số lôgarit": {
            "Nhận biết": [
              "Nhận biết được hàm số mũ và hàm số lôgarit.",
              "Nhận dạng được đồ thị của các hàm số mũ, hàm số lôgarit."
            ],
            "Thông hiểu": [
              "Nêu được một số ví dụ thực tế về hàm số mũ, hàm số lôgarit.",
              "Giải thích được các tính chất của hàm số mũ, hàm số lôgarit thông qua đồ thị của chúng."
            ],
            "Vận dụng": [],
            "Vận dụng cao": [
              "Giải quyết được một số vấn đề có liên quan đến môn học khác hoặc có liên quan đến thực tiễn gắn với hàm số mũ và hàm số lôgarit (ví dụ: lãi suất, sự tăng trưởng,...)."
            ]
          },
          "Phương trình, bất phương trình mũ và lôgarit": {
            "Nhận biết": [],
            "Thông hiểu": [
              "Giải được phương trình, bất phương trình mũ, lôgarit ở dạng đơn giản (ví dụ $2^{x+1} = \\frac{1}{4}$; $2^{x+1} = 2^{3x+5}$; $\\log_2(x + 1) = 3$; $\\log_3(x + 1) = \\log_3(x^2 - 1)$)."
            ],
            "Vận dụng": [],
            "Vận dụng cao": [
              "Giải quyết được một số vấn đề có liên quan đến môn học khác hoặc có liên quan đến thực tiễn gắn với phương trình, bất phương trình mũ và lôgarit (ví dụ: bài toán liên quan đến độ pH, độ rung chấn,...)."
            ]
          }
        },
        "5. Đạo hàm": {
          "Khái niệm đạo hàm. Ý nghĩa hình học của đạo hàm": {
            "Nhận biết": [
              "Nhận biết được một số bài toán dẫn đến khái niệm đạo hàm như: xác định vận tốc tức thời của một vật chuyển động không đều, xác định tốc độ thay đổi của nhiệt độ.",
              "Nhận biết được định nghĩa đạo hàm.",
              "Nhận biết được ý nghĩa hình học của đạo hàm.",
              "Nhận biết được số $e$ thông qua bài toán mô hình hoá lãi suất ngân hàng."
            ],
            "Thông hiểu": [
              "Hiểu được công thức tính đạo hàm của một số hàm đơn giản bằng định nghĩa.",
              "Thiết lập được phương trình tiếp tuyến của đồ thị hàm số tại một điểm thuộc đồ thị."
            ],
            "Vận dụng": [],
            "Vận dụng cao": []
          },
          "Các quy tắc tính đạo hàm": {
            "Nhận biết": [],
            "Thông hiểu": [
              "Tính được đạo hàm của một số hàm số sơ cấp cơ bản (như hàm đa thức, hàm căn thức đơn giản, hàm số lượng giác, hàm số mũ, hàm số lôgarit)."
            ],
            "Vận dụng": [
              "Sử dụng được các công thức tính đạo hàm của tổng, hiệu, tích, thương của các hàm số và đạo hàm của hàm hợp."
            ],
            "Vận dụng cao": [
              "Giải quyết được một số vấn đề có liên quan đến môn học khác hoặc có liên quan đến thực tiễn gắn với đạo hàm (ví dụ: xác định vận tốc tức thời của một vật chuyển động không đều,...)."
            ]
          },
          "Đạo hàm cấp hai": {
            "Nhận biết": [
              "Nhận biết được khái niệm đạo hàm cấp hai của một hàm số."
            ],
            "Thông hiểu": [],
            "Vận dụng": [
              "Tính được đạo hàm cấp hai của một số hàm số đơn giản."
            ],
            "Vận dụng cao": [
              "Giải quyết được một số vấn đề có liên quan đến môn học khác hoặc có liên quan đến thực tiễn gắn với đạo hàm cấp hai (ví dụ: xác định gia tốc từ đồ thị vận tốc theo thời gian của một chuyển động không đều,...)."
            ]
          }
        }
      },
      "HÌNH HỌC VÀ ĐO LƯỜNG": {
        "6. Đường thẳng và mặt phẳng trong không gian": {
          "Đường thẳng và mặt phẳng trong không gian. Cách xác định mặt phẳng. Hình chóp và hình tứ diện": {
            "Nhận biết": [
              "Nhận biết được các quan hệ liên thuộc cơ bản giữa điểm, đường thẳng, mặt phẳng trong không gian.",
              "Nhận biết được hình chóp, hình tứ diện."
            ],
            "Thông hiểu": [
              "Mô tả được ba cách xác định mặt phẳng (qua ba điểm không thẳng hàng; qua một đường thẳng và một điểm không thuộc đường thẳng đó; qua hai đường thẳng cắt nhau)."
            ],
            "Vận dụng": [
              "Xác định được giao tuyến của hai mặt phẳng; giao điểm của đường thẳng và mặt phẳng.",
              "Vận dụng được các tính chất về giao tuyến của hai mặt phẳng; giao điểm của đường thẳng và mặt phẳng vào giải bài tập."
            ],
            "Vận dụng cao": [
              "Vận dụng được kiến thức về đường thẳng, mặt phẳng trong không gian để mô tả một số hình ảnh trong thực tiễn."
            ]
          }
        },
        "7. Quan hệ song song trong không gian. Phép chiếu song song": {
          "Hai đường thẳng song song": {
            "Nhận biết": [
              "Nhận biết được vị trí tương đối của hai đường thẳng trong không gian: hai đường thẳng trùng nhau, song song, cắt nhau, chéo nhau trong không gian."
            ],
            "Thông hiểu": [
              "Giải thích được tính chất cơ bản về hai đường thẳng song song trong không gian."
            ],
            "Vận dụng": [],
            "Vận dụng cao": [
              "Vận dụng được kiến thức về hai đường thẳng song song để mô tả một số hình ảnh trong thực tiễn."
            ]
          },
          "Đường thẳng và mặt phẳng song song": {
            "Nhận biết": [
              "Nhận biết được đường thẳng song song với mặt phẳng."
            ],
            "Thông hiểu": [
              "Giải thích được điều kiện để đường thẳng song song với mặt phẳng.",
              "Giải thích được tính chất cơ bản về đường thẳng song song với mặt phẳng."
            ],
            "Vận dụng": [],
            "Vận dụng cao": [
              "Vận dụng được kiến thức về đường thẳng song song với mặt phẳng để mô tả một số hình ảnh trong thực tiễn."
            ]
          },
          "Hai mặt phẳng song song. Định lí Thalès trong không gian. Hình lăng trụ và hình hộp": {
            "Nhận biết": [
              "Nhận biết được hai mặt phẳng song song trong không gian."
            ],
            "Thông hiểu": [
              "Giải thích được điều kiện để hai mặt phẳng song song.",
              "Giải thích được tính chất cơ bản về hai mặt phẳng song song.",
              "Giải thích được định lí Thalès trong không gian.",
              "Giải thích được tính chất cơ bản của lăng trụ và hình hộp."
            ],
            "Vận dụng": [],
            "Vận dụng cao": [
              "Vận dụng được kiến thức về quan hệ song song để mô tả một số hình ảnh trong thực tiễn."
            ]
          },
          "Phép chiếu song song. Hình biểu diễn của một hình không gian": {
            "Nhận biết": [
              "Nhận biết được khái niệm và các tính chất cơ bản về phép chiếu song song."
            ],
            "Thông hiểu": [],
            "Vận dụng": [
              "Xác định được ảnh của một điểm, một đoạn thẳng, một tam giác, một đường tròn qua một phép chiếu song song.",
              "Vẽ được hình biểu diễn của một số hình khối đơn giản."
            ],
            "Vận dụng cao": [
              "Sử dụng được kiến thức về phép chiếu song song để mô tả một số hình ảnh trong thực tiễn."
            ]
          }
        },
        "8. Quan hệ vuông góc trong không gian. Phép chiếu vuông góc": {
          "Góc giữa hai đường thẳng. Hai đường thẳng vuông góc": {
            "Nhận biết": [
              "Nhận biết được khái niệm góc giữa hai đường thẳng trong không gian.",
              "Nhận biết được hai đường thẳng vuông góc trong không gian."
            ],
            "Thông hiểu": [],
            "Vận dụng": [
              "Chứng minh được hai đường thẳng vuông góc trong không gian trong một số trường hợp đơn giản."
            ],
            "Vận dụng cao": [
              "Sử dụng được kiến thức về hai đường thẳng vuông góc để mô tả một số hình ảnh trong thực tiễn."
            ]
          },
          "Đường thẳng vuông góc với mặt phẳng. Định lí ba đường vuông góc. Phép chiếu vuông góc": {
            "Nhận biết": [
              "Nhận biết được đường thẳng vuông góc với mặt phẳng.",
              "Nhận biết được khái niệm phép chiếu vuông góc.",
              "Nhận biết được công thức tính thể tích của hình chóp, hình lăng trụ, hình hộp."
            ],
            "Thông hiểu": [
              "Xác định được điều kiện để đường thẳng vuông góc với mặt phẳng.",
              "Xác định được hình chiếu vuông góc của một điểm, một đường thẳng, một tam giác.",
              "Giải thích được định lí ba đường vuông góc.",
              "Giải thích được mối liên hệ giữa tính song song và tính vuông góc của đường thẳng và mặt phẳng."
            ],
            "Vận dụng": [
              "Tính được thể tích của hình chóp, hình lăng trụ, hình hộp trong những trường hợp đơn giản (ví dụ: nhận biết được đường cao và diện tích mặt đáy của hình chóp)."
            ],
            "Vận dụng cao": [
              "Vận dụng được kiến thức về đường thẳng vuông góc với mặt phẳng để mô tả một số hình ảnh trong thực tiễn."
            ]
          },
          "Hai mặt phẳng vuông góc. Hình lăng trụ đứng, lăng trụ đều, hình hộp đứng, hình hộp chữ nhật, hình lập phương, hình chóp đều.": {
            "Nhận biết": [
              "Nhận biết được hai mặt phẳng vuông góc trong không gian."
            ],
            "Thông hiểu": [
              "Xác định được điều kiện để hai mặt phẳng vuông góc.",
              "Giải thích được tính chất cơ bản về hai mặt phẳng vuông góc.",
              "Giải thích được tính chất cơ bản của hình lăng trụ đứng, lăng trụ đều, hình hộp đứng, hình hộp chữ nhật, hình lập phương, hình chóp đều."
            ],
            "Vận dụng": [],
            "Vận dụng cao": [
              "Vận dụng được kiến thức về hai mặt phẳng vuông góc để mô tả một số hình ảnh trong thực tiễn."
            ]
          },
          "Khoảng cách trong không gian": {
            "Nhận biết": [
              "Nhận biết được đường vuông góc chung của hai đường thẳng chéo nhau."
            ],
            "Thông hiểu": [
              "Xác định được khoảng cách từ một điểm đến một đường thẳng; khoảng cách từ một điểm đến một mặt phẳng; khoảng cách giữa hai đường thẳng song song; khoảng cách giữa đường thẳng và mặt phẳng song song; khoảng cách giữa hai mặt phẳng song song trong những trường hợp đơn giản."
            ],
            "Vận dụng": [
              "Tính được khoảng cách giữa hai đường thẳng chéo nhau trong những trường hợp đơn giản (ví dụ: có một đường thẳng vuông góc với mặt phẳng chứa đường thẳng còn lại)."
            ],
            "Vận dụng cao": [
              "Sử dụng được kiến thức về khoảng cách trong không gian để mô tả một số hình ảnh trong thực tiễn."
            ]
          },
          "Góc giữa đường thẳng và mặt phẳng. Góc nhị diện và góc phẳng nhị diện": {
            "Nhận biết": [
              "Nhận biết được khái niệm góc giữa đường thẳng và mặt phẳng.",
              "Nhận biết được khái niệm góc nhị diện, góc phẳng nhị diện."
            ],
            "Thông hiểu": [
              "Xác định được góc giữa đường thẳng và mặt phẳng trong những trường hợp đơn giản (ví dụ: đã biết hình chiếu vuông góc của đường thẳng lên mặt phẳng).",
              "Xác định được số đo góc nhị diện, góc phẳng nhị diện trong những trường hợp đơn giản (ví dụ: nhận biết được mặt phẳng vuông góc với cạnh nhị diện)."
            ],
            "Vận dụng": [
              "Tính được góc giữa đường thẳng và mặt phẳng trong những trường hợp đơn giản (ví dụ: đã biết hình chiếu vuông góc của đường thẳng lên mặt phẳng).",
              "Tính được số đo góc nhị diện, góc phẳng nhị diện trong những trường hợp đơn giản (ví dụ: nhận biết được mặt phẳng vuông góc với cạnh nhị diện)."
            ],
            "Vận dụng cao": [
              "Sử dụng được kiến thức về góc giữa đường thẳng và mặt phẳng, góc nhị diện để mô tả một số hình ảnh trong thực tiễn."
            ]
          },
          "Hình chóp cụt đều và thể tích": {
            "Nhận biết": [
              "Nhận biết được hình chóp cụt đều."
            ],
            "Thông hiểu": [],
            "Vận dụng": [
              "Tính được thể tích khối chóp cụt đều."
            ],
            "Vận dụng cao": [
              "Vận dụng được kiến thức về hình chóp cụt đều để mô tả một số hình ảnh trong thực tiễn."
            ]
          }
        }
      },
      "THỐNG KÊ VÀ XÁC SUẤT": {
        "9. Phân tích và xử lí dữ liệu": {
          "Các số đặc trưng của mẫu số liệu ghép nhóm": {
            "Nhận biết": [
              "Nhận biết được mối liên hệ giữa thống kê với những kiến thức của các môn học khác trong Chương trình lớp 11 và trong thực tiễn."
            ],
            "Thông hiểu": [
              "Hiểu được ý nghĩa và vai trò của các số đặc trưng nói trên của mẫu số liệu trong thực tiễn."
            ],
            "Vận dụng": [
              "Tính được các số đặc trưng đo xu thế trung tâm cho mẫu số liệu ghép nhóm: số trung bình cộng (hay số trung bình), trung vị (median), tứ phân vị (quartiles), mốt (mode)."
            ],
            "Vận dụng cao": [
              "Rút ra được kết luận nhờ ý nghĩa của các số đặc trưng nói trên của mẫu số liệu trong trường hợp đơn giản."
            ]
          }
        },
        "10. Khái niệm về xác suất": {
          "Một số khái niệm về xác suất cổ điển": {
            "Nhận biết": [
              "Nhận biết được một số khái niệm về xác suất cổ điển: hợp và giao các biến cố; biến cố độc lập."
            ],
            "Thông hiểu": [],
            "Vận dụng": [],
            "Vận dụng cao": []
          }
        },
        "11. Các quy tắc tính xác suất": {
          "Các quy tắc tính xác suất": {
            "Nhận biết": [],
            "Thông hiểu": [],
            "Vận dụng": [
              "Tính được xác suất của biến cố hợp bằng cách sử dụng công thức cộng.",
              "Tính được xác suất của biến cố giao bằng cách sử dụng công thức nhân (cho trường hợp biến cố độc lập).",
              "Tính được xác suất của biến cố trong một số bài toán đơn giản bằng phương pháp tổ hợp.",
              "Tính được xác suất trong một số bài toán đơn giản bằng cách sử dụng sơ đồ hình cây."
            ],
            "Vận dụng cao": []
          }
        }
      }
    },
    "Lớp 12": {
      "MỘT SỐ YẾU TỐ GIẢI TÍCH": {
        "1. Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số": {
          "Tính đơn điệu của hàm số": {
            "Nhận biết": [
              "Nhận biết được tính đồng biến, nghịch biến của một hàm số trên một khoảng dựa vào dấu của đạo hàm cấp một của nó.",
              "Nhận biết được tính đơn điệu, điểm cực trị, giá trị cực trị của hàm số thông qua bảng biến thiên hoặc thông qua hình ảnh hình học của đồ thị hàm số."
            ],
            "Thông hiểu": [
              "Thể hiện được tính đồng biến, nghịch biến của hàm số trong bảng biến thiên của hàm số"
            ],
            "Vận dụng": [],
            "Vận dụng cao": []
          },
          "Giá trị lớn nhất, giá trị nhỏ nhất của hàm số": {
            "Nhận biết": [
              "Nhận biết được giá trị lớn nhất, giá trị nhỏ nhất của hàm số trên một tập xác định cho trước."
            ],
            "Thông hiểu": [
              "Xác định được giá trị lớn nhất, giá trị nhỏ nhất của hàm số bằng đạo hàm trong những trường hợp đơn giản."
            ],
            "Vận dụng": [],
            "Vận dụng cao": []
          },
          "Khảo sát và vẽ đồ thị của hàm số": {
            "Nhận biết": [
              "Nhận biết được hình ảnh hình học của đường tiệm cận ngang, đường tiệm cận đứng, đường tiệm cận xiên của đồ thị hàm số.",
              "Nhận biết được tính đối xứng (trục đối xứng, tâm đối xứng) của đồ thị các hàm số."
            ],
            "Thông hiểu": [
              "Mô tả được sơ đồ tổng quát để khảo sát hàm số (tìm tập xác định, xét chiều biến thiên, tìm cực trị, tìm tiệm cận, lập bảng biến thiên, vẽ đồ thị)."
            ],
            "Vận dụng": [
              "Khảo sát được (tập xác định, chiều biến thiên, cực trị, tiệm cận, bảng biến thiên) và vẽ đồ thị của các hàm số: $y = ax^3 + bx^2 + cx + d (a \\neq 0)$; $y = \\frac{ax + b}{cx + d} (c \\neq 0, ad - bc \\neq 0)$; $y = \\frac{ax^2 + bx + c}{mx + n} (a \\neq 0, m \\neq 0$ và đa thức tử không chia hết cho đa thức mẫu)."
            ],
            "Vận dụng cao": []
          },
          "Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn": {
            "Nhận biết": [],
            "Thông hiểu": [],
            "Vận dụng": [],
            "Vận dụng cao": [
              "Vận dụng được đạo hàm và khảo sát hàm số để giải quyết một số vấn đề liên quan đến thực tiễn."
            ]
          }
        },
        "2. Nguyên hàm. Tích phân": {
          "Nguyên hàm. Bảng nguyên hàm của một số hàm số sơ cấp": {
            "Nhận biết": [
              "Nhận biết được khái niệm nguyên hàm của một hàm số."
            ],
            "Thông hiểu": [
              "Giải thích được tính chất cơ bản của nguyên hàm.",
              "Xác định được nguyên hàm của một số hàm số sơ cấp như: $y = x^{\\alpha} (\\alpha \\neq -1)$; $y = \\frac{1}{x}$; $y = \\sin x$; $y = \\cos x$; $y = \\frac{1}{\\cos^2 x}$; $y = \\frac{1}{\\sin^2 x}$; $y = a^x$; $y = e^x$."
            ],
            "Vận dụng": [
              "Tính được nguyên hàm trong những trường hợp đơn giản."
            ],
            "Vận dụng cao": []
          },
          "Tích phân. Ứng dụng hình học của tích phân": {
            "Nhận biết": [
              "Nhận biết được định nghĩa và các tính chất của tích phân."
            ],
            "Thông hiểu": [],
            "Vận dụng": [
              "Tính được tích phân trong những trường hợp đơn giản.",
              "Sử dụng được tích phân để tính diện tích của một số hình phẳng, thể tích của một số hình khối."
            ],
            "Vận dụng cao": [
              "Vận dụng được tích phân để giải một số bài toán có liên quan đến thực tiễn."
            ]
          }
        }
      },
      "HÌNH HỌC VÀ ĐO LƯỜNG": {
        "3. Phương pháp toạ độ trong không gian": {
          "Toạ độ của vectơ đối với một hệ trục toạ độ. Biểu thức toạ độ của các phép toán vectơ": {
            "Nhận biết": [
              "Nhận biết được vectơ và các phép toán vectơ trong không gian (tổng và hiệu của hai vectơ, tích của một số với một vectơ, tích vô hướng của hai vectơ).",
              "Nhận biết được toạ độ của một vectơ đối với hệ trục toạ độ."
            ],
            "Thông hiểu": [
              "Xác định được độ dài của một vectơ khi biết toạ độ hai đầu mút của nó và biểu thức toạ độ của các phép toán vectơ."
            ],
            "Vận dụng": [],
            "Vận dụng cao": [
              "Vận dụng được toạ độ của vectơ để giải một số bài toán có liên quan đến thực tiễn."
            ]
          },
          "Phương trình mặt phẳng": {
            "Nhận biết": [
              "Nhận biết được phương trình tổng quát của mặt phẳng."
            ],
            "Thông hiểu": [
              "Thiết lập được phương trình tổng quát của mặt phẳng trong hệ trục toạ độ $Oxyz$ theo một trong ba cách cơ bản: qua một điểm và biết vectơ pháp tuyến; qua một điểm và biết cặp vectơ chỉ phương (suy ra vectơ pháp tuyến nhờ vào việc tìm vectơ vuông góc với cặp vectơ chỉ phương); qua ba điểm không thẳng hàng.",
              "Thiết lập được điều kiện để hai mặt phẳng song song, vuông góc với nhau."
            ],
            "Vận dụng": [
              "Tính được khoảng cách từ một điểm đến một mặt phẳng bằng phương pháp toạ độ."
            ],
            "Vận dụng cao": [
              "Vận dụng được kiến thức về phương trình mặt phẳng để giải một số bài toán liên quan đến thực tiễn."
            ]
          },
          "Phương trình đường thẳng trong không gian": {
            "Nhận biết": [
              "Nhận biết được phương trình chính tắc, phương trình tham số, vectơ chỉ phương của đường thẳng trong không gian."
            ],
            "Thông hiểu": [
              "Thiết lập được phương trình của đường thẳng trong hệ trục toạ độ theo một trong hai cách cơ bản: qua một điểm và biết một vectơ chỉ phương, qua hai điểm.",
              "Xác định được điều kiện để hai đường thẳng chéo nhau, cắt nhau, song song hoặc vuông góc với nhau.",
              "Thiết lập được công thức tính góc giữa hai đường thẳng, giữa đường thẳng và mặt phẳng, giữa hai mặt phẳng."
            ],
            "Vận dụng": [],
            "Vận dụng cao": [
              "Vận dụng được kiến thức về phương trình đường thẳng trong không gian để giải một số bài toán liên quan đến thực tiễn."
            ]
          },
          "Phương trình mặt cầu": {
            "Nhận biết": [
              "Nhận biết được phương trình mặt cầu."
            ],
            "Thông hiểu": [
              "Xác định được tâm, bán kính của mặt cầu khi biết phương trình của nó.",
              "Thiết lập được phương trình của mặt cầu khi biết tâm và bán kính."
            ],
            "Vận dụng": [],
            "Vận dụng cao": [
              "Vận dụng được kiến thức về phương trình mặt cầu để giải một số bài toán liên quan đến thực tiễn."
            ]
          }
        }
      },
      "THỐNG KÊ VÀ XÁC SUẤT": {
        "4. Phân tích và xử lí dữ liệu": {
          "Các số đặc trưng của mẫu số liệu ghép nhóm": {
            "Nhận biết": [
              "Nhận biết được mối liên hệ giữa thống kê với những kiến thức của các môn học khác trong Chương trình lớp 12 và trong thực tiễn"
            ],
            "Thông hiểu": [
              "Giải thích được ý nghĩa và vai trò của các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm: khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn trong thực tiễn.",
              "Chỉ ra được những kết luận nhờ ý nghĩa của các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm: khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn trong trường hợp đơn giản."
            ],
            "Vận dụng": [
              "Tính được các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm: khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn."
            ],
            "Vận dụng cao": []
          }
        },
        "5. Khái niệm về xác suất có điều kiện": {
          "Xác suất có điều kiện": {
            "Nhận biết": [
              "Nhận biết được khái niệm về xác suất có điều kiện."
            ],
            "Thông hiểu": [
              "Giải thích được ý nghĩa của xác suất có điều kiện trong những tình huống thực tiễn quen thuộc."
            ],
            "Vận dụng": [
              "Sử dụng được công thức Bayes để tính xác suất có điều kiện"
            ],
            "Vận dụng cao": [
              "Sử dụng được công thức Bayes vận dụng vào một số bài toán thực tiễn."
            ]
          },
          "Các quy tắc tính xác suất": {
            "Nhận biết": [],
            "Thông hiểu": [
              "Mô tả được công thức xác suất toàn phần, công thức Bayes thông qua bảng dữ liệu thống kê $2 \\times 2$ và sơ đồ hình cây."
            ],
            "Vận dụng": [
              "Sử dụng được công thức Bayes để tính xác suất có điều kiện"
            ],
            "Vận dụng cao": [
              "Sử dụng được công thức Bayes vận dụng vào một số bài toán thực tiễn.",
              "Sử dụng được sơ đồ hình cây để tính xác suất có điều kiện trong một số bài toán thực tiễn liên quan tới thống kê."
            ]
          }
        }
      }
    }
};

// ─── Flat topic item for UI ───────────────────────────────────────────────────
export interface TopicItem {
  id: string;
  grade: string;
  domain: string;
  chapter: string;
  topic: string;
  levels: DifficultyLevel[];
}

const DIFFICULTY_LEVELS: DifficultyLevel[] = [
  "Nhận biết", "Thông hiểu", "Vận dụng", "Vận dụng cao",
];

/**
 * Trả về true nếu obj là leaf TopicContent:
 * mọi key đều thuộc DifficultyLevel và value là array.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isTopicContent(obj: any): boolean {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) return false;
  const keys = Object.keys(obj);
  if (keys.length === 0) return false;
  return keys.every(
    k => DIFFICULTY_LEVELS.includes(k as DifficultyLevel) && Array.isArray(obj[k])
  );
}

/**
 * Đệ quy thu thập TopicItem từ mọi cấp lồng nhau.
 * Xử lý cả cấu trúc chuẩn 4 cấp lẫn nơi có subDomain phụ.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function collectTopics(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: any,
  grade: string,
  domain: string,
  chapter: string,
  results: TopicItem[],
  idxRef: { v: number },
) {
  if (typeof obj !== "object" || obj === null) return;

  for (const key of Object.keys(obj)) {
    const val = obj[key];

    if (isTopicContent(val)) {
      // key = tên chủ đề, val = { "Nhận biết": [...], ... }
      const levels = DIFFICULTY_LEVELS.filter(
        l => Array.isArray(val[l]) && (val[l] as string[]).length > 0,
      );
      results.push({
        id: `t${idxRef.v++}`,
        grade,
        domain,
        chapter,
        topic: key,
        levels: levels.length > 0 ? levels : ["Vận dụng"],
      });
    } else if (typeof val === "object" && !Array.isArray(val)) {
      // Cấp trung gian: có thể là topic-container hoặc subDomain
      // Dùng key hiện tại làm chapter nếu chapter chưa có nội dung cụ thể
      const nextChapter = chapter || key;
      collectTopics(val, grade, domain, nextChapter, results, idxRef);
    }
  }
}

let _cache: TopicItem[] | null = null;

export function flattenTopics(): TopicItem[] {
  if (_cache) return _cache;

  const items: TopicItem[] = [];
  const idxRef = { v: 0 };

  for (const grade of Object.keys(TOPIC_DATA)) {
    const gradeObj = TOPIC_DATA[grade];
    for (const domain of Object.keys(gradeObj)) {
      const domainObj = gradeObj[domain];
      for (const chapterKey of Object.keys(domainObj)) {
        collectTopics(domainObj[chapterKey], grade, domain, chapterKey, items, idxRef);
      }
    }
  }

  _cache = items;
  return items;
}

export const ALL_GRADES: string[] = Object.keys(TOPIC_DATA);
