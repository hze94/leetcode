#include<iostream>
#include<set>
#include<algorithm>
#include<limits.h>
using namespace std;

const int N=1e5+10;
int a[N];

int main()
{
  int n;
  cin>>n;
  set<pair<int,int>> A;
  A.insert({INT_MIN, 0});
  A.insert({INT_MAX, 0});
  for (int i = 1;i <= n; i++) {
    int a;
    cin >> a;
    if(i > 1) {
      auto it = A.upper_bound({a, 0});
      auto lt = it;
      lt--;
      long long left = (long long) lt->first-a;
      long long right = (long long) it->first-a;
      if(abs(left) <= abs(right)) {
          cout<<abs(left)<<' '<<lt->second<<endl;
      }
      else cout<<abs(right)<<' '<<it->second<<endl;
    }

    A.insert({a, i});
  }
  return 0;
}