$.ajax(
    {
        type:"get",
        url:"../json/posts.json",
        data:{a:1,b:2},
        dataType:"json",
        success:function (data,textStatus)
        {
            var list =data["list"];
               // console.log(list[0]["PostName"]);
               // var i=0;
               // for(i=0;i<list.length;i++)
               // {
               //     console.log(list[0]["UserName"]);
               // }
            //                list[0]["UserName"];
            // console.log(typeof($("*.username")));

                   // 实例1
            // $("#a1 .username").html(list[0]["UserName"]);
            // $("#a1 .postname").html(list[0]["PostName"]);
            // // $("#a1 .imagelink")[0].src(list[0]["ImageLink"]);   --错误
            //
            // $("#a1 .imagelink").attr("src",list[0]["ImageLink"]);
            // $("#a1 .artic").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + list[0]["Description"]);

            var i = 0;
            var j = 0;
            for (i=0;i<list.length;i++)
            {
                j = i + 1;
                var id ='#'+'a'+ j
                console.log(id);
                console.log(typeof (id));
                // $("#a1 .username").html(list[i]["UserName"]);
                // $("id+ .username").html(list[i]["UserName"]);
                // $(id).html(list[i]["UserName"])
                $(id).find(".username").html(list[i]["UserName"]);
                $(id).find(".postname").html(list[i]["PostName"]);
                $(id).find(".imagelink").attr("src",list[i]["ImageLink"]);
                $(id).find(".artic").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + list[i]["Description"]);


                // $("#aj .postname").html(list[i]["PostName"]);
                //
                // $("#aj .imagelink").attr("src",list[i]["ImageLink"]);
                // $("#aj .artic").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + list[i]["Description"]);
            };





        }
    }
);
// var i = document.getElementsByClassName("imagelink")
// console.log(i[0].src);
// i[0].src=("https://i.loli.net/2018/05/02/5ae9ac331e395.jpeg");
// console.log(i[0].src);


// $("*.username").html(list[0]["UserName"])