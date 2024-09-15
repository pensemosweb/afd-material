function printEnvironaments(envs) {
  const keys = Object.keys(envs);

  for (const key of keys) {
    console.log(key + ": " + envs[key] + "\n");
  }
}

printEnvironaments(process.env);
