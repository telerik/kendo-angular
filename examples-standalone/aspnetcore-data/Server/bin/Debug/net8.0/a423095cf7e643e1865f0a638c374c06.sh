function list_child_processes () {
    local ppid=$1;
    local current_children=$(pgrep -P $ppid);
    local local_child;
    if [ $? -eq 0 ];
    then
        for current_child in $current_children
        do
          local_child=$current_child;
          list_child_processes $local_child;
          echo $local_child;
        done;
    else
      return 0;
    fi;
}

ps 84880;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 84880 > /dev/null;
done;

for child in $(list_child_processes 84884);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/bechev/Documents/kendo-packages/kendo-angular/examples-standalone/aspnetcore-data/Server/bin/Debug/net8.0/a423095cf7e643e1865f0a638c374c06.sh;
