(function() {var implementors = {};
implementors["libc"] = [];implementors["rustc_serialize"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='enum' href='rustc_serialize/json/enum.Json.html' title='rustc_serialize::json::Json'>Json</a>",];implementors["serde"] = ["impl&lt;K, V&gt; <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt;&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&lt;K&gt;, V: <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&lt;V&gt;</span>","impl&lt;T&gt; <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt;&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&lt;T&gt;</span>","impl&lt;'a, B&gt; <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&lt;<a class='enum' href='https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt;&gt; for <a class='enum' href='https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&lt;B&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;E&gt; <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt;&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt; <span class='where'>where E: <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&lt;E&gt;</span>","impl&lt;A&gt; <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&lt;A&gt;</span>","impl <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&lt;T&gt;</span>","impl&lt;A&gt; <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&lt;A&gt;</span>","impl&lt;T&gt; <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&lt;T&gt; + ?<a class='trait' href='core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='serde/bytes/struct.ByteBuf.html' title='serde::bytes::ByteBuf'>ByteBuf</a>","impl&lt;'a&gt; <a class='trait' href='core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='serde/bytes/struct.Bytes.html' title='serde::bytes::Bytes'>Bytes</a>&lt;'a&gt;",];implementors["rust_sodium"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/box_/curve25519xsalsa20poly1305/struct.PublicKey.html' title='rust_sodium::crypto::box_::curve25519xsalsa20poly1305::PublicKey'>PublicKey</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/box_/curve25519xsalsa20poly1305/struct.Nonce.html' title='rust_sodium::crypto::box_::curve25519xsalsa20poly1305::Nonce'>Nonce</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/sign/ed25519/struct.PublicKey.html' title='rust_sodium::crypto::sign::ed25519::PublicKey'>PublicKey</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/sign/ed25519/struct.Signature.html' title='rust_sodium::crypto::sign::ed25519::Signature'>Signature</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/auth/hmacsha512/struct.Tag.html' title='rust_sodium::crypto::auth::hmacsha512::Tag'>Tag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/auth/hmacsha512256/struct.Tag.html' title='rust_sodium::crypto::auth::hmacsha512256::Tag'>Tag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/auth/hmacsha256/struct.Tag.html' title='rust_sodium::crypto::auth::hmacsha256::Tag'>Tag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/hash/sha512/struct.Digest.html' title='rust_sodium::crypto::hash::sha512::Digest'>Digest</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/hash/sha256/struct.Digest.html' title='rust_sodium::crypto::hash::sha256::Digest'>Digest</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/secretbox/xsalsa20poly1305/struct.Nonce.html' title='rust_sodium::crypto::secretbox::xsalsa20poly1305::Nonce'>Nonce</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/onetimeauth/poly1305/struct.Tag.html' title='rust_sodium::crypto::onetimeauth::poly1305::Tag'>Tag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/pwhash/scryptsalsa208sha256/struct.Salt.html' title='rust_sodium::crypto::pwhash::scryptsalsa208sha256::Salt'>Salt</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/pwhash/scryptsalsa208sha256/struct.HashedPassword.html' title='rust_sodium::crypto::pwhash::scryptsalsa208sha256::HashedPassword'>HashedPassword</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/stream/xsalsa20/struct.Nonce.html' title='rust_sodium::crypto::stream::xsalsa20::Nonce'>Nonce</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/stream/aes128ctr/struct.Nonce.html' title='rust_sodium::crypto::stream::aes128ctr::Nonce'>Nonce</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/stream/salsa208/struct.Nonce.html' title='rust_sodium::crypto::stream::salsa208::Nonce'>Nonce</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/stream/salsa2012/struct.Nonce.html' title='rust_sodium::crypto::stream::salsa2012::Nonce'>Nonce</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/stream/salsa20/struct.Nonce.html' title='rust_sodium::crypto::stream::salsa20::Nonce'>Nonce</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/stream/chacha20/struct.Nonce.html' title='rust_sodium::crypto::stream::chacha20::Nonce'>Nonce</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> for <a class='struct' href='rust_sodium/crypto/shorthash/siphash24/struct.Digest.html' title='rust_sodium::crypto::shorthash::siphash24::Digest'>Digest</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()