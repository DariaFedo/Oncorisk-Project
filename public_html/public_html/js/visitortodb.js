function SendVisitorToDB() {
  $.post('./../php/POSTvisitorstodb.php', {
    get_online_visitor: 'online_visitor',
    page: window.location.pathname,
  })
    .done(() => {
      console.log(`Sending visitor to db : success`);
    })
    .fail(() => {
      console.log(`Sending visitor to db : failed`);
    });
}
SendVisitorToDB();
