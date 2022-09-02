# Link list

-   Định nghĩa: Là một list của những node được liên kết với nhau
-   Cái node cuối cùng luôn trỏ về null
-   Thường được sử dụng trong case: list, stack, queue (Thêm vào và bớt đi liên tục)
-   Cách lưu trữ: Các node không nhất thiết phải nằm liên tục nhau, khác với array.
-   Không quan tâm tới thanh ghi length như là array, và trong mỗi node luôn có địa chỉ của thằng node tiếp theo.
-   Ví dụ: Tưởng tưởng đến toa tàu... Những cái data là nhưng cái toa và sẽ có pointer để chỉ tới thằng tiếp theo

    # Có 2 loại: Singly linklist (Chỉ tới thằng sau) , Double linklist (Có thể trỏ 2 đầu)

    -   So sánh:

        # Singly linklist:

        -   Ưu điểm: chỉ sài 1 pointer, code dễ hơn,
        -   Nhược điểm: Rất là khó để truy cập được thằng phía trước

            # Insert: số 5 vào vị trí số 3:

                B1: Đến vị trí thằng head và hỏi thằng số 2, đứng từ số 2 và tạo ra node có giá trị là 5
                B2: Dùng số 5 trỏ vào thằng số 3, Sau đó từ thằng vị trí số 2 xong lấy pointer chỉ vào thằng số 5

                Độ phức tạp:
                    Head: 0(1)
                    Tail: 0(1)
                    Middle: 0(n)

            # Delete: Xóa element ở vị trí số 3

                B1: tạo 2 cái pointer --> pointer thứ nhất trỏ tới thằng head. pointer thứ 2 trỏ vào thằng next head.
                B2: Dịch cả 2 pointer này lên, Check value của thằng pointer 2 thì nếu như: value mà node của thằng pointer 2 trỏ vào = value mà chúng ta muốn xóa thì dừng tạo
                B3: Tạo ra pointer temp và sẽ trỏ vào cái node mà pointer 2 đang trỏ vào. Sau đó dịch pointer 2 lên một nấc. Khi đó pointer 1 đang ở vị trí thứ 2, Chỉnh sửa cái next pointer trỏ thẳng qua pointer 2. Và xóa đi thằng temp nó đang trỏ vào để giảm nhỏ bộ nhớ sử dụng

                Độ phức tạp:
                    Tail: 0(N) - Do phải đi qua hết node
                    Middle: 0(n) - Do phải đi tìm node

        # Double linklist: Sài 2 pointer, truy vấn ngược

        -   Ưu điểm: Sài 2 pointer, truy vấn ngược
        -   Nhược điểm: Rất là dễ để truy cập được thằng phía trước

            # Insert: số 5 vào vị trí số 3:

                B1: Tới head -> tới 2 và tạo ra node có giá trị là 5
                B2: Trỏ next pointer vào số 3 hiện tại và trỏ prev pointer vào thằng số 2 hiện tại.
                B3: Trỏ prev pointer vào số 5 sau đó qua thằng số 2 trỏ next pointer vào thằng số 5.

                Độ phức tạp:
                    Tail: 0(1)
                    Middle: 0(n) - Do phải đi tìm node

            # Delete: Xóa element ở vị trí số 3

                B1: tạo 1 cái pointer --> pointer thứ nhất trỏ tới thằng head. và tiếp tục dịch tới thằng mà cần xóa
                B2: Tới prev node của thằng 2 và trỏ ra cái thằng next node của thằng muốn xóa là thằng ở giữa
                B3: Thằng next node ở vị trí cần xóa sẽ trỏ về prev của thằng cần xóa

                Độ phức tạp:
                    Head: 0(1)
                    Tail: 0(1)
                    Middle: 0(n)

# Link list part 2

-   Lưu ý: Trong link list không có vị trí của array
    -   Cơ chế làm việc của linklist giống như trò chơi giải mật thư.
    -   Mỗi lần tới mật thư thì phải giải thì mới có thể đi tiếp được. Cứ thế tiếp tục
    -   Vì mỗi node sẽ chứa value và địa chỉ tiếp theo
