class GitHub {
    constructor() {
        this.client_id = '29fd7dddcf680ce87f55';
        this.client_secret = 'ed6db4a63d1c6ac63ea1e5f8988c4042b5ebea31';
        this.repos_count = 5;
        this.repos_sort = 'craeted: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos? per _page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json()
        const repos = await repoResponse.json()

        return {
            profile,
            repos

        }
    }
}