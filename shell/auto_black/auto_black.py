import os
import time

black_list = []
with open("/root/auto_black/black_list.txt") as f:
    lines = f.readlines()
    for line in lines:
        if line.find("#") > -1:
            continue
        line = line.strip()
        if len(line) == 0:
            continue
        black_list.append(line)

white_list = []
with open("/root/auto_black/white_list.txt") as f:
    lines = f.readlines()
    for line in lines:
        if line.find("#") > -1:
            continue
        line = line.strip()
        if len(line) == 0:
            continue
        white_list.append(line)

new_list = []
with open("/var/log/auth.log") as f:
    lines = f.readlines()
    for line in lines:
        from_index = line.find("Failed password for root from ")
        ip = None
        if from_index > -1:
            end_index = line.find(" port")
            ip = line[from_index + 30:end_index]
        from_index = line.find("Unable to negotiate with ")
        if from_index > -1:
            end_index = line.find(" port")
            ip = line[from_index + 25:end_index]
        if ip is not None and ip not in black_list and ip not in white_list:
            black_list.append(ip)
            new_list.append(ip)
    pass

# print("全部：")
# print("-" * 20)
# for ip in black_list:
#     print("iptables -I INPUT -s " + ip + " -j DROP")
# print("-" * 20)

if len(new_list) > 0:
    print("新增：")
    print("-" * 20)
    with open("/root/auto_black/black_list.txt", 'a', encoding='utf-8') as file:
        file.write("\n\n# " + time.strftime("%Y-%m-%d %H:%M:%S",time.localtime()))
    for ip in new_list:
        print(ip)
        os.system("iptables -I INPUT -s " + ip + " -j DROP")
        with open("/root/auto_black/black_list.txt", 'a', encoding='utf-8') as file:
            file.write("\n" + ip)
print("-" * 20)
print("黑名单总条数：", len(black_list), "新增条数：", len(new_list))
