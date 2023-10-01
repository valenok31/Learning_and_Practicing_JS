async function showAvatar() {


    try {
        // запрашиваем JSON с данными пользователя
        let response = await fetch('https://learn.javascript.ru/article/promise-chaining/user.json');
        let user = await response.json();
    } catch (err) {
        console.log(err.message)
    }

    try {
        // запрашиваем информацию об этом пользователе из github
        let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
        let githubUser = await githubResponse.json();
    } catch (err) {
        console.log(err.message)
    }

    try {
    // отображаем аватар пользователя
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
    } catch (err) {
        console.log(err.message)
    }
    // ждём 3 секунды и затем скрываем аватар
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;
}

showAvatar();