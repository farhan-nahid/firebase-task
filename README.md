## সিম্পল অথেন্টিকেশন

১. firebase এর authentication এ গিয়ে যে লগইন সিস্টেম ইমপ্লিমেন্ট করবে সেই প্রসেস এনাবেল করো।

২. google ছাড়া অন্য কোন থার্ডপার্টি যদি হয় তাহলে তাদের developer. ওয়েবসাইট এ যাও। সেখানে গিয়ে app তৈরি করো। সেখানে app id আর সিক্রেট দেখতে পাবে। সেই থার্ড পার্টি এপ এর আইডি আর সিক্রেট ফায়ারবেজ এ এনে বসিয়ে দাও

৩. ফায়ারবেজ থেকে auth redirect url কপি করে থার্ডপার্টি app এর সেটিংস এ বসিয়ে দাও। এইটা ইম্পরট্যান্ট। তাহলে লগইন সাকসেস হওয়ার পর। বা ইউজার লগইন করার অনুমতি দেয়ার পর সেটা তোমার ওয়েবসাইট এ রিডাইরেক্ট হবে। না করলে কিন্তু লগিন হওয়ার পর তোমার ওয়েবসাইট এ আসবে না।

৪. তোমার ওয়েবসাইট এ লগইন বাটন ক্রিয়েট করে সেটার ইভেন্ট হ্যান্ডলার এর মধ্যে firebase এর ডকুমেন্টেশন থেকে কোড এনে বসিয়ে দাও।

৫. যদি লগইন সাকসেসফুল হয় তাহলে user এর স্টেট্ ডিক্লেয়ার করে সেটাকে দেখায় দাও। বা ইউজ করতে পারে। error খাইলে সেটাও দেখাতে পারো।

## চ্যালেঞ্জ

আমরা গুগল, ইমেইল/পাসওয়ার্ড, গিটহাব, ফেইসবুক এর লগইন সিস্টেম দেখাইছি। এই চারটা বাদে তুমি অন্য আরেকটা নিজে নিজে করার চেষ্টা করো। দেখো পারো কিনা।
