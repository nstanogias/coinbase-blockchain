import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '2l4l687g',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token:
    'skLk7tqBVjG7dcKOyQvXPFcr2zc2xUHobtkyVqPKKFw06N23jFpFTYlkjRXKePdE5d5n3xES1ElcZDhtVG0U8spylCKkl8Yi6Ltg5axWl0TXW3uCUJfRchxJVXnwDsbn3ohs4nOVRojEgkhpKOcbOcn6LDacJnBfye9cE7b96mN4yO0ELAH0', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});
