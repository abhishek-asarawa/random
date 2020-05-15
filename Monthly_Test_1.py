#Problem 1 Thanos vs Tony Stark
def count_damage(s):
  n=len(s)
  charge=1
  damage=0
  for i in range(n):
    if s[i]=="C":
      charge*=2
    if s[i]=="S":
      damage+=charge
  return damage

def swapping(s):
  n = len(s)
  j=n-1
  while j>=0:
    if s[j]=="S" and s[j-1]=="C":
      s[j], s[j-1]=s[j-1], s[j]
      break
    j-=1
  # return s
  

def counting(s, D):
  count=0
  d1=0
  while count>=0:
    d=count_damage(s)
    if d<=D:
      return(count)
    elif d1==d and d>D:
      return "IMPOSSIBLE"
    else:
      swapping(s)
      d1=d
      d=count_damage(s)
      count+=1

n=int(input())
a=[]
for i in range(n):
  a.append(list(input().split(" ")))
for i in range(n):
  D=int(a[i][0]) 
  s=a[i][1]
  s=list(s)
  d=count_damage(s)
  print(counting(s, D))

# Problem 2 Giant numbers
a,b=input().split()
a=int(a)
b=int(b)
print(a*b)

# Problem 3 Remove Duplicates in Linked List
class Node:    
    def __init__(self, data):  
        self.data = data  
        self.next = None
        
class LinkedList:    
    def __init__(self):  
        self.head = None
    
    def append(self, value):
        new_node=Node(value)
        if self.head==None:
            self.head=new_node
            return
        last_node=self.head
        while last_node.next:
            last_node=last_node.next
        last_node.next=new_node
        
    def printlist(self):  
        cur_node = self.head  
        while cur_node:  
            print(cur_node.data , end = ' ') 
            cur_node = cur_node.next
            
    def remove_duplicate(self): 
        cur = self.head
        prev=None 
        dup_values=dict()
        while cur:
          if cur.data in dup_values:
            prev.next=cur.next
            cur=None
          else:
            dup_values[cur.data]=1
            # print(cur.data , end = ' ')
            prev=cur
          cur=prev.next

list=LinkedList()
a=input()
a=a.split(" ")
for i in range(len(a)):
    if i==0:
        list.append(a[i])
    if a[i-1]!=a[i] and i-1>=0:
        list.append(a[i])
list.remove_duplicate()
list.printlist()

# Problem 4 College library in trouble
def check(A, mid, n, B):
  count=0
  total=0

  for i in range(n):
    if A[i]>mid:
      return False
    
    total+=A[i]

    if total>mid:
      count+=1
      total=A[i]
  count+=1
  if count<=B:
    return True
  return False

def binary_search(A, B, n):
  mini_sum=1
  max_sum=0

  for i in range(n):
    max_sum+=A[i]
  s=0
  while(mini_sum<=max_sum):
    mid_sum=(mini_sum+max_sum)//2
    
    if check(A, mid_sum, n, B):
      s=mid_sum
      max_sum=mid_sum-1
    else:
      mini_sum=mid_sum+1
  return s

A=list(input().split(" "))
n=len(A)
A=[int(A[i]) for i in range(n)]
B=int(input())
print(binary_search(A, B, n))

# Problem 5 World War 3
def max_area(a):
  stack=list()
  max_a=0
  i=0
  while i<len(a):
    if not stack or a[stack[-1]]<=a[i]:
      stack.append(i)
      i+=1
    else:
      t=stack.pop()
      if stack:
        area=a[t]*(i-stack[-1]-1)
      else:
        area=a[t]*i
      max_a=max(max_a,area)    
  while stack:
    t=stack.pop()
    if stack:
      area=a[t]*(i-stack[-1]-1)
    else:
      area=a[t]*i
    max_a=max(max_a,area)

  return max_a


a=input()
a=list(a.split(" "))
a = [int(i) for i in a] 
print(600*max_area(a))

# Problem 6 All the buit ins
ty=input()
a=input()
# print(type(a))
o1=input()
o1=list(o1.split(" "))
o2=input()
o3=input()
o4=input()
o4=list(o4.split(" "))
o5=input()
o5=list(o5.split(" "))

if o1[0]=="all":
  print(a.upper())
elif o1[0]=="append":
  a=list(a.split(" "))
  a = [int(i) for i in a] 
  a.append(int(o1[1]))
  print(*a)
  del a[-1]

if isinstance(a, str):
  print(a[::-1])
else:
  print(*(a[::-1]))
a[::-1]

if isinstance(a, str):
  b=sorted(a, key=str.lower)
  print("".join(b))
else:
  print(*(sorted(a)))

if o4[0]=="separate":
  for i in range(len(a)-1):
    print(a[i],end=o4[2])
  print(a[-1])
elif o4[0]=="isdigit":
  print(a.isdigit())

if o5[0]=="insert":
  a.insert(int(o5[1]),int(o5[2]))
  print(*a)
elif o5[0]=="find":
  print(a.find(o5[1]))