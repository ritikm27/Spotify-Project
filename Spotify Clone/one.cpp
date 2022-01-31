#include<iostream>
using namespace std;
int main()
{
    int a;
    cout<<"Enter any number";
    cin>>a;
    for(int i=a;i>0;i--)
    {
        for(int j=1;j<=i;j++)
        {
            cout<<j<<" ";
        }
        cout<<endl;
    }
}