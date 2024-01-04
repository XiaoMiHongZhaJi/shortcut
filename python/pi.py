from random import random
from time import perf_counter
DARTS = 1000*1000*10 #当前区域中抛洒点总数量
hits = 0.0 #当前在圆内部点的数量
start = perf_counter()#起始时间
for i in range(1,DARTS+1): #循环撒点的过程，即遍历循环的过程
    x,y = random(),random() #产生随机坐标值，random返回的是（0,1）之间的随机值，而所选区域的坐标X,Y范围正好也是0-1.
    dist = pow(x**2+y**2,0.5) #计算点到圆心的距离，判断是否小于1，小于1则在圆内，对hits+1
    if dist <= 1.0:
        hits =hits + 1
pi = 4 * (hits/DARTS)
print("圆周率值是：{}".format(pi))
print("运行时间是：{:.5f}s".format(perf_counter()-start)) 

