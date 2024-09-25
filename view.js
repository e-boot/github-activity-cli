const displayActivity = (events) => {
    if (events.length === 0) {
      console.log('No recent activity found.');
      return;
    }
  
    events.forEach(event => {
      switch (event.type) {
        case 'PushEvent':
          const commitCount = event.payload.commits.length;
          console.log(`Pushed ${commitCount} commit${commitCount > 1 ? 's' : ''} to ${event.repo.name}`);
          break;
  
        case 'IssuesEvent':
          console.log(`${event.payload.action === 'opened' ? 'Opened' : 'Closed'} an issue in ${event.repo.name}`);
          break;
  
        case 'WatchEvent':
          console.log(`Starred ${event.repo.name}`);
          break;
  
        default:
          break;
      }
    });
  };

  export default displayActivity;