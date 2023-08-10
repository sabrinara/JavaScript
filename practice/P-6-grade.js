// var tom = 66;
// var you = 85;
// var jane = 95;
// var peter = 56;
// var johns = 40;
var mark = [66,85,95,56,40];

for(var i=0;i<mark.length;i++)
{
    if (mark[i] >= 80)
{
    console.log('A');
}
else if (mark[i] < 80 && mark[i] >=60)
{
    console.log('B');
}
else if (mark[i] < 60 && mark[i] >= 50)
{
    console.log('C');
}
else if (mark[i] < 50 && mark[i] >= 40)
{
    console.log('D');
}
else
{
    console.log('F');
}
}


